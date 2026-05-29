# The Ocean Grill

A luxury coastal restaurant website for **The Ocean Grill, Calangute, Goa** — rebuilt as a modern React + Vite SPA with premium UX and smooth page transitions.

> **Live Demo:** [theoceangrill.in](https://theoceangrill.in)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Build tool | Vite 8 + Rolldown |
| Styling | Tailwind CSS v4 (`@theme` directives, no config file) |
| Animation | Framer Motion 12 |
| Smooth scroll | Lenis 1.x |
| Icons | Lucide React |
| Routing | React Router 7 |
| Linting | ESLint 10 |

---

## Features

- **Hero section** — Full-viewport warm ambience photo with gradient overlays
- **Static header** — Navbar stays in-page (no fixed overlap), pill-style nav with SVG icons
- **Smooth scrolling** — Lenis-powered with `lerp: 0.08`
- **Animated page transitions** — Framer Motion `AnimatePresence` between routes
- **Loading screen** — Animated intro overlay on first visit
- **Responsive grid** — Menu, gallery, and review cards adapt from mobile to desktop
- **SEO optimized** — OG tags, meta description, theme-color, semantic HTML
- **WhatsApp floating button** — Direct chat for reservations & orders
- **Instagram integration** — Feed preview section with hover overlay
- **Google Maps embed** — Full-width map with address and contact cards
- **Reservation form** — Contact form with date/time/guest inputs
- **Static export ready** — Pure SPA, deployable to Netlify, Vercel, or GitHub Pages

---

## Pages

| Route | Component | Content |
|-------|-----------|---------|
| `/` | `Home.jsx` | Hero, story, featured menu (3 items), reviews (3 cards), CTA, Instagram |
| `/menu` | `Menu.jsx` | 5 sections: Goan Specialities, From the Sea, From the Tandoor, Indo-Chinese, The Bar |
| `/gallery` | `Gallery.jsx` | 9-image responsive grid with hover zoom |
| `/our-story` | `Story.jsx` | Brand narrative with images, timeline, feature list |
| `/reviews` | `Reviews.jsx` | Aggregate 4.7★ rating + 9 review cards + Google link |
| `/contact` | `Contact.jsx` | Google Maps, 4 contact cards, reservation form |

---

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#0f0f0f` | Page background |
| `--color-surface` | `#1a1a1a` | Card / section backgrounds |
| `--color-surface-low` | `#141414` | Lighter surface (alternating sections) |
| `--color-primary` | `#e8d5b7` | Gold accent (headings, borders) |
| `--color-secondary` | `#c9975e` | Muted gold (stars, prices) |
| `--color-on-surface` | `#f0ece4` | Body text |
| `--color-on-surface-variant` | `#a09888` | Subtle text |
| `--color-border` | `rgba(232,213,183,0.1)` | Card / section borders |

---

## Typography

- **Headings:** Libre Caslon Text (serif) — elegant, editorial
- **Body:** DM Sans (sans-serif) — clean, readable

---

## Business Details

| Detail | Value |
|--------|-------|
| Location | Falcon Resort, Naika Wado, Calangute, Goa 403516 |
| Hours | Daily · 11:00 AM – 1:00 AM |
| Rating | 4.7 ★ (1,185+ Google reviews) |
| Price range | ₹200 – ₹600 per person |
| Cuisine | Goan, Coastal Seafood, Tandoor, Indo-Chinese |
| Services | Dine-in, Drive-through, No-contact delivery |
| Phone | +91 93560 13294 |
| Email | hello@theoceangrill.in |
| WhatsApp | +91 93560 13294 |

---

## Project Structure

```
src/
├── main.jsx                 # Entry point, BrowserRouter
├── App.jsx                  # Routes, AnimatePresence, providers
├── index.css                # Tailwind v4 @theme, base, components
├── hooks/
│   ├── useTheme.jsx         # Dark/light mode context + toggle
│   └── useLenis.jsx         # Lenis smooth scroll init
├── components/
│   ├── Navbar.jsx           # Sticky transparent + scroll detection
│   ├── MobileNav.jsx        # Framer Motion slide-in drawer
│   ├── Footer.jsx           # Links, hours, Instagram, copyright
│   ├── WhatsAppButton.jsx   # Floating WhatsApp chat button
│   ├── LoadingScreen.jsx    # Animated first-visit overlay
│   ├── PageHeader.jsx       # Reusable page hero header
│   └── InstagramSection.jsx # Instagram feed preview grid
└── pages/
    ├── Home.jsx
    ├── Menu.jsx
    ├── Gallery.jsx
    ├── Story.jsx
    ├── Reviews.jsx
    └── Contact.jsx
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

---

## Deployment

The project builds to a `dist/` folder — a fully static SPA that works on any host.

### Netlify

1. Connect your GitHub repo
2. **Build command:** *(leave empty)*
3. **Publish directory:** `dist`

### Vercel

1. Import GitHub repo
2. Framework preset: **Vite**
3. All defaults — Vercel auto-detects the settings

### GitHub Pages

1. Build: `npm run build`
2. Deploy the `dist/` folder via GitHub Actions or push to `gh-pages` branch

---

## Future Improvements

| Feature | Description |
|---------|-------------|
| Online reservations | Real-time table booking with confirmation |
| Dynamic food menu | CMS-powered menu with categories & filters |
| Admin dashboard | Manage menu, orders, and reservations |
| Light/Dark mode | Theme toggle with system preference detection |
| AI recommendations | Dish suggestions based on past orders |
| Payment integration | UPI / card checkout for online orders |
| Event booking system | Private dining & party reservations |
| Multi-language | Hindi, English, and Portuguese support |
| Live reviews | Google Places API auto-fetch reviews |

---

## Author

Designed & Developed by **Vansh Dhiman**

- Portfolio: [vanshportfolioweb.lovable.app](https://vanshportfolioweb.lovable.app)
- GitHub: [github.com/powerisvansh](https://github.com/powerisvansh)

---

## License

MIT License — © 2026 The Ocean Grill · Calangute, Goa
