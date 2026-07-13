// ─────────────────────────────────────────────────────────────────────────────
// Car Key Service DXB — Homepage
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MessageCircle, CheckCircle2, ArrowRight, PhoneCall, Wrench, ThumbsUp } from 'lucide-react'

import { HeroSection } from '@/components/sections/HeroSection'
import { TrustBar } from '@/components/sections/TrustBar'
import { ServiceCard } from '@/components/sections/ServiceCard'
import { LocationCard } from '@/components/sections/LocationCard'
import { ReviewsSection } from '@/components/sections/ReviewsSection'
import { CtaSection } from '@/components/sections/CtaSection'
import { LocalBusinessSchema } from '@/components/schema/LocalBusinessSchema'
import { JsonLd } from '@/components/schema/JsonLd'
import { Button } from '@/components/ui/Button'

import { services } from '@/data/services'
import { locations } from '@/data/locations'
import {
  BUSINESS_NAME,
  BUSINESS_TAGLINE,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_HREF,
  SITE_URL,
  DEFAULT_OG_IMAGE,
  DEFAULT_META_DESCRIPTION,
  ADDRESS_AREA,
  ADDRESS_CITY,
} from '@/lib/constants'
import type { Review } from '@/types'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: `${BUSINESS_NAME} | ${BUSINESS_TAGLINE}`,
  description: DEFAULT_META_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    title: `${BUSINESS_NAME} | ${BUSINESS_TAGLINE}`,
    description: DEFAULT_META_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${BUSINESS_NAME} — Dubai's Trusted 24/7 Automotive Locksmith`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS_NAME} | ${BUSINESS_TAGLINE}`,
    description: DEFAULT_META_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
}

// ── Website + SearchAction Schema ─────────────────────────────────────────────

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: BUSINESS_NAME,
  url: SITE_URL,
  description: BUSINESS_TAGLINE,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/services?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

// ── How It Works data ─────────────────────────────────────────────────────────

const HOW_IT_WORKS = [
  {
    step: 1,
    icon: PhoneCall,
    title: 'Call or WhatsApp Us',
    description:
      'Call +971 52 817 6909 or send a WhatsApp message. Tell us your location, car make/model and the service you need. We confirm availability and give you an upfront price in under 2 minutes.',
  },
  {
    step: 2,
    icon: Wrench,
    title: 'We Come to You',
    description:
      'A certified mobile technician is dispatched immediately from our Al Bada\'a base or nearest available unit. We reach most Dubai locations in 20–45 minutes — no need to tow your car or visit a workshop.',
  },
  {
    step: 3,
    icon: ThumbsUp,
    title: 'Problem Solved, On the Spot',
    description:
      'Our technician carries professional key-cutting machines, OBD programming tools and diagnostic equipment. Most jobs are completed in a single visit — you get a tested, working key before we leave.',
  },
]

// ── TODO: Replace with real, verbatim Google reviews from business owner ──────
// IMPORTANT: The reviews below are PLACEHOLDERS only. Do not publish these
// placeholder reviews on the live site. The business owner must supply real,
// verbatim review content with actual reviewer names and verified dates from
// Google Maps before going live.

const PLACEHOLDER_REVIEWS: Review[] = [
  // TODO: Replace with real Google reviews — contact business owner
]

// ── About section differentiators ────────────────────────────────────────────

const DIFFERENTIATORS = [
  {
    title: '10+ Years Experience',
    description: 'Certified automotive locksmiths with over a decade of hands-on UAE market experience.',
  },
  {
    title: '24/7 Emergency Service',
    description: 'We answer the phone at 3 AM on public holidays — lockouts never keep business hours.',
  },
  {
    title: '100% Mobile — We Come to You',
    description: 'No workshop visit needed. Our technicians carry all equipment directly to your location.',
  },
  {
    title: 'Dubai-Based & Dubai-Focused',
    description: `Headquartered in ${ADDRESS_AREA}, ${ADDRESS_CITY} — we know every area and respond fast.`,
  },
  {
    title: 'Upfront, Transparent Pricing',
    description: 'You receive a firm quote before we start any work. No hidden fees, no surprises.',
  },
  {
    title: '50+ Car Brands Covered',
    description: 'From Toyota Land Cruisers to BMW, Mercedes-Benz, Tesla and everything in between.',
  },
]

// ── Featured locations (first 6) ──────────────────────────────────────────────

const featuredLocations = locations.slice(0, 6)

// ─────────────────────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* Structured data */}
      <LocalBusinessSchema />
      <JsonLd data={websiteSchema} />

      {/* ── 1. Hero ─────────────────────────────────────────────────────────── */}
      <HeroSection
        title={
          <>
            Dubai&apos;s 24/7 Car Key &amp;{' '}
            <span className="text-gold-gradient">Locksmith</span> Experts
          </>
        }
        subtitle="Mobile automotive locksmith service across all Dubai areas. Car key duplication, smart key programming, emergency car unlock and more — certified technician at your location in 20–45 minutes."
        badge="24/7 Emergency Service — All Dubai Areas"
        ctaLabel="View All 12 Services"
        ctaHref="/services"
        showTrustBar={false}
      />

      {/* ── Trust Bar ───────────────────────────────────────────────────────── */}
      <TrustBar dark />

      {/* ── 2. Services Section ─────────────────────────────────────────────── */}
      <section
        aria-labelledby="services-heading"
        className="py-16 sm:py-20 bg-background"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold mb-4">
              Complete Service Range
            </span>
            <h2
              id="services-heading"
              className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              All Car Key &amp; Locksmith Services in Dubai
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              From a simple spare key to full smart key programming for a European luxury car —
              we handle every automotive key and lock need across Dubai, on-site at your location.
            </p>
          </div>

          {/* Services grid — all 12 */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                featured={service.slug === 'emergency-car-unlock' || service.slug === 'car-key-replacement'}
              />
            ))}
          </div>

          {/* View all CTA */}
          <div className="mt-10 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── 3. How It Works ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="how-it-works-heading"
        className="py-16 sm:py-20 bg-muted/40 border-y border-border"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold mb-4">
              Simple Process
            </span>
            <h2
              id="how-it-works-heading"
              className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              How It Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Three steps from stranded to sorted. No towing, no dealership, no waiting days.
            </p>
          </div>

          {/* Steps */}
          <div className="relative grid gap-8 md:grid-cols-3">
            {/* Connecting line (desktop) */}
            <div
              aria-hidden="true"
              className="absolute top-10 left-1/3 right-1/3 hidden h-px bg-gradient-to-r from-brand-gold/20 via-brand-gold/60 to-brand-gold/20 md:block"
            />

            {HOW_IT_WORKS.map(({ step, icon: Icon, title, description }) => (
              <div
                key={step}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step circle */}
                <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-navy dark:bg-brand-navy-light ring-4 ring-brand-gold/30 shadow-lg">
                  <Icon className="h-8 w-8 text-brand-gold" aria-hidden="true" />
                  {/* Step number badge */}
                  <span
                    className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-brand-gold text-xs font-bold text-brand-navy"
                    aria-hidden="true"
                  >
                    {step}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-xs">
                  {description}
                </p>
              </div>
            ))}
          </div>

          {/* Emergency CTA below steps */}
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="primary" className="btn-pulse w-full sm:w-auto" asChild>
              <a href={PHONE_HREF} aria-label={`Call Car Key Service DXB: ${PHONE_DISPLAY}`}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call Now — {PHONE_DISPLAY}
              </a>
            </Button>
            <Button size="lg" variant="whatsapp" className="w-full sm:w-auto" asChild>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Car Key Service DXB"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── 4. Locations Section ────────────────────────────────────────────── */}
      <section
        aria-labelledby="locations-heading"
        className="py-16 sm:py-20 bg-background"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold mb-4">
              All Dubai Areas Covered
            </span>
            <h2
              id="locations-heading"
              className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              We Serve Every Corner of Dubai
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              From our Al Bada&apos;a base, our mobile technicians reach 15+ major Dubai areas.
              Whether you&apos;re in Downtown, Dubai Marina, JVC or International City — we come to you.
            </p>
          </div>

          {/* Location cards grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredLocations.map((location) => (
              <LocationCard key={location.slug} location={location} />
            ))}
          </div>

          {/* View all locations */}
          <div className="mt-10 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/locations">
                View All 15 Service Areas
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── 5. About / E-E-A-T Section ──────────────────────────────────────── */}
      <section
        aria-labelledby="about-heading"
        className="py-16 sm:py-20 bg-brand-navy text-white"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left: copy */}
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/15 px-3 py-1 text-xs font-semibold text-brand-gold mb-5">
                About Car Key Service DXB
              </span>
              <h2
                id="about-heading"
                className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                Dubai&apos;s Most Trusted Mobile Car Key Specialists
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/75">
                Car Key Service DXB is a specialist mobile automotive locksmith based in Al Bada&apos;a,
                Dubai. We founded this business with a single mission: to provide the people and
                businesses of Dubai with a fast, reliable and fairly priced car key service —
                without the days of waiting and premium markup that franchised dealerships charge.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/75">
                Our certified technicians carry professional key-cutting machines, OBD programming
                equipment and a comprehensive stock of key blanks for 50+ vehicle brands. We cover
                every type of car key service — from a basic spare key to full smart key programming
                for the latest European luxury vehicles — all performed at your location.
              </p>

              {/* Brand tags */}
              <div className="mt-6">
                <p className="text-sm font-semibold text-white/50 mb-3 uppercase tracking-wide">
                  Supported Makes Include
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Toyota', 'Nissan', 'BMW', 'Mercedes-Benz', 'Audi', 'Land Rover', 'Ford', 'GMC', 'Hyundai', 'Lexus', 'Porsche', 'Tesla'].map((brand) => (
                    <span
                      key={brand}
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
                    >
                      {brand}
                    </span>
                  ))}
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                    + 40 more
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <Button variant="primary" size="lg" className="btn-pulse" asChild>
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: differentiator cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {DIFFERENTIATORS.map(({ title, description }) => (
                <div
                  key={title}
                  className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-semibold text-white text-sm">{title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-white/60">{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Reviews Section ──────────────────────────────────────────────── */}
      {PLACEHOLDER_REVIEWS.length > 0 && (
        <section
          aria-labelledby="reviews-section-heading"
          className="py-16 sm:py-20 bg-muted/40 border-y border-border"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ReviewsSection reviews={PLACEHOLDER_REVIEWS} />
          </div>
        </section>
      )}

      {/* Placeholder notice — visible only until real reviews are added */}
      {PLACEHOLDER_REVIEWS.length === 0 && (
        <section className="py-12 bg-muted/30 border-y border-border" aria-label="Customer reviews">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <p className="text-sm text-muted-foreground">
              {/* TODO: Replace this section with ReviewsSection once real Google reviews are provided by the business owner */}
              Customer reviews coming soon — rated{' '}
              <strong className="text-brand-gold">4.7★ on Google Maps</strong>.{' '}
              <a
                href="https://maps.google.com/?q=Car+Key+Service+DXB+Al+Bada%27a+Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-brand-gold transition-colors"
              >
                Read our reviews on Google
              </a>
            </p>
          </div>
        </section>
      )}

      {/* ── 7. Final CTA ────────────────────────────────────────────────────── */}
      <CtaSection
        heading="Locked Out or Need a Spare Key? Call Now."
        subtext={`${BUSINESS_NAME} is Dubai's 24/7 mobile car key specialist. We come to you — at home, the office, the mall or the roadside — anywhere in Dubai, any time.`}
      />
    </>
  )
}
