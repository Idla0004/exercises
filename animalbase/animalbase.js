"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
  star: false,
  winner: false,
};
// setting objekt for de globale
const settings = {
  filterBy: "all",
  sortby: "name",
  sortDir: "asc",
};

function start() {
  console.log("ready");

  // Add event-listeners to filter and sort buttons
  registerButtons();
  loadJSON();
}

function registerButtons() {
  // tester man koden i console.log viser den, at der er tre knapper.
  document
    .querySelectorAll("[data-action='filter']")
    .forEach((button) => button.addEventListener("click", selectFilter));

  document
    .querySelectorAll("[data-action='sort']")
    .forEach((button) => button.addEventListener("click", selectSort));
}

async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  allAnimals = jsonData.map(preapareObject);

  // Ændret så vi filtrerer og sortere ved første load.
  buildList();
}

function preapareObject(jsonObject) {
  const animal = Object.create(Animal);

  const texts = jsonObject.fullname.split(" ");
  animal.name = texts[0];
  animal.desc = texts[2];
  animal.type = texts[3];
  animal.age = jsonObject.age;

  return animal;
}

function selectFilter(event) {
  const filter = event.target.dataset.filter;
  console.log(`User selected ${filter}`); // tester i console.log og skriver hvilken knap bruger klikker på.
  //   filterList(filter); // denne del kalder funktionen, så knapperne filtrerer hvad der vises på skærmen ud fra valg.
  setFilter(filter);
}

function setFilter(filter) {
  settings.filterBy = filter;
  buildList();
}

function filterList() {
  let filteredList = allAnimals; // laver en default til All knappen, så den starter med at vise alle.
  if (settings.filterBy === "cat") {
    // create a filtered list of only cats.
    filteredList = allAnimals.filter(isCat);
  } else if (settings.filterBy === "dog") {
    // create a filtered list of only dogs.
    filteredList = allAnimals.filter(isDog);
  }
  return filteredList;
}

function isCat(animal) {
  return animal.type === "cat";
}

function isDog(animal) {
  return animal.type === "dog";
}

// samme som select filter, men nu med sortering.
function selectSort(event) {
  const sortby = event.target.dataset.sort;
  const sortDir = event.target.dataset.sortDirection; // når der er bindestreg i navnet(i html) henter man det med at skrive næste ord med stort bogstav først
  // find old sort by element and remove .sortby class
  const oldElement = document.querySelector(`[data-sort='${settings.sortby}']`);
  oldElement.classList.remove("sortby");

  // indicate active sort
  event.target.classList.add("sortby");

  // toggle the direction - vælger om det på klik skal ascende eller descende.
  if (sortDir === "asc") {
    event.target.dataset.sortDirection = "desc";
  } else {
    event.target.dataset.sortDirection = "asc";
  }
  console.log(`User selected ${sortby}- ${sortDir}`); // tester i console.log og skriver hvilken underoverskrift bruger klikker på.
  setSort(sortby, sortDir); // denne del kalder funktionen, så underoverskrifterne sortere hvad der vises på skærmen ud fra valg.
}

function setSort(sortby, sortDir) {
  settings.sortby = sortby;
  settings.sortDir = sortDir;
  buildList();
}

//dette blev udkommenteret (nogle ting beholdt) og lavet om til sort property.
// function sortList(sortby) {
//   let sortedList = allAnimals;

//   //   if (sortby === "name") {
//   sortedList = sortedList.sort(sortbyProperty);
//   //   } else if (sortby === "type") {
//   //     sortedList = sortedList.sort(sortbyName);
//   //   }

// Sorterings liste - samme måde som med dyr, sorterer den nu ud fra type.
function sortList(sortedList) {
  //   let sortedList = allAnimals;
  let direction = 1; // variabel til retning.
  if (settings.sortDir === "desc") {
    direction = -1;
  } else {
    settings.direction = 1;
  }
  sortedList = sortedList.sort(sortbyProperty);

  // function til at sortere listen ud fra alfabetisk rækkefølge
  // Kode ændret og skrevet med [sortby] i stedet for name, nu kan de sortere alle ting(name, type, desc og age!)
  function sortbyProperty(animalA, animalB) {
    // console.log(`sortby is ${sortby}`);
    if (animalA[settings.sortby] < animalB[settings.sortby]) {
      return -1 * direction;
    } else {
      return 1 * direction;
    }
  }
  return sortedList;
}

// // sorterer ud fra type af dyr, stadig alfabetiske navne - behøver ikke med den opdaterede kode ovenover!
// function sortbyType(animalA, animalB) {
//   if (animalA.type < animalB.type) {
//     return -1;
//   } else {
//     return 1;
//   }
// }

function buildList() {
  const currentList = filterList(allAnimals);
  const sortedList = sortList(currentList);
  displayList(sortedList);
}

function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document
    .querySelector("template#animal")
    .content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  //tilføjer if else statement med stjerne
  if (animal.star === true) {
    clone.querySelector("[data-field=star]").textContent = "⭐";
  } else {
    clone.querySelector("[data-field=star]").textContent = "✰";
  }

  //tilføjer klikbar funktion til stjernerne
  clone.querySelector("[data-field=star]").addEventListener("click", clickStar);
  function clickStar() {
    if (animal.star === true) {
      animal.star = false;
    } else {
      animal.star = true;
    }
    buildList();
  }

  // Winners
  clone.querySelector("[data-field=winner]").dataset.winner = animal.winner;
  clone
    .querySelector("[data-field=winner]")
    .addEventListener("click", clickWinner);
  function clickWinner() {
    if (animal.winner === true) {
      animal.winner = false;
    } else {
      tryToMakeAWinner(animal);
      // animal.winner = true;
    }
    buildList();
  }

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}

function tryToMakeAWinner(selectedAnimal) {
  const winners = allAnimals.filter((animal) => animal.winner);
  const numberOfWinners = winners.length;
  const other = winners
    .filter((animal) => animal.type === selectedAnimal.type)
    .shift();

  // hvis der er en anden af samme type - kode sørger for at fjerne vinder pokal ved først valgte type.
  if (other !== undefined) {
    console.log("There can only be one winner of each type!");
    removeOther(other);
  } else if (numberOfWinners >= 2) {
    console.log("There can only be two winners!");
    removeAorB(winners[0], winners[1]);
  } else {
    makeWinner(selectedAnimal);
  }

  function removeOther(other) {
    // ask the user to ignore or remove 'other'
    document.querySelector("#remove_other").classList.remove("hide");
    document
      .querySelector("#remove_other .closebutton")
      .addEventListener("click", closeDialog);
    document
      .querySelector("#remove_other #removeother")
      .addEventListener("click", clickRemoveOther);

    // if ignore - do nothing
    function closeDialog() {
      document.querySelector("#remove_other").classList.add("hide");
      document
        .querySelector("#remove_other #removeother")
        .removeEventListener("click", clickRemoveOther);
      document
        .querySelector("#remove_other .closebutton")
        .removeEventListener("click", closeDialog);
    }
    // if remove 'other':
    function clickRemoveOther() {
      removeWinner(other);
      makeWinner(selectedAnimal);
      buildList();
      closeDialog();
    }
  }

  function removeAorB(winnerA, winnerB) {
    // ask user to ignore or remove A or B
    document.querySelector("#remove_aorb").classList.remove("hide");
    document
      .querySelector("#remove_aorb .closebutton")
      .addEventListener("click", closeDialog);
    document
      .querySelector("#remove_aorb #removea")
      .addEventListener("click", clickRemoveA);
    document
      .querySelector("#remove_aorb #removeb")
      .addEventListener("click", clickRemoveB);

    // if ignore - do nothing
    function closeDialog() {
      document.querySelector("#remove_aorb").classList.add("hide");
      document
        .querySelector("#remove_aorb .closebutton")
        .removeEventListener("click", closeDialog);
      document
        .querySelector("#remove_aorb #removea")
        .removeEventListener("click", clickRemoveA);
      document
        .querySelector("#remove_aorb #removeb")
        .removeEventListener("click", clickRemoveB);
    }

    function clickRemoveA() {
      // if removeA
      removeWinner(winnerA);
      makeWinner(selectedAnimal);
      buildList();
      closeDialog();
    }

    function clickRemoveB() {
      // else if - remove B:
      removeWinner(winnerB);
      makeWinner(selectedAnimal);
      buildList();
      closeDialog();
    }
  }

  function removeWinner(winnerAnimal) {
    winnerAnimal.winner = false;
  }
  function makeWinner(animal) {
    animal.winner = true;
  }
}
