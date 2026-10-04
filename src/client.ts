import "./styles.css";

// the page is rendered for macOS; swap the main download button for the visitor's platform
const ua = navigator.userAgent;
const platform = /Windows/.test(ua) ? "windows" : /Linux|X11/.test(ua) && !/Android/.test(ua) ? "linux" : null;
const main = document.getElementById("download");
const alt = platform && document.querySelector<HTMLAnchorElement>(`a[data-platform="${platform}"]`);
if (main && alt) {
  const label = main.querySelector("span")!;
  [main.dataset.platform, alt.dataset.platform] = [alt.dataset.platform, main.dataset.platform];
  [main.dataset.goatcounterClick, alt.dataset.goatcounterClick] = [alt.dataset.goatcounterClick, main.dataset.goatcounterClick];
  const href = main.getAttribute("href")!;
  main.setAttribute("href", alt.getAttribute("href")!);
  alt.setAttribute("href", href);
  [label.textContent, alt.textContent] = [alt.textContent, label.textContent];
}

if (import.meta.env.DEV) import("./dev");
