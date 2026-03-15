import { z } from "zod";

export const applicationStati = [
  "pending",
  "working",
  "waiting",
  "accepted",
  "rejected",
] as const;

export type ApplicationStatus = (typeof applicationStati)[number];

export const availabilityTypes = [
  "closed",
  "not-opened",
  "opened",
  "not-closed",
] as const;

export type Availability = (typeof availabilityTypes)[number];

export const SemesterSchema = z.object({
  season: z.literal("winter"),
  startingYear: z.literal("2026"),
});

export type Semester = z.infer<typeof SemesterSchema>;

export const ApplicationWindowSchema = z
  .object({
    semester: SemesterSchema,
    from: z.date().optional(),
    to: z.date(),
  })
  .superRefine((window, ctx) => {
    if (
      window.from !== undefined &&
      window.from.getTime() >= window.to.getTime()
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `"from" (${window.from.toISOString()}) must be before "to" (${window.to.toISOString()})`,
      });
    }
  });

export type ApplicationWindow = z.infer<typeof ApplicationWindowSchema>;

export const RequirementSchema = z.object({
  needed: z.boolean(),
  qualified: z.boolean(),
});

export type Requirement = z.infer<typeof RequirementSchema>;

export const MaterialSchema = z.unknown();

export type Material = z.infer<typeof MaterialSchema>;

export const SourceSchema = z.unknown();

export type Source = z.infer<typeof SourceSchema>;

export const ProgramSeedSchema = z.object({
  name: z.string(),
  universityName: z.string(),
  windows: z.array(ApplicationWindowSchema),
  specializations: z.array(z.string()).optional(),
  requirements: z.array(RequirementSchema).optional(),
  materials: z.array(MaterialSchema).optional(),
  applicationStatus: z.enum(applicationStati).optional(),
  sources: z.array(SourceSchema).optional(),
});

export type ProgramSeed = z.infer<typeof ProgramSeedSchema>;

export class Program {
  name: string;
  universityName: string;
  windows: ApplicationWindow[];
  specializations?: string[];
  requirements?: Requirement[];
  materials?: Material[];
  sources?: Source[];
  applicationStatus: ApplicationStatus;

  constructor(params: ProgramSeed) {
    const parsed = ProgramSeedSchema.parse(params);

    this.name = parsed.name;
    this.universityName = parsed.universityName;
    this.windows = parsed.windows;
    this.specializations = parsed.specializations?.toSorted(
      (a, b) => a.length - b.length,
    );
    this.requirements = parsed.requirements;
    this.materials = parsed.materials;
    this.sources = parsed.sources;
    this.applicationStatus = parsed.applicationStatus ?? "pending";
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
