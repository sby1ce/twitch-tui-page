/*
Copyright 2024 sby1ce

SPDX-License-Identifier: AGPL-3.0-or-later
*/

import { Match, Switch, createSignal, type JSXElement } from "solid-js";
import style from "./Download.module.css";
import { A } from "@solidjs/router";

interface DownloadProps {
  platform: string;
  extension: string;
}

function DownloadButton(props: DownloadProps): JSXElement {
  const name = "twitch_chat_tui";
  return (
    <button type="button">
      <A href={"/" + name + props.extension} download={name + props.extension}>
        Download for {props.platform}
      </A>
    </button>
  );
}

enum Platform {
  Windows = "windows",
  Linux = "linux",
}

export default function Download(): JSXElement {
  // Don't forget to actually put the downloadable files in the /public folder
  const github: string =
    "https://github.com/sby1ce/twitch-tui-page/releases/latest";
  const codeberg: string =
    "https://codeberg.org/hedonic_treadmill/twitch-chat-tui";

  const [platform, setPlatform] = createSignal(Platform.Windows);

  return (
    <section class={style.download}>
      <div class={style.buttons}>
        <Switch>
          <Match when={Platform.Windows === platform()}>
            <DownloadButton platform="Windows (64 bit)" extension=".zip" />
          </Match>
          <Match when={Platform.Linux === platform()}>
            <DownloadButton platform="GNU Linux (64 bit)" extension=".tar.gz" />
          </Match>
        </Switch>

        <select onInput={(e) => setPlatform(e.currentTarget.value as Platform)}>
          <option value={Platform.Windows} selected>
            Windows
          </option>
          <option value={Platform.Linux}>Linux</option>
        </select>
      </div>

      <div class={style.buttons}>
        <button type="button">
          <a href={github}>Download from GitHub</a>
        </button>
        <button type="button">
          <a href={codeberg}>Build from source on Codeberg</a>
        </button>
      </div>
    </section>
  );
}
