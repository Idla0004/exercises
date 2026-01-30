"use strict";

// 1. øvelse
// function greeting(firstName) {
//   return `Hello ${firstName}`;
// }
// Laver en string literal med ``. For at hente firstname, skal man skrive ${}
// const result = greeting("Ida");
// console.log(result);

// 2. øvelse - function bliver kaldt med greeting("any name")

// 2. øvelse fra videoen med Klaus
// function greeting(firstName) {
//   return `Hello ${firstName}`;
// }
// const greetingToMe = greeting("Ida");
// console.log(greetingToMe);

// Øvelser vist i klassen

// function myFunc() {
//   let value = "hej";
//   return value;
// }
// // Der kommer til at stå hej i stedet for my func
// const myFuncReturn = myFunc();
// // viser hej, fordi vi kalder på myfuncreturn, der er lig med myfunc som er hej.
// console.log(myFuncReturn);

// 2. øvelse - function bliver kaldt med greeting("any name")
// function greeting(firstName) {
//   return `Hello ${firstName}`;
// }
// const result = greeting("Any Name");
// console.log(result);
// viser any name

// 3. functionen bliver kaldt uden noget parameter
// viser ingenting

// functionen bliver kaldt inde i en template literal
// function greeting(firstName) {
//   return `Hello ${firstName}`
// }

// const txt = `Greeting is ${greeting("a name")}`;
// console.log(txt);

// man skal altid samle sin return værdi op, ellers bliver den ikke brugt til noget.

// function calculateAreal(width, length) {
//   return width * length;
// }
// // giver ikke rigtig mening, da man kan kalde det nemmere
// console.log(calculateAreal(14, 14));

// konverter squaremeters to squarefeet
// function calculateAreal(width, length) {
//   return width * length;
// }
// function squareMeterstosquareFeet(num) {
//   return num * 10.7639;
// }
// // giver ikke rigtig mening, da man kan kalde det nemmere
// const arealinMeters = calculateAreal(12, 12);
// const squareFeet = squareMeterstosquareFeet(arealinMeters);
// console.log(arealinSquarefeet);
