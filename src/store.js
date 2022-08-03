import {
  createAction,
  createReducer,
  createSlice,
  configureStore,
} from "@reduxjs/toolkit";
import { createStore } from "redux";

// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// 1.
/* const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ id: Date.now(), text: action.payload }, ...state];
    case deleteToDo.type:
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
}; */

// 2.
/* const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ id: Date.now(), text: action.payload });
  },
  [deleteToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload),
});
 */

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ id: Date.now(), text: action.payload });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});
export const { add, remove } = toDos.actions;

const store = configureStore({ reducer: toDos.reducer });

export default store;
