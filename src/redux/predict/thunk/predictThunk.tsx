import { Dispatch } from "redux";
import {
  PredictDispatchTypes,
  LOADING,
  RESULT,
  ERROR,
  CLEAR,
} from "../../config/type/dispatchType";
import { capitalize } from "../../../methods/capitalize";
import { url } from "../../url/Url";

interface Data {
  cupSurface: string;
  bruises: string;
  gillSpacing: string;
  gillSize: string;
  gillColor: string;
  stalkSurfaceAboveRing: string;
  stalkSurfaceBelowRing: string;
  stalkColorAboveRing: string;
  ringType: string;
  sporePrintColor: string;
  population: string;
  habitat: string;
}

export const predict = (data: Data) => {
  return async (dispatch: Dispatch<PredictDispatchTypes>) => {
    dispatch({ type: LOADING, payload: true });
    try {
      const response = await fetch(url.PREDICT, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      const { result } = responseData;

      if (result) dispatch({ type: RESULT, payload: result });
    } catch (err) {
      if (err) {
        dispatch({
          type: ERROR,
          payload: capitalize("network error"),
        });
      }
    }
  };
};

export const clearPredictState = () => {
  return (dispatch: Dispatch<PredictDispatchTypes>) => {
    dispatch({ type: CLEAR });
  };
};
