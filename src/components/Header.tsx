export default function Header() {
  return (
    <header class="fixed inset-x-0 top-3 z-10 px-3">
      <nav class="mx-auto flex max-w-5xl items-center gap-5 border border-line bg-bg/80 px-4 py-2.5 backdrop-blur-md" aria-label="Main">
        <a href="/" class="flex items-center gap-2 font-semibold">
          <img src="/logo.png" alt="" width="24" height="24" />
          Modzarella
        </a>
        <a class="ml-auto hidden text-sm text-dim hover:text-text sm:inline" href="/#mods">Featured</a>
        <a class="hidden text-sm text-dim hover:text-text sm:inline" href="/#make">Make a mod</a>
        <a class="text-sm text-dim hover:text-text max-sm:ml-auto" href="https://github.com/ModzarellaHQ">GitHub</a>
      </nav>
    </header>
  );
}
