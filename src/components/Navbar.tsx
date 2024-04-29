/*
Copyright 2024 sby1ce

SPDX-License-Identifier: AGPL-3.0-or-later
*/

import { For, Show, type JSX } from "solid-js";
import style from "./Navbar.module.css";
import { A } from "@solidjs/router";

export interface NavbarProps {
  current: string;
}

interface Route {
  name: string;
  path: string;
}

const routes: Route[] = [
  { name: "Home", path: "/" },
  { name: "Licences", path: "/licences" },
];

function renderRoute(current: string, item: Route): JSX.Element {
  return (
    <li>
      <Show when={item.name !== current} fallback={<span>{item.name}</span>}>
        <A href={item.path}>{item.name}</A>
      </Show>
    </li>
  );
}

export default function Navbar(props: NavbarProps): JSX.Element {
  return (
    <nav>
      <ul class={style.nav}>
        <For each={routes}>{renderRoute.bind(null, props.current)}</For>
      </ul>
    </nav>
  );
}
