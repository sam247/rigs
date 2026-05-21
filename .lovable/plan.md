# Content & Form Updates

Wire up the Contact form to FormBold and apply your content amendments across About, Services, Gallery and Testimonials.

## Contact form → FormBold

- POST submissions to `https://formbold.com/s/9BaZ2` from `src/pages/Contact.tsx`.
- Send: name, email, phone, service, message.
- Show success / error toasts. Reset form on success. Honeypot field to deter spam.

## About page

Replace the hero intro with:

> RIGS Electrical is a Tring-based, family-run electrical contractor specialising in domestic work. We provide professional, reliable and fully certified electrical services to homeowners across Tring and the surrounding villages, covering Hertfordshire, Buckinghamshire and Bedfordshire.

Update "Our Story" — drop "three decades", soften to "many years":

> RIGS Electrical was founded with a simple goal: deliver the highest standard of domestic electrical work to homeowners in Tring and the wider area — with no fuss, no surprises and no shortcuts.
>
> Our qualified electricians bring years of hands-on experience to every project. Whether it's a simple lighting tweak or a full rewire, we approach every job with the same care, planning and respect for your home.

Also update the "Quality Workmanship" value card (currently mentions "three decades") to "Years of hands-on domestic electrical experience — from a single socket to a full rewire."

Update SEO description on About to drop "Three decades".

## Services

Remove from `src/pages/Domestic.tsx`:
- EV Charger Installation
- Landlord Certificates (EICR)

Also remove the EICR reference from the Domestic page SEO description.

Remove EICR review from `src/pages/Testimonials.tsx` (Robert King) since we no longer offer it.

## Gallery

I don't see new images in `src/assets/`. Could you upload them in chat? I'll add them to the gallery with sensible captions. If you'd rather skip the new pics, say the word.

## Testimonials

Replace the placeholder reviews with real ones pulled from your Checkatrade profile. Examples I'll use (anonymised as Checkatrade does — first-name + area):

- "An excellent electrician!" — Verified Customer, WD3 (fault finding & installation)
- "Repair wiring to ceiling light…" — Verified Customer, HP6 (LED Lighting)
- "Under cupboard LED lighting" — Verified Customer, HP21
- "Various electrical installations" — Verified Customer, HP23 (bathroom, garden building, external lighting)
- "I have used Rob for several electrical problems…" — Verified Customer, HP4
- "Replaced several plug sockets" — Verified Customer, WD3

Each will be tagged with a source label "Checkatrade" and link out to your Checkatrade profile. The filter chips will be updated to drop "Other"/EICR and reflect the actual categories (Rewires, Lighting, Fault Finding, Installations).

For Google reviews — the `share.google` link I'd need to resolve to your Google Business Profile. I can either:
1. Fetch & include a couple of Google reviews the same way, or
2. Embed a "See us on Google" link/badge alongside Checkatrade.

Let me know which you prefer.

## Technical notes

- FormBold POST uses `fetch` with `application/json`; no API key needed (endpoint ID is safe in client).
- Testimonials data array becomes the Checkatrade set; `FilterType` updated to match the new categories.
- All text changes are presentation-only — no schema or routing changes.
