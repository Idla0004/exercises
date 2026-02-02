// øvelse 1
// let letters = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`];
// console.log(letters[4]); // henter e, fordi det er det fjerde tal i indekset.

// øvelse 2
// let newarray = letters;
// newarray[4] = `*`;
// console.log(letters[4]); // gør array indekset til * i stedet for e

// øvelse 3 - test forskellige array metoder
// const people = ["Harry", "Ron", "Hermione"];
// let result;
// result = people.push("Draco"); // tilføjer Draco til people arrayet
// console.log(result); // result er nu 4 fordi vi har tilføjet Draco.
// console.log(people);

//øvelse 4 - prøv alle disse array-metoder
// const people = ["Harry", "Ron", "Hermione"];
// let result;
// result = people.pop(); // tager Hermione
// console.log(result); // result er nu Hermione
// console.log(people); // people er nu kun Harry og Ron

// const people = ["Harry", "Ron", "Hermione"];
// let result;
// result = people.push("Neville"); // tilføjer Neville til people arrayet, også hvis jeg tog Luna eller andre med.
// console.log(result); // result er nu 4 fordi vi har tilføjet Draco.
// console.log(people);

// const people = ["Harry", "Ron", "Hermione", "Draco"];
// let result;
// result = people.slice(0, 3); // vælger kun de første 3
// console.log(result); // result er nu 4 fordi vi har tilføjet Draco.
// console.log(people);

// const people = ["Harry", "Ron", "Hermione"];
// let result;
// result = people.splice(1, 0, "Cho"); // Array bliver tomt i console, for people
// console.log(result); // result er nu 4, med Cho.
// console.log(people);

// const people = ["Harry", "Ron", "Hermione"];
// let result;
// people[1] = "Ginny";
// console.log(result); // Står undefined
// console.log(people); // Stadig kun 3, men nu står Ginny i stedet for Ron

// const people = ["Harry", "Ron", "Hermione"];
// let result;
// result = people.push("Fred", "George");
// console.log(result); // Array bliver 5
// console.log(people); // Fred og George er tilføjet

// const people = ["Harry", "Ron", "Hermione"];
// let result;
// result = people.indexOf("Fred");
// console.log(result); // viser -1 fordi Fred kommer før people navnene og index på people starter på 0
// console.log(people); // Viser kun Harry, Ron og Hermione

// const people = ["Harry", "Ron", "Hermione"];
// let result;
// result = people.splice(result, 1);
// console.log(result); // Tager Harry til at stå alene i result
// console.log(people); // Viser kun Ron og Hermione

// const people = ["Harry", "Ron", "Hermione"];
// let result;
// result = people.unshift("Draco"); // Tilføjer Draco som index 0
// console.log(result); // Result er nu 4
// console.log(people); // Viser Draco, Harry, Ron og Hermione.

// const people = ["Harry", "Ron", "Hermione"];
// let result;
// result = people.shift();
// console.log(result); // fjerner Harry/det første element og tager det element til at stå alene i result
// console.log(people); // Viser kun Ron og Hermione

// Hvad gør hver metoder?
// Push - tilføjer navne/ting til arrayet.
// Pop - tager den sidste i indexen og fjerner den.
// Slice - Vælger kun de ting, der er nævnt med index tal til og fra, fx 0,3 vælger de tre første og ikke andre.
// indexOf - Viser index tallet på den ting man beder den om. Havde jeg bedt om fx Ron, havde den sagt 1.
// Unshift - Tilføjer ekstra

// Øvelse 5 - Mutable og Immutable arrays

// const array = ["cat", "dog", "bird", "fish", "horse"];
// const newArray = array;
// newArray.push("pig");

// console.log(array); // vokser 6 med pig til sidst.

// const array = ["cat", "dog", "bird", "fish", "horse"];
// const newArray = [...array, "pig"];

// console.log(array); // viser de første 5

// console.log(newArray); // viser de første fem og pig til sidst.

// Fjerner element fra slutningen af Arrayet
// const arr = [1, 2, 3];
// const result = arr.slice(0, -1);
// console.log(result);

// Øvelse 6 - Splice vs toSpliced

// Den ikke-intuitive mutable tilgang
// const arr = ["cat", "dog", "bird", "fish", "horse"];
// const newArray = arr;
// arr.splice(1, 1); // splicer også den originale array i arr console log.
// console.log(arr);
// console.log(newArray);

//Den intuitive immutable tilgang
// const arr = ["cat", "dog", "bird", "fish", "horse"];
// const newArray = arr.toSpliced(1, 1); // fanger altså derfor dog og fjerner den.
// console.log(arr);
// console.log(newArray);

// Øvelse 7 - Array likes og array konvertering
// 1
// const str = "abcdefghijklmn";
// const arr1 = str.split("");
// console.log(str); // viser hvad der står i stringen
// console.log(arr1[2]); // tager det andet index, altså C.

// 2
// const str = "abcdefghijklmn";
// const arr2 = Array.from(str);
// console.log(str); // viser hvad der står i stringen
// console.log(arr2); // viser stadig arrayet string.

//3
// const str = "abcdefghijklmn";
// const arr3 = [...str]; // Henter samme indhold som de to første
// console.log(str); // viser hvad der står i stringen
// console.log(arr3); // tager det andet index, altså C.

// Javascript - Functions og venner øvelser
// 1. functions-udtryk
// function greeting(firstName) {
//   return `Hello ${firstName}`;
// }
// const sayHi = greeting; // Greeting og sayHi peger begge på den samme function
// sayHi("Harry");
// greeting("Harry"); // Så functionen kan kaldes via et hvilket som helst af navnene sayHi eller greeting.
// console.log(greeting, "Harry");

// 2. Hire og fire
// let person;

// const person3 = {
//   firstName: "Harry",
//   lastName: "Potter",
//   hired: false,
// };

// const person4 = {
//   firstName: "Fred",
//   lastName: "Weasly",
//   hired: false,
// };

// // to funktioner med hire og fire
// function hire(person) {
//   person.hired = true;
// }

// function fire(person) {
//   person.hired = false;
// }

// hire(person4);

// console.log(person, person3);

// 2. kan også bygge en function til at kalde enhver function.

// action er den function, der skal kaldes
// person er parametret til den function der skal kaldes
// i action(person); kalder vi funktionen med parametret

// function fireOrhire(action, person) {
//   action(person);
// }

// // 2. Vi kan også oprette en funktion til at kalde enhver funktion.
// function fireOrhire(action, person) {
//   action(person);
// }
// // med fireOrhire kalder vi funktionen med hire funktionen og person4 som parameter
// // Hvis vi skal gøre action (person); til hire (person4)
// fireOrhire(hire, person4);

// SAMLET

// const person3 = {
//   firstName: "Harry",
//   lastName: "Potter",
//   hired: false,
// };

// const person4 = {
//   firstName: "Ronald",
//   lastName: "Weasly",
//   hired: false,
// };

// function hire(person) {
//   person.hired = true;
// }
// function fire(person) {
//   person.hired = false;
// }
// function fireOrhire(action, person) {
//   action(person);
// }
// fireOrhire(hire, person4);
// fireOrhire(fire, person3);

// console.log(person3);

// 3 LoadJSON
// function init() {
//   console.log("init");
//   loadJSON("https://dummyjson.com/products/search?q=phone", prepareData);
// }

// function prepareData(data) {
//   console.log("prepare data");
//   // Data received from JSON
//   console.table(data);
// }

// function loadJSON(url, callback) {
//   fetch(url)
//     .then((response) => response.json())
//     .then((jsonData) => callback(jsonData));
// }

// // Start processen
// init();

