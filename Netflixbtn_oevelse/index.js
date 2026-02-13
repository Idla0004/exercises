// Tips
// Du kan bruge CSS animationer eller JavaScript timers (setTimeout, setInterval) til at lave nedtællingen.
// Brug eventet animationend eller en timer til at bestemme, hvornår handlingen skal ske.
// Brug eventet mousemove til at opdage, når brugeren bevæger musen.
// Overvej hvordan du kan “springe til slutningen” af animationen, når musen bevæges. Det kan fx gøres ved at skifte/fjerne CSS-klasse eller manipulere direkte med elementets styling.
document.addEventListener("DOMContentLoaded", function () {
  const progressButton = document.querySelector(".button");
  const progressBar = document.querySelector(".progress");

  // Skjul knappen ved start
  progressButton.style.opacity = "0"; // Knap er usynlig til start
  progressButton.style.pointerEvents = "none"; // gør button ikke-klikbar

  // Vis knappen og start animationen efter 1.5 sekund
  setTimeout(function () {
    progressButton.style.opacity = "1"; // gør button synlig igen
    progressButton.style.pointerEvents = "auto"; // gør knap "interaktiv" igen, selvom den ikke kan noget i den her øvelse.
    progressBar.style.animation = "slide 4s linear forwards"; // Tilføjer animationen her
  }, 1500); // animation starter efter 1,5 sekund

  // Lyt efter, når animationen på knappen er færdig
  progressBar.addEventListener("animationend", function () {
    document.body.classList.add("darken"); // gør bodys farve mørkere med classen dark.
  });

  // Lyt efter musebevægelse
  document.addEventListener("mousemove", function () {
    // Stop animationen på knappen
    progressBar.style.animation = "none"; // Fjerner animationen, kører ikke længere
    progressBar.style.transform = "scaleX(1)"; // Viser færdig animation (fra CSS), når musen bevæger sig

    // Animation er slut baggrund bliver mørkere
    document.body.classList.remove("darken"); // fjerner darken animation, hvis mus bevæger sig.
  });
});
