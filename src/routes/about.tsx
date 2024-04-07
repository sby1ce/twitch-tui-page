import { Title } from "@solidjs/meta";
import Header from "~/components/Header";
import Navbar from "~/components/Navbar";

export default function Home() {
  return (
    <>
      <Title>Twitch Chat TUI - About</Title>
      <Header />
      <div class="wrapper">
        <Navbar current="About" />
        <main>
          <h1>About</h1>
        </main>
      </div>
    </>
  );
}
