# POF Rental — Home Page

Next.js 14 (App Router) + TypeScript + Tailwind implementation of the home
page design, with light/dark theming and full mobile responsiveness.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run build` before deploying to catch
any type errors.

## Features

- **Navbar** — logo, nav links, Book Now CTA, theme toggle, mobile drawer menu
- **Hero** — full-bleed background image, headline, search bar
- **Brand strip** — infinite auto-scrolling marquee
- **Featured Fleet** — horizontally scrollable car cards with snap points
- **Why Choose Us** — 6-card benefits grid
- **Footer** — minimal site footer
- **Dark / light theme** — toggle in the navbar (desktop + mobile), respects
  system preference by default, powered by `next-themes` + CSS variables
  defined in `app/globals.css`

## Content & assets

- Car photos and the hero background live in `public/images/`.
- Brand names in the marquee are text wordmarks (`components/brand-marquee.tsx`).
  Swap in logo image files under `public/images/brands/` and update that
  component with `<Image>` tags if official logo assets are available.
- All copy (car names, specs, prices, benefit text) lives in `lib/data.ts` —
  update content there without touching component files.
- The Featured Fleet section currently lists 4 cars plus a "View Full Fleet"
  card. Add more entries to `fleetCars` in `lib/data.ts` to extend it.

## Project structure

```
app/
  layout.tsx        Root layout, fonts, ThemeProvider
  page.tsx           Assembles all sections
  globals.css        Theme tokens (light + dark CSS variables)
components/
  navbar.tsx
  hero.tsx
  brand-marquee.tsx
  featured-fleet.tsx
  why-choose-us.tsx
  footer.tsx
  theme-provider.tsx
  theme-toggle.tsx
lib/
  data.ts            Fleet cars, brands, benefits content
public/images/        Car photos + hero background
```

## Customizing

Colors, fonts, and spacing tokens live in `tailwind.config.ts` and the
`:root` / `.dark` blocks in `app/globals.css`.
