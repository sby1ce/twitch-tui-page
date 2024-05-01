/*
Copyright 2024 sby1ce

SPDX-License-Identifier: AGPL-3.0-or-later
*/

import { For, type JSX } from "solid-js";
import Frame from "~/components/Frame.tsx";
// This is ugly but it's the best option there is
// Wrote a macro to fill these automatically
// macro start
import jdgw from "~/../static/LICENCES/tui/chrono/LICENSE.txt?raw";
import ayqz from "~/../static/LICENCES/tui/color-eyre/LICENSE-APACHE.txt?raw";
import pomt from "~/../static/LICENCES/tui/color-eyre/LICENSE-MIT.txt?raw";
import xpzi from "~/../static/LICENCES/tui/criterion/LICENSE-APACHE.txt?raw";
import dmim from "~/../static/LICENCES/tui/criterion/LICENSE-MIT.txt?raw";
import urin from "~/../static/LICENCES/tui/crossterm/LICENSE.txt?raw";
import zmoo from "~/../static/LICENCES/tui/futures/LICENSE-APACHE.txt?raw";
import pkdl from "~/../static/LICENCES/tui/futures/LICENSE-MIT.txt?raw";
import eiar from "~/../static/LICENCES/tui/indexmap/LICENSE-APACHE.txt?raw";
import qzmw from "~/../static/LICENCES/tui/indexmap/LICENSE-MIT.txt?raw";
import yqkx from "~/../static/LICENCES/tui/lazy-regex/LICENSE.txt?raw";
import pqtk from "~/../static/LICENCES/tui/mimalloc/LICENSE.txt?raw";
import xnbc from "~/../static/LICENCES/tui/ratatui/LICENSE.txt?raw";
import oeoz from "~/../static/LICENCES/tui/tokio/LICENSE.txt?raw";
import iary from "~/../static/LICENCES/tui/twitch-chat-tui/CC0-1.0.txt?raw";
import juti from "~/../static/LICENCES/tui/twitch-chat-tui/LICENCE.txt?raw";
import jqac from "~/../static/LICENCES/tui/twitch-irc/LICENSE.txt?raw";
import ueva from "~/../static/LICENCES/web/cypress/LICENSE.txt?raw";
import rvep from "~/../static/LICENCES/web/eslint/LICENSE.txt?raw";
import dqck from "~/../static/LICENCES/web/eslint-config-prettier/LICENSE.txt?raw";
import xmsp from "~/../static/LICENCES/web/eslint-plugin-cypress/LICENSE.txt?raw";
import uyci from "~/../static/LICENCES/web/eslint-plugin-solid/LICENSE.txt?raw";
import sfla from "~/../static/LICENCES/web/prettier/LICENSE.txt?raw";
import awdk from "~/../static/LICENCES/web/solid-js/LICENSE.txt?raw";
import eidf from "~/../static/LICENCES/web/twitch-tui-page/CC-BY-4.0.txt?raw";
import uitw from "~/../static/LICENCES/web/twitch-tui-page/CC0-1.0.txt?raw";
import jknr from "~/../static/LICENCES/web/twitch-tui-page/LICENCE.txt?raw";
import irxj from "~/../static/LICENCES/web/typescript-eslint/LICENSE.txt?raw";
import gucx from "~/../static/LICENCES/web/vinxi/LICENSE.txt?raw";

const TUI_LICENCES: LicenceProps[] = [
  { title: "chrono", contents: [{ name: "LICENSE.txt", content: jdgw }] },
  {
    title: "color-eyre",
    contents: [
      { name: "LICENSE-APACHE.txt", content: ayqz },
      { name: "LICENSE-MIT.txt", content: pomt },
    ],
  },
  {
    title: "criterion",
    contents: [
      { name: "LICENSE-APACHE.txt", content: xpzi },
      { name: "LICENSE-MIT.txt", content: dmim },
    ],
  },
  { title: "crossterm", contents: [{ name: "LICENSE.txt", content: urin }] },
  {
    title: "futures",
    contents: [
      { name: "LICENSE-APACHE.txt", content: zmoo },
      { name: "LICENSE-MIT.txt", content: pkdl },
    ],
  },
  {
    title: "indexmap",
    contents: [
      { name: "LICENSE-APACHE.txt", content: eiar },
      { name: "LICENSE-MIT.txt", content: qzmw },
    ],
  },
  { title: "lazy-regex", contents: [{ name: "LICENSE.txt", content: yqkx }] },
  { title: "mimalloc", contents: [{ name: "LICENSE.txt", content: pqtk }] },
  { title: "ratatui", contents: [{ name: "LICENSE.txt", content: xnbc }] },
  { title: "tokio", contents: [{ name: "LICENSE.txt", content: oeoz }] },
  {
    title: "twitch-chat-tui",
    contents: [
      { name: "CC0-1.0.txt", content: iary },
      { name: "LICENCE.txt", content: juti },
    ],
  },
  { title: "twitch-irc", contents: [{ name: "LICENSE.txt", content: jqac }] },
];
const WEB_LICENCES: LicenceProps[] = [
  { title: "cypress", contents: [{ name: "LICENSE.txt", content: ueva }] },
  { title: "eslint", contents: [{ name: "LICENSE.txt", content: rvep }] },
  {
    title: "eslint-config-prettier",
    contents: [{ name: "LICENSE.txt", content: dqck }],
  },
  {
    title: "eslint-plugin-cypress",
    contents: [{ name: "LICENSE.txt", content: xmsp }],
  },
  {
    title: "eslint-plugin-solid",
    contents: [{ name: "LICENSE.txt", content: uyci }],
  },
  { title: "prettier", contents: [{ name: "LICENSE.txt", content: sfla }] },
  { title: "solid-js", contents: [{ name: "LICENSE.txt", content: awdk }] },
  {
    title: "twitch-tui-page",
    contents: [
      { name: "CC-BY-4.0.txt", content: eidf },
      { name: "CC0-1.0.txt", content: uitw },
      { name: "LICENCE.txt", content: jknr },
    ],
  },
  {
    title: "typescript-eslint",
    contents: [{ name: "LICENSE.txt", content: irxj }],
  },
  { title: "vinxi", contents: [{ name: "LICENSE.txt", content: gucx }] },
];
// macro end

interface LicenceContents {
  name: string;
  content: string;
}

interface LicenceProps {
  title: string;
  contents: LicenceContents[];
}

function Licence(props: LicenceProps): JSX.Element {
  return (
    <details>
      <summary>{props.title}</summary>
      <For each={props.contents}>
        {(item: LicenceContents) => (
          <details>
            <summary>{item.name}</summary>
            <pre>{item.content}</pre>
          </details>
        )}
      </For>
    </details>
  );
}

export default function Licences(): JSX.Element {
  const tui = (
    <section>
      <h2 id="TUI">TUI app</h2>
      <For each={TUI_LICENCES}>{(item) => <Licence {...item} />}</For>
    </section>
  );

  const web = (
    <section>
      <h2 id="Website">Website</h2>
      <For each={WEB_LICENCES}>{(item) => <Licence {...item} />}</For>
    </section>
  );

  return (
    <Frame current="Licences" title="Licences">
      <main>
        <h1>Licences</h1>
        <p>See full text of copyright notices from crates and packages</p>
        {tui}
        {web}
      </main>
    </Frame>
  );
}
