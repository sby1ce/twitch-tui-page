import { A } from "@solidjs/router";
import { For, type JSX } from "solid-js";

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
  if (item.name === current) {
    return (
      <li>
        <span>{item.name}</span>
      </li>
    );
  }
  return (
    <li>
      <A href={item.path}>{item.name}</A>
    </li>
  );
}

export default function Navbar(props: NavbarProps): JSX.Element {
  return (
    <nav>
      <ul>
        <For each={routes}>{renderRoute.bind(null, props.current)}</For>
      </ul>
    </nav>
  );
}
