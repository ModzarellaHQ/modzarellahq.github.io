import { For } from "solid-js";

const steps = [
  { title: "Download Modzarella", text: "One app for macOS, Windows or Linux. It finds Cheese Rolling in your Steam library." },
  { title: "Tick the mods you want", text: "They install on the spot. The mod loader sets itself up the first time." },
  { title: "Press Play, then F1", text: "Pick Play Offline in the game. F1 opens the mod menu for settings and keys." },
];

export default function Steps() {
  return (
    <section class="border-y border-line">
      <ol class="mx-auto grid max-w-5xl gap-8 px-5 py-12 md:grid-cols-3">
        <For each={steps}>
          {(step, i) => (
            <li>
              <p class="font-mono text-sm text-accent">{i() + 1}</p>
              <h3 class="mt-1 font-semibold">{step.title}</h3>
              <p class="mt-1 text-sm text-dim">{step.text}</p>
            </li>
          )}
        </For>
      </ol>
    </section>
  );
}
