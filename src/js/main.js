/* import "../scss/style.scss"; */
import { Todo } from "./models/Todo";

const todo1 = new Todo(
  "Träna på gymmet i 45 minuter",
  "Sunt magna proident laborum incididunt minim esse pariatur minim aliqua.",
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

const createHtml = () => {
  const todoContainer = document.getElementById("todoSectn");
  todoContainer.innerHTML = "";

  localStorage.setItem("todos", JSON.stringify(todos));

  todos.forEach((todo, i) => {
    const ulList = document.createElement("ul");
    const liList = document.createElement("li");
    const liList2 = document.createElement("li");
    const liList3 = document.createElement("li");
    const liList4 = document.createElement("li");
    const liList5 = document.createElement("li");
    const removeButton = document.createElement("button");

    liList.innerHTML = todo.name;
    liList2.innerHTML = todo.description;
    liList3.innerHTML = todo.createdDate;
    liList4.innerHTML = todo.deadline;
    liList5.innerHTML = todo.assignedTo;

    ulList.appendChild(liList);
    ulList.appendChild(liList2);
    ulList.appendChild(liList3);
    ulList.appendChild(liList4);
    ulList.appendChild(liList5);
    todoContainer.appendChild(ulList);
  });
};
createHtml();
