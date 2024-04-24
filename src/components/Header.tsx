/*
Copyright 2024 sby1ce

SPDX-License-Identifier: AGPL-3.0-or-later
*/

import { type JSX } from "solid-js";
import styles from "./Header.module.css";

export default function Header(): JSX.Element {
  return (
    <header class={styles.header}>
      <a href="/">
        <img src="/logo.svg" alt="Twitch Chat TUI" height="32" />
      </a>
    </header>
  );
}
