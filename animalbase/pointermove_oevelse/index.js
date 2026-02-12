// Mouse move øvelse
//"mousemove"
// window.innerWidth
// style.setProperty
// clientX
// procentregning: delen/detHele * 100

document.addEventListener("mousemove", colorChange);

function colorChange(e) {
  const ratio = e.clientX / window.innerWidth; // window.innerwidth bruges til at dividere.
  const percent = ratio * 100;

 // document.body.style.backgroundColor = `hsl(0, ${percent}%, ${percent}%)`;
  
  document.body.style.backgroundColor = `hsl(0, ${percent}%, ${percent}%)`;
}
