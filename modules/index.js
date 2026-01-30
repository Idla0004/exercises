// console.log("getRandomNumber", getRandomNumber(3));

// function getRandomNumber(max) {
//   return Math.floor(Math.random() * max);
// }
// floor bliver 0,1,2, hvis jeg bruger ceil bliver det 1,2,3, hvis jeg bruger round bliver det 0,1,2,3

// skriv import for at importere hvad vi eksportere i utils mappen.
import { getRandomNumber } from "../utils/utils_lib.js";
console.log("getRandomNumber", getRandomNumber(3));
import { $ } from "../utils/utils_lib.js";
import { $$ } from "../utils/utils_lib.js";

// med import behøver jeg ikke document.queryselector, jeg skriver bare navnet på functionen. Ellers virker det heller ikke.
$(".mitPtag").innerHTML = "MODULES";

$$(".myListElement").forEach((elementName, i) => {
  elementName.innerHTML = "Hej" + i; // I tager tre parametre i for each, det tager elementet, nummeret og det array man arbejder i.
});
