# PRD & Implementation Plan — PT Khairani Sinergi Nusantara Website Redesign

> **Status**: Awaiting user approval before execution.

---

## Project Overview

A complete ground-up redesign of the PT Khairani Sinergi Nusantara (KSN) corporate website. The goal is a **professional yet creative** 5-page multi-page site that conveys trust, technical mastery, and Indonesian industrial pride — using cinematic scroll animations, editorial typography, and a refined **deep midnight blue + green & amber/orange-gold accents** palette.

**Tech Stack**: Pure HTML + CSS + Vanilla JS (no frameworks), GSAP for animations, ScrollTrigger for scroll-based reveals.

---

## Design Philosophy

| Reference | What We Borrow |
|---|---|
| **coffee-tech.com** | Large cinematic hero typography (15vw+), line-by-line text split reveal animations, dark/light theme alternation between sections, custom cursor, marquee ticker, bold typographic headings |
| **waabi.ai** | Asymmetric editorial layouts (1-col + 5-col grids), generous whitespace, scroll-pinned sticky panels, clean sans-serif body, section "indicator" labels, full-bleed image sections |

---

## Color System

| Token | Value | Usage |
|---|---|---|
| `--blue-950` | `#030914` | Darkest deep blue background |
| `--blue-900` | `#07152d` | Dark hero backgrounds |
| `--blue-800` | `#0d2347` | Dark section background |
| `--blue-700` | `#14356b` | Cards, subtle dark background |
| `--blue-500` | `#1d4ed8` | Primary corporate blue |
| `--green-500` | `#10b981` | Safety/quality green accent |
| `--amber-500` | `#F59E0B` | Primary orange-gold accent |
| `--amber-400` | `#FBBF24` | Hover amber, highlights |
| `--cream` | `#F4F6FA` | Light ice-blue/cream backgrounds |
| `--white` | `#FAFAFC` | Body text on dark |
| `--dark` | `#030914` | Base dark |

**Section Alternation**: Dark blue hero → Light cream/blue section → Dark blue → Light cream/blue → Dark footer

---

## Typography

| Role | Font | Source |
|---|---|---|
| **Display / Hero H1** | `Playfair Display` | Google Fonts — editorial serif, premium feel |
| **Section Headings H2–H3** | `Space Grotesk` | Google Fonts — modern, technical, slightly geometric |
| **Body / UI** | `Inter` | Google Fonts — clean, readable |
| **Accent / Labels** | `Space Grotesk` italic or uppercase tracking |  |

**Scale:**
- Hero H1: `clamp(3.5rem, 10vw, 12rem)`, weight 700, tight letter-spacing
- H2: `clamp(2.5rem, 5vw, 6rem)`, weight 600
- H3: `clamp(1.5rem, 3vw, 3rem)`, weight 500
- Body: `1.1rem` / `1.8` line height, `Inter`

---

## Animation System

| Animation | Technique | Trigger |
|---|---|---|
| **Page load intro** | GSAP — overlay fade out + logo reveal | Page load |
| **Hero headline split reveal** | GSAP SplitText (word/char) stagger up-fade | On load |
| **Section text reveals** | GSAP ScrollTrigger — lines stagger from `y:40` to `y:0`, `opacity: 0→1` | Scroll into view |
| **Image parallax** | ScrollTrigger `scrub` — image moves slower than scroll | Scroll |
| **Marquee ticker** | CSS infinite scroll animation | Continuous |
| **Service cards hover** | CSS — subtle scale, amber border glow, image pan | Hover |
| **Custom cursor** | Vanilla JS — soft follower circle that scales on hover | Mouse move |
| **Nav on scroll** | GSAP — shrink/blur nav on scroll | Scroll |
| **Counter animation** | GSAP counting numbers | ScrollTrigger in-view |
| **Page transition** | GSAP curtain wipe (blue overlay) | Between pages |

---

## Site Structure — 5 Pages

### 1. 🏠 Home (`index.html`)

**Sections:**
1. **Hero** — Dark bg, full-viewport. Giant text: *"Engineering Safety. Powering Nusantara."* Animated H1 split reveal. Scroll-down indicator. Real worker photo as background with dark overlay.
2. **About Snippet** — Light cream bg. Asymmetric grid: pull-quote left, paragraph right. Scroll-triggered text reveal.
3. **Marquee Ticker** — Full-width amber ticker with "ZERO ACCIDENT" "NDT CERTIFIED" "NATIONWIDE COVERAGE" "BOILER SPECIALISTS" repeating.
4. **Services Preview** — 4 service cards in a 2×2 or horizontal scroll grid. Dark bg. Cards with hover image reveal effect.
5. **Key Stats** — 3–4 animated counters: years of experience, projects completed, client satisfaction, coverage area.
6. **HSE Commitment** — Full-bleed worker-with-harness image, text overlay. Strong CTA: "View Our Safety Standards."
7. **Call to Action** — Blue gradient section. "Ready to Partner?" with WhatsApp/Email contact links.

---

### 2. 👥 About Us (`about.html`)

**Sections:**
1. **Page Hero** — Smaller hero (60vh). Title: *"Who We Are"*. Background: Boiler refinery image with blue overlay.
2. **Executive Summary** — Two-column layout. Left: large pull quote, Right: company summary paragraph.
3. **Vision & Mission** — Dark blue section. Vision on the left, Mission bulleted list on the right.
4. **Core Values (SINERGI)** — Interactive accordion or horizontal scroll of 7 values (S.I.N.E.R.G.I.) as cards with amber accent numbers (01, 02…07).
5. **Company Identity** — Timeline or stats panel: founded year, team size, coverage.
6. **Image Gallery Strip** — Horizontal auto-scroll of real site photos from Materials/Images.

---

### 3. 🔧 Our Services (`services.html`)

**Sections:**
1. **Page Hero** — Full-viewport. Title: *"What We Do"*. Large type. Worker welding photo background.
2. **Services Grid** — 4 services as expandable full-screen panels (inspired by coffee-tech's specialty boxes): 
   - Boiler Inspection & NDT
   - Boiler Maintenance & Repair
   - Professional Retubing
   - Supporting Services
   Each card: title, description, 3–4 bullet sub-services, relevant photo.
3. **Spare Parts Supply** — Dedicated section: amber-accented list of parts supplied.
4. **Process Flow** — Visual numbered step process: Inquiry → Assessment → Mobilization → Execution → Certification.
5. **CTA Banner** — "Need Emergency Response?" with direct contact links.

---

### 4. 👷 Our Team (`team.html`)

**Sections:**
1. **Page Hero** — Title: *"The People Behind the Work"*. Morning safety induction photo as background.
2. **Team Intro** — Short paragraph about team certifications and values.
3. **Team Grid** — Cards for team members. Each card: photo (from site images or generated placeholder), name, role, certification badges.
4. **Culture Section** — Full-bleed photo of morning safety induction with overlaid HSE values text.
5. **Certifications Strip** — Logos/badges of certifications: ASME, API, K3, LOTO, etc.

---

### 5. 📞 Contact (`contact.html`)

**Sections:**
1. **Page Hero** — Title: *"Let's Work Together"*. Minimal, dark blue bg.
2. **Contact Info Cards** — 3 cards: Phone (WhatsApp), Email, Office Address — no form.
3. **Location Block** — Text-based address with a styled static map placeholder (or embedded Google Maps iframe).
4. **Business Hours** — Elegant time table: Mon–Fri 08:00–17:00, Emergency 24/7.
5. **WhatsApp CTA** — Large amber button: "Chat on WhatsApp" → direct wa.me link.

---

## Navigation

- **Fixed transparent nav** → becomes blurred glass on scroll
- Logo (KSN text logo or simple icon) on the left
- Nav links center: Home | About | Services | Team | Contact
- Right: WhatsApp CTA button (amber, small)
- Mobile: Hamburger → full-screen overlay menu with staggered link reveal

---

## Footer

- Dark blue background
- Left: Logo + tagline: *"Uncompromising Safety. Unrivaled Reliability."*
- Center: Quick nav links
- Right: Contact info (Phone, Email)
- Bottom bar: © 2025 PT Khairani Sinergi Nusantara. All Rights Reserved.
- Subtle amber decorative line at top of footer.

---

## Image Strategy

**Real images from `Materials/Images/` will be used:**
- Hero backgrounds: `Boiler refinery.webp`, `Big Pipe Image.webp`, `Worker with harness.webp`
- Services: `Worker doing pipe welding.webp`, `worker welding.webp`, `engine instalation.webp`
- Team/HSE: `Morning safety induction.webp`, `morning safety induction candid.webp`
- Spare parts/process: `Pipe Installation.webp`, `Huge curve pipe installation.webp`
- Company pages: `Worker lift motor with cain break.webp`, `solar panel instalation.webp`

All images will be used with CSS object-fit: cover, parallax, and tasteful blue/dark overlays.

---

## File Structure

```
website-v3/
├── index.html
├── about.html
├── services.html
├── team.html
├── contact.html
├── css/
│   ├── style.css          # Global design system, variables, typography
│   ├── animations.css     # GSAP-related base + CSS animations
│   └── components.css     # Reusable components (nav, footer, cards, etc.)
├── js/
│   ├── main.js            # Page-specific animations, cursor, nav behavior
│   ├── transitions.js     # Page transition (curtain) logic
│   └── counters.js        # Animated counter utility
└── assets/
    └── images/ → symlinked or copied from Materials/Images/
```

---

## Open Questions

> [!IMPORTANT]
> **Q1: Team members** — Do you have specific names, roles, and photos for the Team page? Or should I use the real site photos creatively with generic "Field Engineer", "Safety Officer" type roles based on what's in the images?

> [!IMPORTANT]
> **Q2: Logo** — Is there an existing KSN logo file, or should I design a text-based logomark using the company initials (KSN) in the color palette?

> [!NOTE]
> **Q3: Language** — Should the website be in English, Indonesian (Bahasa), or bilingual? The company profile draft is in English.

> [!NOTE]
> **Q4: Stats / Numbers** — Do you have real numbers for the counters (e.g., "X years experience", "X+ projects completed", "X clients")? Or should I use approximate/placeholder numbers?

> [!NOTE]
> **Q5: Website folder** — Should I build the new site in a new `website-v3/` folder in the workspace, keeping `website-v2/` intact? Or replace `website-v2/`?

---

## Verification Plan

- Open each HTML file in browser to verify visual rendering
- Test all page transitions and animations
- Verify responsive layout on mobile/tablet breakpoints
- Confirm all internal navigation links work correctly
- Check all image paths load correctly
