# Keshev LP

Standalone landing page for KeshevPlus (ADHD diagnosis & treatment clinic).

A single, focused page for campaigns and lead generation, sharing the visual
identity (navbar, hero, branding) of the main
[keshevplus](https://github.com/keshevplus/keshevplus) site and the
[keshev-web](https://github.com/keshevplus/keshev-web) rebuild, but built and
deployed independently.

## Standalone by design

This repo has **no backend of its own**. It's a static React/Vite build that:

- Posts contact-form submissions directly to the shared keshevplus API
  (`POST {VITE_API_BASE_URL}/api/contact`) — submissions land in the same
  admin dashboard/CRM as the main site.
- Links out to `VITE_ADMIN_DASHBOARD_URL` for staff/admin access. It never
  hosts an admin UI itself.

## Getting started

```sh
npm install
cp .env.example .env.local   # then edit as needed
npm run dev
```

For local development against a locally running `keshevplus` backend, set:

```
VITE_API_BASE_URL=http://localhost:5000
```

The local `keshevplus` backend's CORS allowlist only permits specific
origins (see `server/app.ts` there) — add your local dev origin to
`CORS_ALLOWED_ORIGINS` when running it locally, or the contact form request
will fail with a CORS error in the browser.

## Deployment

Deployed to **lp.keshevplus.co.il** via Vercel (`vercel.json` handles the SPA
rewrite). Set `VITE_API_BASE_URL` and `VITE_ADMIN_DASHBOARD_URL` in the
Vercel project's environment variables (defaults already point at the
production keshevplus API/admin).

The production keshevplus backend's CORS allowlist must include
`https://lp.keshevplus.co.il` for the contact form to work once deployed.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
