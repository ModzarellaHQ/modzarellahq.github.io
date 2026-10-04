import { For } from "solid-js";
import { example } from "../data";

const keywords = /\b(local|function|if|then|end|for|in|do|return)\b/;

function Line(props: { text: string }) {
  const parts = props.text.split(/(\b(?:local|function|if|then|end|for|in|do|return)\b|"[^"]*")/);
  return (
    <div>
      <For each={parts}>
        {(part) =>
          keywords.test(part) ? <span class="text-wax-light">{part}</span>
          : part.startsWith('"') ? <span class="text-brass">{part}</span>
          : part}
      </For>
      {"​"}
    </div>
  );
}

export default function MakeAMod() {
  return (
    <section id="make" class="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-[1fr_1.2fr]">
      <div>
        <h2 class="label">Make a mod</h2>
        <p class="mt-4 text-3xl font-black leading-tight tracking-tight">A mod is a Lua file. No compiler, no setup.</p>
        <p class="mt-4 max-w-md text-label/80">
          Settings and keys you declare show up in the F1 menu by themselves. Edit the file, press Reload in game, and see the change.
        </p>
        <div class="mt-7 flex flex-wrap gap-4">
          <a class="btn" href="https://github.com/ModzarellaHQ/Modzarella/blob/main/docs/lua-api.md">Read the Lua API</a>
          <a class="btn" href="https://github.com/ModzarellaHQ/Modz">Browse the mods</a>
        </div>
      </div>
      <figure class="panel overflow-hidden">
        <figcaption class="flex items-center justify-between border-b border-edge bg-panel-low px-4 py-2.5 font-mono text-xs text-dim">
          <span>mods/superjump/main.lua</span>
          <span class="keycap">J</span>
        </figcaption>
        <pre class="overflow-x-auto bg-inset px-5 py-4 font-mono text-[13px] leading-relaxed text-label"><For each={example.split("\n")}>{(line) => <Line text={line} />}</For></pre>
      </figure>
    </section>
  );
}
