// console.log("getRandomNumber", getRandomNumber(3));

// skriv export for at eksportere koden
export function getRandomNumber(min, max) {
  return Math.floor((min + max) / 2);
}

// henter P tag ind fra HTML
export function $(elementName) {
  return document.querySelector(elementName);
}
// henter liste ind fra html
export function $$(elementName) {
  return document.querySelectorAll(elementName);
}

// Man kunne også med fordel bruge export og import til math random.
// Husk at flytte script fra bunden til head, og tilføj type="module" og tilføj script med utils_libs
// Fjern use strict.
// fjern math random og tilføj navnet til funktionen fra utils_lib.s og så er det implementeret frem for math random.
