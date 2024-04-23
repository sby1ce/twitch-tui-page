/*
Copyright 2024 sby1ce

SPDX-License-Identifier: AGPL-3.0-or-later
*/

import { For, type JSX } from "solid-js";
import Base from "~/components/Base.tsx";
// This is ugly but it's the best option there is
// Wrote a macro to fill these automatically
// macro start
import qqyx from "~/../static/LICENCES/tui/chrono/LICENSE.txt?raw";
import edin from "~/../static/LICENCES/tui/color-eyre/LICENSE-APACHE.txt?raw";
import bwza from "~/../static/LICENCES/tui/color-eyre/LICENSE-MIT.txt?raw";
import gbqt from "~/../static/LICENCES/tui/criterion/LICENSE-APACHE.txt?raw";
import hkal from "~/../static/LICENCES/tui/criterion/LICENSE-MIT.txt?raw";
import vkmf from "~/../static/LICENCES/tui/crossterm/LICENSE.txt?raw";
import fnwd from "~/../static/LICENCES/tui/futures/LICENSE-APACHE.txt?raw";
import rcds from "~/../static/LICENCES/tui/futures/LICENSE-MIT.txt?raw";
import vyhj from "~/../static/LICENCES/tui/indexmap/LICENSE-APACHE.txt?raw";
import ypyw from "~/../static/LICENCES/tui/indexmap/LICENSE-MIT.txt?raw";
import mhtz from "~/../static/LICENCES/tui/lazy-regex/LICENSE.txt?raw";
import hjla from "~/../static/LICENCES/tui/mimalloc/LICENSE.txt?raw";
import ypaz from "~/../static/LICENCES/tui/ratatui/LICENSE.txt?raw";
import izdy from "~/../static/LICENCES/tui/tokio/LICENSE.txt?raw";
import sqns from "~/../static/LICENCES/tui/twitch-chat-tui/CC0-1.0.txt?raw";
import vsls from "~/../static/LICENCES/tui/twitch-chat-tui/LICENCE.txt?raw";
import xzja from "~/../static/LICENCES/tui/twitch-irc/LICENSE.txt?raw";
import ibdx from "~/../static/LICENCES/web/eslint-plugin-solid/LICENSE.txt?raw";
import vhlb from "~/../static/LICENCES/web/prettier/LICENSE.txt?raw";
import rvim from "~/../static/LICENCES/web/solid-js/LICENSE.txt?raw";
import lzis from "~/../static/LICENCES/web/twitch-tui-page/CC0-1.0.txt?raw";
import oief from "~/../static/LICENCES/web/twitch-tui-page/LICENCE.txt?raw";
import wlmj from "~/../static/LICENCES/web/vinxi/LICENSE.txt?raw";

const TUI_LICENCES: LicenceProps[] = [
  { title: "chrono", contents: [{ name: "LICENSE.txt", content: qqyx }] },
  {
    title: "color-eyre",
    contents: [
      { name: "LICENSE-APACHE.txt", content: edin },
      { name: "LICENSE-MIT.txt", content: bwza },
    ],
  },
  {
    title: "criterion",
    contents: [
      { name: "LICENSE-APACHE.txt", content: gbqt },
      { name: "LICENSE-MIT.txt", content: hkal },
    ],
  },
  { title: "crossterm", contents: [{ name: "LICENSE.txt", content: vkmf }] },
  {
    title: "futures",
    contents: [
      { name: "LICENSE-APACHE.txt", content: fnwd },
      { name: "LICENSE-MIT.txt", content: rcds },
    ],
  },
  {
    title: "indexmap",
    contents: [
      { name: "LICENSE-APACHE.txt", content: vyhj },
      { name: "LICENSE-MIT.txt", content: ypyw },
    ],
  },
  { title: "lazy-regex", contents: [{ name: "LICENSE.txt", content: mhtz }] },
  { title: "mimalloc", contents: [{ name: "LICENSE.txt", content: hjla }] },
  { title: "ratatui", contents: [{ name: "LICENSE.txt", content: ypaz }] },
  { title: "tokio", contents: [{ name: "LICENSE.txt", content: izdy }] },
  {
    title: "twitch-chat-tui",
    contents: [
      { name: "CC0-1.0.txt", content: sqns },
      { name: "LICENCE.txt", content: vsls },
    ],
  },
  { title: "twitch-irc", contents: [{ name: "LICENSE.txt", content: xzja }] },
];
const WEB_LICENCES: LicenceProps[] = [
  {
    title: "eslint-plugin-solid",
    contents: [{ name: "LICENSE.txt", content: ibdx }],
  },
  { title: "prettier", contents: [{ name: "LICENSE.txt", content: vhlb }] },
  { title: "solid-js", contents: [{ name: "LICENSE.txt", content: rvim }] },
  {
    title: "twitch-tui-page",
    contents: [
      { name: "CC0-1.0.txt", content: lzis },
      { name: "LICENCE.txt", content: oief },
    ],
  },
  { title: "vinxi", contents: [{ name: "LICENSE.txt", content: wlmj }] },
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
