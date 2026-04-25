## Plan: Rebrand to RIGS Electrical

A full rebrand from "Greenhills Electric" (London, commercial + domestic, 60+ yrs) to **RIGS Electrical** — a Tring-based domestic electrician serving Hertfordshire with 30+ years experience.

---

### 1. Logo & assets
- Copy `user-uploads://rigs-logo.svg` → `src/assets/rigs-logo.svg` (dark, for light backgrounds)
- Copy `user-uploads://rigs-logo-white.svg` → `src/assets/rigs-logo-white.svg` (for the dark footer)
- Replace the `GREENHILLS / ELECTRIC` text wordmark in `src/components/layout/Header.tsx` with the dark SVG (sized ~h-10 md:h-12)
- Replace the brand text block in `src/components/layout/Footer.tsx` with the white SVG
- Update `index.html` `<title>` and meta description; remove the stale Lovable preview OG image so a fresh one regenerates

### 2. Colour palette (logo teal + brighter accent)
In `src/index.css`, retune the design tokens around the logo's `#426E86` (~HSL 200 35% 39%):
- `--primary: 200 35% 39%` (logo teal)
- `--accent: 190 75% 45%` (brighter cyan-teal for buttons / highlights / dashboard chips)
- `--ring: 200 35% 39%`
- Update `--greenhills-*` custom tokens (rename to `--rigs-*`) to a darker teal navy (`200 40% 18%`) for the footer / hero overlays
- Mirror these changes in `tailwind.config.ts` (rename `greenhills.*` → `rigs.*`) and update the small handful of `bg-greenhills-dark` / `text-greenhills-*` usages across `Footer.tsx`, `WhyChooseUs.tsx`, `ReviewsSection.tsx`, etc.
- Dark mode tokens shifted to the same teal hue family

### 3. Drop the Commercial side
- Delete `src/pages/Commercial.tsx` and `src/components/home/ServicesSection.tsx`'s commercial card (rework into a single domestic-focused services grid)
- Remove the `/commercial` route from `src/App.tsx` and the nav link in `Header.tsx`
- Remove the "Commercial Services" link from `Footer.tsx`
- Update `src/pages/Domestic.tsx` to be the primary services page; tighten copy to Tring/Hertfordshire context

### 4. Marketing copy updates
Across `HeroSection`, `About.tsx`, `Contact.tsx`, `WhyChooseUs`, `TrustBadges`, `Testimonials.tsx`, `Privacy.tsx`, `CTASection`, `ReviewsSection`:
- Brand name: **Greenhills Electric → RIGS Electrical**
- Location: **London & surrounding areas → Tring, Hertfordshire & surrounding areas**
- Experience: **60+ years → 30+ years**
- Trust strip: **NICEIC Approved • Part P Registered • 60+ Years Experience → NICEIC Registered • C&G Qualified • 30+ Years Experience**
- Hero headline retuned to a domestic-focused "Tring's trusted local electrician" angle
- Footer trust badges: NICEIC Registered • C&G Qualified (drop Trustmark / Part P references)

### 5. Contact details (you supplied)
Replace everywhere they appear (Header top bar, Footer, Contact page, CTASection, schema metadata):
- **Phone:** `01442 264125` → **`07989 205468`** (`tel:+447989205468`)
- **Email:** `info@greenhillselectric.co.uk` → **`rigselectrical@icloud.com`**
- **Instagram:** add **`@rigselectrical`** as a new social link in the footer (Instagram icon from lucide-react)
- Domain in `index.html` canonical: `greenhillselectric.co.uk` → `rigselectrical.co.uk`

### 6. Admin portal touch-ups
- `AdminDashboard.tsx` SaaS footer: "Greenhills Electric" → "RIGS Electrical"
- `ProjectDetail.tsx`: any hard-coded brand references swapped
- The portal Login/Signup pages keep the new logo at the top

### 7. Fix outstanding TS build error
`src/components/portal/admin/InvoicesTab.tsx:99` — type the status-update payload properly (cast through the generated `Database['public']['Tables']['invoices']['Update']` type, or narrow the dynamic object) so the typecheck passes again. This is unrelated to the rebrand but blocking builds.

---

### Files touched
**Created:** `src/assets/rigs-logo.svg`, `src/assets/rigs-logo-white.svg`
**Deleted:** `src/pages/Commercial.tsx`
**Edited:** `index.html`, `src/index.css`, `tailwind.config.ts`, `src/App.tsx`, `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`, `src/components/home/HeroSection.tsx`, `src/components/home/ServicesSection.tsx`, `src/components/home/WhyChooseUs.tsx`, `src/components/home/TrustBadges.tsx`, `src/components/home/ReviewsSection.tsx`, `src/components/home/CTASection.tsx`, `src/components/home/ProjectsShowcase.tsx`, `src/pages/About.tsx`, `src/pages/Contact.tsx`, `src/pages/Domestic.tsx`, `src/pages/Testimonials.tsx`, `src/pages/Privacy.tsx`, `src/components/portal/AdminDashboard.tsx`, `src/components/portal/admin/ProjectDetail.tsx`, `src/components/portal/admin/InvoicesTab.tsx` (TS fix)

### Out of scope
- No favicon swap (you haven't supplied a square mark — happy to extract one from the SVG afterwards if you'd like)
- No content changes to the Gallery/Projects images — those stay as-is unless you want them removed/replaced
- No SEO sitemap regeneration beyond meta tags