/*
Copyright 2024 sby1ce

SPDX-License-Identifier: AGPL-3.0-or-later
*/

import { For, type JSX } from "solid-js";
import Frame from "~/components/Frame.tsx";
// This is ugly but it's the best option there is
// Wrote a macro to fill these automatically
// macro start
import hwkg from "~/../static/LICENCES/tui/chrono/LICENSE.txt?raw";
import eiby from "~/../static/LICENCES/tui/color-eyre/LICENSE-APACHE.txt?raw";
import wgui from "~/../static/LICENCES/tui/color-eyre/LICENSE-MIT.txt?raw";
import drei from "~/../static/LICENCES/tui/criterion/LICENSE-APACHE.txt?raw";
import zpiy from "~/../static/LICENCES/tui/criterion/LICENSE-MIT.txt?raw";
import ogtu from "~/../static/LICENCES/tui/crossterm/LICENSE.txt?raw";
import trsd from "~/../static/LICENCES/tui/futures/LICENSE-APACHE.txt?raw";
import ihtp from "~/../static/LICENCES/tui/futures/LICENSE-MIT.txt?raw";
import fsic from "~/../static/LICENCES/tui/indexmap/LICENSE-APACHE.txt?raw";
import vqol from "~/../static/LICENCES/tui/indexmap/LICENSE-MIT.txt?raw";
import lage from "~/../static/LICENCES/tui/lazy-regex/LICENSE.txt?raw";
import emus from "~/../static/LICENCES/tui/mimalloc/LICENSE.txt?raw";
import glxi from "~/../static/LICENCES/tui/ratatui/LICENSE.txt?raw";
import eisj from "~/../static/LICENCES/tui/tokio/LICENSE.txt?raw";
import pfno from "~/../static/LICENCES/tui/twitch-chat-tui/CC0-1.0.txt?raw";
import qeez from "~/../static/LICENCES/tui/twitch-chat-tui/LICENCE.txt?raw";
import vfba from "~/../static/LICENCES/tui/twitch-irc/LICENSE.txt?raw";
import ubum from "~/../static/LICENCES/web/eslint-plugin-solid/LICENSE.txt?raw";
import iyal from "~/../static/LICENCES/web/prettier/LICENSE.txt?raw";
import wpqc from "~/../static/LICENCES/web/solid-js/LICENSE.txt?raw";
import qieb from "~/../static/LICENCES/web/twitch-tui-page/CC-BY-4.0.txt?raw";
import yaty from "~/../static/LICENCES/web/twitch-tui-page/CC0-1.0.txt?raw";
import hpvg from "~/../static/LICENCES/web/twitch-tui-page/LICENCE.txt?raw";
import vdcj from "~/../static/LICENCES/web/vinxi/LICENSE.txt?raw";

const TUI_LICENCES: LicenceProps[] = [
  { title: "chrono", contents: [{ name: "LICENSE.txt", content: hwkg }] },
  {
    title: "color-eyre",
    contents: [
      { name: "LICENSE-APACHE.txt", content: eiby },
      { name: "LICENSE-MIT.txt", content: wgui },
    ],
  },
  {
    title: "criterion",
    contents: [
      { name: "LICENSE-APACHE.txt", content: drei },
      { name: "LICENSE-MIT.txt", content: zpiy },
    ],
  },
  { title: "crossterm", contents: [{ name: "LICENSE.txt", content: ogtu }] },
  {
    title: "futures",
    contents: [
      { name: "LICENSE-APACHE.txt", content: trsd },
      { name: "LICENSE-MIT.txt", content: ihtp },
    ],
  },
  {
    title: "indexmap",
    contents: [
      { name: "LICENSE-APACHE.txt", content: fsic },
      { name: "LICENSE-MIT.txt", content: vqol },
    ],
  },
  { title: "lazy-regex", contents: [{ name: "LICENSE.txt", content: lage }] },
  { title: "mimalloc", contents: [{ name: "LICENSE.txt", content: emus }] },
  { title: "ratatui", contents: [{ name: "LICENSE.txt", content: glxi }] },
  { title: "tokio", contents: [{ name: "LICENSE.txt", content: eisj }] },
  {
    title: "twitch-chat-tui",
    contents: [
      { name: "CC0-1.0.txt", content: pfno },
      { name: "LICENCE.txt", content: qeez },
    ],
  },
  { title: "twitch-irc", contents: [{ name: "LICENSE.txt", content: vfba }] },
];
const WEB_LICENCES: LicenceProps[] = [
  {
    title: "eslint-plugin-solid",
    contents: [{ name: "LICENSE.txt", content: ubum }],
  },
  { title: "prettier", contents: [{ name: "LICENSE.txt", content: iyal }] },
  { title: "solid-js", contents: [{ name: "LICENSE.txt", content: wpqc }] },
  {
    title: "twitch-tui-page",
    contents: [
      { name: "CC-BY-4.0.txt", content: qieb },
      { name: "CC0-1.0.txt", content: yaty },
      { name: "LICENCE.txt", content: hpvg },
    ],
  },
  { title: "vinxi", contents: [{ name: "LICENSE.txt", content: vdcj }] },
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
    <Frame current="Licences" title="Licences">
      <main>
        <h1>Licences</h1>
        {tui}
        {web}
      </main>
    </Frame>
  );
}
