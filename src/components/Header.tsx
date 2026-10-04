export default function Header() {
  return (
    <header class="border-b border-edge bg-linear-to-b from-[#2e2720] to-panel-low shadow-[0_1px_0_rgb(255_255_255/.04)]">
      <div class="mx-auto flex max-w-6xl items-center gap-6 px-5 py-3.5">
        <a href="/" class="text-2xl font-black tracking-tight">
          Modz<span class="text-wax">arella</span>
        </a>
        <nav class="ml-auto flex items-center gap-5 font-mono text-sm text-dim">
          <a class="hidden hover:text-label sm:inline" href="#mods">mods</a>
          <a class="hidden hover:text-label sm:inline" href="#make">make a mod</a>
          <a class="hover:text-label" href="https://github.com/ModzarellaHQ">github</a>
        </nav>
      </div>
    </header>
  );
}
