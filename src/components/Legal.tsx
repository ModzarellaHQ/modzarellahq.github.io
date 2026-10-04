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
        Modzarella is a free, open-source community project. This page explains what happens to your data when you visit modzarella.dev, download the app and
        use it. Short version: we don't collect anything that identifies you.
      </p>
      <h2>Visiting this website</h2>
      <p>
        Visits are counted with <a href="https://www.goatcounter.com">GoatCounter</a>, a privacy-friendly analytics service. It sets no cookies, doesn't track you
        across sites and stores no personal data. It records totals only: which page was viewed, the referring site, browser and operating system, screen size,
        and the country derived from your IP address. The IP address itself is not stored. Clicks on download buttons are counted the same way, so we know which
        platforms people use.
      </p>
      <p>The counting script is served from this site. If your browser blocks it, or sends Do Not Track, nothing is counted and the site works the same.</p>
      <h2>Hosting</h2>
      <p>
        The site is hosted on <a href="https://www.netlify.com/privacy/">Netlify</a>. Like any web host, Netlify processes your IP address to deliver pages and
        may keep it briefly in server logs for security and abuse prevention. We don't have access to those logs and don't use them.
      </p>
      <h2>Downloads</h2>
      <p>
        The app and the mods are downloaded from GitHub, so{" "}
        <a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement">GitHub's privacy statement</a> applies to those requests.
      </p>
      <h2>The app</h2>
      <p>
        Modzarella has no accounts, no telemetry and no analytics. It connects to GitHub for three things only: the list of available mods, the mods you choose
        to install, and the BepInEx mod loader. Your settings, such as the game folder and the mod source, are saved in a file on your own computer and never
        leave it.
      </p>
      <h2>Mods</h2>
      <p>
        Mods run inside the game on your computer. The mods in the Modz catalogue don't send data anywhere. If you point Modzarella at another mod source, the
        mods from that source are the responsibility of whoever publishes them.
      </p>
      <h2>Your rights</h2>
      <p>
        Because we don't hold personal data about you, there's nothing for us to show, correct or delete. For data processed by GitHub, Netlify or GoatCounter,
        their own policies explain how to exercise your rights.
      </p>
      <h2>Children</h2>
      <p>The site and the app are not aimed at children and don't knowingly collect information from anyone.</p>
      <h2>Changes</h2>
      <p>If this policy changes, the new version is published here with a new date at the top.</p>
      <h2>Contact</h2>
      <p>
        Questions about privacy? Open an issue on <a href="https://github.com/ModzarellaHQ/Modzarella/issues">GitHub</a>.
      </p>
    </Page>
  );
}

export function Terms() {
  return (
    <Page title="Terms">
      <p>
        These terms cover the modzarella.dev website, the Modzarella app and the mods published in the Modz catalogue. By using any of them you agree to these
        terms.
      </p>
      <h2>Licence</h2>
      <p>
        Modzarella and the Modz mods are free software released under the{" "}
        <a href="https://github.com/ModzarellaHQ/Modzarella/blob/main/LICENSE">MIT License</a>. You may use, copy, change and share them under that licence.
        Some mods include models or sounds by other people; their credits and licences are listed with each mod.
      </p>
      <h2>No warranty</h2>
      <p>
        The software is provided as is, without warranty of any kind. It may contain bugs, may stop working after a game update and may change or disappear at any
        time.
      </p>
      <h2>Limitation of liability</h2>
      <p>
        To the extent the law allows, the authors and contributors are not liable for any damage or loss that comes from using the website, the app or the mods,
        including lost saves, game problems or computer issues.
      </p>
      <h2>Using mods</h2>
      <p>
        Mods change how Cheese Rolling runs. Use them at your own risk and keep backups of anything you care about. Modzarella can remove everything it installed
        from Settings, and verifying the game files in Steam restores the original game.
      </p>
      <h2>Offline only</h2>
      <p>
        Mods run in Play Offline only. Don't use them, or try to make them work, in online matches or to gain an advantage over other players. You are responsible
        for following the game's and Steam's own terms.
      </p>
      <h2>Mods by others</h2>
      <p>
        Anyone can propose a mod to the Modz catalogue, and Modzarella can load mods from other sources you add yourself. Mods published elsewhere are not checked
        by us, so only install mods from people you trust.
      </p>
      <h2>Contributions</h2>
      <p>Code, mods and assets you contribute are released under the same licence as the project you contribute to, unless you state otherwise.</p>
      <h2>Not affiliated</h2>
      <p>
        Modzarella is a community project. It is not made, endorsed or supported by the developers of Cheese Rolling, by Valve or by BMW. Cheese Rolling, Steam,
        BMW and other names and trademarks belong to their respective owners and are used only to describe what the software works with.
      </p>
      <h2>Changes</h2>
      <p>These terms may be updated. The current version is always on this page, with its date at the top.</p>
      <h2>Contact</h2>
      <p>
        Open an issue on <a href="https://github.com/ModzarellaHQ/Modzarella/issues">GitHub</a>.
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
