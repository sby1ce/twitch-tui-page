import { type JSX } from "solid-js";
import Base from "~/components/Base.tsx";
// This is ugly but it's the best option there is
// Wrote a macro to fill these automatically
// macro start
import chronoLicense from "~/../static/LICENCES/chrono/LICENSE.txt?raw";
import coloreyreApache from "~/../static/LICENCES/color-eyre/LICENSE-APACHE.txt?raw";
import coloreyreMit from "~/../static/LICENCES/color-eyre/LICENSE-MIT.txt?raw";
import criterionApache from "~/../static/LICENCES/criterion/LICENSE-APACHE.txt?raw";
import criterionMit from "~/../static/LICENCES/criterion/LICENSE-MIT.txt?raw";
import crosstermLicense from "~/../static/LICENCES/crossterm/LICENSE.txt?raw";
import futuresApache from "~/../static/LICENCES/futures/LICENSE-APACHE.txt?raw";
import futuresMit from "~/../static/LICENCES/futures/LICENSE-MIT.txt?raw";
import indexmapApache from "~/../static/LICENCES/indexmap/LICENSE-APACHE.txt?raw";
import indexmapMit from "~/../static/LICENCES/indexmap/LICENSE-MIT.txt?raw";
import lazyregexLicense from "~/../static/LICENCES/lazy-regex/LICENSE.txt?raw";
import mimallocLicense from "~/../static/LICENCES/mimalloc/LICENSE.txt?raw";
import ratatuiLicense from "~/../static/LICENCES/ratatui/LICENSE.txt?raw";
import tokioLicense from "~/../static/LICENCES/tokio/LICENSE.txt?raw";
import twitchchattui1 from "~/../static/LICENCES/twitch-chat-tui/CC0-1.0.txt?raw";
import twitchchattuiLicence from "~/../static/LICENCES/twitch-chat-tui/LICENCE.txt?raw";
import twitchircLicense from "~/../static/LICENCES/twitch-irc/LICENSE.txt?raw";

const appLicences: LicenceProps[] = [
  { title: "chrono", contents: [chronoLicense] },
  { title: "coloreyre", contents: [coloreyreApache, coloreyreMit] },
  { title: "criterion", contents: [criterionApache, criterionMit] },
  { title: "crossterm", contents: [crosstermLicense] },
  { title: "futures", contents: [futuresApache, futuresMit] },
  { title: "indexmap", contents: [indexmapApache, indexmapMit] },
  { title: "lazyregex", contents: [lazyregexLicense] },
  { title: "mimalloc", contents: [mimallocLicense] },
  { title: "ratatui", contents: [ratatuiLicense] },
  { title: "tokio", contents: [tokioLicense] },
  { title: "twitchchattui", contents: [twitchchattui1, twitchchattuiLicence] },
  { title: "twitchirc", contents: [twitchircLicense] },
];
// macro end

interface LicenceProps {
  title: string;
  contents: string[];
}

function Licence(props: LicenceProps): JSX.Element {
  return (
    <details>
      <summary>{props.title}</summary>
      <pre>{props.contents[0]}</pre>
      {/* TODO: <For> here */}
    </details>
  );
}

export default function Licences(): JSX.Element {
  const app = (
    <section>
      <h2>TUI app</h2>
      <Licence
        title={appLicences[0].title}
        contents={appLicences[0].contents}
      />
      {/* TODO: <For> here */}
    </section>
  );

  const web = (
    <section>
      <h2>Website</h2>
    </section>
  );

  return (
    <Base current="Licences" title="Licences">
      <main>
        <h1>Licences</h1>
        {app}
        {web}
      </main>
    </Base>
  );
}
