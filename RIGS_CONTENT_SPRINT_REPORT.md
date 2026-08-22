# RIGS Electrical — Content Sprint Report

**Site:** https://rigselectrical.co.uk/  
**Sprint date:** August 2026  
**Deliverable:** 10 new SEO articles (minimum 1,200 substantive body words each)

---

## Executive summary

Ten new blog articles were researched, written, registered, and cross-linked into the existing RIGS content network. All articles exceed the 1,200-word substantive body threshold. Production build and ESLint completed successfully.

**Constraints applied:**
- No unverified Tring housing-stock claims
- UK benchmark costs clearly separated from quotation factors and RIGS pricing (no fixed RIGS prices published in repo)
- Part P / EICR / safety claims aligned to GOV.UK, Electrical Safety First, NICEIC, IET (BS 7671)
- No EV charger, hot tub, or solar service-led content (not confirmed in repo)
- Intent ownership preserved — articles target informational long-tail, not broad commercial terms owned by `/electrician/tring` or `/services/*`

---

## Research summary

### Google Search Console (sc-domain:rigselectrical.co.uk)
- ~19 clicks / 3,135 impressions (recent window)
- Strong local visibility: `electrician tring` (~position 6)
- Blog traction: fuse board, fault-finding, kitchen electrics
- Gaps identified: rewire cost, consumer unit cost, pre-purchase checks, socket safety
- Misassignment: `electric socket buzzing` landing on emergency service page → addressed via dedicated unsafe-socket article

### Bing Webmaster
- Brand + Tring electrician queries
- Emerging visibility for consumer unit vs fuse box, tripping content

### GA4 (property 544927551)
- Low organic volume (~43 sessions / 90 days)
- Fuse board blog receives organic traffic
- Conversion events present; phone-click tracking not configured

### SERP / competitor (Tavily, Bright Data)
- National aggregators dominate cost SERPs
- Local electrician planning guides under-served
- Garden electrics SERP retail-heavy — opportunity for qualified domestic guide

---

## 10 articles published

| # | Slug | Primary intent | Body words | Status |
|---|------|----------------|------------|--------|
| 1 | `how-much-does-it-cost-to-rewire-a-house-in-tring` | Rewire cost / budgeting | **1,422** | PASS |
| 2 | `do-i-need-a-full-rewire-or-partial-rewire` | Scope decision (full vs partial) | **1,318** | PASS |
| 3 | `electrical-checks-when-buying-a-house-in-tring` | Pre-purchase electrical checks | **1,229** | PASS |
| 4 | `how-much-does-a-consumer-unit-replacement-cost` | Consumer unit cost / budgeting | **1,453** | PASS |
| 5 | `signs-a-socket-is-unsafe` | Unsafe socket diagnosis | **1,340** | PASS |
| 6 | `electrics-for-a-house-extension-planning-guide` | Extension electrical planning | **1,292** | PASS |
| 7 | `how-many-sockets-when-renovating-a-house` | Renovation socket planning | **1,352** | PASS |
| 8 | `can-you-add-sockets-without-rewiring` | Socket additions without full rewire | **1,213** | PASS |
| 9 | `garden-electrics-outdoor-sockets-lighting-garden-rooms` | Outdoor / garden room electrics | **1,243** | PASS |
| 10 | `what-electrical-work-needs-part-p-certification` | Part P / notifiable work | **1,305** | PASS |

**Word count method:** Body text only — H1 title and disclaimer blocks excluded.

**Confirmation:** All 10 articles are ≥ 1,200 substantive body words.

---

## Topics rejected (and why)

| Topic | Reason |
|-------|--------|
| RCD tripping deep-dive | Cannibalises existing `/blog/why-do-my-electrics-keep-tripping` |
| EV charger installation | No confirmed RIGS service page in repo |
| Hot tub / sauna electrics | No confirmed RIGS service |
| Solar / PV | No confirmed RIGS service |
| Landlord EICR article | Deferred — lower priority vs purchase/owner-occupier cluster |

---

## Intent ownership map

| Intent cluster | Owner page(s) | New articles (supporting) |
|----------------|---------------|---------------------------|
| Hire electrician Tring | `/electrician/tring` | None — no broad commercial targeting |
| House rewiring service | `/services/house-rewiring` | Rewire cost, full vs partial |
| Consumer unit service | `/services/consumer-unit-replacement`, `/services/fuse-board-upgrades` | CU cost guide |
| EICR / inspections | `/services/eicr-certificates`, `/services/electrical-inspections` | Buying-house checks, Part P |
| Fault finding / emergency | `/services/electrical-fault-finding`, `/services/emergency-electrician` | Unsafe socket signs |
| Kitchen electrics | `/services/kitchen-electrics` | Socket count, add sockets, extension planning |
| Outdoor lighting | `/services/outdoor-lighting`, `/services/security-lighting` | Garden electrics |

---

## Technical implementation

### Files created
- `public/blogs/how-much-does-it-cost-to-rewire-a-house-in-tring.md`
- `public/blogs/do-i-need-a-full-rewire-or-partial-rewire.md`
- `public/blogs/electrical-checks-when-buying-a-house-in-tring.md`
- `public/blogs/how-much-does-a-consumer-unit-replacement-cost.md`
- `public/blogs/signs-a-socket-is-unsafe.md`
- `public/blogs/electrics-for-a-house-extension-planning-guide.md`
- `public/blogs/how-many-sockets-when-renovating-a-house.md`
- `public/blogs/can-you-add-sockets-without-rewiring.md`
- `public/blogs/garden-electrics-outdoor-sockets-lighting-garden-rooms.md`
- `public/blogs/what-electrical-work-needs-part-p-certification.md`

### Files updated
- `src/content/blogPosts.ts` — 10 new entries + `internalLinks` on existing posts + React-only blog entries
- `src/content/serviceLandingPages.ts` — related guide links (house rewiring, outdoor lighting, etc.)
- `src/components/pages/FuseBoardUpgradesPage.tsx` — CU cost guide link
- `src/components/pages/ElectricalFaultFindingPage.tsx` — unsafe socket guide link
- `src/components/pages/EicrCertificatesPage.tsx` — buying-house checks link
- `src/components/pages/ConsumerUnitVsFuseBoxPage.tsx` — cost + Part P cross-links
- `src/components/pages/FlickeringLightsCommonCausesPage.tsx` — unsafe socket cross-link
- `src/components/pages/WhyDoMyElectricsKeepTrippingPage.tsx` — unsafe socket link (prior pass)
- Existing markdown blogs — contextual reverse links added in body copy

### Sitemap
- `app/sitemap.ts` derives blog URLs from `BLOG_POSTS` — all 20 `/blog/*` routes included automatically
- Plus legacy route `/why-an-electric-shower-might-be-right-for-your-home` (pre-existing)

### Rendering
- Markdown articles served via `app/blog/[slug]/page.tsx` + `src/lib/markdownBlog.tsx`
- Each entry includes `metaTitle`, `description`, `relatedServiceHref`, `ctaLabel`, `internalLinks`

---

## Internal linking network

### New → existing / commercial
Each new article links to relevant service pages and complementary guides (rewire cluster, renovation cluster, fault cluster, compliance).

### Existing → new (reverse links)
Body or registry links added from:
- `how-to-tell-if-your-fuse-board-needs-replacing.md`
- `eicr-for-homeowners-when-should-you-get-your-electrics-checked.md`
- `common-electrical-problems-in-older-tring-and-hertfordshire-homes.md`
- `planning-kitchen-electrics-during-a-renovation.md`
- `do-i-need-an-emergency-electrician-or-can-it-wait.md`
- `what-happens-during-an-electrical-fault-finding-visit.md`
- React pages: Consumer Unit vs Fuse Box, Flickering Lights, Fuse Board Upgrades, Fault Finding, EICR Certificates, Tripping

### Cluster links (new articles interlinked)
- **Rewire:** cost ↔ full vs partial ↔ buying checks
- **CU:** cost ↔ fuse board signs ↔ Part P
- **Fault:** unsafe socket ↔ tripping ↔ fault-finding visit ↔ add sockets
- **Renovation:** socket count ↔ kitchen ↔ extension ↔ add sockets
- **Outdoor:** garden electrics ↔ Part P ↔ extension

---

## Cost article disclaimer pattern

Cost articles use three distinct layers:
1. **Published UK benchmark ranges** — sourced national guides, explicitly labelled
2. **Quotation factors** — property size, access, board condition, remedial work
3. **RIGS pricing** — not published in repo; articles direct readers to contact for property-specific quotes

No national benchmark is presented as a RIGS price.

---

## QA checklist

| Check | Result |
|-------|--------|
| All 10 articles ≥ 1,200 body words | PASS |
| Registry entries complete | PASS |
| Sitemap includes new blog URLs | PASS (via BLOG_POSTS) |
| Internal linking network | PASS |
| `npm run build` | PASS (exit 0) |
| `npm run lint` | PASS (exit 0) |
| Unique titles / H1s | PASS (reviewed) |
| No unverified Tring housing claims in new articles | PASS |
| No EV/hot tub/solar service content | PASS |
| Part P / EICR claims use authoritative framing | PASS |

### Known follow-ups (non-blocking)
- `markdownBlog.tsx` uses hardcoded `datePublished`/`dateModified` (`2026-07-21`) for all posts — consider per-post dates
- GA4 phone-click event tracking not configured
- `LocationPageClient.tsx` still shows `BLOG_POSTS.slice(0, 3)` — could curate featured guides

---

## Next opportunities

1. **Landlord EICR article** — statutory rental rules vs owner-occupier (distinct from buying guide)
2. **Curated Tring location page guides** — surface rewire + CU cost guides for local intent
3. **GSC re-crawl** — request indexing for 10 new URLs after deploy
4. **Phone click tracking** — GA4 event for conversion measurement
5. **Schema dates** — per-article `dateModified` in BlogPosting JSON-LD

---

## Deploy note

Run `npm run build` before deploy. All static blog pages generated successfully (83 pages total in build output).
