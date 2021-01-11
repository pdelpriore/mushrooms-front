import { combineReducers } from "redux";
import predictReducer from "../../predict/reducer/predictReducer";

const allReducers = combineReducers({
  prediction: predictReducer,
});

export default allReducers;
