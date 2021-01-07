interface Elements {
  label: string;
  options: string[];
  shortcut: string[];
}

export const formElements: Elements[] = [
  {
    label: "cap surface",
    options: ["fibrous", "grooves", "scaly", "smooth"],
    shortcut: ["f", "g", "y", "s"],
  },
  {
    label: "bruises",
    options: ["bruises", "no"],
    shortcut: ["t", "f"],
  },
  {
    label: "gill spacing",
    options: ["close", "crowded"],
    shortcut: ["c", "w"],
  },
  {
    label: "gill size",
    options: ["broad", "narrow"],
    shortcut: ["b", "n"],
  },
  {
    label: "gill color",
    options: [
      "black",
      "brown",
      "buff",
      "chocolate",
      "gray",
      "green",
      "orange",
      "pink",
      "purple",
      "red",
      "white",
      "yellow",
    ],
    shortcut: ["k", "n", "b", "h", "g", "r", "o", "p", "u", "e", "w", "y"],
  },
  {
    label: "stalk surface above ring",
    options: ["fibrous", "scaly", "silky", "smooth"],
    shortcut: ["f", "y", "k", "s"],
  },
  {
    label: "stalk surface below ring",
    options: ["fibrous", "scaly", "silky", "smooth"],
    shortcut: ["f", "y", "k", "s"],
  },
  {
    label: "stalk color above ring",
    options: [
      "brown",
      "buff",
      "cinamon",
      "gray",
      "orange",
      "pink",
      "red",
      "white",
      "yellow",
    ],
    shortcut: ["n", "b", "c", "g", "o", "p", "e", "w", "y"],
  },
  {
    label: "ring type",
    options: ["evanescent", "flaring", "large", "none", "pendant"],
    shortcut: ["e", "f", "l", "n", "p"],
  },
  {
    label: "spore print color",
    options: [
      "black",
      "brown",
      "buff",
      "chocolate",
      "green",
      "orange",
      "purple",
      "white",
      "yellow",
    ],
    shortcut: ["k", "n", "b", "h", "r", "o", "u", "w", "y"],
  },
  {
    label: "population",
    options: [
      "abundant",
      "clustered",
      "numerous",
      "scattered",
      "several",
      "solitary",
    ],
    shortcut: ["a", "c", "n", "s", "v", "y"],
  },
  {
    label: "habitat",
    options: [
      "grasses",
      "leaves",
      "meadows",
      "paths",
      "urban",
      "waste",
      "woods",
    ],
    shortcut: ["g", "l", "m", "p", "u", "w", "d"],
  },
];
