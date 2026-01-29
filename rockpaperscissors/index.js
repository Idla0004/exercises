"use strict";
// variabler til valg knapperne
const rock_btn = document.querySelector(".rock");
const paper_btn = document.querySelector(".paper");
const scissors_btn = document.querySelector(".scissors");

//variabler til spillerne
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

// variabler til at fortælle hvem der vinder
const win = document.querySelector("#win");
const draw = document.querySelector("#draw");
const lose = document.querySelector("#lose");

// ærklerer mine to variabler, hvor værdierne ændrer sig ud fra bruger og computers valg.
let userChoice;
let computerChoice;

// laver en event listener, der "lytter" efter klikket, når man trykker på rock osv.
function init() {
  rock_btn.addEventListener("click", rockClick);
  paper_btn.addEventListener("click", paperClick);
  scissors_btn.addEventListener("click", scissorsClick);
}

function computerChooses() {
  animateHands();
  // Opretter et array med de mulige valg
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  // Tildeler det tilfældige valg til computerChoice
  computerChoice = choices[randomChoice];
  console.log("Computer choice and userChoice", userChoice, computerChoice); // Log computerChoice her efter den er tildelt en værdi
}

// Klik funktion
function rockClick() {
  console.log("Rock chosen!");
  userChoice = "rock";
  computerChooses();
}

function paperClick() {
  console.log("Paper chosen!");
  userChoice = "paper";
  computerChooses();
}

function scissorsClick() {
  console.log("Scissors chosen!");
  userChoice = "scissors";
  computerChooses();
}

// function animateHands(checkResult) {
//   player1.classList.ass("shake");
//   player1.addEventListener("animationend", () => {
//     player1.classList.remove("shake");
//     player1.classList.add(userChoice);
//   });
// }

function animateHands() {
  // læg animation  af på de to hænder.
  player1.classList.add("shake");
  player1.addEventListener("animationend", () => {
    // for at fjerne animationen skriver jeg
    player1.classList.remove("shake");
    // for at vise billede af valg skriver jeg
    player1.classList.add(userChoice);
  });
  console.log("Handshake start userChoice works", userChoice);
  player2.classList.add("shake");
  player2.addEventListener("animationend", () => {
    // for at fjerne animationen skriver jeg
    player2.classList.remove("shake");
    // for at vise billede af valg skriver jeg
    player2.classList.add(computerChoice);
  });
  // venter med at tjekke resultat til computer har valgt
  checkResult();
}

// If statements til at vise det rigtige resultat. SetTimeout fundet på GeeksforGeeks hjemmeside
function checkResult() {
  document.getElementById("lose").classList.add("hidden");
  document.getElementById("win").classList.add("hidden");
  document.getElementById("draw").classList.add("hidden");

  setTimeout(() => {
    if (userChoice === computerChoice) {
      draw.classList.remove("hidden");
    } else if (userChoice === "rock") {
      if (computerChoice === "scissors") {
        win.classList.remove("hidden");
      } else {
        lose.classList.remove("hidden");
      }
    } else if (userChoice === "scissors") {
      if (computerChoice === "paper") {
        win.classList.remove("hidden");
      } else {
        lose.classList.remove("hidden");
      }
    } else if (userChoice === "paper") {
      if (computerChoice === "rock") {
        win.classList.remove("hidden");
      } else {
        lose.classList.remove("hidden");
      }
    }
  }, 2000);
}

// init er funktion, event listener venter på DOM er loaded.
document.addEventListener("DOMContentLoaded", init);

// Den vælger stadig ikke de rigtige billeder eller rigtige resultat efter 2-3 runde,
// spørg om hjælp i morgen.

// Noter fra opfølgning af Rock, paper, scissors:
// brug eventuelt logical or med ||
// Kig på even listener, kan være der fejlen ligger i, at spillet kun virker, når siden er reloadet.
// lav eventuelt functions med choosePaper, etc.
// fjern hvis der er en classlist eller eventlistener tilføjet, hvor den bestemmer hvad  der skal ske.
// I console.log kan man lede efter noget specifikt med classList.contains("rock").
// ud af eventet kan vi hente et specifikt target ind, for at vise om den indeholder den klasse man vil se.
// Hver gang vi bruger en evenlistener, kommer der et objekt for evenlisteneren, vi kan kalde den evt eller event og den fanger de elementer,
// der er tilføjet med evenlistener.
