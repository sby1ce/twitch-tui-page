/*
Copyright 2024 sby1ce

SPDX-License-Identifier: AGPL-3.0-or-later
*/

import { For, type JSX } from "solid-js";
import Base from "~/components/Base.tsx";
// This is ugly but it's the best option there is
// Wrote a macro to fill these automatically
// macro start
import qfds from "~/../static/LICENCES/tui/chrono/LICENSE.txt?raw";
import yhcw from "~/../static/LICENCES/tui/color-eyre/LICENSE-APACHE.txt?raw";
import xdog from "~/../static/LICENCES/tui/color-eyre/LICENSE-MIT.txt?raw";
import oszq from "~/../static/LICENCES/tui/criterion/LICENSE-APACHE.txt?raw";
import aamo from "~/../static/LICENCES/tui/criterion/LICENSE-MIT.txt?raw";
import mbwt from "~/../static/LICENCES/tui/crossterm/LICENSE.txt?raw";
import yqcy from "~/../static/LICENCES/tui/futures/LICENSE-APACHE.txt?raw";
import bapv from "~/../static/LICENCES/tui/futures/LICENSE-MIT.txt?raw";
import mkxk from "~/../static/LICENCES/tui/indexmap/LICENSE-APACHE.txt?raw";
import doeh from "~/../static/LICENCES/tui/indexmap/LICENSE-MIT.txt?raw";
import sawq from "~/../static/LICENCES/tui/lazy-regex/LICENSE.txt?raw";
import twtm from "~/../static/LICENCES/tui/mimalloc/LICENSE.txt?raw";
import lfim from "~/../static/LICENCES/tui/ratatui/LICENSE.txt?raw";
import llyb from "~/../static/LICENCES/tui/tokio/LICENSE.txt?raw";
import wwrm from "~/../static/LICENCES/tui/twitch-chat-tui/CC0-1.0.txt?raw";
import denx from "~/../static/LICENCES/tui/twitch-chat-tui/LICENCE.txt?raw";
import ekjl from "~/../static/LICENCES/tui/twitch-irc/LICENSE.txt?raw";
import dgqf from "~/../static/LICENCES/web/eslint-plugin-solid/LICENSE.txt?raw";
import gbjt from "~/../static/LICENCES/web/prettier/LICENSE.txt?raw";
import iphl from "~/../static/LICENCES/web/solid-js/LICENSE.txt?raw";
import rigs from "~/../static/LICENCES/web/twitch-tui-page/CC-BY-4.0.txt?raw";
import xddh from "~/../static/LICENCES/web/twitch-tui-page/CC0-1.0.txt?raw";
import igzp from "~/../static/LICENCES/web/twitch-tui-page/LICENCE.txt?raw";
import vxsw from "~/../static/LICENCES/web/vinxi/LICENSE.txt?raw";

const TUI_LICENCES: LicenceProps[] = [
  { title: "chrono", contents: [{ name: "LICENSE.txt", content: qfds }] },
  {
    title: "color-eyre",
    contents: [
      { name: "LICENSE-APACHE.txt", content: yhcw },
      { name: "LICENSE-MIT.txt", content: xdog },
    ],
  },
  {
    title: "criterion",
    contents: [
      { name: "LICENSE-APACHE.txt", content: oszq },
      { name: "LICENSE-MIT.txt", content: aamo },
    ],
  },
  { title: "crossterm", contents: [{ name: "LICENSE.txt", content: mbwt }] },
  {
    title: "futures",
    contents: [
      { name: "LICENSE-APACHE.txt", content: yqcy },
      { name: "LICENSE-MIT.txt", content: bapv },
    ],
  },
  {
    title: "indexmap",
    contents: [
      { name: "LICENSE-APACHE.txt", content: mkxk },
      { name: "LICENSE-MIT.txt", content: doeh },
    ],
  },
  { title: "lazy-regex", contents: [{ name: "LICENSE.txt", content: sawq }] },
  { title: "mimalloc", contents: [{ name: "LICENSE.txt", content: twtm }] },
  { title: "ratatui", contents: [{ name: "LICENSE.txt", content: lfim }] },
  { title: "tokio", contents: [{ name: "LICENSE.txt", content: llyb }] },
  {
    title: "twitch-chat-tui",
    contents: [
      { name: "CC0-1.0.txt", content: wwrm },
      { name: "LICENCE.txt", content: denx },
    ],
  },
  { title: "twitch-irc", contents: [{ name: "LICENSE.txt", content: ekjl }] },
];
const WEB_LICENCES: LicenceProps[] = [
  {
    title: "eslint-plugin-solid",
    contents: [{ name: "LICENSE.txt", content: dgqf }],
  },
  { title: "prettier", contents: [{ name: "LICENSE.txt", content: gbjt }] },
  { title: "solid-js", contents: [{ name: "LICENSE.txt", content: iphl }] },
  {
    title: "twitch-tui-page",
    contents: [
      { name: "CC-BY-4.0.txt", content: rigs },
      { name: "CC0-1.0.txt", content: xddh },
      { name: "LICENCE.txt", content: igzp },
    ],
  },
  { title: "vinxi", contents: [{ name: "LICENSE.txt", content: vxsw }] },
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
      <h2>TUI app</h2>
      <For each={TUI_LICENCES}>{(item) => <Licence {...item} />}</For>
    </section>
  );

  const web = (
    <section>
      <h2>Website</h2>
      <For each={WEB_LICENCES}>{(item) => <Licence {...item} />}</For>
    </section>
  );

  return (
    <Base current="Licences" title="Licences">
      <main>
        <h1>Licences</h1>
        {tui}
        {web}
      </main>
    </Base>
  );
}
