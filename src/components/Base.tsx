import type { JSXElement } from "solid-js";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import { Title } from "@solidjs/meta";
import Navbar from "./Navbar.tsx";

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
