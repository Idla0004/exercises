"use strict";

// 1. Lav en funktion der modtager to argumenter, beloeb og moms. Funktionen skal console.logge beløbet med momsen lagt til. (moms er i procent)
// const moms = 25;
// let pris = 100;

// findMoms(pris, moms);
// function findMoms(pris, moms) {
//   console.log(pris + (pris * moms) / 100);
// }

//console.log("show moms", pris + (pris * moms) / 100);

// 2. Lav moms som et default parameter sat til 25.
let pris = 100;
let moms;

findMoms(pris, (moms = "25"));
function findMoms(pris, moms) {
  console.log(pris + (pris * moms) / 100);
}
