const todoText = document.querySelector("#todo_text");
const todoBtn = document.querySelector(".todo");
const todoContainer = document.querySelector(".todo_container");
const unchecked = document.querySelector(".unchecked");
const todoArr = [];

todoBtn.addEventListener("click", submitToDo);

function submitToDo() {
  //   todoArr.length = 0; // starter med at "cleare" det udskrevede/synlige array, så skrevne ting ikke gentager sig, når man klikker på btn.
  const todoObject = {
    text: todoText.value,
    done: false,
    unchecked: true,
    star: true,
    id: self.crypto.randomUUID(),
  };
  todoArr.push(todoObject);
  console.log("todoArr", todoArr);
  filterAndSortTaskArr();
}

function filterAndSortTaskArr() {
  showTaskArr();
  //   todoArr.push(todoText);
}

function showTaskArr() {
  todoContainer.innerHTML = "";
  todoArr.forEach((elm) => {
    const li = document.createElement("li");
    li.innerHTML = `<p class="checkbox">${elm.unchecked ? "o" : "✓"}
    </p>
    <p>${elm.text}</p>
     <p class="star">${elm.star ? "☆" : "★"}</p> `;

    todoContainer.appendChild(li);
    todoText.value = "";

    li.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("checkbox")) {
        console.log("vis ikon");
        elm.unchecked = !elm.unchecked; // (! gør den til det modsatte)
        filterAndSortTaskArr();
      }
    });

    li.addEventListener("click", (event) => {
      if (event.target.classList.contains("star")) {
        console.log("vis ikon");
        elm.star = !elm.star; // (! gør den til det modsatte)
        filterAndSortTaskArr();
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
