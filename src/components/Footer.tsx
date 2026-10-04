export default function Footer() {
  return (
    <footer class="wrap flex flex-wrap items-center gap-x-6 gap-y-2 py-8 text-sm text-dim">
      <span class="font-semibold text-text">Modzarella</span>
      <span>Not affiliated with the developers of Cheese Rolling.</span>
      <nav class="flex gap-5 sm:ml-auto" aria-label="Footer">
        <a class="hover:text-text" href="/privacy">Privacy</a>
        <a class="hover:text-text" href="/terms">Terms</a>
        <a class="hover:text-text" href="https://github.com/ModzarellaHQ">GitHub</a>
      </nav>
    </footer>
  );
}
