import { For } from "solid-js";
import { builtIn, mods } from "../data";
import Picture from "./Picture";

export default function Mods() {
  return (
    <section id="mods" class="wrap py-16">
      <h2 class="text-2xl font-bold">A few to start with</h2>
      <p class="mt-2 max-w-xl text-dim">Some of the mods you can install from the app. Anyone can make more.</p>
      <div class="mt-6 grid gap-8 sm:grid-cols-2">
        <For each={mods}>
          {(mod) => (
            <article>
              <Picture name={mod.image} alt={mod.name} width={1600} height={900} sizes="(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw" />
              <h3 class="mt-3 font-semibold">{mod.name}</h3>
              <p class="mt-1 text-dim">{mod.text}</p>
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
