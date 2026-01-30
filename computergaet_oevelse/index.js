import { getRandomNumber } from "../utils/utils_lib.js";
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
  number = getRandomNumber(min, max); // regner ud at midten af min og max er 100 og bliver 50
  document.querySelector(".computeranswer").innerHTML =
    "Jeg gætter på " + number;
  console.log("Nyt tal:", number);

  tooHigh.addEventListener("click", (e) => {
    max = number; // næste gæt efter 50 er derfor max = 25
    number = getRandomNumber(min, max); // dividerer 50 med 2 og får 25
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
    min = number; // næste gæt efter 50
    number = getRandomNumber(min, max); // det sætter tal gættet ned ved at min er 50, max er 100 og så dividerer med 2 hvilket bliver = 75
    console.log("tal: ", number);
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
