import { Program } from "./types";

// English-taught or English-only-applicable Master programs applied from outside of the EU
// For fields like application windows, only information specific to that program is acceptd
// specializations marked explicitly as German-only are ignored
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
    specializations: [
      "Autonomous Systems in Computer Science",
      "Service Technology and Engineering",
      "Visual Computing",
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
    specializations: [
      "Computer and Software Engineering",
      "Intelligence Engineering",
      "Mathematics",
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
    specializations: [
      "Embedded Systems",
      "Visual Computing",
      "Complex and Intelligent Software Systems",
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
    specializations: [
      "Algorithmics",
      "Graphics/Vision/Audio",
      "Information and Communication Management",
      "Intelligent Systems",
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
    specializations: [
      "Data Science",
      "Human Centered Computing",
      "Systems-oriented Computer Science",
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
    specializations: [
      "Algorithm Engineering",
      "Computer Graphics and Geometry Processing",
      "Data Science",
      "Design of Embedded Systems and Computer Architectures",
      "Human-centred Machine Intelligence",
      "Parallel Computing",
      "Robotics and Automation",
      "Software Engineering and Compiler Construction",
      "Telematics",
      "Theoretical Foundations",
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
    specializations: [
      "Core Computer Science",
      "Bioinformatics",
      "Human-Centred Computing",
      "Information Systems",
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
    specializations: [
      "Artificial Intelligence",
      "Cybersecurity",
      "Quantum Computing",
      "Software Engineering",
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
    specializations: [
      "Classical and Quantum Algorithm Design",
      "Computer and Communication Systems",
      "Data Science and Intelligent Systems",
      "Security",
      "Software Engineering",
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
    specializations: [
      "Software Design",
      "Cloud Computing",
      "Graphics Programming",
      "Artificial Intelligence",
      "Model Checking",
      "Distributed Systems",
      "IT Security",
      "Databases",
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
    specializations: ["Artificial Intelligence", "Cyber-Physical Systems"],
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
    specializations: ["Information Systems", "Complex Systems"],
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
    specializations: [
      "Data and AI",
      "Algorithms and Foundations",
      "Digital Health",
      "Security Engineering",
      "Systems",
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
    specializations: [
      "Multimedia Applications",
      "Distributed Information and Communications Systems",
      "Language Processing",
      "Image Processing",
      "Cryptography",
      "Program Analysis and Formal Methods",
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
    specializations: [
      "Data science",
      "Visual computing",
      "Interactive systems",
      "Software and systems",
      "Algorithmics",
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
    specializations: [
      "Applied System Engineering",
      "Bioinformatics",
      "Data Science",
      "Digital Humanities",
      "Geoinformatics",
      "Ecological Informatics",
      "Medical Informatics",
      "Computational Neuroscience",
      "Law and Computer Science",
      "Business Information Systems",
      "Scientific Computing",
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
    specializations: [
      "Web Science",
      "Network Theory and Dynamic Systems",
      "Engineering Web and Data-intensive Systems",
      "Data Science",
      "Machine Learning and Data Mining",
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
    specializations: [
      "Theoretical Foundations of Software Systems Engineering",
      "Communication",
      "Data and Information Management",
      "Applied Computer Science",
      "Software Engineering",
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
    specializations: [
      "Distributed and Mobile Systems",
      "Software Analysis and Verification",
      "Service-oriented Architectures",
      "Communication Systems and Protocols",
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
    specializations: [
      "Software Engineering",
      "Requirements Engineering for Quality",
      "Model-Based Software Engineering",
      "Software Architectures",
      "Advanced Web Development",
      "Software Product Line Engineering",
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
    specializations: [
      "Databases",
      "Information Systems",
      "Software Engineering",
      "Internet and Web Technologies",
    ],
  }),
].toSorted();

export default programs;
