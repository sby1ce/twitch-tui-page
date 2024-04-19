import Base from "~/components/Base.tsx";
import Download from "~/components/Download.tsx";

export default function Home() {
  return (
    <Base current="Home" title="">
      <main>
        <section>
          <h1>Twitch Chat TUI</h1>
          <p>
            A chat text-based user interface is a chat client for&nbsp;
            <a href="https://www.twitch.tv/" target="_blank">
              Twitch
            </a>
          </p>
        </section>
        <Download />
        <section>
          <h2>Controls</h2>
          <p>
            (Esq) to quit <br />
            (h) (or (Ctrl + h) in input mode) to toggle this popup <br />
            arrow keys or (wasd) to navigate <br />
            (e) to join a channel <br />
            (Backspace) or (Delete) to part from a channel <br />
            (Tab) to show the settings menu <br />
          </p>
        </section>
      </main>
    </Base>
  );
}
