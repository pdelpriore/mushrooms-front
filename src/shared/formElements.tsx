interface Elements {
  question: string;
  answer: string[];
  shortcut: string[];
}

export const formElements: Elements[] = [
  {
    question: "cap surface ?",
    answer: ["fibrous", "grooves", "scaly", "smooth"],
    shortcut: ["f", "g", "y", "s"],
  },
  {
    question: "bruises ?",
    answer: ["bruises", "no"],
    shortcut: ["t", "f"],
  },
  {
    question: "gill spacing ?",
    answer: ["close", "crowded"],
    shortcut: ["c", "w"],
  },
  {
    question: "gill size ?",
    answer: ["broad", "narrow"],
    shortcut: ["b", "n"],
  },
];
