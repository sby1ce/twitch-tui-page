import { opendir } from "node:fs/promises";
import type { Dir } from "node:fs";

interface Licence {
  basename: string;
  path: string;
}

interface Dependency {
  title: string;
  licences: Array<Licence>;
}

const LICENCES: string = "~/../static/LICENCES";
const TSX_FILE: string = "./src/routes/licences.tsx";

async function syncName(dir: Promise<Dir>): Promise<string[]> {
  const names = [];
  for await (const dirent of await dir) {
    names.push(dirent.name);
  }
  return names;
}

function preformat(licence: string): string {
  const names = licence.split("-");
  const licenceName = names[names.length - 1];
  const letter: string = licenceName[0];
  const name = letter + licenceName.slice(1).toLowerCase();
  const dot = name.indexOf(".");
  if (dot === undefined) {
    return name;
  }
  return name.slice(0, dot);
}

/**
 * Returns string with imports and string with object,
 * imports may be over several lines
 */
function generate(dep: Dependency): [string, string] {
  const [imports, contents]: [string, string] = dep.licences
    .map((licence: Licence): [string, string] => {
      const variable: string = dep.title + preformat(licence.basename);
      const imp: string = `import ${variable} from "${licence.path}?raw";\r\n`;
      return [imp, variable];
    })
    .reduce(
      (
        [importAcc, contentAcc]: [string, string],
        [imp, con]: [string, string],
      ): [string, string] => [importAcc + imp, contentAcc + ", " + con],
    );

  return [imports, `  { title: "${dep.title}", contents: [${contents}] },\r\n`];
}

async function write(
  lines: [string, string][],
  before: string[],
  after: string[],
): Promise<void> {
  const imports = lines.map((l) => l[0]).join("");
  const contents = lines.map((l) => l[1]).join("");
  const appLicences = `const appLicences: LicenceProps[] = [\r\n${contents}];\r\n`;
  const result = before
    .concat([imports, "\r\n", appLicences])
    .concat(after)
    .join("");
  await Bun.write(TSX_FILE, result);
}

async function collectDeps(dep: string): Promise<Dependency> {
  const folder: string = LICENCES + "/" + dep;
  return {
    title: dep.replaceAll("-", "").replaceAll("_", ""),
    licences: (await syncName(opendir(folder))).map(
      (basename: string): Licence => {
        return {
          basename,
          path: folder + "/" + basename,
        } satisfies Licence;
      },
    ),
  } satisfies Dependency;
}

async function main(): Promise<void> {
  const text: string = await Bun.file(TSX_FILE).text();
  const lines: string[] = text.split("\n").map((s) => s + "\n");
  const start: number = lines.findIndex((s) => s.trim() === "// macro start");
  const end: number = lines.findIndex((s) => s.trim() === "// macro end");
  if (start < 0 || end <= 0 || start >= end) {
    return;
  }

  const before: string[] = lines.slice(0, start + 1);
  const last: number = lines.length - end - 1;
  // Removing the last \r\n because bun adds one automatically
  const after: string[] = lines.slice(end).map((line, i) => i !== last ? line : line.trimEnd());
  const deps: [string, string][] = (
    await Promise.all((await syncName(opendir(LICENCES))).map(collectDeps))
  ).map(generate);

  await write(deps, before, after);

  console.log("Success");
}

await main();
