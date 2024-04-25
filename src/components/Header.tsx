/*
Copyright 2024 sby1ce

SPDX-License-Identifier: AGPL-3.0-or-later
*/

import { type JSX } from "solid-js";
import styles from "./Header.module.css";

function Logo({ height }: { height: string }): JSX.Element {
  const css = `\
  svg {
    height: ${height};
  }
  `;
  return (
    <svg
      role="img"
      aria-label="Twitch Chat TUI"
      viewBox="0 0 400 50"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Twitch Chat TUI</title>
      <rect
        x="0"
        y="0"
        width="50"
        height="50"
        stroke="black"
        fill="black"
        stroke-width="5"
      />
      <rect
        x="10"
        y="10"
        width="40"
        height="30"
        stroke="white"
        fill="transparent"
        stroke-width="2"
      />
      <path d="M20 20 h 25" stroke="white" />
      <path d="M20 25 h 25" stroke="white" />
      <path d="M20 30 h 25" stroke="white" />
      <text
        x="60"
        y="37"
        font-size="40"
        fill="black"
        font-family="Verdana, Helvetica, Arial, sans-serif"
      >
        Twitch Chat TUI
      </text>
      <style>{css}</style>
    </svg>
  );
}

export default function Header(): JSX.Element {
  return (
    <header class={styles.header}>
      <a href="/">
        <Logo height="2em" />
      </a>
    </header>
  );
}
