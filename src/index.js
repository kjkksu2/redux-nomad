import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD = "ADD";
const DELETE = "DELETE";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ id: Date.now(), text: action.text }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

const addToDo = (text) => {
  store.dispatch({ type: ADD, text });
};

const deleteToDo = (e) => {
  const id = e.target.parentNode.id;
  store.dispatch({ type: DELETE, id: parseInt(id) });
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    li.id = toDo.id;
    li.innerText = toDo.text;
    btn.innerText = "DEL";
    btn.addEventListener("click", deleteToDo);
    li.appendChild(btn);
    ul.appendChild(li);
  });
};
store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  addToDo(toDo);
};

form.addEventListener("submit", onSubmit);
