import { For } from "solid-js";
import Picture from "./Picture";

const steps = [
  { title: "Download Modzarella", text: "One app for macOS, Windows or Linux. It finds Cheese Rolling in your Steam library." },
  { title: "Tick the mods you want", text: "They install on the spot. The mod loader sets itself up the first time." },
  { title: "Press Play, then F1", text: "Pick Play Offline in the game. F1 opens the mod menu for settings and keys." },
];

export default function Steps() {
  return (
    <section class="wrap grid items-center gap-10 py-16 lg:grid-cols-[1fr_1.15fr]">
      <div>
      <h2 class="text-2xl font-bold">Get started</h2>
      <ol class="mt-6 grid gap-7">
        <For each={steps}>
          {(step, i) => (
            <li class="flex gap-4">
              <span class="font-mono text-sm text-accent">{i() + 1}</span>
              <div>
                <h3 class="font-semibold">{step.title}</h3>
                <p class="mt-1 text-sm text-dim">{step.text}</p>
              </div>
            </li>
          )}
        </For>
      </ol>
      </div>
      <Picture name="app" alt="The Modzarella app" width={1600} height={862} sizes="(min-width: 1024px) 540px, 100vw" />
    </section>
  );
}
