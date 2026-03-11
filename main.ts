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

const printProgram = (p: Program) => {
  console.log(pc.red(`${p.name}\t\t${p.universityName}`));

  const line = (label: string, value: string | number | undefined) => {
    console.log(`${pc.cyan(label)}: ${value ?? "-"}`);
  };

  line("Specializations", p.specializations?.join(", "));
  line("Start", `${p.getDaysUntilWindowStarts(targetSemester)} days`);
  line("End", `${p.getDaysUntilWindowEnds(targetSemester)} days`);
  line("Status", p.applicationStatus);
  console.log();
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
  printProgram(p);
});
