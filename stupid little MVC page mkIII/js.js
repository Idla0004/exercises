"use strict";

const h2names = document.querySelector("#names");
const inputName = document.querySelector("#name");
const button = document.querySelector("button");

const modelFetchedfromLS = JSON.parse(localStorage.getItem("stupidarray")); // sætter navnene ind som et array igen.
console.log("modelFetchedfromLS", modelFetchedfromLS);
//Model
// const model = ["Peter", "Paul", "Mary"];
const model = modelFetchedfromLS ?? ["Peter", "Paul", "Mary"]; // ?? er knowledge coalition
// controller
init();

function init() {
  button.addEventListener("click", button_click);
  upDateView();
}

function addNameToModel(name) {
  model.push(name);
}
function removeNameFromModel(id) {
  model.splice(id, 1);
}

function upDateView() {
  localStorage.setItem("stupidarray", JSON.stringify(model)); // stringify laver array om til en string
  h2names.innerHTML = "";
  model.forEach((each, i) => {
    h2names.innerHTML += `<span class="clickname" data-id="${i}">${each}</span> `;
  });

  document.querySelectorAll(".clickname").forEach((each) => {
    each.addEventListener("click", klikspan);
  });
}

// view
function button_click() {
  addNameToModel(inputName.value);
  upDateView();
}
function klikspan(evt) {
  removeNameFromModel(evt.target.dataset.id);
  upDateView();
}
