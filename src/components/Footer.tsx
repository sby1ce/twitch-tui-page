import { type JSX } from "solid-js";
import styles from "./Footer.module.css";

export default function Footer(): JSX.Element {
  return (
    <footer class={styles.footer}>
      <div>
        <h3>TUI app</h3>
        <p>
          <a href="https://codeberg.org/hedonic_treadmill/twitch-chat-tui">
            Source on Codeberg
          </a>
        </p>
        <p>
          <a href="/licences">Licences</a>
        </p>
      </div>
      <div>
        <h3>Website</h3>
        <p>
          <a href="https://github.com/sby1ce/twitch-chat-tui">
            Source on GitHub
          </a>
        </p>
        <p>
          <a href="/licences#website">Licences</a>
        </p>
      </div>
      <div>
        <h3>Support</h3>
        <p>
          <a href="https://codeberg.org/hedonic_treadmill/twitch-chat-tui/issues">
            Report an app issue
          </a>
        </p>
        <p>
          <a href="https://github.com/sby1ce/twitch-chat-tui/issues">
            Report a website issue
          </a>
        </p>
      </div>
    </footer>
  );
}
