// console.log("Rock Paper Scissors game loaded");
"use strict";

const rock_btn = document.querySelector(".rock");
const paper_btn = document.querySelector(".paper");
const scissors_btn = document.querySelector(".scissors");
// const shakehand_btn = document.querySelector(shake);
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
let userChoice;
let computerChoice;
// const resultDisplay = document.querySelector(".result");
// const vinder = "You win!";
// const taber = "You lose!";
// const uafgjort = "It's a tie!";

document.addEventListener("DOMContentLoaded", init);

function init() {
  //   console.log("hej verden");
  rock_btn.addEventListener("click", rockClick);
  paper_btn.addEventListener("click", paperClick);
  scissors_btn.addEventListener("click", scissorsClick);
}

function rockClick() {
  //   console.log("Rock chosen!");
  userChoice = "Rock";
  animateHands();
  computerChooses();
}

function paperClick() {
  //   console.log("Paper chosen!");
  userChoice = "Paper";
  animateHands();
  computerChooses();
}

function scissorsClick() {
  //   console.log("Scissors chosen!");
  userChoice = "Scissors";
  animateHands();
  computerChooses();
}

function computerChooses() {
  computerChoice = "Scissors";
  //   console.log("Computer chooses userChoice works", userChoice);
}

function animateHands() {
  // læg animation på de to hænder.
  player1.classList.add("shake");
  player2.classList.add("shake");
  console.log("Handshake start userChoice works", userChoice);
}

//At lave: Tilføj en eventlistener på animationer, så der sker noget, når den ender.
