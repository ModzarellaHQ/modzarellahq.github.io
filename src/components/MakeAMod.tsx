import { For } from "solid-js";
import { example } from "../data";

const keywords = /\b(local|function|if|then|end|for|in|do|return)\b/;

function Line(props: { text: string }) {
  const parts = props.text.split(/(\b(?:local|function|if|then|end|for|in|do|return)\b|"[^"]*")/);
  return (
    <div>
      <For each={parts}>
        {(part) =>
          keywords.test(part) ? <span class="text-accent">{part}</span>
          : part.startsWith('"') ? <span class="text-[#8fd18f]">{part}</span>
          : part}
      </For>
      {"​"}
    </div>
  );
}

export default function MakeAMod() {
  return (
    <section id="make" class="wrap grid items-center gap-10 py-16 lg:grid-cols-[1fr_1.2fr]">
      <div>
        <h2 class="text-2xl font-bold">Make a mod</h2>
        <p class="mt-3 max-w-md text-dim">
          A mod is a Lua file, so there's nothing to compile.
          Settings and keys you declare show up in the mod menu by themselves. Edit the file, press Reload in game, and see the change.
        </p>
        <div class="mt-6 flex flex-wrap gap-3">
          <a class="btn" href="https://github.com/ModzarellaHQ/Modzarella/blob/main/docs/lua-api.md">Read the Lua API</a>
          <a class="btn" href="https://github.com/ModzarellaHQ/modz">Browse the mods</a>
        </div>
      </div>
      <figure class="overflow-hidden border border-line">
        <figcaption class="border-b border-line bg-surface px-4 py-2 font-mono text-xs text-dim">mods/superjump/main.lua</figcaption>
        <pre class="overflow-x-auto bg-field px-5 py-4 font-mono text-[13px] leading-relaxed"><For each={example.split("\n")}>{(line) => <Line text={line} />}</For></pre>
      </figure>
    </section>
  );
}
