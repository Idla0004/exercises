// Et objekt med 4-7 properties
const vehicles = [
  {
    type: "Bus",
    fuel: "Diesel",
    passengers: 45,
    stops: ["Nørrebrogade", "Elmegade"],
  },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 0,
    ownedBy: "Jonas",
    isElectric: true,
  },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 2,
    ownedBy: "Vingegård",
    isTandem: true,
  },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  arr.forEach((each) => {
    // Med if statements på isElectric og isTandem viser den yes or no alt efter om det er true elller undefined
    let isElectric;
    if (each.isElectric) {
      isElectric = "✓"; // U+2714
    } else {
      isElectric = "X"; // U+2716
    }
    let isTandem;
    if (each.isTandem) {
      isTandem = "✓"; // U+2714
    } else {
      isTandem = "X"; // U+2716
    }
    // Jeg fjerner for each ved isElectric og isTandem, fordi jeg nu henter svaret med if/else statements.
    // Jeg bruger or-literal (||) på de andre, fx fuel, for at skrive hvad det er hvis der ellers havde stået undefined.

    // Den laver en streng og bliver vist som inner HTML.
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel || "Electric"}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops || "No stops"}</td>
  <td>${each.ownedBy || "No one"}</td>
  <td>${isElectric}</td>
  <td>${isTandem}</td>
</tr>`;
  });
}
// Event listeners til knapperne
document.getElementById("showAll").addEventListener("click", () => {
  showTheseVehicles(vehicles);
});

document.getElementById("electricVehicles").addEventListener("click", () => {
  // filtrerer electric fartøjer med vehicles.filter
  const electricVehicles = vehicles.filter(
    (vehicle) => vehicle.isElectric === true,
  );
  // Henter kun electric fartøjer med showTheseVehicles functionen.
  showTheseVehicles(electricVehicles);
});
// fartøjer med plads til mere end 2 passagerer
document.getElementById("moreThanTwoSeats").addEventListener("click", () => {
  const vehiclesWithMoreThanTwoSeats = vehicles.filter(
    (vehicle) => vehicle.passengers > 2,
  );
  showTheseVehicles(vehiclesWithMoreThanTwoSeats);
});
// ejet af Jonas og elektrisk
document
  .getElementById("electricOwnedByJonas")
  .addEventListener("click", () => {
    const electricVehiclesOwnedByJonas = vehicles.filter(
      (vehicle) => vehicle.isElectric === true && vehicle.ownedBy === "Jonas",
    );
    showTheseVehicles(electricVehiclesOwnedByJonas);
  });
// rugbrød med plads til mere end 1
document.getElementById("extraseats").addEventListener("click", () => {
  const vehiclesWithAtLeastTwoSeats = vehicles.filter(
    (vehicle) => vehicle.passengers > 1 && vehicle.fuel === "Rugbrød",
  );
  showTheseVehicles(vehiclesWithAtLeastTwoSeats);
});

// Vis alle køretøjer som standard
showTheseVehicles(vehicles);

// Læs i data attributter pdf'en
// Data atributter skal altid starte med data- og med små bogstaver efter.
// I java for at få fat på det alene, skal man skrive queryselecter("eksempel_btn").dataset.filter

// man kunne også skrive det sådan her:
// const electricVeh = vehicles.filter((veh) => veh.isElectric);
// console.log("electricVeh", electricVeh);
// const moreThantwo = vehicles.filter((veh) => veh.passengers > 2);
// console.log("Passengesr", moreThantwo);
// showTheseVehicles(vehicles);

// Hent en knap med data-filter fra HTML
// document.querySelectorAll("button").forEach((btn, i, arr) => {
//   console.log("btn", btn);
//   console.log("i", i); // tager index'et af knapperne i arrayet
//   console.log("i", arr);

//   //Nu henter vi knapperne til de forskellige funktioner:
//   btn.addEventListener("click", klik);
// });

// function klik(evt) {
//   evt.target;
//   console.log("klik", evt.target.dataset.filter); // console skriver det valgte dataset i consollen.
//   if (evt.target.dataset.filter === "mereendto") {
//     showTheseVehicles(electricVehicles);
//   } else if
// }
// den er smart at bruge til at hente datafilter i stedet for at hente med ID.
// i er iterator, kan hedder hvad det vil, men den skal stå på den respektive plads.
