import { For } from "solid-js";
import { downloads, releases, type Platform } from "../data";

const link = (p: Platform) => `${releases}/download/${downloads[p].file}`;
const others = (Object.keys(downloads) as Platform[]).filter((p) => p !== "mac");

export default function Hero() {
  return (
    <section class="wrap grid min-h-svh items-center gap-12 pb-12 pt-28 lg:grid-cols-[1fr_1fr]">
      <div>
        <h1 class="text-4xl font-bold tracking-tight sm:text-6xl">Mods for Cheese Rolling</h1>
        <p class="mt-4 max-w-md text-lg text-dim">
          Modzarella installs the mod loader, keeps your mods up to date and starts the game. Tick the mods you want and press Play.
        </p>
        <div class="mt-7 flex flex-wrap items-center gap-3">
          <a id="download" class="btn btn-accent gap-1" href={link("mac")} data-platform="mac" data-goatcounter-click="download-mac">
            Download for <span>{downloads.mac.label}</span>
          </a>
          <a class="btn" href={releases}>All releases</a>
        </div>
        <p class="mt-3 text-sm text-dim">
          Also for{" "}
          <For each={others}>
            {(p, i) => (
              <>
                {i() > 0 && ", "}
                <a class="underline underline-offset-4 hover:text-text" href={link(p)} data-platform={p} data-goatcounter-click={`download-${p}`}>
                  {downloads[p].label}
                </a>
              </>
            )}
          </For>
        </p>
      </div>
      <picture class="hero-shot">
        <source type="image/avif" srcset="/screens/menu.avif" />
        <img class="w-full" src="/screens/menu.webp" alt="The in-game mod menu" width="620" height="518" fetchpriority="high" />
      </picture>
    </section>
  );
}
