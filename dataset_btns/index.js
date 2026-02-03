document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", klik);
});
// queryALL bliver et array/liste af dem all

function klik(evt) {
  console.log("evt", evt.target.dataset.filter);
  visHvilketFilterDererValgt(evt.target.dataset.filter); // viser hvilket target
} // ser den er fyldt med properties ved klik, tag target.
// sæt eventlistener på det hele og i functionen filtrerer vi hvilken knap ved
// at hente target fra data-filter i html.

function visHvilketFilterDererValgt(filter) {
  document.querySelector("h2").textContent = filter;
} // viser hvilket target der er valgt, inde i html, når man klikker på en specifikt button
