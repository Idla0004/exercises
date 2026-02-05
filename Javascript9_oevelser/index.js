// let object = {
//   firstName: "Klaus",
//   age: 59,
//   student: false,
// };
// console.log(`${object.firstName} er ${object.age}`);
// // viser "Klaus er 59" i console loggen.
// let name = object.firstName;
// console.log("name", name);
// // så gætter vi navnet i consoleloggen
// console.log(object);
// object.firstName = "Troels";
// console.log(object);
// // ved selv at sætte object.firstName til et nyt navn viser den nu, Troels som first name i object, i console.loggen

// // med Bracket notation
// console.log(object);
// object["firstName"] = "Troels";
// // er fuldstændig det samme som at skrive object.firstName
// console.log(object["student"]); // viser også false i consol på samme mode som at skrive object.student

// let person1 = {
//   firstName: "Klaus",
//   age: 59,
//   student: false,
// };
// console.log(person1.lastName); // her står undefined fordi vi ikke har tilføjet propertien endnu
// person1.lastName = "Mandal";
// console.log(person1.lastName); // her står der Mandal i consollen, fordi vi tilføjede propertien ovenover.
// person1.lastName = undefined;
// console.log(person1.lastName); // Så står der sjovt nok undefined.
// console.log(person1.middleName); // står undefined
// delete person1.lastName;
// console.log(person1.lastName); // last name forsvinder fuldstændig
// console.log(person1);

// const person1 = {
//   firstName: "Klaus",
//   age: 59,
//   student: false,
// };
// console.log("Person1", person1);
// person1.age++;
// console.log("Person1", person1); // fordi vi skriver age++ tilføjer den nu 1 år til alderen, fordi det er en variabel.
// // dette kan godt lade sig gøre selvom objektet er en constant.

// const person1 = {
//   firstName: "Klaus",
//   age: 59,
//   student: false,
// };

// const person2 = {
//   firstName: "Bob",
//   age: 83,
//   student: true,
// };
// person1 = person2;
// console.log("Person1", person1); // her kalder console.log invalid assignment to const

// const person1 = {
//   firstName: "Klaus",
//   age: 59,
//   student: false,
// };

// const person2 = person1;
// person2.firstName = "Bob";
// console.log("person1", person1); // nu er first name for person 1 Bob.

// const student1 = {
//   firstName: "Harry",
//   lastName: "Potter",
// };

// const student2 = student1;

// if (student1 === student2) {
//   console.log("they are the same!");
// } else {
//   console.log("They are not...");
// }
// her siger console.log "they are the same!" selvom vi ikke har deklæret student2 endnu.

// const student1 = {
//   firstName: "Harry",
//   lastName: "Potter",
// };

// const student2 = {
//   firstName: "Harry",
//   lastName: "Potter",
// };

// if (student1 === student2) {
//   console.log("they are the same!");
// } else {
//   console.log("They are not...");
// } // Her er de ikke ens, fordi de er to forskellige variabler med to forskellige objekter. Selvom det er ens har vi ikke sat en
// const student2 = student1; og derfor er de ikke det samme.
// const student1 = {
//   firstName: "harry",
//   lastName: "potter",
// };

// const student2 = {};
// student2.firstName = student1.firstName;
// student2.lastName = student1.lastName;

// if (student1 === student2) {
//   console.log("they are the same!");
// } else {
//   console.log("They are not...");
// }
// // De er stadig ikke ens.

// Turn area øvelse.

// const isElectric = true;
// let erBilenElektrisk = "";
// if (
//   isElectric
// ) // er det samme som at skrive, isElectric === true, den forventer at den er true.
// {
//   erBilenElektrisk = "ja det er den";
// } else {
//   erBilenElektrisk = "Nej den er ej";
// }
// console.log(erBilenElektrisk); // viser i console.log "ja det er den", fordi isElectric consten er = true

// for at kode det ned med ? skriver vi.
// const isElectric = true;
// let erBilenElektrisk = isElectric ? "Ja det er den" : "Nej den er ej";
// console.log(erBilenElektrisk);

// console.log(isElectric ? "true" : "false");
// Hvis jeg skriver ? er det en komprimeret if sætning.
// spørgsmålstegn er if og : er else
// Hvis jeg ændrer false til true, bliver det true.
// Det returnerer enten eller, ligesom if og else, og samle det op i en variabel.
// Du kan komprimere en if sætning ned til en linje.
