# CLAUDE.md — Scrub the Deck Website

**This file is the single source of truth for the entire build. Read it before touching any code.**

---

## 1. Project Overview

**Client:** David Pugh  
**Agency:** Scrub the Deck  
**Domain:** scrubthedeck.com  
**Purpose:** Premium pitch deck agency website. Converts founders and startup operators into paying clients by establishing David Pugh as the authority in pitch deck creation. The site must feel expensive, cinematic, and immediately credible.

**Quality benchmark:** drinkcollider.com — dark theme, bold typography, smooth scroll-driven animations, full-bleed video, cinematic transitions. Match or exceed this quality.

**Primary goals:**
1. Establish brand authority with a cinematic first impression
2. Build trust via social proof (testimonials, 81% success rate stat)
3. Drive leads to contact/book a call
4. Rank in AI citation engines (Perplexity, ChatGPT, Gemini) via GEO-optimised blog content

---

## 2. Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | **Next.js 14 (App Router)** | Multi-page routing, SSG for GEO/SEO, React components for reusability, natural Sanity integration, API routes |
| Styling | **CSS Modules + custom CSS properties** | No build overhead of Tailwind, full control over cinematic animations, co-located styles |
| Animation | **GSAP + ScrollTrigger** | Industry standard for scroll-driven cinematic animations; handles the TV rise effect and stat counter precisely |
| Micro-animation | **Lottie (lottie-react)** | For any icon or illustrative micro-animations |
| CMS | **Sanity v3** | Headless CMS, structured content, API-first, fast CDN, supports draft previews |
| Video chroma key | **CSS `mix-blend-mode: multiply` / `screen`** | Removes the solid blue background from the TV video without needing server-side processing |
| Hosting | **Netlify** | Simple CI/CD from GitHub, custom domain, edge functions if needed |
| Language | **TypeScript** | Type safety across Sanity schema, page props, and components |

**Why Next.js over plain HTML:** The blog (Sanity CMS), multiple inner pages, GEO-optimised structured data, and component reuse across sections make a build tool essential. Next.js gives us static generation for every page, a file router, and a clean React component model — with zero CMS complexity.

---

## 3. File & Folder Structure

```
scrub-the-deck/
├── CLAUDE.md                        ← this file
├── README.md
├── package.json
├── next.config.js
├── tsconfig.json
├── .env.local                       ← Sanity project ID, dataset, API token
├── sanity/                          ← Sanity studio (co-located)
│   ├── sanity.config.ts
│   ├── schemas/
│   │   ├── post.ts
│   │   ├── author.ts
│   │   └── category.ts
│   └── lib/
│       └── client.ts
├── public/
│   ├── fonts/                       ← self-hosted fonts
│   ├── media/
│   │   ├── hero-bg.mp4              ← "Parrot reacts web header.mp4" (renamed)
│   │   ├── boat-rocks.mp4           ← "Boat rocks.mp4" (B-roll / secondary)
│   │   └── david-tv.mp4             ← TV video of David Pugh (blue bg)
│   └── images/
│       ├── og-default.jpg
│       └── favicon.ico
└── src/
    ├── app/
    │   ├── layout.tsx               ← root layout, fonts, global CSS
    │   ├── page.tsx                 ← homepage
    │   ├── about/
    │   │   └── page.tsx
    │   ├── services/
    │   │   └── page.tsx
    │   ├── contact/
    │   │   └── page.tsx
    │   └── blog/
    │       ├── page.tsx             ← blog index
    │       └── [slug]/
    │           └── page.tsx         ← individual post (SSG)
    ├── components/
    │   ├── layout/
    │   │   ├── Nav.tsx              ← hamburger menu
    │   │   ├── NavMobile.tsx        ← fullscreen mobile overlay
    │   │   └── Footer.tsx
    │   ├── home/
    │   │   ├── HeroSection.tsx      ← full-screen video hero
    │   │   ├── StatCounter.tsx      ← 81% animated counter
    │   │   ├── TVTransition.tsx     ← scroll-driven TV rise
    │   │   ├── Testimonials.tsx     ← scroll-triggered testimonial stack
    │   │   └── BlogPreview.tsx      ← 3 latest posts teaser
    │   ├── blog/
    │   │   ├── PostCard.tsx
    │   │   ├── PostBody.tsx
    │   │   └── FAQBlock.tsx         ← GEO structured FAQ
    │   └── ui/
    │       ├── Button.tsx
    │       └── LottiePlayer.tsx
    ├── styles/
    │   ├── globals.css              ← CSS custom properties, resets, typography
    │   ├── Nav.module.css
    │   ├── Hero.module.css
    │   ├── TV.module.css
    │   ├── Testimonials.module.css
    │   └── Blog.module.css
    └── lib/
        ├── sanity.ts                ← client + queries
        ├── gsap.ts                  ← GSAP context + plugin registration
        └── utils.ts
```

---

## 4. Design System

### 4.1 Colours

```css
--colour-bg:         #070a0f;   /* near-black, deep navy */
--colour-surface:    #0d1520;   /* card/panel surface */
--colour-border:     #1a2a3a;   /* subtle borders */
--colour-teal:       #00d4d4;   /* brand accent — cyan/teal glow */
--colour-teal-dim:   #007a7a;   /* dimmed teal for secondary elements */
--colour-gold:       #c9a84c;   /* secondary accent — premium gold */
--colour-white:      #f0f4f8;   /* primary text */
--colour-muted:      #6b7f94;   /* secondary/muted text */
--colour-overlay:    rgba(7, 10, 15, 0.72); /* hero darkening overlay */
```

### 4.2 Typography

| Role | Family | Weight | Notes |
|---|---|---|---|
| Display / Logo | **Anton** (Google Fonts) | 900 | All-caps, letter-spaced, hero headlines |
| Tagline | **Playfair Display** (italic) | 400 italic | "Helping you navigate..." feel |
| Body | **Inter** | 400 / 500 | Clean, legible on dark bg |
| Blog body | **Lora** | 400 | Readable long-form serif |
| Stat numerals | **Anton** | 900 | Matches display typeface |

All fonts self-hosted via `/public/fonts/` with `next/font` or manual `@font-face` declarations.

### 4.3 Spacing Scale

Base unit: `8px`  
Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192px  
Use CSS custom properties: `--space-xs` through `--space-3xl`

### 4.4 Border Radius

- Cards / TV frame overlay: `0` (sharp edges for the industrial/nautical feel)
- Buttons: `4px` (barely rounded)
- Tags/badges: `2px`

### 4.5 Shadows & Glow

```css
--glow-teal:  0 0 40px rgba(0, 212, 212, 0.35);
--glow-gold:  0 0 30px rgba(201, 168, 76, 0.3);
--shadow-tv:  0 30px 80px rgba(0, 0, 0, 0.7), 0 0 60px rgba(0, 212, 212, 0.15);
```

---

## 5. Pages & Sections

### 5.1 Homepage (`/`)

#### Section 1 — Hero
- **Full-screen video background:** `hero-bg.mp4` (autoplay, loop, muted, `playsInline`)
- Video contains baked-in: SCRUB THE DECK logo, tagline "Helping you navigate the rough seas of investment", parrot mascot
- **Overlay:** semi-transparent dark gradient bottom-to-top so the 81% stat reads clearly
- **81% Stat Counter:** positioned left-centre over the video
  - Font: Anton, ~120px desktop / 64px mobile
  - Label: "success rate" below in Inter, teal coloured
  - Animation: 2-second initial delay on page load, then counts up from 0 to 81 over 2.5 seconds using GSAP `gsap.to()` with a custom ease (`power2.out`)
  - Timed to sync with the parrot's reaction moment in the video (parrot looks at camera)
- **Hamburger menu:** top-right, three horizontal lines, opens mobile nav overlay
- **TV preview:** the vintage TV frame is barely visible at the very bottom of the viewport (peek), signalling to scroll — no text, just the visual hook

#### Section 2 — TV Scroll Transition
- Triggered by ScrollTrigger, pinning the hero section
- **Sequence as user scrolls:**
  1. Background video darkens via `rgba` overlay opacity (0.72 → 0.95)
  2. Baked-in logo and tagline fade out (opacity 1 → 0)
  3. 81% counter fades and scales down
  4. Vintage TV rises from `translateY(100vh)` to `translateY(0)` and scales from `0.3` to `1`
  5. TV becomes full focal point, centred in viewport
  6. Background behind TV is near-black with a subtle teal glow emanating from TV screen
- **TV chroma key:** The `david-tv.mp4` has a solid blue background. Remove via CSS:
  ```css
  .tv-video { mix-blend-mode: multiply; }
  /* OR use CSS hue-rotate + brightness to isolate and mask the blue channel */
  ```
  If CSS blend mode isn't clean enough, use a `<canvas>` pixel-replacement approach to remove the chroma blue in real-time (document the approach chosen here once tested).
- TV has a play button overlay — clicking opens a lightbox/modal with the full David Pugh intro video

#### Section 3 — Testimonials
- Dark section, full-width
- Testimonials appear one at a time on scroll (GSAP ScrollTrigger `batch` or `stagger`)
- Each testimonial card:
  - Founder name (large, Anton)
  - Company name (teal, Inter)
  - Key result / quote (Playfair italic, large)
  - Optional: headshot (circular, 64px)
- Minimum 3 testimonials needed from David (request if not provided)
- Cards slide up from below and fade in, previous card fades out as next enters

#### Section 4 — Blog Preview
- 3 latest posts pulled from Sanity
- Card grid (1 col mobile, 3 col desktop)
- Each: title, excerpt, category tag, date, read time
- CTA: "Read all guides →" links to `/blog`

#### Section 5 — CTA Strip
- Full-width dark strip, teal accent line top and bottom
- Headline: "Ready to stop losing rounds?"
- Subhead: brief value prop
- Button: "Book a Deck Review" (links to `/contact`)

### 5.2 About (`/about`)
- David Pugh bio, photo
- Origin story of Scrub the Deck
- Stats/credibility bar (number of decks, funding raised for clients, success rate)
- Same dark premium design language

### 5.3 Services (`/services`)
- Cards for each service tier (e.g. Starter Deck, Full Pitch Pack, Investor Prep)
- Pricing or "from £X" indicators (confirm with David before publishing)
- Each card: what's included, turnaround, CTA

### 5.4 Contact (`/contact`)
- Simple form: name, email, company stage, message
- Or Calendly embed for booking a call (ask David which he prefers)
- No third-party form tools — use Netlify Forms (free, zero config)

### 5.5 Blog (`/blog` and `/blog/[slug]`)
- See Section 7 (CMS/Blog Architecture) for full spec

---

## 6. Animation Principles

**Rule 1 — Intent over decoration.** Every animation must have a purpose. The TV rise communicates "there's a person behind this brand." The counter communicates credibility. Nothing animates just to animate.

**Rule 2 — Cinematic timing.** Use long durations (0.8s–1.5s) with `power3.inOut` or `expo.out` eases. Avoid `bounce` or `elastic` — they cheapen the feel.

**Rule 3 — GSAP is the only scroll animation tool.** No CSS `@keyframes` for scroll-driven animations. All ScrollTrigger logic lives in `src/lib/gsap.ts` and is initialised per-component in `useGSAP()` hooks (from `@gsap/react`).

**Rule 4 — Respect `prefers-reduced-motion`.** Wrap all GSAP timelines in:
```js
const mm = gsap.matchMedia();
mm.add("(prefers-reduced-motion: no-preference)", () => { /* animations */ });
```

**Rule 5 — Mobile degradation.** On mobile (<768px):
- Scroll-pinning is disabled (too jarring on touch)
- The TV transition becomes a simple fade-in on scroll entry
- The stat counter still plays (it's not scroll-dependent, just delayed on load)
- All GSAP ScrollTrigger `scrub` animations are replaced with `toggleActions: "play none none reverse"`

**GSAP plugins to register:**
```js
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
```

**Lottie usage:** Only for micro-animations like a small wave/anchor icon, or a loading spinner. Use `lottie-react` wrapper. Animations sourced from LottieFiles or custom-commissioned.

---

## 7. CMS / Blog Architecture (Sanity)

### 7.1 Schema

**Post schema fields:**
```
title           string, required
slug            slug (from title)
author          reference → Author
category        reference → Category
publishedAt     datetime
updatedAt       datetime      ← critical for GEO (AI citation prefers freshness signals)
excerpt         text (plain, 150 chars max)
mainImage       image (with alt text)
body            block content (Portable Text)
faqBlock        array of { question: string, answer: text } ← for FAQ JSON-LD
directAnswer    text ← 2-3 sentence summary for AI citation (placed at top of post)
readTime        number (minutes, auto-calculated or manual)
seoTitle        string
seoDescription  string
```

**Author schema fields:**
```
name            string
slug            slug
bio             text
photo           image
linkedinUrl     url
```

### 7.2 GEO Optimisation Rules (applied to every post)

GEO = Generative Engine Optimisation — making content citable by AI engines (Perplexity, ChatGPT, Gemini, etc.)

1. **Direct Answer block at top of post** — 2-3 sentences that directly answer the post's core question. This is what AI engines pull as a citation snippet. Style: factual, first-person authority ("At Scrub the Deck, we've reviewed 200+ pitch decks and found that...")

2. **Named expert author** — every post attributed to "David Pugh, Founder of Scrub the Deck". AI engines weight named experts over anonymous authors.

3. **Last Updated date** — displayed prominently. Fresh content ranks higher in AI citation.

4. **FAQ block** — at bottom of every post. Rendered as HTML and also injected as `FAQPage` JSON-LD structured data.

5. **Structured data (JSON-LD)** — each post page includes:
   - `Article` schema with author, publisher, datePublished, dateModified
   - `FAQPage` schema for the FAQ block
   - `BreadcrumbList`

6. **Heading structure** — strict H1 → H2 → H3. H2s are phrased as questions ("How do you structure a pitch deck for Series A?")

7. **Internal linking** — every post links to 2-3 other posts and to the Services page

### 7.3 API / Draft Publishing

Posts can be pushed as drafts via the Sanity Content API. Workflow:
1. David writes in a Google Doc or similar
2. Paste into Sanity Studio (hosted at `/studio` route via `next-sanity`)
3. Publish when ready — rebuilds static page via Netlify webhook

---

## 8. Deployment Setup

**Hosting:** Netlify  
**Repo:** GitHub (create repo: `scrub-the-deck-website`)  
**Branch strategy:** `main` = production, `dev` = staging preview

**Netlify config (`netlify.toml`):**
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

**Environment variables (set in Netlify dashboard):**
```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=           ← server-side only, never NEXT_PUBLIC_
```

**Custom domain:** scrubthedeck.com → point DNS to Netlify nameservers or add CNAME.  
SSL: Netlify auto-provisions Let's Encrypt cert.

**Sanity Studio deployment:** Hosted at `scrubthedeck.com/studio` via Next.js App Router catch-all route (`/studio/[[...tool]]/page.tsx`) — standard `next-sanity` pattern.

**Rebuild on Sanity publish:** Configure a Sanity webhook → Netlify build hook URL. Any published post triggers a full site rebuild (incremental if ISR is enabled).

---

## 9. Known Assets & Roles

| File | Role | Notes |
|---|---|---|
| `Parrot reacts web header.mp4` | Hero background video | Has baked-in logo, tagline, parrot. Autoplay, loop, muted. Rename to `hero-bg.mp4` |
| `Boat rocks.mp4` | Unknown / B-roll | Possibly a secondary hero variant or a loop for the TV transition background. Confirm with David |
| `Screen-1.jpg` | Homepage mockup (initial state) | Full hero with 81% stat, parrot, TV peek at bottom |
| `Screen-2--as-scrolled.jpg` | Homepage mockup (scrolled state) | Hero darkened, TV risen and centred, hero elements ghosted |
| TV video (TBD) | David Pugh intro inside vintage TV frame | Blue background — chroma key removal needed |

**Observations from mockups:**
- The "SCRUB THE DECK" wordmark uses Anton-style all-caps bold with "THE" on a red ribbon/banner between SCRUB and DECK
- The tagline "Helping you navigate the rough seas of investment" uses a script/italic serif (Playfair Display italic approximates this)
- The 81% stat is left-centre in the hero, large (~30vw numeral), with "success rate" below in smaller teal text
- The TV is a realistic vintage CRT illustration/image with dials on the right side and the Scrub the Deck logo on the TV's panel
- The TV's screen shows David Pugh with a green/blue chroma background — the green screen approach may be cleaner than blue for CSS blend mode

---

## 10. Rules Claude Will Follow

1. **CLAUDE.md first.** This file is updated before any implementation decision.

2. **Never assume on design.** If a design detail is ambiguous (colours not in mockup, copy not provided, layout unclear), ask before implementing.

3. **Mobile first.** All CSS written mobile-first with `min-width` breakpoints. Breakpoints: `sm: 480px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`.

4. **No gratuitous animation.** Every animation must be justified by the design intent.

5. **GSAP only for scroll animation.** No Intersection Observer hacks, no CSS scroll-timeline. GSAP ScrollTrigger is the single animation driver.

6. **Clean, maintainable code.** TypeScript everywhere. CSS Modules for component styles. No inline styles except for GSAP dynamic values.

7. **Comments only where WHY is non-obvious.** The TV chroma key workaround, the GSAP scrub timing sync with video — document these. Not JSDoc on every function.

8. **Performance first.** Videos use `loading="lazy"` equivalent (`preload="none"`). Images use `next/image`. GSAP loaded dynamically for code splitting. Lottie loaded only when needed.

9. **Accessibility baseline.** `prefers-reduced-motion` respected. All interactive elements keyboard-accessible. Videos have `aria-label`. Colour contrast ≥ 4.5:1 on all body text.

10. **Commit often with descriptive messages.** Each section/component gets its own commit. Never commit `.env.local`.

11. **Ask David for:** testimonial copy, services pricing, Calendly link (or decision on contact form vs. booking), any additional video assets, preferred contact email for the form.

---

## 11. Build Order

1. [x] CLAUDE.md created  
2. [ ] Initialise Next.js project (`create-next-app`)  
3. [ ] Set up design tokens (CSS custom properties in `globals.css`)  
4. [ ] Set up fonts  
5. [ ] Build Nav (hamburger, mobile overlay)  
6. [ ] Build Hero section (video bg, stat counter, layout)  
7. [ ] Build TV scroll transition (GSAP ScrollTrigger)  
8. [ ] Build Testimonials section  
9. [ ] Build Blog Preview section  
10. [ ] Build CTA strip  
11. [ ] Build Footer  
12. [ ] Set up Sanity project and schemas  
13. [ ] Build Blog index page  
14. [ ] Build Blog post page (with GEO structured data)  
15. [ ] Build About page  
16. [ ] Build Services page  
17. [ ] Build Contact page (Netlify Forms)  
18. [ ] Netlify config + deploy  
19. [ ] Custom domain + SSL  
20. [ ] Sanity webhook → Netlify rebuild hook  
21. [ ] Cross-browser and mobile QA  
22. [ ] Performance audit (Lighthouse ≥ 90)

---

*Last updated: 2026-05-19*
