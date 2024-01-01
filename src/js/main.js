import "../scss/style.scss";
import { Todo } from "./models/Todo";

const todo1 = new Todo(
  "Träna på gymmet i 45 minuter",
  "Sunt magna proident laborum incididunt minim esse pariatur minim aliqua minim consectetur.",
  "2023-11-17",
  "2023-12-01",
  "Liam Andersson"
);

const todo2 = new Todo(
  "Handla matvaror för veckan",
  "Adipisicing official consectetur nostrud ullamco ex minim ad fugiatsa.",
  "2023-12-17",
  "2023-12-25",
  "Olivia Karlsson"
);
const todo3 = new Todo(
  "Organisera arbetsytan för en mer produktiv dag",
  "Cillum est duis veniam commodo deserunt officia dolor tempor sit nisi.",
  "2023-12-25",
  "2023-12-28",
  "Noah Eriksson"
);
const todo4 = new Todo(
  "Rensa upp i e-postinkorgen",
  "Sit dolor enim adipisicing qui.Occaecat elit aute proident nisi tempo.",
  "2023-12-29",
  "2023-12-30",
  "Ella Söderberg"
);

let todos = [todo1, todo2, todo3, todo4];
let doneTodos = [];
if (localStorage.getItem("todos")) {
  todos = JSON.parse(localStorage.getItem("arrayTodos"));
}
if (localStorage.getItem("arrayDone")) {
  doneTodos = JSON.parse(localStorage.getItem("arrayDone"));
}

const createHtml = () => {
  const todoContainer = document.getElementById("todoSectn");
  const doneContainer = document.getElementById("doneSectn");
  todoContainer.innerHTML = "";
  doneContainer.innerHTML = "";

  localStorage.setItem("arrayTodos", JSON.stringify(todos));
  localStorage.setItem("arrayDone", JSON.stringify(doneTodos));

  todos.forEach((todo, i) => {
    const ulList = document.createElement("ul");
    const liList = document.createElement("li");
    const liList2 = document.createElement("li");
    const liList3 = document.createElement("li");
    const liList4 = document.createElement("li");
    const liList5 = document.createElement("li");
    const moveToDoneButton = document.createElement("button");
    moveToDoneButton.className = "btn btn-danger p-3";

    liList.innerHTML = todo.name;
    liList2.innerHTML = todo.description;
    liList3.innerHTML = todo.createdDate;
    liList4.innerHTML = todo.deadline;
    liList5.innerHTML = todo.assignedTo;

    moveToDoneButton.addEventListener("click", () => {
      doneTodos.push(todo);
      todos = todos.filter((e, index) => index !== i);
      createHtml();
    });

    moveToDoneButton.innerHTML = "Done";

    ulList.appendChild(liList);
    ulList.appendChild(liList2);
    ulList.appendChild(liList3);
    ulList.appendChild(liList4);
    ulList.appendChild(liList5);
    ulList.appendChild(moveToDoneButton);
    todoContainer.appendChild(ulList);
  });

  doneTodos.forEach((doneTodo, i) => {
    const ulList = document.createElement("ul");
    const liList = document.createElement("li");
    const liList2 = document.createElement("li");
    const liList3 = document.createElement("li");
    const liList4 = document.createElement("li");
    const liList5 = document.createElement("li");
    const undoButton = document.createElement("button");

    liList.innerHTML = doneTodo.name;
    liList2.innerHTML = doneTodo.description;
    liList3.innerHTML = doneTodo.createdDate;
    liList4.innerHTML = doneTodo.deadline;
    liList5.innerHTML = doneTodo.assignedTo;

    undoButton.addEventListener("click", () => {
      todos.push(doneTodo);
      doneTodos = doneTodos.filter((e, index) => index !== i);
      createHtml();
    });

    undoButton.innerHTML = "Undo";

    ulList.appendChild(liList);
    ulList.appendChild(liList2);
    ulList.appendChild(liList3);
    ulList.appendChild(liList4);
    ulList.appendChild(liList5);
    ulList.appendChild(undoButton);
    doneContainer.appendChild(ulList);
  });
};

createHtml();
