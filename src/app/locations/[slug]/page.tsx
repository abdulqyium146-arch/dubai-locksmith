// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Dynamic Location Page
// /locations/[slug] — unique page for each of 15 Dubai service areas
// All content pulled from data module — zero hardcoded area-specific content
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Navigation,
  ArrowRight,
  Building2,
  Landmark,
  Zap,
  CheckCircle2,
  Car,
  ExternalLink,
} from 'lucide-react'

import { BreadcrumbNav } from '@/components/sections/BreadcrumbNav'
import { FaqAccordion } from '@/components/sections/FaqAccordion'
import { CtaSection } from '@/components/sections/CtaSection'
import { ServiceCard } from '@/components/sections/ServiceCard'
import { JsonLd } from '@/components/schema/JsonLd'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

import {
  getLocationBySlug,
  getAllLocationSlugs,
  getNearbyLocations,
} from '@/data/locations'
import { services } from '@/data/services'
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
  SOCIAL_LINKS,
  GOOGLE_MAPS_URL,
} from '@/lib/constants'

// ─────────────────────────────────────────────────────────────────────────────
// Static Params — generate all 15 location pages at build time
// ─────────────────────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }))
}

// ─────────────────────────────────────────────────────────────────────────────
// Metadata — per-location title, description and canonical
// ─────────────────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const location = getLocationBySlug(slug)
  if (!location) return {}

  const canonicalUrl = `${SITE_URL}/locations/${location.slug}`

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      locale: 'en_AE',
      url: canonicalUrl,
      siteName: BUSINESS_NAME,
      title: location.metaTitle,
      description: location.metaDescription,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `Car Key Service in ${location.name}, Dubai — ${BUSINESS_NAME}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: location.metaTitle,
      description: location.metaDescription,
      images: [DEFAULT_OG_IMAGE],
    },
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Schema Components
// ─────────────────────────────────────────────────────────────────────────────

interface LocationSchemaProps {
  locationName: string
  locationSlug: string
  lat: number
  lng: number
  faqs: Array<{ question: string; answer: string }>
}

function LocationPageSchema({
  locationName,
  locationSlug,
  lat,
  lng,
  faqs,
}: LocationSchemaProps) {
  const pageUrl = `${SITE_URL}/locations/${locationSlug}`

  // LocalBusiness schema scoped to this location
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['Locksmith', 'LocalBusiness'],
    '@id': `${pageUrl}#localbusiness`,
    name: BUSINESS_NAME,
    url: pageUrl,
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
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '07:00',
      closes: '23:30',
    },
    priceRange: SCHEMA_ORG.priceRange,
    currenciesAccepted: SCHEMA_ORG.currenciesAccepted,
    paymentAccepted: SCHEMA_ORG.paymentAccepted,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: GOOGLE_RATING,
      bestRating: 5,
      worstRating: 1,
      reviewCount: 20,
    },
    areaServed: {
      '@type': 'Place',
      name: locationName,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: lat,
        longitude: lng,
      },
    },
    sameAs: [SOCIAL_LINKS.facebook, SOCIAL_LINKS.instagram, GOOGLE_MAPS_URL],
  }

  // FAQPage schema for location-specific FAQs
  const faqSchema =
    faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null

  // Service schema referencing this location
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Car Key & Locksmith Service in ${locationName}`,
    description: `Professional locksmith and car key services in ${locationName}, Dubai. Key duplication, lock repair, emergency unlock, transponder programming, smart key replacement, car battery replacement — available daily 7 AM–11:30 PM at your location.`,
    provider: {
      '@type': 'LocalBusiness',
      name: BUSINESS_NAME,
      telephone: PHONE_RAW,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Place',
      name: `${locationName}, Dubai`,
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      servicePhone: {
        '@type': 'ContactPoint',
        telephone: PHONE_RAW,
        contactType: 'customer service',
        availableLanguage: ['English', 'Arabic'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '07:00',
          closes: '23:30',
        },
      },
    },
  }

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <JsonLd data={serviceSchema} />
    </>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Helper: classify response time urgency
// ─────────────────────────────────────────────────────────────────────────────

function getResponseTimeBadge(responseTime: string): {
  label: string
  color: string
} {
  const mins = parseInt(responseTime.split('-')[0], 10)
  if (mins <= 15) return { label: 'Home Base — Fastest Response', color: 'gold' }
  if (mins <= 25) return { label: 'Fast Response', color: 'success' }
  if (mins <= 40) return { label: 'Standard Response', color: 'neutral' }
  return { label: 'Extended Coverage', color: 'neutral' }
}

// ─────────────────────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────────────────────

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const location = getLocationBySlug(slug)

  if (!location) notFound()

  const nearbyLocations = getNearbyLocations(location.slug, 4)
  const responseTimeBadge = getResponseTimeBadge(location.responseTime)

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Locations', href: '/locations' },
    { name: location.name, href: `/locations/${location.slug}` },
  ]

  // Google Maps directions link using lat/lng
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location.coordinates.lat},${location.coordinates.lng}`

  // Build a contextual hero subheading from the first 2 landmarks
  const heroLandmarks = location.landmarks.slice(0, 2)
  const heroLandmarkText =
    heroLandmarks.length === 2
      ? `Serving clients near ${heroLandmarks[0]}, ${heroLandmarks[1]}, and across ${location.name}`
      : heroLandmarks.length === 1
      ? `Serving clients near ${heroLandmarks[0]} and across ${location.name}`
      : `Serving all of ${location.name}`

  // Derive a contextual building type sentence from the data
  const primaryBuildingType = location.buildingTypes[0] ?? 'residential property'
  const secondaryBuildingType = location.buildingTypes[1] ?? 'commercial building'

  return (
    <>
      {/* Schemas */}
      <LocationPageSchema
        locationName={location.name}
        locationSlug={location.slug}
        lat={location.coordinates.lat}
        lng={location.coordinates.lng}
        faqs={location.faqs}
      />

      {/* ── 1. Hero ────────────────────────────────────────────────────────── */}
      <section
        aria-label={`${location.name} car key service hero`}
        className="bg-hero-gradient pt-[72px]"
      >
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          {/* Breadcrumb */}
          <BreadcrumbNav items={breadcrumbs} light />

          <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* Left column: headline + direct answer + CTAs */}
            <div>
              {/* Location pin + area name */}
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gold/20 ring-1 ring-brand-gold/40">
                  <MapPin className="h-5 w-5 text-brand-gold" aria-hidden="true" />
                </div>
                <span className="text-sm font-semibold text-brand-gold uppercase tracking-wider">
                  {location.name} · Dubai
                </span>
              </div>

              {/* Main headline */}
              <h1 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                {location.name} Car Key{' '}
                <span className="text-gold-gradient">&amp; Locksmith</span>{' '}
                Service
              </h1>

              {/* Landmark subheading — uses real location data */}
              <p className="mt-3 text-base text-white/70 leading-relaxed">
                {heroLandmarkText}
              </p>

              {/* Response time + availability badges */}
              <div className="mt-5 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/40 bg-brand-gold/15 px-4 py-1.5 text-sm font-bold text-brand-gold">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {location.responseTime} response
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90">
                  <Zap className="h-4 w-4 text-brand-gold" aria-hidden="true" />
                  Open Daily 7AM–11:30PM
                </div>
                {responseTimeBadge.color === 'gold' && (
                  <Badge variant="gold" size="sm" dot>
                    {responseTimeBadge.label}
                  </Badge>
                )}
              </div>

              {/* Direct Answer Opener — gold-bordered callout for snippet extraction */}
              <div className="mt-6 rounded-xl border-l-4 border-brand-gold bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-sm font-medium text-brand-gold mb-1 uppercase tracking-wide">
                  Quick Answer
                </p>
                <p className="text-base leading-relaxed text-white/90">
                  {location.directAnswerOpener}
                </p>
              </div>

              {/* CTA #1 — above fold */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  variant="primary"
                  className="btn-pulse w-full sm:w-auto"
                  asChild
                >
                  <a
                    href={PHONE_HREF}
                    aria-label={`Call Lock Repair Satwa for ${location.name}: ${PHONE_DISPLAY}`}
                  >
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    Call Now — {PHONE_DISPLAY}
                  </a>
                </Button>
                <Button size="lg" variant="whatsapp" className="w-full sm:w-auto" asChild>
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp for car key service in ${location.name}`}
                  >
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>

              <p className="mt-4 text-xs text-white/40">
                Mobile service · Comes to your location · All {location.name} areas covered
              </p>
            </div>

            {/* Right column: location highlights card */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm lg:sticky lg:top-24">
              {/* Response time visual treatment */}
              <div className="mb-5 rounded-xl border border-brand-gold/30 bg-brand-gold/10 p-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-brand-gold shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-medium text-brand-gold uppercase tracking-wide">
                      Response Time in {location.name}
                    </p>
                    <p className="text-2xl font-extrabold text-white font-heading">
                      {location.responseTime}
                    </p>
                    <p className="text-xs text-white/60 mt-0.5">
                      from our Al Bada&apos;a base · varies by traffic
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick facts */}
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm text-white/80">All 12 services available in {location.name}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm text-white/80">Open daily 7 AM–11:30 PM including public holidays</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm text-white/80">Price confirmed before technician departs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm text-white/80">All major car brands and key types covered</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm text-white/80">30-day warranty on all key programming work</span>
                </li>
              </ul>

              {/* Key landmarks preview */}
              {location.landmarks.length > 0 && (
                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="text-xs font-medium text-white/60 uppercase tracking-wide mb-2">
                    Key Landmarks We Serve
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {location.landmarks.slice(0, 4).map((landmark) => (
                      <span
                        key={landmark}
                        className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-white/80"
                      >
                        <Landmark className="h-3 w-3 text-brand-gold" aria-hidden="true" />
                        {landmark}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Coverage Area — Landmarks & Building Types ──────────────────── */}
      <section
        aria-labelledby="coverage-heading"
        className="py-14 sm:py-16 bg-background"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2
            id="coverage-heading"
            className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-2"
          >
            Coverage in {location.name}
          </h2>
          <p className="text-muted-foreground text-sm mb-8 max-w-2xl">
            Our mobile technicians are familiar with {location.name}&apos;s roads, parking
            structures and residential layouts. Here is exactly what we cover.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Landmarks */}
            {location.landmarks.length > 0 && (
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <Landmark className="h-5 w-5 text-brand-gold" aria-hidden="true" />
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    Landmarks &amp; Key Areas We Serve
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2" aria-label={`Landmarks in ${location.name}`}>
                  {location.landmarks.map((landmark) => (
                    <span
                      key={landmark}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-3 py-1.5 text-sm font-medium text-foreground hover:border-brand-gold/40 hover:bg-brand-gold/5 transition-colors"
                    >
                      <MapPin className="h-3 w-3 text-brand-gold" aria-hidden="true" />
                      {landmark}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Building types */}
            {location.buildingTypes.length > 0 && (
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-brand-gold" aria-hidden="true" />
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    Property Types We Service
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2" aria-label={`Building types in ${location.name}`}>
                  {location.buildingTypes.map((buildingType) => (
                    <span
                      key={buildingType}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-3 py-1.5 text-sm font-medium text-foreground hover:border-brand-gold/40 hover:bg-brand-gold/5 transition-colors"
                    >
                      <Building2 className="h-3 w-3 text-brand-gold" aria-hidden="true" />
                      {buildingType}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Contextual "We serve" block — uses actual building type data */}
          <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="font-heading text-base font-semibold text-foreground mb-3">
              Wherever You Are Parked in {location.name}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Whether you are locked out of your vehicle parked at a{' '}
              <strong className="text-foreground">{primaryBuildingType.toLowerCase()}</strong> or
              in the car park of a{' '}
              <strong className="text-foreground">{secondaryBuildingType.toLowerCase()}</strong>,
              our mobile technician comes directly to your vehicle. We work in underground car parks,
              open-air surface lots, roadside positions and gated community entrances — all
              standard environments for our service team.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. All Services Available ──────────────────────────────────────── */}
      <section
        aria-labelledby="services-heading"
        className="py-14 sm:py-16 bg-muted/40 border-y border-border"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                id="services-heading"
                className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
              >
                All Services Available in {location.name}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Because we are a mobile service, every one of our 12 services is available
                at your {location.name} location — no restrictions.
              </p>
            </div>
            <Link
              href="/services"
              className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-gold hover:text-brand-gold-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            >
              All Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          {/* CTA #2 — within services section */}
          <div className="mb-8 rounded-xl border border-brand-gold/20 bg-brand-gold/5 p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-foreground">
                <strong>Need an immediate callout in {location.name}?</strong>{' '}
                Call now for an instant quote and ETA.
              </p>
              <div className="flex gap-3 shrink-0">
                <Button size="sm" variant="primary" className="btn-pulse" asChild>
                  <a href={PHONE_HREF} aria-label={`Call for service in ${location.name}`}>
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Call Now
                  </a>
                </Button>
                <Button size="sm" variant="whatsapp" asChild>
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Response Time Detail ────────────────────────────────────────── */}
      <section
        aria-labelledby="response-time-heading"
        className="py-14 sm:py-16 bg-background"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            {/* Left: response time callout */}
            <div>
              <h2
                id="response-time-heading"
                className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-4"
              >
                Response Time in {location.name}
              </h2>

              {/* Visual response time display */}
              <div className="rounded-xl border-2 border-brand-gold/30 bg-brand-gold/5 p-6 mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-gold/15 ring-2 ring-brand-gold/30">
                    <Clock className="h-8 w-8 text-brand-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-brand-gold uppercase tracking-wider mb-1">
                      Estimated Arrival
                    </p>
                    <p className="font-heading text-4xl font-extrabold text-foreground">
                      {location.responseTime}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">minutes from your call</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                This is our typical response time to {location.name} from our Al Bada&apos;a base
                under normal traffic conditions. During peak hours (8–10 AM, 5–8 PM) or adverse
                weather, times may be slightly longer. We will give you a precise, real-time ETA
                when you call.
              </p>
            </div>

            {/* Right: how mobile service works here */}
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                How Mobile Service Works in {location.name}
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <Car className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Technician Comes to You</p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      No need to tow your car or visit a workshop. Your {location.name} address is
                      our destination — villa, apartment, car park or roadside.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Full Equipment On-Board</p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      Our service van carries key cutting machines, OBD programming tools, battery
                      testers and a wide inventory of key blanks — everything needed for a single-visit
                      solution.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Zap className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Price Locked Before Dispatch</p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      We confirm your quote on the phone based on your car and key type. There are no
                      surprises when the technician arrives at your {location.name} location.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Location Description ───────────────────────────────────────── */}
      <section
        aria-labelledby="area-description-heading"
        className="py-14 sm:py-16 bg-muted/40 border-y border-border"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="area-description-heading"
            className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6"
          >
            Car Key Services in {location.name} — Area Overview
          </h2>
          <div className="space-y-4">
            {location.description.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FAQs ───────────────────────────────────────────────────────── */}
      {location.faqs.length > 0 && (
        <section
          aria-labelledby="faqs-heading"
          className="py-14 sm:py-16 bg-background"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2
              id="faqs-heading"
              className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-8"
            >
              Frequently Asked Questions — {location.name}
            </h2>
            {/* FaqAccordion handles its own FaqSchema internally */}
            <FaqAccordion faqs={location.faqs} withSchema={false} />
          </div>
        </section>
      )}

      {/* ── 7. Map Placeholder ────────────────────────────────────────────── */}
      <section
        aria-labelledby="map-heading"
        className="py-14 sm:py-16 bg-muted/40 border-y border-border"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="map-heading"
            className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-2"
          >
            Getting Our Technician to {location.name}
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Share your precise location with us — a pin, Plus Code or street address — so our
            technician reaches you without delay.
          </p>

          {/* TODO: Replace the placeholder below with a real Google Maps embed once
               the Maps JavaScript API key is configured. Use the coordinates:
               lat: {location.coordinates.lat}, lng: {location.coordinates.lng}
               Recommended embed: <iframe src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q={location.coordinates.lat},{location.coordinates.lng}&zoom=15" /> */}
          <div className="relative rounded-xl border border-border bg-card overflow-hidden">
            {/* Map placeholder visual */}
            <div
              className="flex h-64 items-center justify-center bg-gradient-to-br from-muted to-muted/50"
              aria-label={`Map placeholder for ${location.name}`}
            >
              <div className="text-center">
                <MapPin className="mx-auto mb-3 h-12 w-12 text-brand-gold/60" aria-hidden="true" />
                <p className="font-heading text-lg font-semibold text-foreground">
                  {location.name}, Dubai
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {location.coordinates.lat.toFixed(4)}°N, {location.coordinates.lng.toFixed(4)}°E
                </p>
                {/* TODO: Uncomment and add real map embed above this placeholder */}
              </div>
            </div>

            {/* Address + directions link */}
            <div className="border-t border-border bg-card p-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <Navigation className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Service Area: {location.name}, Dubai
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Coordinates: {location.coordinates.lat}, {location.coordinates.lng}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Our base: D90, Al Bada&apos;a, Dubai
                    </p>
                  </div>
                </div>
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-brand-gold/40 hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shrink-0"
                  aria-label={`Get directions to ${location.name} on Google Maps`}
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Directions on Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Tip for sharing location */}
          <div className="mt-4 rounded-lg border border-brand-gold/20 bg-brand-gold/5 px-4 py-3">
            <p className="text-xs text-muted-foreground">
              <strong className="text-foreground">Tip:</strong> The quickest way to share your
              location is to drop a WhatsApp pin or copy your Google Maps Plus Code. Both work
              perfectly for our technician&apos;s navigation.
            </p>
          </div>
        </div>
      </section>

      {/* ── 8. Nearby Locations ───────────────────────────────────────────── */}
      {nearbyLocations.length > 0 && (
        <section
          aria-labelledby="nearby-heading"
          className="py-14 sm:py-16 bg-background"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <h2
                  id="nearby-heading"
                  className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
                >
                  Nearby Service Areas
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Also looking for service in a neighbouring area?
                </p>
              </div>
              <Link
                href="/locations"
                className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-gold hover:text-brand-gold-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
              >
                All Locations
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Compact nearby location cards — not full LocationCards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {nearbyLocations.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/locations/${nearby.slug}`}
                  className="group rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:border-brand-gold/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={`Car key service in ${nearby.name}`}
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-navy/10 dark:bg-brand-gold/10 ring-1 ring-brand-navy/20 dark:ring-brand-gold/20">
                      <MapPin className="h-4 w-4 text-brand-gold" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-medium text-brand-gold">
                      {nearby.responseTime}
                    </span>
                  </div>

                  <h3 className="font-heading text-sm font-semibold text-foreground group-hover:text-brand-gold transition-colors">
                    {nearby.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                    {nearby.directAnswerOpener.split('.')[0]}.
                  </p>

                  <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-brand-gold">
                    View Services
                    <ArrowRight
                      className="h-3 w-3 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 9. Reviews Placeholder ────────────────────────────────────────── */}
      {/* TODO: Replace with <ReviewsSection reviews={reviews} /> once real Google
           reviews for {location.name} or general reviews are available from the
           business owner. Real, verbatim reviews only — no paraphrasing. */}
      <section
        aria-label="Customer reviews"
        className="py-10 bg-muted/40 border-y border-border"
      >
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-sm text-muted-foreground">
            Rated{' '}
            <strong className="text-brand-gold">4.7★ on Google Maps</strong> by verified
            customers across Dubai, including {location.name}.{' '}
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-brand-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            >
              Read our Google reviews
            </a>
          </p>
        </div>
      </section>

      {/* ── 10. Final CTA ─────────────────────────────────────────────────── */}
      {/* CTA #3 — contained within CtaSection */}
      <CtaSection
        heading={`Need a Locksmith in ${location.name}? Call Now.`}
        subtext={`${BUSINESS_NAME} reaches ${location.name} in ${location.responseTime}. Upfront pricing, certified technician, all key types and lock types covered. Open daily 7 AM–11:30 PM including UAE public holidays.`}
      />
    </>
  )
}
