interface SubElements {
  question: string;
  answer: string[];
  shortcut: string[];
}

interface Elements {
  [key: string]: SubElements;
}

export const formElements: Elements[] = [
  {
    capSurface: {
      question: "cap surface ?",
      answer: ["fibrous", "grooves", "scaly", "smooth"],
      shortcut: ["f", "g", "y", "s"],
    },
    bruises: {
      question: "bruises ?",
      answer: ["bruises", "no"],
      shortcut: ["t", "f"],
    },
    gillSpacing: {
      question: "gill spacing ?",
      answer: ["close", "crowded"],
      shortcut: ["c", "w"],
    },
    gillSize: {
      question: "gill size ?",
      answer: ["broad", "narrow"],
      shortcut: ["b", "n"],
    },
  },
];
