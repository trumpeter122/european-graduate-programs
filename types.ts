export const applicationStati = [
  "pending",
  "working",
  "waiting",
  "accepted",
  "rejected",
] as const;

export type ApplicationStatus = (typeof applicationStati)[number];

export type ApplicationWindow = {
  semester: Semester;
  from?: Date;
  to: Date;
};

export const availabilityTypes = [
  "closed",
  "not-opened",
  "opened",
  "not-closed",
] as const;

export type Availability = (typeof availabilityTypes)[number];

export type Material = any;

export type Requirement = {
  needed: boolean;
  qualified: boolean;
};

export type ProgramParams = {
  name: string;
  universityName: string;
  windows: ApplicationWindow[];
  requirements?: Requirement[];
  materials?: Material[];
  applicationStatus?: ApplicationStatus;
  sources?: Source[];
};

export type Semester = {
  season: "winter";
  startingYear: "2026";
};

export type Source = any;

export class Program {
  name: string;
  universityName: string;
  windows: ApplicationWindow[];
  requirements?: Requirement[];
  applicationStatus: ApplicationStatus;
  materials?: Material[];

  constructor(params: ProgramParams) {
    this.name = params.name;
    this.universityName = params.universityName;
    this.windows = params.windows;
    this.requirements = params.requirements;
    this.materials = params.materials;
    this.applicationStatus = params.applicationStatus ?? "pending";

    this.windows.forEach((w) => {
      if (w.from !== undefined && w.from.getTime() >= w.to.getTime()) {
        throw new RangeError(
          `"from" (${w.from.toISOString()}) must be before "to" (${w.to.toISOString()})`,
        );
      }
    });
  }

  private getMatchingWindow = (semester: Semester): ApplicationWindow => {
    const matchingWindow = this.windows.find(
      (w) => JSON.stringify(w.semester) === JSON.stringify(semester),
    );
    if (!matchingWindow) {
      throw Error("No matching window found");
    } else {
      return matchingWindow;
    }
  };

  public getTimeUntilWindowStarts = (
    semester: Semester,
  ): number | undefined => {
    const matchingWindow = this.getMatchingWindow(semester);
    if (matchingWindow.from === undefined) return undefined;
    else return matchingWindow.from.getTime() - Date.now();
  };

  public getTimeUntilWindowEnds = (semester: Semester): number => {
    const matchingWindow = this.getMatchingWindow(semester);
    return matchingWindow.to.getTime() - Date.now();
  };

  public getDaysUntilWindowStarts = (
    semester: Semester,
  ): number | undefined => {
    const time = this.getTimeUntilWindowStarts(semester);
    return time ? Math.floor(time / 24 / 60 / 60 / 1000) : undefined;
  };

  public getDaysUntilWindowEnds = (semester: Semester): number => {
    const time = this.getTimeUntilWindowEnds(semester);
    return Math.floor(time / 24 / 60 / 60 / 1000);
  };

  public getAvailability = (semester: Semester): Availability => {
    const [tts, tte] = [
      this.getTimeUntilWindowStarts(semester),
      this.getTimeUntilWindowEnds(semester),
    ];
    if (tte <= 0) return "closed";
    else if (tts === undefined) return "not-closed";
    else if (tts > 0) return "not-opened";
    else return "opened";
  };
}
