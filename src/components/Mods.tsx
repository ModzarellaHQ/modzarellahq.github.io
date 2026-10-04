import { For, Show } from "solid-js";
import { builtIn, mods } from "../data";

export default function Mods() {
  return (
    <section id="mods" class="mx-auto max-w-5xl px-5 py-16">
      <h2 class="text-2xl font-bold">Mods</h2>
      <div class="mt-6 grid gap-6 sm:grid-cols-2">
        <For each={mods}>
          {(mod) => (
            <article>
              <img class="aspect-video w-full rounded border border-line object-cover" src={mod.image} alt={mod.name} loading="lazy" width="1600" height="900" />
              <h3 class="mt-3 font-semibold">{mod.name}</h3>
              <p class="mt-1 text-dim">{mod.text}</p>
              <Show when={mod.keys.length}>
                <div class="mt-2 flex flex-wrap gap-1.5">
                  <For each={mod.keys}>{(key) => <span class="key">{key}</span>}</For>
                </div>
              </Show>
            </article>
          )}
        </For>
      </div>
      <p class="mt-10 text-sm text-dim">
        Built into Modzarella: <span class="text-text">{builtIn.join(", ")}</span>.
      </p>
    </section>
  );
}
