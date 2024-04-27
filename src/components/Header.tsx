/*
Copyright 2024 sby1ce

SPDX-License-Identifier: AGPL-3.0-or-later
*/

import { Setter, Signal, createEffect, createSignal, type JSX } from "solid-js";
import styles from "./Header.module.css";
import { isServer } from "solid-js/web";

function Logo(props: { height: string }): JSX.Element {
  const css = (
    <style>{`\
      svg {
        height: ${props.height};
      }
  
      text {
        fill: var(--palette-text);
      } \
  `}</style>
  );
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
        y="34"
        font-size="35"
        fill="black"
        font-family="'Courier New'"
      >
        Twitch Chat TUI
      </text>
      {css}
    </svg>
  );
}

enum Theme {
  Dark = "dark",
  Light = "light",
}

const THEMES = ["dark", "light"];

function createTheme(): Signal<Theme> {
  const [getter, setter] = createSignal(Theme.Dark);

  if (!isServer) {
    const stored: string | null = localStorage.getItem("theme");
    if (stored) {
      setter(stored as Theme);
    }
  }

  const store: Setter<Theme> = (arg: Theme | ((arg: Theme) => Theme)): void => {
    setter(arg);
    if (typeof arg === "function") {
      localStorage?.setItem("theme", arg(getter()));
    } else {
      localStorage?.setItem("theme", arg);
    }
  };

  return [getter, store];
}

export default function Header(): JSX.Element {
  const [theme, setTheme] = createTheme();

  createEffect((): void => {
    const body = document.querySelector("body");
    if (!body) {
      return;
    }
    body.classList.remove(...THEMES);
    body.classList.add(theme());
  });

  return (
    <header class={styles.header}>
      <a href="/">
        <Logo height="2em" />
      </a>
      <div>
        <button type="button" onClick={() => localStorage.clear()}>
          Clear localStorage
        </button>
        <select onInput={(e) => setTheme(e.currentTarget.value as Theme)}>
          <option disabled selected hidden value="">
            Theme
          </option>
          <option value={Theme.Dark}>Dark</option>
          <option value={Theme.Light}>Light</option>
        </select>
      </div>
    </header>
  );
}
