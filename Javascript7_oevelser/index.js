// Øvelser i youtube/pdf fil
// øvelse 1
// // Et array med folk
// const people = ["Harry", "Ron", "Hermione", "Neville"];

// // En function til at sige Hello til en person
// function sayHello(person) {
//   console.log(`Hello ${person}`);
// }

// Kalder en function med hver person i vores array
// sayHello(people[0]);
// sayHello(people[1]);
// sayHello(people[2]);
// sayHello(people[3]);

// Eller vi kan lade forEach gøre det for os
// people.forEach(sayHello);

// Øvelse 2 - Callback function bliver kaldt med flere parametre
// Et array med folk
// const people = ["Harry", "Ron", "Hermione", "Neville"];

// function testParms(a, b, c, d) {
//   console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);
// }

// people.forEach(testParms);

// det der sker er at a er navnet, i rækkefølge, så først harry, så ron osv.
// b er index tallet på navnet, c er alle navnene, d er undefined
// det er de første 3 parametre, der bliver brugt, altså a, b, c
// De indeholder elementet, indekset og en reference til hele arrayet.
// Vi kan slå op i dokumentationen på mdn hjemmeside, hvorfor den henter disse elementer.

// Filter øvelser.
// 1 Animal filter

// const animals = [
//   {
//     name: "Misser",
//     type: "cat",
//   },
//   {
//     name: "Luna",
//     type: "cat",
//   },
//   {
//     name: "Biver",
//     type: "dog",
//   },
//   {
//     name: "Bruce",
//     type: "dog",
//   },
// ];

// function all(animal) {
//   return true;
// }

// function none(animal) {
//   return false;
// }
// console.log("ALL", animals.filter(all));
// Når jeg skriver animals.filter(all) viser consollen mig alle dyrene,
// hvis jeg skriver none viser den mig ingen.

// 2 isCat function
// const animals = [
//   {
//     name: "Misser",
//     type: "cat",
//   },
//   {
//     name: "Luna",
//     type: "cat",
//   },
//   {
//     name: "Biver",
//     type: "dog",
//   },
//   {
//     name: "Bruce",
//     type: "dog",
//   },
// ];

// function all(animal) {
//   return true;
// }

// function none(animal) {
//   return false;
// }
// console.log("ALL", animals.filter(all));

// function isCat(animal) {
//   if (animal.type === "cat") {
//     return true;
//   } else {
//     return false;
//   }
// }
// // når man returnere noget fra et funktions kald skal man gemme det,
// // ellers forsvinder det.
// // for at gemme det skal vi skrive
// const onlyCats = animals.filter(isCat);
// console.log("only cats", onlyCats);
// // console.log(animals.filter(isCat));
// // Så returnere den og viser kun kattene.

// // Øvelse, lav det nu med isDog function
// function isDog(animal) {
//   if (animal.type === "dog") {
//     return true;
//   } else {
//     return false;
//   }
// }

// const onlyDogs = animals.filter(isDog);
// console.log("only dogs", onlyDogs);
