# Sanford Cleaning – Next.js (Root)

The Next.js application now lives at the repository root.

## Project Structure
- `src/app/` – App Router pages and layout
- `public/` – static assets, `robots.txt`, `sitemap.xml`
- Top-level configs: `next.config.*`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`

## Run Locally
```bash
npm install
npm run dev # http://localhost:3000
```

## Build & Start
```bash
npm run build
npm run start # defaults to http://localhost:3000
# or set a custom port
PORT=3003 npm run start
```

## Notes
- Use `.env*` files at the repo root for environment variables.
- Deployments should target the repo root as the application root.
- SEO assets are managed under `public/`.
