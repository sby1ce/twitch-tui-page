import { Title } from "@solidjs/meta";
import Header from "~/components/Header.tsx";
import Navbar from "~/components/Navbar";

export default function Home() {
  return (
    <>
      <Title>Twitch Chat TUI</Title>
      <Header />
      <div class="wrapper">
        <Navbar current="Home" />
        <main>
          <h1>Twitch Chat TUI</h1>
          <p>
            A chat text-based user interface is a chat client for&nbsp;
            <a href="https://www.twitch.tv/" target="_blank">
              Twitch
            </a>
          </p>
        </main>
      </div>
    </>
  );
}
