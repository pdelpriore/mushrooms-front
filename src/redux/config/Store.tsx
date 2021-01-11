import { createStore, applyMiddleware } from "redux";
import allReducers from "./combineReducers/Index";
import thunk from "redux-thunk";

export default () => {
  let myStore = createStore(allReducers, applyMiddleware(thunk));

  return { myStore };
};
