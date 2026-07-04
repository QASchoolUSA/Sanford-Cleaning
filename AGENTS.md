# AGENTS.md

## Cursor Cloud specific instructions

This repository is a single **Next.js 16 / React 19** website ("Sanford Cleaning") managed with **npm**. It is self-contained for browsing and quoting, but its transactional flows (payments + email) depend on third-party secrets. `npm install` is handled by the startup update script.

### Services

| Service | Command | Port | Notes |
|---|---|---|---|
| Next.js web app | `npm run dev` | 3000 | The only service. Standard scripts (`dev`, `build`, `start`, `lint`) live in `package.json`. |

No env vars are required to run the dev server or browse the site.

### What works without secrets

- All marketing/SEO pages.
- The interactive multi-step price calculator at `/booking` (`src/components/PriceCalculator.tsx`): selecting a service and entering home details computes a live estimated price entirely client-side. This is the best no-secrets smoke test of core functionality.

### Flows that require secrets (non-obvious)

- **Email** (quote/booking/hire routes under `src/app/api/emails/*`) uses `nodemailer` and requires SMTP config. If `SMTP_HOST`/`SMTP_PORT`/`SMTP_USER`/`SMTP_PASS` are unset, these routes return HTTP 500 `{"error":"SMTP not configured"}` and the front-end shows an error alert — expected in a keyless environment, not a setup bug.
- **Stripe checkout** (`src/app/api/stripe/create-checkout-session`) requires `STRIPE_SECRET_KEY` (server) and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (client).

See `.env.example` for the full list (analytics, Stripe, email/SMTP). Provide these via `.env.local` (gitignored) only when you need to exercise payments or email end to end.

### Lint

`npm run lint` runs but currently reports many pre-existing errors/warnings (e.g. `@typescript-eslint/no-explicit-any`, `react/no-unescaped-entities`, unused vars) in the committed source. These are not environment problems — do not treat a non-zero lint exit as a setup failure, and do not "fix" them unless the task asks.
