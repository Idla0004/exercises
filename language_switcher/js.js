"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

//Første del
// const locale = "da";

// texts[locale].texts.forEach((elm) => {
//   // looper igennem hver tekst valgt på dansk
//   const element = document.querySelector(elm.location); // finder html elementer ud fra om det er location
//   if (element) {
//     element.textContent = elm.text; // sætter den rigtige tekst på html elementet.
//   }
// });

//Hvis jeg havde valgt tysk sprog i stedet står det sådan:
// const locale = "de";

// texts[locale].texts.forEach((elm) => {
//   // looper igennem hver tekst valgt på dansk
//   const element = document.querySelector(elm.location); // finder html elementer ud fra om det er location
//   if (element) {
//     element.textContent = elm.text; // sætter den rigtige tekst på html elementet.
//   }
// });

// Anden del

// henter sproget fra .language class i html
const selectLanguage = document.querySelector(".language");

// Funktion der opdaterer text.
function updateTexts(locale) {
  texts[locale].texts.forEach((elm) => {
    const element = document.querySelector(elm.location); // finder html elementer ud fra om det er location
    if (element) {
      element.textContent = elm.text; // sætter den rigtige tekst på html elementet.
    }
  });
}

// Evenlistener til drop-down menu
selectLanguage.addEventListener("change", () => {
  const locale = selectLanguage.value; // vælger value ud fra HTML'en og skifter sprog ud fra det.
  if (locale !== "Select") {
    // bruger strikt ulighedsoperator (!==) for at sammenligne Select valuen med de andre værdier.
    // Hvis locale ikke er "Select", kalder den updateTexts(locale) for at opdatere teksterne på siden.
    updateTexts(locale);
  }
});

// Sæt dansk som standard, når siden indlæses
updateTexts("da");

// !== er en striks ulighedsoperator i JavaScript. Den bruges til at sammenligne to værdier og returnerer true, hvis værdierne ikke er ens både i værdi og type.
// Hvis værdierne er ens (i både værdi og type), returnerer den false.

// noter fra undervisning og tests

// const locale = "da";

// console.log(texts.da.texts[0]); // skriver 0 fordi vi skal hente båden.
// texts.da.texts.forEach((elm) => {
//   console.log(elm);
// }); // Henter texts for dansk

// texts.de.texts.forEach((elm) => {
//   console.log(elm);
// }); // henter det tyske

// texts[locale].texts.forEach((elm) => {
//   console.log(elm.location); // viser om det er header og footer
//   document.querySelector(elm["location"]).textContent = ""; // henter header og footer
//   // udskiftter teksten med bassemand, i dette eksempel.
// }); // det samme som det andet

// Det jeg skal gøre, er at finde lokationer og udskifte teksten hvor de står.

// opmærksom på en ting - Man kan
// Eksempel:
// const hund = {
//   navn: "Mona",
//   alder: 2,
// };
// console.log(hund.navn); det samme som at skrive (hund["navn"])
// Kunne lave en variabel mere, der hedder
// const hvilkenProperty = "navn"; // kan også skifte til alder
// const hund = {
//   navn: "Mona",
//   alder: 2,
// };
// console.log(hund[hvilkenProperty]);
// kan bruge det til at skifte sprog i opgaven.
