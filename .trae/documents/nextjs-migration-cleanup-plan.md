## Summary

Finalize the in-place migration to a lean Next.js (App Router) project while preserving all existing design, layout, URLs, and page content. Remove unused Vite/Lovable/Supabase/testing artifacts, replace unit tests with Playwright smoke tests, and verify build + route access.

## Current State Analysis (Repo Facts)

- Next.js App Router already exists at [app/](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/app) and preserves key URLs (home, domestic, blog, emergency service, electrician slug).
- Many routes in `app/**/page.tsx` are thin wrappers importing legacy “page components” from [src/pages/](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/src/pages).
- React Router + Helmet are removed from `package.json`, but unit tests under [src/test/](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/src/test) still reference them (will currently fail).
- Vitest config still imports `@vitejs/plugin-react-swc` ([vitest.config.ts](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/vitest.config.ts)), but that dependency is not present.
- Lovable tooling is still present:
  - [README.md](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/README.md) describes a Vite/Lovable workflow
  - [playwright.config.ts](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/playwright.config.ts) and [playwright-fixture.ts](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/playwright-fixture.ts) depend on `lovable-agent-playwright-config`
  - `lovable-tagger` is in `devDependencies`
- Supabase appears unused by the application code:
  - Only [src/integrations/supabase/client.ts](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/src/integrations/supabase/client.ts) references Supabase; no other app code imports it.
  - A full [supabase/](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/supabase) migrations folder exists.
- Vite artifacts remain (mostly placeholders) but are unused by Next:
  - [index.html](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/index.html)
  - [vite.config.ts](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/vite.config.ts)
  - [src/main.tsx](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/src/main.tsx), [src/App.tsx](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/src/App.tsx), [src/vite-env.d.ts](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/src/vite-env.d.ts)
- Deployment config already matches Next expectations:
  - [vercel.json](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/vercel.json) is `{}` (no SPA rewrite)
  - `package.json` scripts are Next-based (`next dev/build/start`)

## Assumptions & Decisions (Locked)

- Keep Next.js **App Router** and preserve all current URLs and page content exactly as-is (no redesign).
- Prefer a lean repo:
  - Remove Vite-only files/config.
  - Remove Lovable-specific files/deps.
  - Remove Supabase files/deps (currently unused).
  - Remove Vitest + React Testing Library unit tests (switch to Playwright only).
- Keep `.trae/` (tooling docs) in the repo.
- Git: create commits and push after each logical change set (explicitly requested).

## Proposed Changes (Implementation Plan)

### 1) Make the Next codebase “source-of-truth” (remove `src/pages` routing artifacts)

Goal: eliminate duplicate routing concepts and make `app/**/page.tsx` the real pages (leaner structure).

- Move page implementations currently in `src/pages/*` into their corresponding `app/**/page.tsx` files, keeping the same JSX structure and reusing existing shared components under `src/components/**`.
- Remove the `src/pages` directory once all imports are migrated.

Concrete edits:
- Update each route wrapper to inline/move its component logic and then delete the old file:
  - [app/page.tsx](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/app/page.tsx) (currently imports `src/pages/Index.tsx`)
  - [app/about/page.tsx](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/app/about/page.tsx)
  - [app/domestic/page.tsx](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/app/domestic/page.tsx)
  - [app/gallery/page.tsx](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/app/gallery/page.tsx)
  - [app/testimonials/page.tsx](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/app/testimonials/page.tsx)
  - [app/contact/page.tsx](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/app/contact/page.tsx)
  - [app/privacy/page.tsx](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/app/privacy/page.tsx)
  - [app/blog/page.tsx](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/app/blog/page.tsx)
  - [app/blog/consumer-unit-vs-fuse-box/page.tsx](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/app/blog/consumer-unit-vs-fuse-box/page.tsx)
  - [app/services/emergency-electrician/page.tsx](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/app/services/emergency-electrician/page.tsx)
  - [app/services/fuse-board-upgrades/page.tsx](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/app/services/fuse-board-upgrades/page.tsx)
- Replace electrician location routing to no longer depend on `src/pages/electrician/*`:
  - Move [src/pages/electrician/locationData.ts](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/src/pages/electrician/locationData.ts) into `src/content/locations.ts` (or similar) and update imports.
  - Convert [app/electrician/[slug]/page.tsx](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/app/electrician/%5Bslug%5D/page.tsx) to:
    - render the location page without a wrapper component
    - export `generateMetadata` based on the slug + location config (title/description/canonical)
- Create a shared “not found” UI component for reuse by dynamic pages:
  - Add `src/components/NotFound.tsx`
  - Update [app/not-found.tsx](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/app/not-found.tsx) to reuse it
  - Update the electrician location page rendering path to use it when slug is unknown

Expected deletions:
- Delete [src/pages/](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/src/pages) entirely once no longer referenced.

### 2) Remove Vite-only artifacts (repo cleanup)

Goal: eliminate unused Vite scaffolding and config.

Delete:
- [index.html](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/index.html)
- [vite.config.ts](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/vite.config.ts)
- [src/main.tsx](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/src/main.tsx)
- [src/App.tsx](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/src/App.tsx)
- [src/vite-env.d.ts](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/src/vite-env.d.ts)
- Remove/merge TypeScript project references that only exist for Vite:
  - likely delete `tsconfig.node.json`
  - simplify `tsconfig.json` into a single Next-friendly config (keep `baseUrl` + `@/*` paths)

### 3) Remove Supabase (unused) and related dependency bloat

Delete:
- [src/integrations/supabase/](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/src/integrations/supabase)
- [supabase/](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/supabase)

Update:
- Remove `@supabase/supabase-js` from `dependencies`
- Remove any unused `.env` variables if they were only for Supabase (do not commit secrets; only remove unused keys if safe)

### 4) Replace unit tests with Playwright smoke tests (Playwright only)

Goal: keep a minimal but meaningful safety net that validates the critical paths as a user sees them.

Remove unit testing:
- Delete [src/test/](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/src/test)
- Remove Vitest tooling:
  - delete [vitest.config.ts](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/vitest.config.ts)
  - remove `vitest`, `jsdom`, `@testing-library/*` from `devDependencies`
  - remove `vitest/globals` types from TypeScript config

Add Playwright smoke suite:
- Replace Lovable-specific Playwright config with a standard config:
  - rewrite [playwright.config.ts](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/playwright.config.ts) to use `defineConfig` from `@playwright/test`
  - delete [playwright-fixture.ts](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/playwright-fixture.ts)
- Add tests under `tests/`:
  - `tests/smoke-routes.spec.ts`:
    - start from baseURL (config sets `http://localhost:3000`)
    - verify HTTP 200 + key H1s on:
      - `/domestic`
      - `/blog`
      - `/blog/consumer-unit-vs-fuse-box`
      - `/services/emergency-electrician`
      - `/electrician/tring`
    - verify static assets resolve:
      - `/sitemap.xml`
      - `/robots.txt`
      - `/blog_images/consumer_unit_vs_fuse_box.jpg`
      - `/services_images/emergency_electrician_hero.jpg` (or whichever is used by the hero)

Update scripts:
- In [package.json](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/package.json):
  - set `"test"` to `playwright test`
  - (optional) add `"test:ui"` and `"test:headed"` scripts for local debugging

### 5) Remove Lovable-specific dependencies and files

Update:
- Remove `lovable-tagger` from `devDependencies`
- Remove any Lovable Playwright config dependency (`lovable-agent-playwright-config`) if present

Delete:
- [/.lovable/](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/.lovable) folder (if not needed for your workflow)

### 6) Refresh docs (README + ROADMAP) to reflect Next.js reality

Update:
- [README.md](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/README.md):
  - replace Vite/Lovable-specific instructions with Next.js dev/build/start steps
  - keep it short (lean repo goal)
- [ROADMAP.MD](file:///Users/sampettiford/Documents/Cursor/React%20Sites/rigs/ROADMAP.MD):
  - add an explicit delivered item for “Migrated Vite SPA to Next.js App Router”
  - add a delivered item for “Repo cleanup: removed Vite/Lovable/Supabase + switched tests to Playwright smoke suite”

## Verification Steps (Must Pass)

- Install deps and ensure lockfile matches `package.json`:
  - `npm install`
- Next build:
  - `npm run build`
- Playwright smoke:
  - `npm test` (now Playwright)
- Manual spot-check in dev:
  - `npm run dev`
  - direct-load the same routes as above (hard refresh)
  - confirm visuals/layout match current site (header, footer, typography, images)

## Execution Notes

- Each logical step (routing cleanup, removal of Vite artifacts, removal of Supabase, testing switch, docs) will be committed and pushed separately as requested.
