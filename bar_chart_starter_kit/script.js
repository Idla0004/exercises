const list = document.querySelector("ul");

const columnArray = [];
setInterval(generateColumns, 1000); // Setinterval er en javascript indbygget funktion, der laver det til intervaller,
// 1000 er sat til at der kommer nyt hver 1 sekund.

function generateColumns() {
  const randomHeight = Math.round(Math.random() * 100); // math random op til 100.
  const li = document.createElement("li");
  li.style.setProperty("--height", randomHeight); // tager randomHeight const ind i set Property.
  list.appendChild(li);
  columnArray.push(randomHeight); // henter tilfædige tal mellem 0 og 100
  console.log(columnArray);
  if (columnArray.length > 20) {
    // maks 20.
    columnArray.shift();
    list.firstElementChild.remove(); // fjerner det første barn imens listen stadig kører/loopre
  }
}

// øvelse
// const columnArray = [];
// setInterval(generateColumns, 1000);
