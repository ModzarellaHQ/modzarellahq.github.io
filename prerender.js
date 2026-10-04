import { readFileSync, rmSync, writeFileSync } from "node:fs";

const { pages, render } = await import("./dist-ssr/server.js");
const csp = `<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'self'; style-src 'self'; img-src 'self' https://modzarella.goatcounter.com; connect-src https://modzarella.goatcounter.com; manifest-src 'self'; base-uri 'none'; form-action 'none'; upgrade-insecure-requests">`;
const template = readFileSync("dist/index.html", "utf8").replace("<meta charset=\"utf-8\">", `<meta charset="utf-8">\n  ${csp}`);
for (const [name, page] of Object.entries(pages)) {
  const html = template
    .replaceAll("<!--title-->", page.title)
    .replaceAll("<!--description-->", page.description)
    .replaceAll("<!--path-->", page.path === "/404" ? "/" : page.path)
    .replace("<!--app-->", render(name));
  writeFileSync(`dist/${name}.html`, html);
}
rmSync("dist-ssr", { recursive: true });
