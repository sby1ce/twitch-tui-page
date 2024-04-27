/*
Copyright 2024 sby1ce

SPDX-License-Identifier: AGPL-3.0-or-later
*/

import { opendir } from "node:fs/promises";
import type { Dir } from "node:fs";

interface Licence {
  readonly id: string;
  readonly name: string;
  readonly path: string;
}

interface Dependency {
  readonly title: string;
  readonly licences: Array<Licence>;
}

const DRY_RUN: boolean = Bun.argv.includes("--dry");
const TUI_LICENCES: string = "~/../static/LICENCES/tui";
const WEB_LICENCES: string = "~/../static/LICENCES/web";
const TSX_FILE: string = "./src/routes/licences.tsx";

function makeId(length: number): string {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;
  return new Array(length)
    .fill(null)
    .reduce(
      (acc: string): string =>
        acc + characters.charAt(Math.floor(Math.random() * charactersLength)),
      "",
    );
}

async function syncName(dir: Promise<Dir>): Promise<string[]> {
  const names = [];
  for await (const dirent of await dir) {
    names.push(dirent.name);
  }
  return names;
}

/**
 * Returns string with imports and string with object,
 * imports may be over several lines
 */
function generate(dep: Dependency): [string, string] {
  const [imports, contents]: [string, string] = dep.licences
    .map((licence: Licence): [string, string] => {
      const imp: string = `import ${licence.id} from "${licence.path}?raw";\r\n`;
      const con: string = `{ name: "${licence.name}", content: ${licence.id} }`;
      return [imp, con];
    })
    .reduce(
      (
        [importAcc, contentAcc]: [string, string],
        [imp, con]: [string, string],
      ): [string, string] => [importAcc + imp, contentAcc + ", " + con],
      // ["", ""],
    );

  const entry = `  { title: "${dep.title}", contents: [${contents}] },\r\n`;
  return [imports, entry];
}

async function write(
  imports: string,
  tuiLicences: string,
  webLicences: string,
  before: string[],
  after: string[],
): Promise<void> {
  const result = before
    .concat([imports, "\r\n", tuiLicences, webLicences])
    .concat(after)
    .join("");
  if (DRY_RUN) {
    console.log(result);
  } else {
    await Bun.write(TSX_FILE, result);
  }
}

async function collectDeps(
  licences_dir: string,
  dep: string,
): Promise<Dependency> {
  const folder: string = licences_dir + "/" + dep + "/";
  return {
    title: dep,
    licences: (await syncName(opendir(folder))).map((name: string): Licence => {
      return {
        id: makeId(4),
        name,
        path: folder + name,
      } satisfies Licence;
    }),
  } satisfies Dependency;
}

function reshape(
  tui: [string, string][],
  web: [string, string][],
): [string, string, string] {
  const tuiImports = tui.map((line) => line[0]).join("");
  const webImports = web.map((line) => line[0]).join("");
  const imports: string = tuiImports + webImports;

  const tuiContents: string = tui.map((line) => line[1]).join("");
  const webContents: string = web.map((line) => line[1]).join("");

  const tuiLicences = `const TUI_LICENCES: LicenceProps[] = [\r\n${tuiContents}];\r\n`;
  const webLicences = `const WEB_LICENCES: LicenceProps[] = [\r\n${webContents}];\r\n`;

  return [imports, tuiLicences, webLicences];
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
  const after: string[] = lines
    .slice(end)
    .map((line, i) => (i !== last ? line : line.trimEnd()));
  const tui: [string, string][] = (
    await Promise.all(
      (await syncName(opendir(TUI_LICENCES))).map(
        collectDeps.bind(null, TUI_LICENCES),
      ),
    )
  ).map(generate);
  const web: [string, string][] = (
    await Promise.all(
      (await syncName(opendir(WEB_LICENCES))).map(
        collectDeps.bind(null, WEB_LICENCES),
      ),
    )
  ).map(generate);

  const [imports, tuiLicences, webLicences] = reshape(tui, web);
  await write(imports, tuiLicences, webLicences, before, after);

  console.log("Success");
}

await main();
