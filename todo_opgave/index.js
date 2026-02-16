const todoText = document.querySelector("#todo_input");
const todoBtn = document.querySelector(".writetodobtn");
const todoContainer = document.querySelector(".todo_container");
const unchecked = document.querySelector(".unchecked");
const todoArr = [];
const notdoneBtn = document.querySelector("#filtertodo");
const doneBtn = document.querySelector("#filterdone");
const doneContainer = document.querySelector(".done_container");

todoBtn.addEventListener("click", submitToDo);
notdoneBtn.addEventListener("click", () => showList("todo"));
doneBtn.addEventListener("click", () => showList("done"));

function submitToDo() {
  const todoObject = {
    text: todoText.value,
    done: false,
    unchecked: true,
    star: true,
    id: self.crypto.randomUUID(),
  };
  todoArr.push(todoObject);
  todoText.value = "";
  console.log("todoArr", todoArr);
  filterAndSortTaskArr();
}

function filterAndSortTaskArr() {
  showTaskArr();
}

function showTaskArr() {
  todoContainer.innerHTML = "";
  doneContainer.innerHTML = "";

  todoArr.forEach((elm) => {
    const li = document.createElement("li");
    li.innerHTML = `<p class="checkbox">${elm.unchecked ? "o" : "✓"}
    </p>
    <p class="textelement">${elm.text}</p>
     <p class="star">${elm.star ? "☆" : "★"}</p> `;

    if (elm.unchecked) {
      todoContainer.appendChild(li);
    } else {
      doneContainer.appendChild(li);
    } // flytter to do tekst til done containeren

    li.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("checkbox")) {
        console.log("vis ikon");
        elm.unchecked = !elm.unchecked; // (! skifter til checked status)
      }
      showTaskArr(); // opdaterer visningen
      console.log("check boxed is check of", `${elm.id}`); // tjekker id i console log
    });

    li.addEventListener("click", (event) => {
      if (event.target.classList.contains("star")) {
        console.log("vis ikon");
        elm.star = !elm.star; // skifter favorit status
        showTaskArr(); // opdaterer visningen
      }
    });
  });
}

// Filtrer med knapper

//gamle liste

// function showTaskArr() {
//   todoArr.forEach((elm) => {
//     todoContainer.innerHTML += `<li>${elm.text}</li>`;
//   });
// }

// skal afspejle at id er valgt, når en ting på listen kan slettes igen.
// kig på local storage øvelse fra fredag d. 13. februar

// måske bruges til todo eller done ikoner
