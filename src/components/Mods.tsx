import { For, Show } from "solid-js";
import { builtIn, mods } from "../data";

export default function Mods() {
  return (
    <section id="mods" class="mx-auto max-w-6xl px-5 py-20">
      <div class="flex items-center gap-4">
        <h2 class="label">Mods</h2>
        <div class="groove flex-1" />
      </div>
      <div class="mt-8 grid gap-5 sm:grid-cols-2">
        <For each={mods}>
          {(mod) => (
            <article class="panel overflow-hidden">
              <img class="aspect-video w-full border-b border-edge object-cover" src={mod.image} alt={mod.name} loading="lazy" width="1600" height="900" />
              <div class="p-5">
                <h3 class="text-xl font-bold">{mod.name}</h3>
                <p class="mt-2 text-label/80">{mod.text}</p>
                <Show when={mod.keys.length}>
                  <div class="mt-4 flex flex-wrap gap-2">
                    <For each={mod.keys}>{(key) => <span class="keycap">{key}</span>}</For>
                  </div>
                </Show>
              </div>
            </article>
          )}
        </For>
      </div>
      <p class="mt-8 font-mono text-sm text-dim">
        built in, no mod needed: <span class="text-label">{builtIn.join(" · ")}</span>
      </p>
    </section>
  );
}
