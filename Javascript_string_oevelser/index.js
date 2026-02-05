// Øvelse fra video
// 1
// const name = "Ida";
// const animalType = "cat";
// const animalName = "Nessie";

// console.log(`My name is ${name},\nI have a ${animalType} called ${animalName}`);
// // lav \ med alt + 92 på numPadden. \ laver ny linje.

// 2
// const name = "Ida";
// const len = name.length;
// console.log(`${name} is ${len} characters long`);

// const letter = name[0];
// console.log(`The first letter of ${name} is ${letter}`);

// 3
// const name = "Albus Percival Wulfric Brian Dumbledore";
// const len = name.length;
// const index = name.indexOf;
// let karakter = name[(2, 6)];

// console.log(`${name} is ${len} characters long with spacing!`);
// console.log(name[2]);
// console.log(name[6]);
// console.log(name.indexOf("D"));

// const dumbledoreStart = name.indexOf("D"); // Startindex for "Dumbledore"
// const dumbledore = name.substring(dumbledoreStart); // Understrengen "Dumbledore"
// const firstEIndexInDumbledore = dumbledore.indexOf("e"); // Index for første "e" i "Dumbledore"
// const firstEIndexInName = dumbledoreStart + firstEIndexInDumbledore; // Regner det om til index i hele strengen
// console.log(`Index for første "e" i "Dumbledore": ${firstEIndexInName}`);

// 4 - forskellige metoder med string
// const str1 = "  There is     space here \n  ";
// const str2 = str1.trim();
// console.log(str1);
// console.log(str2);

// andet forsøg med underscores for at se spacing.
// const str1 = "  There is     space here \n  ";
// const str2 = str1.trim();
// console.log("_" + str1 + "_");
// console.log("_" + str2 + "_");
// // med trim fjerner den mellemrum før og efter og også linje skift med backslash n

// 5 - Nogle metoder tager parametre, fx substring (start, end)
// const fullName = "Klaus Lloyd Hansen";
// const firstName = fullName.substring(0, 5);
// console.log(firstName);
// console.log(`_${firstName}_`);

// tager det hele vejen til enden
// const fullName = "Klaus Lloyd Hansen";
// const firstName = fullName.substring(6); // får fra plads 6(efter mellemrummet) og ud - altså Lloyd Hansen
// console.log(firstName);
// console.log(`_${firstName}_`);

// Fortsæt med substring
// find ud af hvilke værdier du behøver i .substring for at få disse resultater:
const fullName = "Albus Percival Wulfric Brian Dumbledore";
let firstName = fullName.substring(0, 5);
let shortName = fullName.substring(2, 5);
const middleName = fullName.substring(15, 22);
const middleLastName = fullName.substring(25, 28);
const lastName = "Dumbledore";

// 1 "Albus"
console.log(firstName);

// 2 "Dumbledore"(kan du lave den med kun et parameter?)
console.log(lastName);

// 3 "Wulfric"
console.log(middleName);

// 4 " Wulfric" (mellemrum inden Wulfric)
console.log(" " + middleName);

// 5 "ian"
console.log(middleLastName);

// "bus"
console.log(shortName);
