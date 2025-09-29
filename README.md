
  # Landing Page para Arandu

  This is a code bundle for Landing Page para Arandu. The original project is available at https://www.figma.com/design/xaFodWfJ9iYQe13qL4bPua/Landing-Page-para-Arandu.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  
  ## Deploy (Vite)

  This project is a static Vite + React app and builds to the `build/` folder (see `vite.config.ts`). Below are common hosting options:

  ### 1) Netlify
  - Already configured with `netlify.toml` and SPA fallback `_redirects`.
  - Quick steps:
    1. Build: `npm run build`
    2. Deploy via CLI: `npx netlify-cli deploy --prod --dir=build`
       - Or drag-and-drop the `build/` folder into https://app.netlify.com/drop

  ### 2) Vercel
  - `vercel.json` included for SPA fallback.
  - Quick steps:
    1. Build: `npm run build`
    2. Deploy: `npx vercel --prod`

  ### 3) Cloudflare Pages
  - Build command: `npm run build`
  - Output directory: `build`
  - Framework preset: Vite (optional)

  ### 4) GitHub Pages
  - If serving from a subpath (user.github.io/repo), set `base` in `vite.config.ts` to `'/repo-name/'` before building.
  - Build: `npm run build`
  - Publish `build/` via GitHub Pages (Actions or `gh-pages`): `npx gh-pages -d build`

  ### Local preview of production build
  - `npm run preview` to serve the built `build/` folder locally.
  