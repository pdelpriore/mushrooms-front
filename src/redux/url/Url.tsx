interface Url {
  PREDICT: string;
}

export const url: Readonly<Url> = Object.freeze({
  PREDICT: "https://edibleorpoisonous.herokuapp.com/mushrooms/api/predict",
});
