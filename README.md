# The Ocean Grill

> *A sun-drenched sanctuary in Calangute — fresh catch, charcoal smoke & cold beer.*

A premium restaurant website for **The Ocean Grill**, a Goan coastal bar & grill located at Falcon Resort, Naika Wado, Calangute. Built with a luxury dark aesthetic, gold accents, and mobile-first responsive design.

---

## Pages

| Page | Description |
|------|-------------|
| **Home** | Hero with ambience photo, story section, featured menu, reviews, Instagram grid, CTA |
| **Menu** | Full menu by category — Goan Specialities, From the Sea, Tandoor, Indo-Chinese, Bar |
| **Gallery** | Photo grid showcasing food, drinks, and atmosphere |
| **Our Story** | Brand narrative with full-bleed hero and timeline highlights |
| **Reviews** | Real Google reviews (4.7 ★, 1,185+ reviews) |
| **Contact** | Address, phone, hours, Google Maps embed, reservation CTA |

---

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom properties, responsive grid/flexbox, glassmorphism, keyframe animations
- **JavaScript** — IntersectionObserver scroll animations, Lenis smooth scroll
- **Google Fonts** — Libre Caslon Text (headings) + DM Sans (body)
- **Lenis** — lightweight smooth scroll library
- **WhatsApp API** — floating chat button (`wa.me/919356013294`)

---

## Project Structure

```
the-ocean-grill/
├── index.html              # Homepage
├── menu.html               # Full food & bar menu
├── gallery.html            # Photo gallery
├── our-story.html          # Brand story
├── reviews.html            # Google reviews
├── contact.html            # Contact & map
├── css/
│   └── styles.css          # Shared global styles
├── js/
│   └── scripts.js          # Shared JavaScript
└── assets/                 # Local assets directory
```

---

## Features

- **Dark luxury theme** — `#0c0b09` header, `#0f0f0f` background, gold `#c9975e` accents
- **Mobile-first responsive** — adapts from 320px to 1920px+
- **Pill-style navigation** — desktop nav links with subtle borders, SVG icons, hover states
- **Full-screen mobile nav** — backdrop-filter blur overlay with pill links & icons
- **Smooth scroll** — Lenis-powered butter-glide page scrolling
- **Scroll-triggered animations** — fade-in + scale on IntersectionObserver
- **WhatsApp floating button** — fixed bottom-right on every page
- **Instagram integration** — homepage grid + footer link
- **Google Maps embed** — interactive map on contact page
- **Open Graph / SEO** — `og:title`, `og:description`, `og:image`, `twitter:card`, `theme-color`

---

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#0f0f0f` | Page background |
| `--color-surface` | `#1a1a1a` | Card/section surface |
| `--color-primary` | `#e8d5b7` | Accent, CTA backgrounds |
| `--color-secondary` | `#c9975e` | Gold highlights, stars |
| `--color-on-surface` | `#f0ece4` | Primary text |
| `--color-on-surface-variant` | `#a09888` | Muted text |
| Header | `#0c0b09` | Navigation bar |

---

## Typography

- **Headings:** `Libre Caslon Text` — serif, elegant, classic
- **Body:** `DM Sans` — clean, modern sans-serif
- **Buttons/Nav:** Uppercase with wide letter-spacing

---

## Getting Started

```bash
# Clone or download the project
# Open any HTML file directly in a browser
open index.html
```

No build tools, no dependencies — just open and serve.

---

## License

&copy; 2026 The Ocean Grill &middot; Calangute, Goa
