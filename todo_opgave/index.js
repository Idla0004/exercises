const todoText = document.querySelector("#todo_input");
const todoBtn = document.querySelector(".writetodobtn");
const todoContainer = document.querySelector(".todo_container");
const unchecked = document.querySelector(".unchecked");
const todoArr = [];
const notdoneBtn = document.querySelector("#btntodo");
const doneBtn = document.querySelector("#btndone");
const doneContainer = document.querySelector(".done_container");
const todoList = document.querySelector("#todolist");
const doneList = document.querySelector("#donelist");

todoBtn.addEventListener("click", submitToDo);
notdoneBtn.addEventListener("click", showNotDonelist);
doneBtn.addEventListener("click", showDonelist);

function showDonelist() {
  todoList.style.zIndex = "0";
  doneList.style.zIndex = "1";
  doneBtn.style.zIndex = "1";
  doneBtn.style.backgroundColor = "#f0ede4";
  notdoneBtn.style.backgroundColor = "#79744e";
  console.log("Knap er klikket", notdoneBtn);
}

function showNotDonelist() {
  todoList.style.zIndex = "1";
  doneList.style.zIndex = "0";
  doneBtn.style.zIndex = "0";
}

function submitToDo() {
  const todoObject = {
    text: todoText.value,
    done: false,
    unchecked: true,
    star: true,
    delete: true,
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
      doneContainer.appendChild(li); // flytter to do tekst til done containeren
      li.innerHTML = `<p class="checkbox">${elm.unchecked ? "o" : "✓"}
    </p>
    <p class="textelement">${elm.text}</p>
     <p class="star">${elm.star ? "☆" : "★"}</p>
     <img src="img/delete.webp" class="deleteimg" ${elm.delete}></img>`;
    }

    li.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("checkbox")) {
        console.log("vis ikon");
        elm.unchecked = !elm.unchecked; // (! skifter til checked status)
      }
      showTaskArr(); // opdaterer visningen
      console.log("check boxed is check of", `${elm.id}`); // tjekker id i console log
      if (evt.target.classList.contains("star")) {
        console.log("vis ikon");
        elm.star = !elm.star; // skifter favorit status
        showTaskArr(); // opdaterer visningen
      }
      if (evt.target.classList.contains("deleteimg")) {
        // hvis event indeholder delete billedet
        const index = todoArr.findIndex(
          (targetArray) => targetArray.id === elm.id, // index finder indexet på det specifikke liste element.
        );
        todoArr.splice(index, 1); // hvis trykket på, så bliver elementet/to do teksten slettet.
        filterAndSortTaskArr();
      }
    });
  });
}

//gamle liste

// function showTaskArr() {
//   todoArr.forEach((elm) => {
//     todoContainer.innerHTML += `<li>${elm.text}</li>`;
//   });
// }

// skal afspejle at id er valgt, når en ting på listen kan slettes igen.
// kig på local storage øvelse fra fredag d. 13. februar

// måske bruges til todo eller done ikoner
