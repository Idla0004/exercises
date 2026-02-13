console.log("Hvilket theme er gemt", localStorage.getItem("savedtheme"));
const localStorageTheme = localStorage.getItem("savedtheme");

if (localStorageTheme) {
  document.querySelector("body").dataset.theme = localStorageTheme; // gemmer tema valgt i localStorage, ved refresh er temaet stadig det valgte, indtil jeg slette i local storage.
} else {
  document.querySelector("body").dataset.theme = "dark"; // gør dark til default tema
  document.querySelector(".theme").value = "dark"; // refresher drop-down til at vise det rigtige tema (dark)
}

document.querySelector(".theme").addEventListener("change", selectTheme);
function selectTheme(evt) {
  localStorage.setItem("savedtheme", evt.target.value); // henter localstorage i console.log > storage > local storage
  document.querySelector("body").dataset.theme = evt.target.value;
}
