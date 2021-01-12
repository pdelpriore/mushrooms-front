import {
  PredictDispatchTypes,
  LOADING,
  RESULT,
  ERROR,
  CLEAR,
} from "../type/dispatchType";

interface PredictState {
  loading: boolean;
  predictResult: string;
  error: string;
}

const initialState: PredictState = {
  loading: false,
  predictResult: "",
  error: "",
};

const predictReducer = (
  state = initialState,
  action: PredictDispatchTypes
): PredictState => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.payload };
    case RESULT:
      return { ...state, ...initialState, predictResult: action.payload };
    case ERROR:
      return { ...state, loading: false, error: action.payload };
    case CLEAR:
      return (state = initialState);
    default:
      return state;
  }
};

export default predictReducer;
