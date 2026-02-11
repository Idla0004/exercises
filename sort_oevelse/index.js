const people = ["Harry", "Ron", "Hermione", "Neville"];
people.sort();
console.log(people);
// Vises i consollen som Harry, Hermione, Neville og Ron.

const animals = [
  { name: "Mandu", type: "cat" },
  { name: "Mia", type: "cat" },
  { name: "Leelo", type: "dog" },
  { name: "ScoobyDoo", type: "dog" },
];

function compareName(a, b) {
  if (a.name > b.name) {
    return 1;
  } else {
    return -1;
  }
}

animals.sort(compareName);
console.log(animals);
