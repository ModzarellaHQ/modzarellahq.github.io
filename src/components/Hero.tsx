import { For } from "solid-js";
import { downloads, releases, type Platform } from "../data";

function detect(): Platform {
  const ua = navigator.userAgent;
  if (/Windows/.test(ua)) return "windows";
  if (/Linux|X11/.test(ua) && !/Android/.test(ua)) return "linux";
  return "mac";
}

export default function Hero() {
  const platform = detect();
  const main = downloads[platform];
  const others = (Object.keys(downloads) as Platform[]).filter((p) => p !== platform);

  return (
    <section class="mx-auto max-w-5xl px-5 pb-16 pt-14">
      <h1 class="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">Mods for Cheese Rolling</h1>
      <p class="mt-4 max-w-xl text-lg text-dim">
        Modzarella installs the mod loader, keeps your mods up to date and starts the game. Tick the mods you want and press Play.
      </p>
      <div class="mt-7 flex flex-wrap items-center gap-3">
        <a class="btn btn-accent" href={`${releases}/download/${main.file}`} data-goatcounter-click={`download-${platform}`}>
          Download for {main.label}
        </a>
        <a class="btn" href={releases}>All releases</a>
      </div>
      <p class="mt-3 text-sm text-dim">
        Also for{" "}
        <For each={others}>
          {(p, i) => (
            <>
              {i() > 0 && ", "}
              <a class="underline underline-offset-4 hover:text-text" href={`${releases}/download/${downloads[p].file}`} data-goatcounter-click={`download-${p}`}>
                {downloads[p].label}
              </a>
            </>
          )}
        </For>
      </p>
      <div class="mt-12 grid gap-4 md:grid-cols-2">
        <img class="w-full border border-line" src="/screens/app.jpg" alt="The Modzarella app" width="1600" height="862" />
        <img class="w-full border border-line" src="/screens/menu.jpg" alt="The F1 mod menu in game" width="1600" height="900" />
      </div>
    </section>
  );
}
