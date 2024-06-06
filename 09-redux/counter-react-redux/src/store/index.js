import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  console.log("Action received", action);
  return store;
};

const counterStore = createStore(counterReducer);

export default counterStore;
