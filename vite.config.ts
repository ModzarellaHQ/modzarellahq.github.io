import { existsSync, readFileSync } from "node:fs";
import { defineConfig, type Plugin } from "vite";
import solid from "vite-plugin-solid";
import tailwindcss from "@tailwindcss/vite";

const notFound = (): Plugin => ({
  name: "not-found",
  configurePreviewServer(server) {
    server.middlewares.use((req, res, next) => {
      const path = decodeURIComponent((req.url ?? "/").split("?")[0]);
      const file = `dist${path}`;
      if (path === "/" || existsSync(file) || existsSync(`${file}.html`)) return next();
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      res.end(readFileSync("dist/404.html"));
    });
  },
});

export default defineConfig({
  plugins: [solid({ ssr: true }), tailwindcss(), notFound()],
  build: { modulePreload: { polyfill: false } },
});
