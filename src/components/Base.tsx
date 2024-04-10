import type { JSXElement } from "solid-js";
import Header from "./Header";
import { Title } from "@solidjs/meta";
import Navbar from "./Navbar";

export interface BaseProps {
  children: JSXElement;
  title: string;
  current: string;
}

export default function Base(props: BaseProps): JSXElement {
  const title: string = props.title
    ? `${props.title} | Twitch Chat TUI`
    : "Twitch Chat TUI";
  return (
    <>
      <Title>{title}</Title>
      <Header />
      <div class="wrapper">
        <Navbar current={props.current} />
        {props.children}
      </div>
    </>
  );
}
