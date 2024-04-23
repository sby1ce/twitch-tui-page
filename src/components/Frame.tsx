/*
Copyright 2024 sby1ce

SPDX-License-Identifier: AGPL-3.0-or-later
*/

import type { JSXElement } from "solid-js";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import { Title } from "@solidjs/meta";
import Navbar from "./Navbar.tsx";

export interface FrameProps {
  children: JSXElement;
  title: string;
  current: string;
}

export default function Frame(props: FrameProps): JSXElement {
  const title: string = props.title
    ? `${props.title} | Twitch Chat TUI`
    : "Twitch Chat TUI";
  return (
    <>
      <Title>{title}</Title>
      <Header />
      <hr />
      <div class="wrapper">
        <Navbar current={props.current} />
        {props.children}
      </div>
      <hr />
      <Footer />
    </>
  );
}
