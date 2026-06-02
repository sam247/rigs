# Next.js Migration Plan (Maintain Current RIGS Design + Routes)

## Summary

Convert the existing single-page React/Vite + React Router app into a Next.js project while keeping the current design system (Tailwind + shadcn-ui), layout (Header/Footer/WhatsApp widget), pages, and URL structure intact.

Primary outcomes:
- Same routes and content as today (including `/services/emergency-electrician`, `/blog`, `/electrician/tring`, etc.)
- No hard-refresh 404s on Vercel (Next handles routing natively)
- Preserve SEO behaviour (title/description/canonical + JSON-LD where currently present)

## Current State Analysis (Repo Facts)

- Framework/build: Vite + React 18 + TypeScript ([package.json](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/package.json))
- Routing: `react-router-dom` in [src/App.tsx](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/src/App.tsx)
- SEO: `react-helmet-async` via [src/components/Seo.tsx](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/src/components/Seo.tsx) and `HelmetProvider` in [src/main.tsx](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/src/main.tsx)
- Global HTML currently in [index.html](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/index.html) (includes default meta + JSON-LD)
- Tailwind: [tailwind.config.ts](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/tailwind.config.ts), global styles in [src/index.css](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/src/index.css)
- Pages/components: all page components under [src/pages](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/src/pages), layout via [Layout.tsx](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/src/components/layout/Layout.tsx)
- Static assets and SEO files: [public/](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/public) (includes `sitemap.xml`, `robots.txt`, images)
- Vercel SPA rewrite currently present in [vercel.json](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/vercel.json) (needed for SPA; not needed for Next)

## Assumptions & Decisions (Decision-Complete)

- **Next.js Router**: Use **App Router** (`app/`) because it is the current default and best long-term fit.
- **Repo layout**: **Replace in place** (repo root becomes the Next.js app) to avoid maintaining two apps.
- **Client vs Server components**: Pages/components that use `framer-motion`, `useState`, `useSearchParams`, etc. will be marked as `"use client"`. This preserves behaviour and layout; SSR benefits will be limited initially but URLs and deployment behaviour will be correct.
- **Sitemap/robots**: Keep `public/sitemap.xml` and `public/robots.txt` as static assets initially (same as now).
- **Redirect behaviour**:
  - `/services` → `/domestic`
  - `/commercial` → `/domestic`
  - `/services/fuse-board-upgrades` currently behaves like a redirect to `/domestic#fuse-board-upgrades`; in Next, implement a small client page that redirects via `window.location.replace()` and includes a fallback link (hash redirects are not reliably represented server-side).

If you want a different combination (Pages Router or side-by-side app), this plan can be adjusted before execution.

## Proposed Changes (Concrete File Plan)

### 1) Create Next.js project scaffolding (root)

- Add Next.js config & entrypoints:
  - `next.config.(js|mjs)`:
    - Configure `images` minimally (or keep using `<img>` initially).
    - Add `redirects()` for `/commercial` and `/services` (and optionally `/services/fuse-board-upgrades` if you want HTTP redirect without hash).
  - `app/layout.tsx`: root layout, imports global CSS, wraps the site shell and providers.
  - `app/globals.css`: either move or re-export existing Tailwind styles from [src/index.css](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/src/index.css). (Preferred: rename `src/index.css` → `app/globals.css` and update `components.json` tailwind css pointer accordingly.)
  - `app/not-found.tsx`: reuse content from [NotFound.tsx](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/src/pages/NotFound.tsx) without `useLocation` logging.

### 2) Replace React Router with file-based routes (preserve URLs)

Create these App Router routes (each file imports and reuses the existing page component logic, adjusted for Next):

- `/` → `app/page.tsx` (from [src/pages/Index.tsx](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/src/pages/Index.tsx))
- `/about` → `app/about/page.tsx`
- `/domestic` → `app/domestic/page.tsx`
- `/gallery` → `app/gallery/page.tsx`
- `/testimonials` → `app/testimonials/page.tsx`
- `/contact` → `app/contact/page.tsx`
- `/privacy` → `app/privacy/page.tsx`
- `/blog` → `app/blog/page.tsx`
- `/blog/consumer-unit-vs-fuse-box` → `app/blog/consumer-unit-vs-fuse-box/page.tsx`
- `/services/emergency-electrician` → `app/services/emergency-electrician/page.tsx`
- `/services/fuse-board-upgrades` → `app/services/fuse-board-upgrades/page.tsx` (client redirect shim to `/domestic#fuse-board-upgrades`)
- `/electrician/[slug]` → `app/electrician/[slug]/page.tsx` (reuse the current template + data: [LocationPage.tsx](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/src/pages/electrician/LocationPage.tsx), [locationData.ts](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/src/pages/electrician/locationData.ts))

Remove SPA routing entrypoints after migration:
- Remove `src/main.tsx` mount, `src/App.tsx` router, and `ScrollToTop` usage (or re-implement scroll restoration via `next/navigation` if needed).

### 3) Update navigation + links across components

Replace `react-router-dom` usage:
- `Link` → `next/link`
- `useLocation` (active nav) → `usePathname` from `next/navigation`
- `useSearchParams` (Contact prefill) → `useSearchParams` from `next/navigation` (client component)
- `useParams` (Location slug) → `params` argument in `page.tsx` or `useParams` from `next/navigation` (client)
- Any `Navigate` redirects → `redirect()` from `next/navigation` (server) or `window.location.replace()` (client) depending on hash needs

Key files that require changes:
- [Header.tsx](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/src/components/layout/Header.tsx)
- [Footer.tsx](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/src/components/layout/Footer.tsx)
- Pages under [src/pages](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/src/pages) (multiple `Link` imports)
- Any components with `Link` (e.g. [HeroSection.tsx](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/src/components/home/HeroSection.tsx), [ServicesSection.tsx](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/src/components/home/ServicesSection.tsx))

### 4) Replace Helmet-based SEO with Next Metadata + JSON-LD helper

Current SEO uses [Seo.tsx](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/src/components/Seo.tsx) (Helmet).

Plan:
- Introduce `src/lib/metadata.ts`:
  - `SITE_URL = "https://www.rigselectrical.co.uk"`
  - helper `buildMetadata({ title, description, path }): Metadata` (canonical, open graph, twitter)
- For each `app/**/page.tsx`, export `metadata` (or `generateMetadata`) using that helper.
- For JSON-LD (currently inserted via Helmet scripts in the emergency service + blog article):
  - Create a tiny `src/components/JsonLd.tsx` (client not required): renders `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />`
  - Use it in the relevant pages.
- Move the “site-wide” JSON-LD that currently lives in [index.html](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/index.html) into `app/layout.tsx` (or keep it on the home page only, depending on desired semantics).

### 5) Next.js-compatible providers wrapper (React Query, tooltips, toasts)

Because `app/layout.tsx` is a Server Component by default, move client-only providers into:
- `app/providers.tsx` with `"use client"`:
  - `QueryClientProvider` (from `@tanstack/react-query`)
  - `TooltipProvider`
  - `Toaster` + `Sonner`

Then wrap `children` in `app/layout.tsx` with `<Providers>{children}</Providers>`.

### 6) Static files and SEO assets remain intact

Keep in `public/`:
- `sitemap.xml` ([public/sitemap.xml](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/public/sitemap.xml))
- `robots.txt`
- `blog_images/*`, `services_images/*`, `hero-video.mp4`, `favicon.ico`

In Next, these resolve the same at `/sitemap.xml`, `/robots.txt`, etc.

### 7) Remove/replace Vite + SPA-only deployment config

- Replace build tooling:
  - Update `package.json` scripts from `vite` to `next dev`, `next build`, `next start`, `next lint`
  - Add `next` dependency; remove `react-router-dom` and `react-helmet-async`
  - Remove `vite.config.ts` and `index.html` usage (Next does not use them)
- Vercel:
  - Remove `vercel.json` rewrite-to-index.html (conflicts with Next routing)

### 8) Testing / Verification strategy

Minimal verification (must pass):
- `npm run build` (Next build)
- `npm run dev` then direct-load routes:
  - `/domestic`
  - `/blog`
  - `/blog/consumer-unit-vs-fuse-box`
  - `/services/emergency-electrician`
  - `/electrician/tring`
  - `/sitemap.xml` and `/robots.txt` still return the static files

Optional unit test migration:
- Current tests depend on React Router’s `MemoryRouter` (see [src/test](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/src/test)).
- If we keep Vitest, update tests to render page components directly and mock `next/link` + `next/navigation` in `src/test/setup.ts`.

## Rollout Notes

- This is a large migration; do it in a dedicated branch.
- After deploy, verify:
  - No 404s on hard refresh for any route
  - Metadata/canonical tags are present per page
  - JSON-LD is present for Emergency service, BlogPosting, and Location pages
  - Static files (`/sitemap.xml`, images) still serve correctly

