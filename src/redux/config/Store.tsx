import { createStore, applyMiddleware } from "redux";
import allReducers from "./combineReducers/Index";
import thunk from "redux-thunk";

const MyStore = createStore(allReducers, applyMiddleware(thunk));

export type RootState = ReturnType<typeof allReducers>;

export default MyStore;
