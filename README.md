# POF Rental

Next.js 14 (App Router) + TypeScript + Tailwind implementation of the POF
Rental site — a full-screen, scroll-snapped home page plus a searchable,
filterable fleet catalog.
Light/dark theming and mobile responsiveness throughout.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run build` before deploying to catch
any type errors.

## Features

- **Navbar** — logo, nav links, Book Now CTA, theme toggle, mobile drawer menu.
- **Hero** — full-bleed background image, headline, search bar.
- **Brand strip** — infinite auto-scrolling marquee of real brand logos
  (`public/images/brands/`).
- **Featured Fleet** (home) — horizontally scrollable teaser of 4-5 cars
  with a "View Full Fleet" card linking to `/fleet`.
- **Fleet browser** (`/fleet`) — search box (matches brand/model/color/
  category), category pills, brand + sort dropdowns, responsive card grid.
  Cards show a gold "% OFF" badge and struck-through original price when a
  car has an active promo.
- **Car detail pages** — image gallery, specs table, description, promo
  price, related vehicles, and the booking widget.
- **Booking** — no backend; "Book Now" / the booking widget build a
  prefilled WhatsApp deep link via `lib/whatsapp.ts` to the business's real
  WhatsApp number, plus a tap-to-call fallback.
- **Why Choose Us** — 6-card benefits grid.
- **Footer** — logo, tagline, social icons (Facebook, Instagram, TikTok,
  LinkedIn, YouTube, Snapchat), contact (phone/email), branch locations,
  copyright. Shared across all pages; only the home page passes it
  `snap` (see below).
- **Dark / light theme** — toggle in the navbar (desktop + mobile), respects
  system preference by default, powered by `next-themes` + CSS variables
  defined in `app/globals.css`.
## Content & assets

- All copy (car names, specs, prices, promos....)
  lives in `lib/data.ts`
- `fleetInventory` (`lib/data.ts`) is the full 30-car catalog powering
  `/fleet` and its detail pages — each entry has `image` (card/hero photo)
  and `gallery` (extra detail-page photos) under `public/images/fleet/`.
  `fleetCars` is the smaller, separate dataset behind the home page's
  Featured Fleet teaser.

## Project structure

```
app/
  layout.tsx           Root layout, fonts, ThemeProvider
  page.tsx              Home page
  globals.css           Theme tokens (light + dark CSS variables)
  fleet/
    page.tsx             /fleet — search + filter + browse
    [id]/page.tsx         /fleet/[id] — per-car detail page
components/
  navbar.tsx
  hero.tsx
  brand-marquee.tsx
  featured-fleet.tsx     Home page teaser strip
  fleet-browser.tsx       /fleet search/filter/grid (client)
  car-gallery.tsx         Thumbnail-switching photo gallery (client)
  why-choose-us.tsx
  footer.tsx              
  icons.tsx               TikTok / Snapchat / WhatsApp brand icons
  theme-provider.tsx
  theme-toggle.tsx
lib/
  data.ts                Fleet cars, full fleet inventory, brands, benefits
  whatsapp.ts             WhatsApp booking link/message builders
public/images/
  brands/                 Brand logo SVGs
  fleet/                  Fleet card + hero photos
```
