// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Locations Hub Page
// /locations — overview of all 15 service areas
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'
import { Phone, MessageCircle, MapPin, Clock, AlertTriangle, CheckCircle2 } from 'lucide-react'

import { LocationCard } from '@/components/sections/LocationCard'
import { CtaSection } from '@/components/sections/CtaSection'
import { BreadcrumbNav } from '@/components/sections/BreadcrumbNav'
import { TrustBar } from '@/components/sections/TrustBar'
import { JsonLd } from '@/components/schema/JsonLd'
import { Button } from '@/components/ui/Button'

import { locations } from '@/data/locations'
import {
  BUSINESS_NAME,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_HREF,
  SITE_URL,
  DEFAULT_OG_IMAGE,
  PHONE_RAW,
  EMAIL,
  COORDINATES,
  GOOGLE_RATING,
  SCHEMA_ORG,
} from '@/lib/constants'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Locksmith Service Areas in Dubai | All 15 Locations — Lock Repair Satwa',
  description:
    'Lock Repair Satwa covers all major Dubai areas — Jumeirah, Downtown, Dubai Marina, Business Bay, Dubai Hills, Palm Jumeirah and more. Professional mobile locksmith open daily 24/7. Call +971 52 642 6161.',
  alternates: {
    canonical: `${SITE_URL}/locations`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: `${SITE_URL}/locations`,
    siteName: BUSINESS_NAME,
    title: 'Locksmith Service Areas in Dubai | All 15 Locations — Lock Repair Satwa',
    description:
      'Lock Repair Satwa covers all major Dubai areas — Jumeirah, Downtown, Dubai Marina, Business Bay, Dubai Hills, Palm Jumeirah and more. Professional mobile locksmith, open daily 24/7.',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${BUSINESS_NAME} — Service Areas Across Dubai`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Locksmith Service Areas in Dubai | 15 Locations — Lock Repair Satwa',
    description: 'Professional mobile locksmith covering all major Dubai areas. Open daily 24/7. Call +971 52 642 6161.',
    images: [DEFAULT_OG_IMAGE],
  },
}

// ── Breadcrumb data ───────────────────────────────────────────────────────────

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Locations', href: '/locations' },
]

// ── LocalBusiness schema with all 15 areas in areaServed ─────────────────────

function LocationsHubSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Locksmith', 'LocalBusiness'],
    '@id': `${SITE_URL}/#lock-repair-satwa`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    telephone: PHONE_RAW,
    email: EMAIL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'D90',
      addressLocality: 'Al Bada\'a',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COORDINATES.lat,
      longitude: COORDINATES.lng,
    },
    priceRange: SCHEMA_ORG.priceRange,
    currenciesAccepted: SCHEMA_ORG.currenciesAccepted,
    paymentAccepted: SCHEMA_ORG.paymentAccepted,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: GOOGLE_RATING,
      bestRating: 5,
      worstRating: 1,
      reviewCount: 20,
    },
    areaServed: locations.map((loc) => ({
      '@type': 'Place',
      name: loc.name,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: loc.coordinates.lat,
        longitude: loc.coordinates.lng,
      },
    })),
  }

  return <JsonLd data={schema} />
}

// ─────────────────────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────────────────────

export default function LocationsPage() {
  // Split locations into two visual groups: nearest (≤30 min) and wider coverage
  const nearestLocations = locations.filter((l) => {
    const mins = parseInt(l.responseTime.split('-')[0], 10)
    return mins <= 25
  })
  const widerLocations = locations.filter((l) => {
    const mins = parseInt(l.responseTime.split('-')[0], 10)
    return mins > 25
  })

  return (
    <>
      {/* Schemas */}
      <LocationsHubSchema />

      {/* ── 1. Hero ──────────────────────────────────────────────────────────── */}
      <section
        aria-label="Locations page hero"
        className="bg-hero-gradient pt-[72px]"
      >
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <BreadcrumbNav items={breadcrumbs} light />

          <div className="mt-6 max-w-3xl">
            {/* Eyebrow badge */}
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/15 px-3 py-1 text-xs font-semibold text-brand-gold">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              15 Dubai Areas Covered
            </div>

            <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Lock Repair Satwa{' '}
              <span className="text-gold-gradient">Covers All of Dubai</span>
            </h1>

            {/* Direct Answer Opener — 40–60 words, optimised for AI Overviews & featured snippets */}
            <div className="mt-6 rounded-xl border-l-4 border-brand-gold bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-sm font-medium text-brand-gold mb-1 uppercase tracking-wide">
                Coverage Summary
              </p>
              <p className="text-base leading-relaxed text-white/90">
                Lock Repair Satwa (D90, Al Bada&apos;a, Dubai) is a professional mobile locksmith
                covering 15 major areas across the emirate. We reach most central Dubai locations in
                15–30 minutes and outer areas in 30–60 minutes. All 12 services — car key duplication,
                door lock repair, smart key programming, transponder keys, car battery replacement and
                more — are available at every listed location, daily 24/7. Call +971 52 642 6161.
              </p>
            </div>

            {/* CTA #1 — above the fold */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" variant="primary" className="btn-pulse w-full sm:w-auto" asChild>
                <a href={PHONE_HREF} aria-label={`Call Lock Repair Satwa: ${PHONE_DISPLAY}`}>
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Call Now — {PHONE_DISPLAY}
                </a>
              </Button>
              <Button size="lg" variant="whatsapp" className="w-full sm:w-auto" asChild>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Lock Repair Satwa"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  WhatsApp Us
                </a>
              </Button>
            </div>

            <p className="mt-4 text-xs text-white/40">
              Mobile service · No callout fee · Price confirmed before dispatch
            </p>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ────────────────────────────────────────────────────────── */}
      <TrustBar dark />

      {/* ── 2. Coverage Stats ────────────────────────────────────────────────── */}
      <section
        aria-label="Coverage statistics"
        className="border-y border-border bg-muted/30 py-10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div className="text-center">
              <p className="font-heading text-3xl font-extrabold text-brand-gold">15</p>
              <p className="mt-1 text-sm text-muted-foreground">Dubai Areas Covered</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl font-extrabold text-brand-gold">24/7</p>
              <p className="mt-1 text-sm text-muted-foreground">Open Daily</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl font-extrabold text-brand-gold">15–30<span className="text-xl">min</span></p>
              <p className="mt-1 text-sm text-muted-foreground">Average Response Time</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl font-extrabold text-brand-gold">12</p>
              <p className="mt-1 text-sm text-muted-foreground">Services at Every Location</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Nearest Areas Grid ────────────────────────────────────────────── */}
      {nearestLocations.length > 0 && (
        <section
          aria-labelledby="nearest-areas-heading"
          className="py-16 sm:py-20 bg-background"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-600 dark:text-green-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" aria-hidden="true" />
                Fastest Response — Under 30 Minutes
              </div>
              <h2
                id="nearest-areas-heading"
                className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
              >
                Central Dubai Areas — Fastest Response Times
              </h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
                These areas are closest to our Al Bada&apos;a base. For addresses in these communities,
                expect a technician within 10–25 minutes of your call.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {nearestLocations.map((location) => (
                <LocationCard key={location.slug} location={location} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 4. Wider Coverage Grid ───────────────────────────────────────────── */}
      {widerLocations.length > 0 && (
        <section
          aria-labelledby="wider-areas-heading"
          className="py-16 sm:py-20 bg-muted/40 border-y border-border"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                30–60 Minutes Response
              </div>
              <h2
                id="wider-areas-heading"
                className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
              >
                Greater Dubai Areas — Full Coverage
              </h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
                These areas are further from our base but fully covered. Response times are 30–60 minutes
                depending on your exact location and traffic. All services, same pricing, no distance surcharge.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {widerLocations.map((location) => (
                <LocationCard key={location.slug} location={location} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 5. Emergency Callout Banner ──────────────────────────────────────── */}
      <section
        aria-labelledby="emergency-banner-heading"
        className="bg-destructive/10 border-y border-destructive/20 py-10"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-destructive/20">
                <AlertTriangle className="h-6 w-6 text-destructive" aria-hidden="true" />
              </div>
              <div>
                <h2
                  id="emergency-banner-heading"
                  className="font-heading text-xl font-bold text-foreground"
                >
                  Locksmith Service Available Daily 24/7 Across All Listed Areas
                </h2>
                <p className="mt-1 text-sm text-muted-foreground max-w-lg">
                  Locked out, lost your key, or need a lock repaired? Lock Repair Satwa responds
                  daily 24/7 to every area on this page. Average response is 15–30 minutes
                  for central Dubai. Call now for an immediate ETA.
                </p>
              </div>
            </div>

            {/* CTA #2 */}
            <div className="flex flex-col gap-3 sm:flex-row shrink-0">
              <Button size="lg" variant="primary" className="btn-pulse" asChild>
                <a href={PHONE_HREF} aria-label={`Emergency call: ${PHONE_DISPLAY}`}>
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Call Now
                </a>
              </Button>
              <Button size="lg" variant="whatsapp" asChild>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp for emergency"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. How Mobile Service Works ─────────────────────────────────────── */}
      <section
        aria-labelledby="how-it-works-heading"
        className="py-16 sm:py-20 bg-background"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2
            id="how-it-works-heading"
            className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-4 text-center"
          >
            How Our Mobile Service Works Across Dubai
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-sm">
            We are a fully mobile service — our technicians travel to you. No workshop, no tow truck needed.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: '1',
                title: 'Call or WhatsApp',
                description:
                  'Tell us your location, car make and model, and the service you need. We give you an upfront price and ETA immediately.',
              },
              {
                step: '2',
                title: 'Technician Dispatched',
                description:
                  'The nearest available technician departs with all tools and parts needed for your specific job — no return visits.',
              },
              {
                step: '3',
                title: 'Work Completed On-Site',
                description:
                  'Your key is cut, programmed or your car unlocked — all at your location. Underground car parks, villas, mall car parks — we handle them all.',
              },
              {
                step: '4',
                title: 'Tested & Handed Over',
                description:
                  'Every job is tested in your vehicle before we leave. We issue a receipt and a 30-day service warranty on all key work.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <span
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold text-sm font-bold text-brand-navy"
                  aria-hidden="true"
                >
                  {item.step}
                </span>
                <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Response time note */}
          <div className="mt-10 rounded-xl border border-brand-gold/20 bg-brand-gold/5 p-6">
            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 shrink-0 text-brand-gold mt-0.5" aria-hidden="true" />
              <div>
                <h3 className="font-heading font-semibold text-foreground">
                  Average Response Time: 15–30 Minutes
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Our Al Bada&apos;a base puts us within 15–25 minutes of the majority of Dubai&apos;s
                  population. For areas further afield — Palm Jumeirah, Motor City, International City,
                  Silicon Oasis — response times extend to 35–60 minutes. We give you a precise ETA when
                  you call, and we update you if traffic conditions change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Coverage Guarantees ──────────────────────────────────────────── */}
      <section
        aria-labelledby="coverage-guarantees-heading"
        className="py-14 bg-muted/40 border-y border-border"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2
            id="coverage-guarantees-heading"
            className="font-heading text-2xl font-bold text-foreground mb-8 text-center"
          >
            What You Get at Every Location
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'All 12 car key & locksmith services available',
              'Same pricing regardless of Dubai area — no distance surcharge',
              'Open daily 24/7 including UAE public holidays',
              'Upfront pricing confirmed before dispatch',
              'Certified, identity-verified technicians',
              '30-day warranty on all key programming work',
              'Non-destructive entry methods for unlockouts',
              'Accepts Emirates ID verification for key replacements',
              'Branded service van with professional equipment',
            ].map((guarantee) => (
              <div key={guarantee} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-gold mt-0.5" aria-hidden="true" />
                <p className="text-sm text-foreground">{guarantee}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Final CTA ─────────────────────────────────────────────────────── */}
      <CtaSection
        heading="Need a Locksmith in Dubai? We Come to You."
        subtext={`${BUSINESS_NAME} (D90, Al Bada'a, Dubai) covers all 15 areas listed above. One call gets you a certified technician with the right equipment for your car and location — open daily 24/7, 7 days a week.`}
      />
    </>
  )
}
