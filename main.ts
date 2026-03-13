import { parseArgs } from "node:util";
import pc from "picocolors";

import programs from "./programs";
import {
  type ApplicationStatus,
  type Availability,
  applicationStati,
  availabilityTypes,
  type Program,
  type Semester,
} from "./types";

const printFormats = ["brief", "full"] as const;
type PrintFormat = (typeof printFormats)[number];

const printProgram = (p: Program, format: PrintFormat) => {
  switch (format) {
    case "full": {
      console.log(pc.red(`${p.name}\t\t${p.universityName}`));

      const line = (label: string, value: string | number | undefined) => {
        console.log(`${pc.cyan(label)}: ${value ?? "-"}`);
      };

      line("Specializations", p.specializations?.join(", "));
      line("Start", `${p.getDaysUntilWindowStarts(targetSemester)} days`);
      line("End", `${p.getDaysUntilWindowEnds(targetSemester)} days`);
      line("Status", p.applicationStatus);
      console.log();
      break;
    }
    case "brief": {
      console.log(pc.red(`${p.name}, ${p.universityName}`));
      break;
    }
  }
};

const targetSemester = { season: "winter", startingYear: "2026" } as Semester;

type Choice = {
  availability?: Availability;
  status?: ApplicationStatus;
};

const choice: Choice = {
  availability: undefined,
  status: undefined,
};

const { values } = parseArgs({
  args: Bun.argv.slice(2),
  options: {
    availability: {
      type: "string",
    },
    status: {
      type: "string",
    },
    format: {
      type: "string",
    },
  },
  strict: true,
  allowPositionals: false,
});

if (values.availability !== undefined) {
  if (availabilityTypes.includes(values.availability as Availability)) {
    choice.availability = values.availability as Availability;
  } else {
    throw new Error(`Invalid availability: ${values.availability}`);
  }
}

if (values.status !== undefined) {
  if (applicationStati.includes(values.status as ApplicationStatus)) {
    choice.status = values.status as ApplicationStatus;
  } else {
    throw new Error(`Invalid status: ${values.status}`);
  }
}

const selectedPrograms: Program[] = [...programs];

if (choice.availability !== undefined) {
  selectedPrograms.splice(
    0,
    selectedPrograms.length,
    ...selectedPrograms.filter(
      (p) => p.getAvailability(targetSemester) === choice.availability,
    ),
  );
}

if (choice.status !== undefined) {
  selectedPrograms.splice(
    0,
    selectedPrograms.length,
    ...selectedPrograms.filter((p) => p.applicationStatus === choice.status),
  );
}

selectedPrograms.forEach((p) => {
  if (values.format) {
    if (printFormats.includes(values.format as PrintFormat)) {
      printProgram(p, values.format as PrintFormat);
    } else throw Error(`Invalid format: ${values.format}`);
  } else {
    printProgram(p, "full");
  }
});
