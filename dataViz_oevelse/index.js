async function fetchData() {
  const response = await fetch("https://kea-alt-del.dk/kata-distortion/"); // fetch henter data fra URL’en. await gør, at koden venter på at fetch er færdig
  const data = await response.json(); // response.json() konverterer det hentede JSON-svar til et JavaScript-objekt.
  // await venter på, at konverteringen er færdig.
  // Resultatet gemmes i variablen data.

  console.log("Ny data hentet:", data.inQueue);
  updateInQueue(data.inQueue); // Kalder funktionen updateInQueue med værdien af data.inQueue
}

function updateInQueue(value) {
  // Definerer en funktion kaldet updateInQueue, der tager en parameter value.
  document.getElementById("inQueueValue").textContent = value; // Finder HTML-elementet med id="inQueueValue" og opdaterer teksten til ny opdateret værdi
}

function startUpdatingData() {
  // Definerer en funktion kaldet startUpdatingData.
  setInterval(fetchData, 1000); // Kalder funktionen fetchData hvert sekund
}

window.onload = startUpdatingData; // Når hele siden er færdig med at loade, kalder den startUpdatingData. Starter den automatiske opdatering
