"use strict";

window.addEventListener("DOMContentLoaded", start);
// New objects defined by this prototype:
const Animal = {
  name: "-default name-",
  desc: "-no description-",
  type: "-unknown-",
  age: 0,
};

const allAnimals = [
  //   {
  //     name: "Mandu",
  //     desc: "amazing",
  //     type: "cat",
  //     age: 10,
  //   },
  //   { name: "Mia", desc: "black", type: "cat", age: 10 },
  //   {
  //     name: "Leloo",
  //     desc: "growing",
  //     type: "dog",
  //     age: 3,
  //   }
];

function start() {
  console.log("ready");

  loadJSON();
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
    // Create new object
    const animal = Object.create(Animal);
    // Extract data from json Object
    const fullname = jsonObject.fullname;

    const firstSpace = fullname.indexOf(" ");
    const secondSpace = fullname.indexOf(" ", firstSpace + 1);
    const lastSpace = fullname.lastIndexOf(" ");
    const name = fullname.substring(0, firstSpace);
    const desc = fullname.substring(secondSpace + 1, lastSpace);
    const type = fullname.substring(lastSpace + 1);

    // console.log(`name: _${name}_
    //     desc: _${desc}_
    //     type: _${type}_`);

    // placing cleaned data into newly created object
    animal.name = name;
    animal.desc = desc;
    animal.type = type;
    // age pulled directly from json data object
    animal.age = jsonObject.age;
    // at the object to the global array
    allAnimals.push(animal);
  });

  displayList();
}

function displayList() {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  allAnimals.forEach(displayAnimal);
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
