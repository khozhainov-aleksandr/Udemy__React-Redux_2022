import { legacy_createStore as  createStore } from "redux";

const x = (state, action) => {
  return state;
}

export const store = createStore(x);