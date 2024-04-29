/*
Copyright 2024 sby1ce

SPDX-License-Identifier: AGPL-3.0-or-later
*/

import { For, type JSX } from "solid-js";
import Frame from "~/components/Frame.tsx";
// This is ugly but it's the best option there is
// Wrote a macro to fill these automatically
// macro start
import vxbz from "~/../static/LICENCES/tui/chrono/LICENSE.txt?raw";
import kyem from "~/../static/LICENCES/tui/color-eyre/LICENSE-APACHE.txt?raw";
import viai from "~/../static/LICENCES/tui/color-eyre/LICENSE-MIT.txt?raw";
import etxs from "~/../static/LICENCES/tui/criterion/LICENSE-APACHE.txt?raw";
import zkfw from "~/../static/LICENCES/tui/criterion/LICENSE-MIT.txt?raw";
import lksh from "~/../static/LICENCES/tui/crossterm/LICENSE.txt?raw";
import uuwz from "~/../static/LICENCES/tui/futures/LICENSE-APACHE.txt?raw";
import hjoh from "~/../static/LICENCES/tui/futures/LICENSE-MIT.txt?raw";
import fejh from "~/../static/LICENCES/tui/indexmap/LICENSE-APACHE.txt?raw";
import wkhj from "~/../static/LICENCES/tui/indexmap/LICENSE-MIT.txt?raw";
import iait from "~/../static/LICENCES/tui/lazy-regex/LICENSE.txt?raw";
import aswn from "~/../static/LICENCES/tui/mimalloc/LICENSE.txt?raw";
import wnon from "~/../static/LICENCES/tui/ratatui/LICENSE.txt?raw";
import ewog from "~/../static/LICENCES/tui/tokio/LICENSE.txt?raw";
import fubu from "~/../static/LICENCES/tui/twitch-chat-tui/CC0-1.0.txt?raw";
import gzzs from "~/../static/LICENCES/tui/twitch-chat-tui/LICENCE.txt?raw";
import rwus from "~/../static/LICENCES/tui/twitch-irc/LICENSE.txt?raw";
import mfzt from "~/../static/LICENCES/web/eslint/LICENSE.txt?raw";
import glug from "~/../static/LICENCES/web/eslint-config-prettier/LICENSE.txt?raw";
import kvhi from "~/../static/LICENCES/web/eslint-plugin-solid/LICENSE.txt?raw";
import jdpi from "~/../static/LICENCES/web/prettier/LICENSE.txt?raw";
import fftk from "~/../static/LICENCES/web/solid-js/LICENSE.txt?raw";
import vjjj from "~/../static/LICENCES/web/twitch-tui-page/CC-BY-4.0.txt?raw";
import knkg from "~/../static/LICENCES/web/twitch-tui-page/CC0-1.0.txt?raw";
import hspp from "~/../static/LICENCES/web/twitch-tui-page/LICENCE.txt?raw";
import hfiv from "~/../static/LICENCES/web/typescript-eslint/LICENSE.txt?raw";
import chyx from "~/../static/LICENCES/web/vinxi/LICENSE.txt?raw";

const TUI_LICENCES: LicenceProps[] = [
  { title: "chrono", contents: [{ name: "LICENSE.txt", content: vxbz }] },
  {
    title: "color-eyre",
    contents: [
      { name: "LICENSE-APACHE.txt", content: kyem },
      { name: "LICENSE-MIT.txt", content: viai },
    ],
  },
  {
    title: "criterion",
    contents: [
      { name: "LICENSE-APACHE.txt", content: etxs },
      { name: "LICENSE-MIT.txt", content: zkfw },
    ],
  },
  { title: "crossterm", contents: [{ name: "LICENSE.txt", content: lksh }] },
  {
    title: "futures",
    contents: [
      { name: "LICENSE-APACHE.txt", content: uuwz },
      { name: "LICENSE-MIT.txt", content: hjoh },
    ],
  },
  {
    title: "indexmap",
    contents: [
      { name: "LICENSE-APACHE.txt", content: fejh },
      { name: "LICENSE-MIT.txt", content: wkhj },
    ],
  },
  { title: "lazy-regex", contents: [{ name: "LICENSE.txt", content: iait }] },
  { title: "mimalloc", contents: [{ name: "LICENSE.txt", content: aswn }] },
  { title: "ratatui", contents: [{ name: "LICENSE.txt", content: wnon }] },
  { title: "tokio", contents: [{ name: "LICENSE.txt", content: ewog }] },
  {
    title: "twitch-chat-tui",
    contents: [
      { name: "CC0-1.0.txt", content: fubu },
      { name: "LICENCE.txt", content: gzzs },
    ],
  },
  { title: "twitch-irc", contents: [{ name: "LICENSE.txt", content: rwus }] },
];
const WEB_LICENCES: LicenceProps[] = [
  { title: "eslint", contents: [{ name: "LICENSE.txt", content: mfzt }] },
  {
    title: "eslint-config-prettier",
    contents: [{ name: "LICENSE.txt", content: glug }],
  },
  {
    title: "eslint-plugin-solid",
    contents: [{ name: "LICENSE.txt", content: kvhi }],
  },
  { title: "prettier", contents: [{ name: "LICENSE.txt", content: jdpi }] },
  { title: "solid-js", contents: [{ name: "LICENSE.txt", content: fftk }] },
  {
    title: "twitch-tui-page",
    contents: [
      { name: "CC-BY-4.0.txt", content: vjjj },
      { name: "CC0-1.0.txt", content: knkg },
      { name: "LICENCE.txt", content: hspp },
    ],
  },
  {
    title: "typescript-eslint",
    contents: [{ name: "LICENSE.txt", content: hfiv }],
  },
  { title: "vinxi", contents: [{ name: "LICENSE.txt", content: chyx }] },
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
