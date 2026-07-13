# Car Key Service DXB — Next.js Website

Dubai's Trusted 24/7 Automotive Locksmith — built with Next.js 14, TypeScript, Tailwind CSS.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables and fill in real values
cp .env.example .env.local

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

```bash
# Type-check without building
npm run type-check

# Production build
npm run build

# Start production server
npm start

# Lint
npm run lint
```

---

## Required Environment Variables

Copy `.env.example` to `.env.local` and fill in the following values before deploying:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production URL, e.g. `https://www.carkeyservicedxb.com` |
| `NEXT_PUBLIC_SITE_NAME` | Site name displayed in metadata |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Google Maps JavaScript API key (for map embeds) |
| `GOOGLE_PLACES_API_KEY` | Server-side Google Places API key (for live reviews) |
| `NEXT_PUBLIC_GOOGLE_PLACE_ID` | Google Place ID for the business |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager ID (`GTM-XXXXXXX`) — optional |
| `REVALIDATE_SECRET` | Long random string for on-demand ISR revalidation |
| `RESEND_API_KEY` | Resend.com API key for contact form emails |
| `CONTACT_FORM_RECIPIENT` | Email address to receive contact form submissions |
| `UPSTASH_REDIS_REST_URL` | Upstash Redis URL for edge rate limiting |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis token for edge rate limiting |

---

## Business Owner TODO Checklist

Before going live, the following items require real business content or configuration:

### Images & Icons
- [ ] Supply **real hero/banner photos** and replace placeholder images in `public/images/`
- [ ] Supply **OG default image** at `public/images/og-default.jpg` (1200 × 630 px)
- [ ] Supply **PWA icon files**:
  - `public/icons/icon-192.png` (192 × 192 px)
  - `public/icons/icon-512.png` (512 × 512 px)
- [ ] Supply `public/favicon.ico`, `public/icon.svg`, `public/apple-touch-icon.png`
- [ ] Add real photos of technicians, vehicles and work to `public/images/`

### Business Content
- [ ] Confirm **founding year** for About page team section
- [ ] Add real **team member names, titles and bios** to About page
- [ ] Confirm all **pricing ranges** are current and accurate
- [ ] Review and approve all **FAQ answers** for accuracy
- [ ] Add real **customer review text** (or connect live Google Places API)

### Integrations
- [ ] Set `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` to a real Google Maps key and enable the embed
- [ ] Set `NEXT_PUBLIC_GOOGLE_PLACE_ID` to the real Place ID for live Google reviews
- [ ] Add **Google Search Console** verification code to `src/app/layout.tsx` (`verification.google`)
- [ ] Set up **Google Analytics 4** (`NEXT_PUBLIC_GA_MEASUREMENT_ID`)
- [ ] Configure **Resend** for contact form email delivery (`RESEND_API_KEY`)

### SEO & Deployment
- [ ] Update `NEXT_PUBLIC_SITE_URL` in `.env.local` and in `public/robots.txt`
- [ ] Submit sitemap to Google Search Console: `https://www.carkeyservicedxb.com/sitemap.xml`
- [ ] Set up **Vercel** project and connect GitHub repository
- [ ] Configure custom domain on Vercel

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages & API routes
│   ├── api/og/route.tsx   # Dynamic OG image generator (Edge Runtime)
│   ├── sitemap.ts          # Auto-generated sitemap.xml
│   ├── robots.ts           # Auto-generated robots.txt
│   ├── manifest.ts         # PWA manifest
│   ├── layout.tsx          # Root layout with metadata & shared components
│   ├── page.tsx            # Homepage
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── services/           # Services index + 12 service pages
│   └── locations/          # Locations index + 15 location pages
├── components/
│   ├── layout/             # Header, Footer, MobileFloatingCTA
│   ├── schema/             # JSON-LD structured data components
│   ├── sections/           # Page sections (Hero, CTA, FAQ, Reviews, etc.)
│   └── ui/                 # Base UI components (Button, Card, Badge, etc.)
├── data/
│   ├── services.ts         # All 12 service definitions
│   └── locations.ts        # All 15 location definitions
├── lib/
│   ├── constants.ts        # Site-wide constants (URLs, phone, business info)
│   ├── metadata.ts         # Shared metadata builder utilities
│   └── utils.ts            # Shared utility functions
└── types/
    └── index.ts            # TypeScript type definitions
```

---

## Tech Stack

- **Framework**: Next.js 14 (App Router, TypeScript)
- **Styling**: Tailwind CSS v3
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Image Optimisation**: Next.js Image + Sharp
- **OG Images**: next/og (Edge Runtime)
- **Deployment**: Vercel

---

*Built for Car Key Service DXB — Al Bada'a, Dubai, UAE*
