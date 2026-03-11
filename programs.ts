import { Program } from "./types";

// English-taught or English-only-applicable Master programs applied from outside of the EU
// For fields like application windows, only information specific to that program is acceptd
const programs = [
  new Program({
    name: "Computer Science",
    universityName: "University of Stuttgart",
    windows: [
      {
        semester: {
          season: "winter",
          startingYear: "2026",
        },
        from: new Date(2025, 10, 15),
        to: new Date(2026, 0, 15),
      },
    ],
  }),
  new Program({
    name: "Computer Science",
    universityName: "Technical University of Hamburg",
    windows: [
      {
        semester: {
          season: "winter",
          startingYear: "2026",
        },
        from: new Date(2026, 5, 1),
        to: new Date(2026, 6, 15),
      },
    ],
  }),
  new Program({
    name: "Computer Science",
    universityName: "University of Siegen",
    windows: [
      {
        semester: {
          season: "winter",
          startingYear: "2026",
        },
        from: new Date(2026, 0, 1),
        to: new Date(2026, 3, 30),
      },
    ],
    applicationStatus: "working",
  }),
  new Program({
    name: "Computer Science",
    universityName: "University of Bonn",
    windows: [
      {
        semester: {
          season: "winter",
          startingYear: "2026",
        },
        from: new Date(2026, 3, 15),
        to: new Date(2026, 4, 1),
      },
    ],
  }),
  // https://www.tu-darmstadt.de/studieren/studieninteressierte/bewerbung_zulassung_tu/bewerbungsfristen/bachelor_studiengaenge_2/index.en.jsp
  // "The respective application deadlines for the individual degree programs are published on these pages in May of each year for the winter semester and in November of the previous year for the summer semester."
  // new Program({
  //   name: "Computer Science",
  //   universityName: "Technical University of Darmstadt",
  // }),
  new Program({
    name: "Computer Science",
    universityName: "University of Hannover",
    windows: [
      {
        semester: {
          season: "winter",
          startingYear: "2026",
        },
        from: new Date(2026, 3, 15),
        to: new Date(2026, 4, 31),
      },
    ],
  }),
  new Program({
    name: "Computer Science",
    universityName: "Karlsruhe Institute of Technology",
    windows: [
      {
        semester: {
          season: "winter",
          startingYear: "2026",
        },
        // Not specified
        from: undefined,
        to: new Date(2026, 5, 15),
      },
    ],
  }),
  new Program({
    name: "Computer Science",
    universityName: "University of Regensburg",
    windows: [
      {
        semester: {
          season: "winter",
          startingYear: "2026",
        },
        // Approximation for mid-April
        from: new Date(2026, 3, 15),
        to: new Date(2026, 5, 1),
      },
    ],
  }),
  new Program({
    name: "Computer Science",
    universityName: "Ruhr University Bochum",
    windows: [
      {
        semester: {
          season: "winter",
          startingYear: "2026",
        },
        // Approximation for the beginning of November
        from: new Date(2025, 10, 1),
        to: new Date(2025, 11, 15),
      },
    ],
  }),
  new Program({
    name: "Computer Science",
    universityName: "Paderborn University",
    windows: [
      {
        semester: {
          season: "winter",
          startingYear: "2026",
        },
        // Not specified
        from: undefined,
        to: new Date(2026, 4, 31),
      },
    ],
  }),
  new Program({
    name: "Computer Science",
    universityName: "University of Marburg",
    windows: [
      {
        semester: {
          season: "winter",
          startingYear: "2026",
        },
        from: new Date(2026, 4, 1),
        // For non-NC
        to: new Date(2026, 5, 30),
      },
    ],
  }),
  new Program({
    name: "Computer Science",
    universityName: "University of Freiburg",
    windows: [
      {
        semester: {
          season: "winter",
          startingYear: "2026",
        },
        from: new Date(2026, 3, 15),
        to: new Date(2026, 4, 31),
      },
    ],
  }),
  new Program({
    name: "Computer Science International",
    universityName: "University of Rostock",
    windows: [
      {
        semester: {
          season: "winter",
          startingYear: "2026",
        },
        from: new Date(2026, 3, 1),
        to: new Date(2026, 4, 31),
      },
    ],
  }),
  new Program({
    name: "Computer Science",
    universityName: "University of Potsdam",
    windows: [
      {
        semester: {
          season: "winter",
          startingYear: "2026",
        },
        // Not specified
        from: undefined,
        to: new Date(2026, 5, 1),
      },
    ],
  }),
  new Program({
    name: "Computer Science",
    universityName: "Saarland University",
    windows: [
      {
        semester: {
          season: "winter",
          startingYear: "2026",
        },
        // Not specified
        from: undefined,
        to: new Date(2026, 4, 15),
      },
    ],
  }),
  new Program({
    name: "Computer and Information Science",
    universityName: "University of Konstanz",
    windows: [
      {
        semester: {
          season: "winter",
          startingYear: "2026",
        },
        from: new Date(2026, 2, 18),
        to: new Date(2026, 3, 15),
      },
    ],
  }),
  new Program({
    name: "Applied Computer Science",
    universityName: "University of Goettingen",
    windows: [
      {
        semester: {
          season: "winter",
          startingYear: "2026",
        },
        // Approximation for mid-March
        from: new Date(2026, 2, 15),
        to: new Date(2026, 3, 15),
      },
    ],
  }),
  new Program({
    name: "Web and Data Science",
    universityName: "University of Koblenz",
    windows: [
      {
        semester: {
          season: "winter",
          startingYear: "2026",
        },
        // Not specified
        from: undefined,
        to: new Date(2026, 5, 15),
      },
    ],
  }),
  new Program({
    name: "Software Systems Engineering",
    universityName: "RWTH Aachen University",
    windows: [
      {
        semester: {
          season: "winter",
          startingYear: "2026",
        },
        from: new Date(2025, 11, 1),
        to: new Date(2026, 2, 1),
      },
    ],
  }),
  new Program({
    name: "International Software Systems Science",
    universityName: "Bamberg University",
    windows: [
      {
        semester: {
          season: "winter",
          startingYear: "2026",
        },
        // Approximation for mid-May
        from: new Date(2026, 4, 15),
        to: new Date(2026, 6, 15),
      },
    ],
  }),
  new Program({
    name: "Software Engineering",
    universityName: "University of Hildesheim",
    windows: [
      {
        semester: {
          season: "winter",
          startingYear: "2026",
        },
        from: new Date(2026, 3, 15),
        to: new Date(2026, 5, 30),
      },
    ],
  }),
  new Program({
    name: "Web Engineering",
    universityName: "Chemniz University of Technology",
    windows: [
      {
        semester: {
          season: "winter",
          startingYear: "2026",
        },
        from: new Date(2026, 3, 1),
        to: new Date(2026, 6, 15),
      },
    ],
  }),
].toSorted();

export default programs;
