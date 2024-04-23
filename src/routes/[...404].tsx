/*
Copyright 2024 sby1ce

SPDX-License-Identifier: AGPL-3.0-or-later
*/

import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";
import type { JSX } from "solid-js";

export default function NotFound(): JSX.Element {
  return (
    <main>
      <Title>Not Found | Twitch Chat TUI</Title>
      <HttpStatusCode code={404} />
      <h1>Page Not Found</h1>
      <p>
        Go back to the main&nbsp;
        <a href="/">page</a>
      </p>
    </main>
  );
}
