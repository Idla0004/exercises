"use strict";

// første øvelse
// sayHello("Ida");
// function sayHello(firstName) {
//   console.log(`Hello ${firstName}`);

// øvelse 1 - Hvis functionen bliver kaldt på en linje tidligere end den er erklæret på
// function sayHello(firstName) {
//   console.log(`Hello ${firstName}`);
//   sayHello("Ida");

// øvelse 2 - Hvis functionen bliver kaldt med en variabel der hedder myName?
// let firstName = "Ida";

// sayHello(firstName);
// function sayHello(firstName) {
//   console.log(`Hello ${firstName}`);

// øvelse 3 - Hvis der er en anden variabel der hedder firstName uden for funktionen
// let firstName = "Ida";

// sayHello(firstName);
// function sayHello(firstName) {
//   console.log(`Hello ${firstName}`);

//   sayHello(firstName);

// øvelse 4- Hvis functionen bliver kaldt uden noget parameter?
// let firstName = "Ida";

// sayHello(firstName);
// function sayHello() {
//   console.log(`Hello ${firstName}`);

// øvelse 5 - Hvis functionen bliver kaldt med firstName og lastName
// sayHello("Ida", "Hernvig");
// function sayHello(firstName, lastName) {
//   console.log(`Hello ${firstName} ${lastName}`);
// }

// øvelse 6 - Og hvis functionen bliver kaldt med lastName før firstName
// sayHello("Ida", "Hernvig");
// function sayHello(lastName, firstName) {
//   console.log(`Hello ${firstName} ${lastName}`);
// }

// 2. øvelse

//første øvelse
// presentPet("Ida", "cat", "Nessie");

// function presentPet(firstName, animalType, animalName) {
//   console.log(
//     `My name is ${firstName}, I have a ${animalType} called ${animalName}`,
//   );
// }

// 1. Functionen bliver kaldt med variabler der hedder det samme som parametrene
// let firstName = "Ida";
// let animalType = "cat";
// let animalName = "Nessie";
// presentPet(firstName, animalType, animalName);

// function presentPet(firstName, animalType, animalName) {
//   console.log(
//     `My name is ${firstName}, I have a ${animalType} called ${animalName}`,
//   );
// }

// 2. Functionen bliver kaldt med variabler der hedder noget andet?
// let myName = "Ida";
// let myCat = "cat";
// let catName = "Nessie";
// presentPet(myName, myCat, catName);

// function presentPet(firstName, animalType, animalName) {
//   console.log(
//     `My name is ${firstName}, I have a ${animalType} called ${animalName}`,
//   );
// }

// 3. Functionen bliver kaldt med strings?
// presentPet("Ida", "cat", "Nessie");

// function presentPet(firstName, animalType, animalName) {
//   console.log(
//     `My name is ${firstName}, I have a ${animalType} called ${animalName}`,
//   );
// }

// 4. Functionen bliver kaldt med en blanding af strings og variabler?
// let animalType = "cat";
// presentPet("Ida", animalType, "Nessie");

// function presentPet(firstName, animalType, animalName) {
//   console.log(
//     `My name is ${firstName}, I have a ${animalType} called ${animalName}`,
//   );
// }

// 5. Function bliver kaldt med variabler, men i en anden rækkefølge?
// let firstName = "Ida";
// let animalType = "cat";
// let animalName = "Nessie";
// presentPet(animalType, animalName, firstName);

// function presentPet(firstName, animalType, animalName) {
//   console.log(
//     `My name is ${firstName}, I have a ${animalType} called ${animalName}`,
//   );
// }
