"use strict";
const tooHigh = document.querySelector(".toohigh");
const tooLow = document.querySelector(".toolow");
const youWon = document.querySelector(".winner");
const startGame = document.querySelector(".startgame");
let min = 0;
let max = 100;
let number;

// skal starte computerens gæt
startGame.addEventListener("click", function () {
  number = Math.ceil(Math.random(min + max) * 100);
  document.querySelector(".computeranswer").innerHTML =
    "Jeg gætter på " + number;
  console.log("Nyt tal:", number);

  tooHigh.addEventListener("click", (e) => {
    number = Math.floor(number - 2);
    console.log(" tal:", number);
    document.querySelector(".computeranswer").innerHTML =
      "Er det " + number + "?";
    e.preventDefault();
  });

  tooLow.addEventListener("click", (e) => {
    number = Math.ceil(number + 2);
    console.log(" tal:", number);
    document.querySelector(".computeranswer").innerHTML =
      "Er det " + number + "?";
    e.preventDefault();
  });

  youWon.addEventListener("click", (e) => {
    document.querySelector(".computeranswer").innerHTML = "Du vandt!";
    e.preventDefault();
  });
});

// computer vandt, men skal gætte igen
youWon.addEventListener("click", youWon);

// guessNumber();

// function guessNumber() {
//   const messageElement = document.getElementById("message");
//   if (number === realNumber) {
//     messageElement.textContent = "Tillykke, du gættede rigtigt!";
//   } else if (number > realNumber)
//     messageElement.textContent = "Haha det er for lavt";
//   else if (number < realNumber)
//     messageElement.textContent = "Haha det er for højt";
// }
// console.log("Nyt tal:", number);
// man kan erklære to variabler for hvad den mindst må være og hvad den højest må være. min(0) max(100)
