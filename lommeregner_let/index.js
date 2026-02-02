const firstNum = document.querySelector("#firstnumber");
const secondNum = document.querySelector("#secondnumber");
const beregn = document.querySelector("#dropdown");
const regnudKnap = document.querySelector("#btn");
const resultat = document.querySelector("#result");
const input = document.querySelector("input");

let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let divide = document.querySelector("#divider");
let add = document.querySelector("#gange");
let findtal;

console.log("find et tal, please");

regnudKnap.addEventListener("click", function () {
  console.log(firstNum.value, secondNum.value, beregn.value);
  if (beregn.value === "plus") {
    // tager value og tjekker om man har valgt plus
    console.log(
      "Her skal din plus berening være",
      parseInt(firstNum.value) + parseInt(secondNum.value),
    );
    document.querySelector("#result").innerHTML =
      parseInt(firstNum.value) + parseInt(secondNum.value); // tager det første tal og plusser med det andet tal.
  } else if (beregn.value === "minus") {
    // tager value og tjekker om man har valgt minus
    document.querySelector("#result").innerHTML =
      parseInt(firstNum.value) - parseInt(secondNum.value); // tager det første tal og minusser med det andet tal.
  } else if (beregn.value === "divider") {
    // tager value og tjekker om man har valgt divider
    document.querySelector("#result").innerHTML =
      parseInt(firstNum.value) / parseInt(secondNum.value); // tager det første tal og dividerer med det andet tal.
  } else if (beregn.value === "gange") {
    // tager value og tjekker om man har valgt gange
    document.querySelector("#result").innerHTML =
      parseInt(firstNum.value) * parseInt(secondNum.value); // tager det første tal og dividerer med det andet tal.
  }
});
