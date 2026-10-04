# modzarella.dev

The website for [Modzarella](https://github.com/ModzarellaHQ/Modzarella). Vite, SolidJS and Tailwind, deployed on Netlify, counted with GoatCounter.

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # prerendered pages in dist/
```

Every page is rendered to static HTML at build time (`src/server.tsx`, `prerender.js`), so visitors get no framework JavaScript. The only script picks the right download button (`src/client.ts`).

- Pages: `src/pages.tsx`. Content: `src/data.ts` and `src/components/`.
- Colours: `src/theme.css`, copied from the Modzarella repo's `assets/theme.css`.
- Screenshots: `public/screens/`, AVIF and WebP at 400, 800 and full width.
- Security headers and the content security policy: `netlify.toml`.
- Analytics: GoatCounter site `modzarella`, its script self-hosted as `public/count.js`.
