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
    <section class="relative overflow-hidden">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_70%_at_85%_0%,rgb(200_32_47/.28),transparent)]" />
      <div class="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <p class="label">Cheese Rolling · offline mods</p>
          <h1 class="mt-4 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl">
            Mods for Cheese Rolling, <span class="text-brass">one click away.</span>
          </h1>
          <p class="mt-5 max-w-md text-lg text-label/80">
            Pick your mods, press Play, and chase the cheese down the hill in a BMW. Modzarella sets up the game for you.
          </p>
          <div class="mt-8 flex flex-wrap items-center gap-4">
            <a class="btn btn-wax px-6 py-3 text-base uppercase tracking-wide" href={`${releases}/download/${main.file}`} data-goatcounter-click={`download-${platform}`}>
              Download for {main.label}
            </a>
            <a class="btn" href={releases}>All releases</a>
          </div>
          <p class="mt-4 font-mono text-xs text-dim">
            also for{" "}
            <For each={others}>
              {(p, i) => (
                <>
                  {i() > 0 && " · "}
                  <a class="underline decoration-edge underline-offset-4 hover:text-label" href={`${releases}/download/${downloads[p].file}`} data-goatcounter-click={`download-${p}`}>
                    {downloads[p].label}
                  </a>
                </>
              )}
            </For>
          </p>
        </div>

        <div class="relative">
          <img class="panel w-full rounded-xl" src="/screens/menu.jpg" alt="The F1 mod menu over the game" width="1600" height="900" />
          <img class="panel absolute -bottom-8 left-3 w-[58%] rounded-lg lg:-bottom-10 lg:-left-6" src="/screens/app.jpg" alt="The Modzarella app" width="1600" height="1045" />
        </div>
      </div>
    </section>
  );
}
