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
  console.log(`Start:\t${p.getDaysUntilWindowStarts(targetSemester)} days`);
  console.log(`End:\t${p.getDaysUntilWindowEnds(targetSemester)} days`);
  console.log(`Status:\t${p.applicationStatus}`);
  console.log();
};

const targetSemester = { season: "winter", startingYear: "2026" } as Semester;

console.log(`${programs.length} programs in total`);

type Choice = {
  availability?: Availability;
  status?: ApplicationStatus;
};

let choice: Choice = {
  availability: undefined,
  status: undefined,
};

function parseChoice(input: string): Partial<Choice> {
  const out: Partial<Choice> = {};

  for (const part of input
    .split(";")
    .map((s) => s.trim())
    .filter(Boolean)) {
    const space = part.indexOf(" ");
    const key = space === -1 ? part : part.slice(0, space);
    const value =
      space === -1 ? undefined : part.slice(space + 1).trim() || undefined;

    switch (key) {
      case "availability":
        if (value === undefined) {
          out.availability = undefined;
        } else if (availabilityTypes.includes(value as Availability)) {
          out.availability = value as Availability;
        } else {
          throw new Error(`Invalid availability: ${value}`);
        }
        break;

      case "status":
        if (value === undefined) {
          out.status = undefined;
        } else if (applicationStati.includes(value as ApplicationStatus)) {
          out.status = value as ApplicationStatus;
        } else {
          throw new Error(`Invalid status: ${value}`);
        }
        break;

      default:
        throw new Error(`Unknown flag: ${key}`);
    }
  }

  return out;
}

const answer = prompt(":");
if (answer === null) throw Error("No input");
else {
  choice = { ...choice, ...parseChoice(answer) };
}
console.clear();

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
