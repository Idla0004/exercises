"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
};
// setting objekt for de globale
const settings = {
  filterBy: "all",
  sortBy: "name",
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

  // TODO: This might not be the function we want to call first
  displayList(allAnimals);
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
  const sortBy = event.target.dataset.sort;
  const sortDir = event.target.dataset.sortDirection; // når der er bindestreg i navnet(i html) henter man det med at skrive næste ord med stort bogstav først
  // toggle the direction - vælger om det på klik skal ascende eller descende.
  if (sortDir === "asc") {
    event.target.dataset.sortDirection = "desc";
  } else {
    event.target.dataset.sortDirection = "asc";
  }
  console.log(`User selected ${sortBy}- ${sortDir}`); // tester i console.log og skriver hvilken underoverskrift bruger klikker på.
  setSort(sortBy, sortDir); // denne del kalder funktionen, så underoverskrifterne sortere hvad der vises på skærmen ud fra valg.
}

function setSort(sortBy, sortDir) {
  settings.sortBy = sortBy;
  settings.sortDir = sortDir;
  buildList();
}

//dette blev udkommenteret (nogle ting beholdt) og lavet om til sort property.
// function sortList(sortBy) {
//   let sortedList = allAnimals;

//   //   if (sortBy === "name") {
//   sortedList = sortedList.sort(sortByProperty);
//   //   } else if (sortBy === "type") {
//   //     sortedList = sortedList.sort(sortByName);
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
  sortedList = sortedList.sort(sortByProperty);

  // function til at sortere listen ud fra alfabetisk rækkefølge
  // Kode ændret og skrevet med [sortBy] i stedet for name, nu kan de sortere alle ting(name, type, desc og age!)
  function sortByProperty(animalA, animalB) {
    // console.log(`sortBy is ${sortBy}`);
    if (animalA[settings.sortBy] < animalB[settings.sortBy]) {
      return -1 * direction;
    } else {
      return 1 * direction;
    }
  }
  return sortedList;
}

// // sorterer ud fra type af dyr, stadig alfabetiske navne - behøver ikke med den opdaterede kode ovenover!
// function sortByType(animalA, animalB) {
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

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
