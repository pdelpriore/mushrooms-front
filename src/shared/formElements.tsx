type option = {
  optionValues: string[];
  optionShortcuts: string[];
};

interface Elements {
  label: string;
  option: option;
}

export const formElements: Elements[] = [
  {
    label: "cap surface",
    option: {
      optionValues: ["fibrous", "grooves", "scaly", "smooth"],
      optionShortcuts: ["f", "g", "y", "s"],
    },
  },
  {
    label: "bruises",
    option: { optionValues: ["bruises", "no"], optionShortcuts: ["t", "f"] },
  },
  {
    label: "gill spacing",
    option: { optionValues: ["close", "crowded"], optionShortcuts: ["c", "w"] },
  },
  {
    label: "gill size",
    option: { optionValues: ["broad", "narrow"], optionShortcuts: ["b", "n"] },
  },
  {
    label: "gill color",
    option: {
      optionValues: [
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
      optionShortcuts: [
        "k",
        "n",
        "b",
        "h",
        "g",
        "r",
        "o",
        "p",
        "u",
        "e",
        "w",
        "y",
      ],
    },
  },
  {
    label: "stalk surface above ring",
    option: {
      optionValues: ["fibrous", "scaly", "silky", "smooth"],
      optionShortcuts: ["f", "y", "k", "s"],
    },
  },
  {
    label: "stalk surface below ring",
    option: {
      optionValues: ["fibrous", "scaly", "silky", "smooth"],
      optionShortcuts: ["f", "y", "k", "s"],
    },
  },
  {
    label: "stalk color above ring",
    option: {
      optionValues: [
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
      optionShortcuts: ["n", "b", "c", "g", "o", "p", "e", "w", "y"],
    },
  },
  {
    label: "ring type",
    option: {
      optionValues: ["evanescent", "flaring", "large", "none", "pendant"],
      optionShortcuts: ["e", "f", "l", "n", "p"],
    },
  },
  {
    label: "spore print color",
    option: {
      optionValues: [
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
      optionShortcuts: ["k", "n", "b", "h", "r", "o", "u", "w", "y"],
    },
  },
  {
    label: "population",
    option: {
      optionValues: [
        "abundant",
        "clustered",
        "numerous",
        "scattered",
        "several",
        "solitary",
      ],
      optionShortcuts: ["a", "c", "n", "s", "v", "y"],
    },
  },
  {
    label: "habitat",
    option: {
      optionValues: [
        "grasses",
        "leaves",
        "meadows",
        "paths",
        "urban",
        "waste",
        "woods",
      ],
      optionShortcuts: ["g", "l", "m", "p", "u", "w", "d"],
    },
  },
];
