// Fills dist/index.html with each prerendered page, then drops the server bundle.
import { readFileSync, rmSync, writeFileSync } from "node:fs";

const { pages, render } = await import("./dist-ssr/server.js");
const template = readFileSync("dist/index.html", "utf8");
for (const [name, page] of Object.entries(pages)) {
  const html = template
    .replace("<!--title-->", page.title)
    .replace("<!--description-->", page.description)
    .replaceAll("<!--path-->", page.path === "/404" ? "/" : page.path)
    .replace("<!--app-->", render(name));
  writeFileSync(`dist/${name}.html`, html);
}
rmSync("dist-ssr", { recursive: true });
