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
    let isElectric;
    if (each.isElectric) {
      isElectric = "Yes";
    } else {
      isElectric = "No";
    }
    let isTandem;
    if (each.isTandem) {
      isTandem = "Yes";
    } else {
      isTandem = "No";
    }
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
  const electricVehicles = vehicles.filter(
    (vehicle) => vehicle.isElectric === true,
  );
  showTheseVehicles(electricVehicles);
});

document.getElementById("moreThanTwoSeats").addEventListener("click", () => {
  const vehiclesWithMoreThanTwoSeats = vehicles.filter(
    (vehicle) => vehicle.passengers > 2,
  );
  showTheseVehicles(vehiclesWithMoreThanTwoSeats);
});

document
  .getElementById("electricOwnedByJonas")
  .addEventListener("click", () => {
    const electricVehiclesOwnedByJonas = vehicles.filter(
      (vehicle) => vehicle.isElectric === true && vehicle.ownedBy === "Jonas",
    );
    showTheseVehicles(electricVehiclesOwnedByJonas);
  });

document.getElementById("extraseats").addEventListener("click", () => {
  const vehiclesWithAtLeastTwoSeats = vehicles.filter(
    (vehicle) => vehicle.passengers >= 2,
  );
  showTheseVehicles(vehiclesWithAtLeastTwoSeats);
});

// Vis alle køretøjer som standard
showTheseVehicles(vehicles);

// 7. Style tabellen endnu mere

// Læs i data attributter pdf'en
// Data atributter skal altid starte med data- og med små bogstaver efter.
// I java for at få fat på det alene, skal man skrive queryselecter("eksempel_btn").dataset.filter
