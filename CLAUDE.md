# brenneis-ai-website — Client Context

**Client:** Brenneis AI (internal — this is Adam's own agency website)
**Platform:** GoHighLevel (GHL)
**Purpose:** Brenneis AI's live marketing site. Converts prospects into clients.

---

## Deployment Model

This site is deployed on GoHighLevel, NOT Netlify. The file structure mirrors what gets pasted into GHL:

- **Section HTML files** → pasted individually into GHL Custom Code blocks
- **`page.css`** → pasted into the GHL page's Custom CSS field
- **`page.js`** → pasted into the GHL page's Footer Tracking Code field

### Critical GHL Rules
1. **Section HTML files must be pure markup** — zero `<style>` or `<script>` tags. All CSS goes to `page.css`. All JS goes to `page.js`.
2. **`page.js` must have `<script>` as the very first line and `</script>` as the very last line.** GHL requires this. VS Code will warn about it — ignore those warnings.
3. **Global header and footer (`global/header.html`, `global/footer.html`) are self-contained GHL blocks.** All their HTML, CSS (`<style>`), and JS (`<script>`) remain in the single file. Do NOT extract them to separate files.

---

## File Structure

```
brenneis-ai-website/
  ├── CLAUDE.md                        ← this file
  ├── global/
  │     ├── header.html                ← self-contained GHL block (keep inline CSS+JS)
  │     └── footer.html                ← self-contained GHL block (keep inline CSS+JS)
  └── pages/
        ├── home/
        │     ├── section-home1.html         ← hero (pure markup)
        │     ├── section-benefits2.html
        │     ├── section-value3.html
        │     ├── section-built4.html        ← portfolio (id="portfolio")
        │     ├── section-testimonials4b.html ← testimonials (between portfolio and how it works)
        │     ├── section-how5.html          ← how it works (id="how-it-works")
        │     ├── section-pricing-teaser6.html
        │     ├── section-faq7.html    ← FAQ accordion (pure markup)
        │     ├── page.css             ← ALL home page CSS consolidated here
        │     └── page.js              ← smooth scroll + FAQ accordion JS (with <script> tags)
        ├── about/
        │     ├── section-main.html    ← body content only (no DOCTYPE/html/head/body)
        │     ├── page.css
        │     └── page.js              ← empty (no JS needed)
        ├── pricing/
        │     ├── section-hero1.html   ← pricing hero (pure markup)
        │     ├── section-detail2.html ← pricing detail (body content only)
        │     ├── page.css
        │     └── page.js              ← plan slider JS (with <script> tags)
        ├── case-study/
        │     ├── section-main.html    ← body content only
        │     ├── page.css
        │     └── page.js              ← empty
        └── services/
              ├── section-main.html    ← body content only
              ├── page.css
              └── page.js              ← services JS (with <script> tags)
```

**Note:** An old `services/` folder at the repo root exists from before the rename — ignore it. The canonical location is `pages/services/`.

---

## Brand & Design

**Primary colors:**
- Deep Teal: `#134D62`
- Mid Teal: `#2D7E92`
- Medium Cyan: `#61B7CC`
- Sky Blue: `#4B9EC2`
- Charcoal/Navy: `#1A2F38`

**Fonts:** Montserrat (display/headings) + Source Sans Pro (body)

**Design principles:**
- Clean, purposeful layouts — no decorative animations
- Single hover states on interactive elements only
- Mobile-first responsive design

---

## Key Content Details

**LinkedIn URL:** `https://www.linkedin.com/company/brenneis-ai/`
**Nonprofit discount:** 15% off (both setup and monthly) — NOT 20%
**Discovery call:** 30 minutes, free
**Build timeline:** 2-6 weeks
**Tom Sox stats:** 12+ hours/week saved = 624+ hours/year; 47% increase in online registrations

---

## Internal Links (Critical)

The case study page (`/case-study`) is an important page. It must be linked from:
- Home: Tom Sox portfolio card (`section-built4.html`) — "Read the Case Study →" link
- About: Tom Sox story section (`section-main.html`) — "See the full Tom Sox case study →" link
- Footer: Company column — "Case Study" nav link

---

## Anchor IDs

Hero CTA buttons use semantic anchor IDs (not GHL-generated row IDs):
- "See Our Work" → `href="#portfolio"` — target: `id="portfolio"` on `section-built4.html`
- "How It Works" → `href="#how-it-works"` — target: `id="how-it-works"` on `section-how5.html`

---

## Accessibility Standards

- All `<button>` elements in accordions have `aria-expanded="false"` (toggled by JS)
- Emoji in FAQ category buttons wrapped in `<span aria-hidden="true">`
- Below-fold images: `loading="lazy" decoding="async"`
- Hero image: `fetchpriority="high"`
- Social links: `rel="noopener noreferrer"`
- External project card links: `rel="noopener noreferrer"`

---

## SEO Reference (for GHL page settings)

Set these in GHL Page Settings (not in section HTML):

| Page | Title Tag | Meta Description |
|------|-----------|-----------------|
| Home | Nonprofit Websites & Automation for Virginia \| Brenneis AI | Brenneis AI builds purpose-built websites and automation for Virginia nonprofits. Save 12+ hours/week, grow donor engagement, and launch in 2-6 weeks. Free consultation. |
| About | About Brenneis AI \| Built for Virginia Nonprofits | Meet Adam Brenneis — founder of Brenneis AI. Built from nonprofit experience, Claire's Kitchen, and the Tom Sox. Learn why mission-driven work deserves better technology. |
| Pricing | Website Pricing for Virginia Nonprofits \| Brenneis AI | Transparent, fixed pricing for Virginia nonprofits. Build fee + monthly subscription. No hidden costs. Includes website, CRM, automation, and direct founder support. |
| Case Study | Case Study: Tom Sox Saved 624 Hours/Year \| Brenneis AI | See how the Charlottesville Tom Sox saved 624+ hours per year with Brenneis AI. Automated registration, donor management, and 24/7 system support. |
| Services | Nonprofit Website Services & Automation \| Brenneis AI | Brenneis AI offers custom website design, nonprofit CRM, automation, and AI tools for Virginia nonprofits. Built for mission-driven organizations. |
