import { Database } from "bun:sqlite";
import { existsSync, rmSync } from "node:fs";
import { parseArgs } from "node:util";
import pc from "picocolors";
import type { z } from "zod";

import programs from "./programs";
import {
  type ApplicationStatus,
  type Availability,
  applicationStati,
  availabilityTypes,
  type Program,
  ProgramSeedSchema,
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

const sqlitePath = "programs.db";

const formatDate = (date: Date | undefined): string | null =>
  date?.toISOString() ?? null;

type SqliteScalar = number | string | null;

type ColumnSpec = {
  name: string;
  sqliteType: "INTEGER" | "REAL" | "TEXT";
  nullable: boolean;
  sourcePath: string[];
  serialize: (value: unknown) => SqliteScalar;
};

type PrimitiveArrayTableSpec = {
  kind: "primitive-array";
  name: string;
  sourcePath: string[];
  parentIdColumn: string;
  valueColumn: ColumnSpec;
};

type ObjectTableSpec = {
  kind: "object";
  name: string;
  sourcePath: string[];
  parentIdColumn?: string;
  columns: ColumnSpec[];
  arrayTables: ArrayTableSpec[];
};

type ArrayTableSpec = PrimitiveArrayTableSpec | ObjectTableSpec;

const singularize = (value: string): string =>
  value.endsWith("s") ? value.slice(0, -1) : value;

const toSnakeCase = (value: string): string =>
  value.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase();

const pathToColumnName = (path: string[]): string =>
  path.map(toSnakeCase).join("_");

const pathToTableName = (path: string[]): string =>
  path.map(toSnakeCase).join("_");

const quoteIdentifier = (value: string): string =>
  `"${value.replaceAll('"', '""')}"`;

const getValueAtPath = (data: unknown, path: string[]): unknown =>
  path.reduce<unknown>((current, key) => {
    if (
      current === null ||
      current === undefined ||
      typeof current !== "object"
    ) {
      return undefined;
    }

    return (current as Record<string, unknown>)[key];
  }, data);

const unwrapSchema = (
  schema: z.ZodType,
): {
  schema: z.ZodType;
  nullable: boolean;
} => {
  let current = schema;
  let nullable = false;

  while (current.type === "optional" || current.type === "default") {
    nullable = true;
    current =
      current.type === "optional"
        ? current.unwrap()
        : (current.def.innerType as z.ZodType);
  }

  return { schema: current, nullable };
};

const getScalarColumn = (
  schema: z.ZodType,
  sourcePath: string[],
  nullable: boolean,
): ColumnSpec | null => {
  switch (schema.type) {
    case "string":
    case "enum":
      return {
        name: pathToColumnName(sourcePath),
        sqliteType: "TEXT",
        nullable,
        sourcePath,
        serialize: (value) => (value === undefined ? null : String(value)),
      };
    case "literal":
      if (typeof schema.def.values[0] === "string") {
        return {
          name: pathToColumnName(sourcePath),
          sqliteType: "TEXT",
          nullable,
          sourcePath,
          serialize: (value) => (value === undefined ? null : String(value)),
        };
      }

      if (typeof schema.def.values[0] === "number") {
        return {
          name: pathToColumnName(sourcePath),
          sqliteType: "REAL",
          nullable,
          sourcePath,
          serialize: (value) => (value === undefined ? null : Number(value)),
        };
      }

      if (typeof schema.def.values[0] === "boolean") {
        return {
          name: pathToColumnName(sourcePath),
          sqliteType: "INTEGER",
          nullable,
          sourcePath,
          serialize: (value) =>
            value === undefined ? null : Number(Boolean(value)),
        };
      }

      return {
        name: pathToColumnName(sourcePath),
        sqliteType: "TEXT",
        nullable,
        sourcePath,
        serialize: (value) =>
          value === undefined ? null : JSON.stringify(value),
      };
    case "number":
      return {
        name: pathToColumnName(sourcePath),
        sqliteType: "REAL",
        nullable,
        sourcePath,
        serialize: (value) => (value === undefined ? null : Number(value)),
      };
    case "int":
      return {
        name: pathToColumnName(sourcePath),
        sqliteType: "INTEGER",
        nullable,
        sourcePath,
        serialize: (value) => (value === undefined ? null : Number(value)),
      };
    case "boolean":
      return {
        name: pathToColumnName(sourcePath),
        sqliteType: "INTEGER",
        nullable,
        sourcePath,
        serialize: (value) =>
          value === undefined ? null : Number(Boolean(value)),
      };
    case "date":
      return {
        name: pathToColumnName(sourcePath),
        sqliteType: "TEXT",
        nullable,
        sourcePath,
        serialize: (value) =>
          value instanceof Date ? formatDate(value) : null,
      };
    case "unknown":
      return {
        name: pathToColumnName(sourcePath),
        sqliteType: "TEXT",
        nullable,
        sourcePath,
        serialize: (value) =>
          value === undefined ? null : JSON.stringify(value),
      };
    default:
      return null;
  }
};

const buildObjectTableSpec = (
  tableName: string,
  schema: z.ZodObject,
  parentTableName?: string,
  sourcePath: string[] = [],
): ObjectTableSpec => {
  const columns: ColumnSpec[] = [];
  const arrayTables: ArrayTableSpec[] = [];

  const collectObjectFields = (
    objectSchema: z.ZodObject,
    sourcePrefix: string[],
    parentNullable = false,
  ) => {
    for (const [fieldName, rawFieldSchema] of Object.entries(
      objectSchema.shape,
    )) {
      const { schema: fieldSchema, nullable } = unwrapSchema(rawFieldSchema);
      const currentPath = [...sourcePrefix, fieldName];
      const isNullable = parentNullable || nullable;
      const scalarColumn = getScalarColumn(
        fieldSchema,
        currentPath,
        isNullable,
      );

      if (scalarColumn) {
        columns.push(scalarColumn);
        continue;
      }

      if (fieldSchema.type === "object") {
        collectObjectFields(fieldSchema, currentPath, isNullable);
        continue;
      }

      if (fieldSchema.type === "array") {
        arrayTables.push(
          buildArrayTableSpec(
            pathToTableName(currentPath),
            currentPath,
            fieldSchema.element,
            tableName,
          ),
        );
        continue;
      }

      columns.push({
        name: pathToColumnName(currentPath),
        sqliteType: "TEXT",
        nullable: isNullable,
        sourcePath: currentPath,
        serialize: (value) =>
          value === undefined ? null : JSON.stringify(value),
      });
    }
  };

  collectObjectFields(schema, []);

  return {
    kind: "object",
    name: tableName,
    sourcePath,
    parentIdColumn: parentTableName
      ? `${singularize(parentTableName)}_id`
      : undefined,
    columns,
    arrayTables,
  };
};

const buildArrayTableSpec = (
  tableName: string,
  sourcePath: string[],
  elementSchema: z.ZodType,
  parentTableName: string,
): ArrayTableSpec => {
  const { schema, nullable } = unwrapSchema(elementSchema);

  if (schema.type === "object") {
    const table = buildObjectTableSpec(tableName, schema, parentTableName);
    return {
      ...table,
      name: tableName,
      sourcePath,
      parentIdColumn: `${singularize(parentTableName)}_id`,
    };
  }

  const scalarValueColumn =
    getScalarColumn(schema, ["value"], nullable) ??
    ({
      name: "value_json",
      sqliteType: "TEXT",
      nullable,
      sourcePath: ["value"],
      serialize: (value) =>
        value === undefined ? null : JSON.stringify(value),
    } satisfies ColumnSpec);

  return {
    kind: "primitive-array",
    name: tableName,
    sourcePath,
    parentIdColumn: `${singularize(parentTableName)}_id`,
    valueColumn: {
      ...scalarValueColumn,
      sourcePath: ["value"],
    },
  };
};

const buildCreateTableSql = (table: ArrayTableSpec): string[] => {
  if (table.kind === "primitive-array") {
    return [
      `CREATE TABLE ${quoteIdentifier(table.name)} (
        id INTEGER PRIMARY KEY,
        ${quoteIdentifier(table.parentIdColumn)} INTEGER NOT NULL,
        ${quoteIdentifier(table.valueColumn.name)} ${table.valueColumn.sqliteType}${table.valueColumn.nullable ? "" : " NOT NULL"},
        FOREIGN KEY (${quoteIdentifier(table.parentIdColumn)}) REFERENCES ${quoteIdentifier(
          `${singularize(table.parentIdColumn.replace(/_id$/, ""))}s`,
        )}(id) ON DELETE CASCADE
      )`,
    ];
  }

  const columnDefinitions = [
    "id INTEGER PRIMARY KEY",
    table.parentIdColumn
      ? `${quoteIdentifier(table.parentIdColumn)} INTEGER NOT NULL`
      : undefined,
    ...table.columns.map(
      (column) =>
        `${quoteIdentifier(column.name)} ${column.sqliteType}${column.nullable ? "" : " NOT NULL"}`,
    ),
    table.parentIdColumn
      ? `FOREIGN KEY (${quoteIdentifier(table.parentIdColumn)}) REFERENCES ${quoteIdentifier(
          `${singularize(table.parentIdColumn.replace(/_id$/, ""))}s`,
        )}(id) ON DELETE CASCADE`
      : undefined,
  ].filter((value): value is string => value !== undefined);

  return [
    `CREATE TABLE ${quoteIdentifier(table.name)} (
      ${columnDefinitions.join(",\n      ")}
    )`,
    ...table.arrayTables.flatMap(buildCreateTableSql),
  ];
};

const insertObjectRow = (
  db: Database,
  table: ObjectTableSpec,
  row: unknown,
  parentId?: number,
): number => {
  const columnNames = [
    ...(table.parentIdColumn ? [table.parentIdColumn] : []),
    ...table.columns.map((column) => column.name),
  ];
  const values: SqliteScalar[] = [
    ...(table.parentIdColumn ? [parentId ?? null] : []),
    ...table.columns.map((column) =>
      column.serialize(getValueAtPath(row, column.sourcePath)),
    ),
  ];
  const placeholders = columnNames.map(() => "?").join(", ");
  const statement = db.prepare(
    `INSERT INTO ${quoteIdentifier(table.name)} (${columnNames
      .map(quoteIdentifier)
      .join(", ")}) VALUES (${placeholders})`,
  );
  const result = statement.run(...values);
  const rowId = Number(result.lastInsertRowid);

  for (const arrayTable of table.arrayTables) {
    const items = getValueAtPath(row, arrayTable.sourcePath);

    if (!Array.isArray(items)) {
      continue;
    }

    if (arrayTable.kind === "primitive-array") {
      const statement = db.prepare(
        `INSERT INTO ${quoteIdentifier(arrayTable.name)} (${quoteIdentifier(
          arrayTable.parentIdColumn,
        )}, ${quoteIdentifier(arrayTable.valueColumn.name)}) VALUES (?, ?)`,
      );

      for (const item of items) {
        statement.run(rowId, arrayTable.valueColumn.serialize(item));
      }

      continue;
    }

    for (const item of items) {
      insertObjectRow(db, arrayTable, item, rowId);
    }
  }

  return rowId;
};

const createSqliteDatabase = (data: Program[]) => {
  if (existsSync(sqlitePath)) {
    rmSync(sqlitePath);
  }

  const db = new Database(sqlitePath);

  const rootTable = buildObjectTableSpec("programs", ProgramSeedSchema);
  const createStatements = [
    "PRAGMA foreign_keys = ON",
    ...buildCreateTableSql(rootTable),
  ];

  db.exec(createStatements.join(";\n"));

  const insertAll = db.transaction((programsToInsert: Program[]) => {
    for (const program of programsToInsert) {
      insertObjectRow(db, rootTable, program);
    }
  });

  insertAll(data);
  db.close();
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
    sqlite: {
      type: "boolean",
    },
  },
  strict: true,
  allowPositionals: false,
});

if (values.sqlite) {
  createSqliteDatabase(programs);
}

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
