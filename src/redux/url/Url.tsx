interface Url {
  PREDICT: string;
}

export const url: Readonly<Url> = Object.freeze({
  PREDICT: "http://127.0.0.1:8000/api/predict",
});
