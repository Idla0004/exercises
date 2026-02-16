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
    li.innerHTML = `<p>${elm.text}</p>
    <p class="checkbox">${elm.unchecked ? "o" : "✓"}</p>`;

    todoContainer.appendChild(li);

    li.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("checkbox")) {
        console.log("vis ikon");
        elm.unchecked = !elm.unchecked; // (! gør den til det modsatte)
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

// function displayCheck(list) {
//   // create clone
//   const clone = document
//     .querySelector("template#checkbox")
//     .content.cloneNode(true);
// }

// //tilføjer if else statement med stjerne
// if (list.done === true) {
//   clone.querySelector("[data-field=todo]").textContent = "✓";
// } else {
//   clone.querySelector("[data-field=todo]").textContent = "○";
// }

// //tilføjer klikbar funktion til stjernerne
// clone.querySelector("[data-field=todo]").addEventListener("click", clickStar);
// function clickStar() {
//   if (list.done === true) {
//     list.done = false;
//   } else {
//     list.done = true;
//   }
//   buildList();
// }
