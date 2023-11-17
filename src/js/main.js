import "../scss/style.scss";
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
