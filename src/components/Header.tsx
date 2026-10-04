export default function Header() {
  return (
    <header class="border-b border-line">
      <div class="mx-auto flex max-w-5xl items-center gap-6 px-5 py-3">
        <a href="/" class="font-semibold">Modzarella</a>
        <nav class="ml-auto flex items-center gap-5 text-sm text-dim">
          <a class="hidden hover:text-text sm:inline" href="#mods">Mods</a>
          <a class="hidden hover:text-text sm:inline" href="#make">Make a mod</a>
          <a class="hover:text-text" href="https://github.com/ModzarellaHQ">GitHub</a>
        </nav>
      </div>
    </header>
  );
}
