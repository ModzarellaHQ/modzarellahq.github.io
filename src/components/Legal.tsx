import type { JSX } from "solid-js";

function Page(props: { title: string; children: JSX.Element }) {
  return (
    <section class="wrap legal max-w-2xl pb-16 pt-32">
      <h1 class="text-3xl font-bold">{props.title}</h1>
      <p class="mt-2 text-sm text-dim">Last updated 4 October 2026</p>
      {props.children}
    </section>
  );
}

export function Privacy() {
  return (
    <Page title="Privacy">
      <p>
        Modzarella is a free, open-source community project. This page explains what happens to your data on modzarella.dev, when you download the app and when
        you use it. In short: we collect nothing that identifies you.
      </p>
      <h2>Visiting this website</h2>
      <p>
        Visits are counted with a privacy-friendly analytics service. It sets no cookies, doesn't track you across sites and stores no personal
        data, only totals: the page viewed, the referring site, browser and system, screen size, and a country derived from your IP address, which itself is not
        stored. Download clicks are counted the same way.
      </p>
      <p>If your browser blocks the counting script, nothing is counted and the site works the same.</p>
      <h2>Hosting</h2>
      <p>
        Our hosting provider processes your IP address to deliver pages and may keep it briefly in logs for security. We don't use those logs.
      </p>
      <h2>Downloads</h2>
      <p>
        The app and the mods are downloaded from the service that hosts the project's code, and its own privacy policy applies to those requests.
      </p>
      <h2>The app</h2>
      <p>
        Modzarella has no accounts, telemetry or analytics. It only downloads the mod list, the mods you install and the mod loader. Your settings stay in a
        file on your computer.
      </p>
      <h2>Mods</h2>
      <p>
        Mods run inside the game on your computer, and the ones in the Modz catalogue send nothing anywhere. Mods from other sources you add are the
        responsibility of whoever publishes them.
      </p>
      <h2>Your rights</h2>
      <p>
        We hold no personal data about you, so there's nothing to show, correct or delete. The services above explain how to exercise your rights with them.
      </p>
      <h2>Changes and contact</h2>
      <p>
        Updates are published here with a new date. Questions? Ask in the project's <a href="https://github.com/ModzarellaHQ/Modzarella/issues">issue tracker</a>.
      </p>
    </Page>
  );
}

export function Terms() {
  return (
    <Page title="Terms">
      <p>These terms cover the modzarella.dev website, the Modzarella app and the mods in the Modz catalogue. By using them you agree to these terms.</p>
      <h2>Licence</h2>
      <p>
        Modzarella and the Modz mods are free software under the{" "}
        <a href="https://github.com/ModzarellaHQ/Modzarella/blob/main/LICENSE">MIT License</a>: you may use, copy, change and share them. Models and sounds by
        other people are credited, with their licences, alongside each mod.
      </p>
      <h2>No warranty</h2>
      <p>The software is provided as is, without warranty of any kind. It may have bugs, break after a game update, or change at any time.</p>
      <h2>Limitation of liability</h2>
      <p>
        As far as the law allows, the authors and contributors are not liable for any loss from using the website, the app or the mods, including lost saves or
        game problems.
      </p>
      <h2>Using mods</h2>
      <p>
        Mods change how Cheese Rolling runs, so use them at your own risk and keep backups. Modzarella can remove everything it installed, and verifying the game
        files in Steam restores the original game.
      </p>
      <h2>Offline only</h2>
      <p>
        Mods run in Play Offline only. Don't use them in online matches or to gain an advantage over other players, and follow the game's and Steam's own terms.
      </p>
      <h2>Mods by others</h2>
      <p>
        Mods can be proposed to the Modz catalogue, and the app can load mods from other sources you add. We don't check those sources, so only install mods
        from people you trust.
      </p>
      <h2>Not affiliated</h2>
      <p>
        Modzarella is a community project, not made or endorsed by the developers of Cheese Rolling, Valve or BMW. Their names and trademarks belong to their
        owners and only describe what the software works with.
      </p>
      <h2>Changes and contact</h2>
      <p>
        Updates are published here with a new date. Questions? Ask in the project's <a href="https://github.com/ModzarellaHQ/Modzarella/issues">issue tracker</a>.
      </p>
    </Page>
  );
}

export function NotFound() {
  return (
    <section class="wrap grid min-h-svh place-content-center gap-4 text-center">
      <p class="font-mono text-accent">404</p>
      <h1 class="text-3xl font-bold">This page rolled away</h1>
      <p class="text-dim">It doesn't exist, or it moved.</p>
      <p>
        <a class="btn" href="/">Back home</a>
      </p>
    </section>
  );
}
