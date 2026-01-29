"use strict";
const tooHigh = document.querySelector(".toohigh");
const tooLow = document.querySelector(".toolow");
const youWon = document.querySelector(".winner");
const startGame = document.querySelector(".startgame");
const higherImg = document.querySelector(".higher-img");
const lowerImg = document.querySelector(".lower-img");
const winnerImg = document.querySelector(".winner-img");
const hidden = document.querySelector(".hidden");
let min = 0;
let max = 100;
let number;

// Start computerens gæt
startGame.addEventListener("click", function () {
  // Skjul alle billeder ved start
  higherImg.classList.add("hidden");
  lowerImg.classList.add("hidden");
  winnerImg.classList.add("hidden");

  // starter computerens gæt
  number = Math.floor((min + max) / 2); // regner ud at midten af min og max er 100 og bliver 50
  document.querySelector(".computeranswer").innerHTML =
    "Jeg gætter på " + number;
  console.log("Nyt tal:", number);

  tooHigh.addEventListener("click", (e) => {
    max = number - 1; // næste gæt efter 50 er derfor max = 49
    number = Math.floor((min + max) / 2); // dividerer 49 med 2 og får 24
    console.log(" tal:", number);
    document.querySelector(".computeranswer").innerHTML =
      "Er det " + number + "?";

    // Vis billedet for "gæt lavere"
    lowerImg.classList.remove("hidden");
    higherImg.classList.add("hidden");
    winnerImg.classList.add("hidden");
    e.preventDefault();
  });

  tooLow.addEventListener("click", (e) => {
    min = number + 1; // næste gæt efter 50 er derfor max = 51
    number = Math.floor((min + max) / 2); // det sætter tal gættet ned ved at min er 51, max er 100 og så dividerer med 2 hvilket bliver = 75
    console.log(" tal:", number);
    document.querySelector(".computeranswer").innerHTML =
      "Er det " + number + "?";
    // Vis billedet for "gæt højere"
    higherImg.classList.remove("hidden");
    lowerImg.classList.add("hidden");
    winnerImg.classList.add("hidden");
    e.preventDefault();
  });

  youWon.addEventListener("click", (e) => {
    document.querySelector(".computeranswer").innerHTML = "Du vandt!";
    // Vis billedet for "vinder"
    winnerImg.classList.remove("hidden");
    higherImg.classList.add("hidden");
    lowerImg.classList.add("hidden");

    e.preventDefault();
  });
});
