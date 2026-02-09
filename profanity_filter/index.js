// kør funktionen med done = true - det er sådan man sætter et flag.
let hasTheButtonBeenClickedFlag = false; // tjekker med et flag
let theText = document.querySelector("p").textContent;
// textContent bruges til at hente teksten fra html'en
// man kan bruge replace all til at skifte teksten - tænk på language switcher.
// loop med

// Erstatter de dårlige ord med de gode.
const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

document.querySelector("button").addEventListener("click", klik);

// laver et flag ved at starte min kode og skrive: let hasTheButtonBeenClicked = false
// laver event listener på knap, der viser løsningen.
function klik() {
  if (hasTheButtonBeenClickedFlag) {
    console.log("The button has been clicked"); // tjekker, at der er hul igennem til consollen
  } else {
    console.log("The button has NOT been clicked"); // siger første gang man klikker, at den ikke er klikket, men efterfølgende klik er den true.
    sfw(); // viser sig kun ved første klik
  }
  hasTheButtonBeenClickedFlag = true;
}

// udskifter de dårlige ord, med de gode ord. - virkede men skulle også tilføje highlight til de gode ord.
function sfw() {
  curseWords.forEach((word) => {
    if (word.bad) {
      const replacement = `<span class="highlight">${word.good}</span>`;
      theText = theText.replaceAll(word.bad, replacement); // erstatter bad med good.
      console.log("Bad word", word.bad);
      console.log("Bad word", word.good);
    }
  });
  document.querySelector("p").innerHTML = theText;
  document.querySelector("main").classList.add("sfw-mode");
}

// // udskifter de dårlige ord, med de gode ord. - virkede men skulle også tilføje highlight til de gode ord.
// function sfw() {
//   curseWords.forEach((word) => {
//     if (word.bad) {
//       theText = theText.replaceAll(word.bad, word.good); // erstatter bad med good.
//       console.log("Bad word", word.bad);
//       console.log("Bad word", word.good);
//     }
//   });
//   document.querySelector("p").textContent = theText; // opdaterer p i html med de gode ord
// }
