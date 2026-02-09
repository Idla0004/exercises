document.querySelector(".theme").addEventListener("change", selectTheme);
function selectTheme(evt) {
  document.querySelector("body").dataset.theme = evt.target.value;
}
