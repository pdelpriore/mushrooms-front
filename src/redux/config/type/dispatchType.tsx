export const LOADING = "predict_loading";
export const RESULT = "predict_result";
export const ERROR = "predict_error";
export const CLEAR = "predict_clear";

export interface PredictLoading {
  type: typeof LOADING;
  payload: boolean;
}

export interface PredictResult {
  type: typeof RESULT;
  payload: string;
}

export interface PredictError {
  type: typeof ERROR;
  payload: string;
}

export interface PredictClear {
  type: typeof CLEAR;
}

export type PredictDispatchTypes =
  | PredictLoading
  | PredictResult
  | PredictError
  | PredictClear;
