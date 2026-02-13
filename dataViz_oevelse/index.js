async function fetchData() {
  const response = await fetch("https://kea-alt-del.dk/kata-distortion/");
  const data = await response.json();
  console.log("Ny data hentet:", data.inQueue);
  updateInQueue(data.inQueue);
}

function updateInQueue(value) {
  const inQueueElement = document.getElementById("inQueueValue");
  inQueueElement.textContent = value;

  const needle = document.getElementById("needle");
  // Beregn rotation baseret på værdien (f.eks. 0-30, hvor 30 er max)
  const maxValue = 30; // Juster dette baseret på dine forventede værdier
  const rotationDegree = (value / maxValue) * 180 - 90; // Skaler til -90 til 90 grader
  needle.style.transform = `translateX(-50%) rotate(${rotationDegree}deg)`;
}

function startUpdatingData() {
  setInterval(fetchData, 1000);
}

window.onload = startUpdatingData;
