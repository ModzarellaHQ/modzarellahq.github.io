import { For } from "solid-js";

const steps = [
  { title: "Download Modzarella", text: "One app for macOS, Windows or Linux. It finds Cheese Rolling in your Steam library." },
  { title: "Switch on mods", text: "Flip a switch and the mod installs. The mod loader sets itself up the first time." },
  { title: "Press Play, then F1", text: "Pick Play Offline in the game. F1 opens the mod menu for settings and keys." },
];

export default function Steps() {
  return (
    <section class="border-y border-edge bg-inset/60">
      <ol class="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-3">
        <For each={steps}>
          {(step, i) => (
            <li class="flex gap-4">
              <span class="keycap h-8 text-sm">{i() + 1}</span>
              <div>
                <h3 class="font-bold">{step.title}</h3>
                <p class="mt-1 text-sm text-label/75">{step.text}</p>
              </div>
            </li>
          )}
        </For>
      </ol>
    </section>
  );
}
