/*
Copyright 2024 sby1ce

SPDX-License-Identifier: AGPL-3.0-or-later
*/

import Frame from "~/components/Frame.tsx";
import Download from "~/components/Download.tsx";

export default function Home() {
  return (
    <Frame current="Home" title="">
      <main>
        <section class="intro">
          <h1>Twitch Chat TUI</h1>
          <p>
            A text-based chat interface for&nbsp;
            <a href="https://www.twitch.tv/" target="_blank">
              Twitch
            </a>
          </p>
        </section>
        <Download />
        <section>
          <h2 id="Navigation">Navigation</h2>
          <p>
            (Esq) to quit <br />
            (h) (or (Ctrl + h) in input mode) to toggle this popup <br />
            arrow keys or (wasd) to navigate <br />
            (e) to join a channel <br />
            (Backspace) or (Delete) to part from a channel <br />
            (Tab) to show the settings menu <br />
          </p>
        </section>
      </main>
    </Frame>
  );
}
