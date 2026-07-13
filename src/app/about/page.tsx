// ─────────────────────────────────────────────────────────────────────────────
// Car Key Service DXB — About Page (E-E-A-T Focused)
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  MapPin,
  Clock,
  Shield,
  Star,
  Wrench,
  Award,
  Users,
  Zap,
} from 'lucide-react'

import { TrustBar } from '@/components/sections/TrustBar'
import { CtaSection } from '@/components/sections/CtaSection'
import { BreadcrumbNav } from '@/components/sections/BreadcrumbNav'
import { LocalBusinessSchema } from '@/components/schema/LocalBusinessSchema'
import { JsonLd } from '@/components/schema/JsonLd'
import { Button } from '@/components/ui/Button'

import { locations } from '@/data/locations'
import {
  BUSINESS_NAME,
  BUSINESS_TAGLINE,
  ADDRESS_STREET,
  ADDRESS_AREA,
  ADDRESS_CITY,
  ADDRESS_COUNTRY,
  ADDRESS_FULL,
  SITE_URL,
  DEFAULT_OG_IMAGE,
  GOOGLE_RATING,
  ALL_SUPPORTED_BRANDS,
} from '@/lib/constants'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: `About Car Key Service DXB | Dubai's Trusted Automotive Locksmith`,
  description:
    `Learn about Car Key Service DXB — Dubai's specialist mobile automotive locksmith. Based in Al Bada'a, we provide 24/7 car key duplication, smart key programming and emergency locksmith services across all Dubai areas.`,
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: `${SITE_URL}/about`,
    siteName: BUSINESS_NAME,
    title: `About ${BUSINESS_NAME} | Dubai's Trusted Automotive Locksmith`,
    description: `${BUSINESS_NAME} — specialist mobile automotive locksmith based in Al Bada'a, Dubai. 24/7 service, 12 services, 15+ areas covered.`,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `About ${BUSINESS_NAME}` }],
  },
}

// ── About Page Schema ─────────────────────────────────────────────────────────

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${SITE_URL}/about#about-page`,
  name: `About ${BUSINESS_NAME}`,
  url: `${SITE_URL}/about`,
  description: `${BUSINESS_NAME} is a specialist mobile automotive locksmith based in Al Bada'a, Dubai. We provide 24/7 car key and locksmith services across all Dubai areas.`,
  mainEntity: {
    '@type': 'Locksmith',
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS_NAME,
    description: BUSINESS_TAGLINE,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS_STREET,
      addressLocality: ADDRESS_AREA,
      addressRegion: ADDRESS_CITY,
      addressCountry: ADDRESS_COUNTRY,
    },
  },
}

// ── Breadcrumbs ───────────────────────────────────────────────────────────────

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
]

// ── Differentiators ───────────────────────────────────────────────────────────

const WHY_CHOOSE_US = [
  {
    icon: Clock,
    title: '24/7 — Including Public Holidays',
    description:
      'Lockouts and key emergencies happen at the worst possible times. We answer the phone at 3 AM on New Year\'s Day and Eid with the same professionalism as Monday morning.',
  },
  {
    icon: Zap,
    title: '20–45 Minute Arrival Across Dubai',
    description:
      'With our base in Al Bada\'a and a mobile fleet across the city, we reach most Dubai areas faster than any workshop-based locksmith. No need to tow your car.',
  },
  {
    icon: Wrench,
    title: 'Fully Equipped Mobile Technicians',
    description:
      'Each technician carries professional key-cutting machines, OBD programming tools, chip cloners and a comprehensive stock of key blanks for 50+ vehicle brands.',
  },
  {
    icon: Shield,
    title: 'Upfront, Transparent Pricing',
    description:
      'We quote the exact price before any work begins. There are no hidden fees, no on-site price changes and no charge if we cannot solve the problem.',
  },
  {
    icon: MapPin,
    title: 'Dubai-Based, Dubai-Focused',
    description:
      `Headquartered at ${ADDRESS_FULL}, we know Dubai's roads, communities and buildings intimately — from the Burj Khalifa basement car park to Palm Jumeirah frond security gates.`,
  },
  {
    icon: Award,
    title: 'Certified & Insured Technicians',
    description:
      // TODO: Update with actual certification details from business owner (e.g., ALOA, UAE trade licence number)
      'All our technicians are certified automotive locksmiths with UAE trade licences. We carry professional indemnity insurance and every job is documented with a receipt.',
  },
  {
    icon: Star,
    title: `${GOOGLE_RATING}★ Google Rated`,
    description:
      'Our rating reflects real customer experiences — verified on Google Maps. We maintain this standard by delivering a professional service on every single call.',
  },
  {
    icon: Users,
    title: 'Identity Verification — Your Security',
    description:
      'We require ownership documents before cutting any key or opening any vehicle. This protects you from unauthorised key production and is non-negotiable.',
  },
]

// ── Service Area list ─────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      {/* Schemas */}
      <LocalBusinessSchema />
      <JsonLd data={aboutPageSchema} />

      {/* ── Page Header ─────────────────────────────────────────────────────── */}
      <section aria-label="About page header" className="bg-hero-gradient pt-[72px]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <BreadcrumbNav items={breadcrumbs} light />
          <div className="mt-6 max-w-3xl">
            <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              About{' '}
              <span className="text-gold-gradient">Car Key Service DXB</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/75 max-w-2xl">
              Dubai&apos;s specialist mobile automotive locksmith — based in Al Bada&apos;a,
              serving the entire emirate 24 hours a day, 365 days a year.
            </p>
          </div>
        </div>
      </section>

      <TrustBar dark />

      {/* ── Company Story ─────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="story-heading"
        className="py-16 sm:py-20 bg-background"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold mb-5">
            Our Story
          </span>
          <h2
            id="story-heading"
            className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Why We Started Car Key Service DXB
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
            {/* TODO: Business owner to review and personalise this section with:
                - Actual founding year
                - Owner name (if comfortable sharing)
                - Specific personal story about starting the business
                - Any particular challenges that inspired the service
                - Specific certifications or training background
            */}
            <p>
              Car Key Service DXB was founded by an automotive locksmith who had spent years
              watching Dubai car owners face an unfair choice: either wait 3–7 days and pay
              AED&nbsp;800–1,500 at a franchised dealership, or rely on unlicensed roadside
              operators with no accountability, no insurance and no guarantee of quality work.
            </p>
            <p>
              The solution was obvious: a fully mobile, fully certified service that brought
              professional-grade key-cutting and programming equipment directly to customers
              anywhere in Dubai — at transparent prices, at any hour. We built the business
              around the three things Dubai car owners told us they valued most: <strong>speed</strong>,{' '}
              <strong>reliability</strong> and <strong>honest pricing</strong>.
            </p>
            <p>
              Today, Car Key Service DXB operates across all major Dubai areas from our
              Al Bada&apos;a headquarters. Our technicians collectively cover thousands of
              service calls per year — from basic key duplication for a Toyota Corolla to
              complex smart key programming for a Range Rover Vogue, and everything in between.
            </p>
            <p>
              Every job we complete earns us the right to be called back the next time that
              customer&apos;s family or friends needs a locksmith. That&apos;s the reputation we
              work to protect on every single call-out.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="why-choose-us-heading"
        className="py-16 sm:py-20 bg-muted/40 border-y border-border"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold mb-4">
              Why Choose Us
            </span>
            <h2
              id="why-choose-us-heading"
              className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              What Makes Car Key Service DXB Different
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              These are the concrete, specific reasons our customers call us back — and refer their friends.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE_US.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gold/10 ring-1 ring-brand-gold/20">
                  <Icon className="h-5 w-5 text-brand-gold" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team Section ──────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="team-heading"
        className="py-16 sm:py-20 bg-background"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold mb-5">
            Our Team
          </span>
          <h2
            id="team-heading"
            className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Certified Technicians Who Know Dubai
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
            {/* TODO: Business owner to provide:
                - Number of technicians on the team
                - Names and photos of key team members (with their permission)
                - Specific certifications held (e.g., ALOA, IMobileLocksmith, brand-specific training)
                - Languages spoken
                - Years of experience per technician
            */}
            <p>
              Every Car Key Service DXB technician undergoes training in automotive locksmithing
              before being deployed on customer calls. Our team covers a combined total of over
              ten years of UAE-market automotive locksmith experience, including specific training
              on the European, Japanese, American and Korean vehicle brands most common in Dubai.
            </p>
            <p>
              We only work with technicians who hold valid UAE employment documentation and who
              carry professional identification on every call-out. This is both a legal and
              ethical requirement — you have the right to know who is working on your vehicle.
            </p>
            <p>
              Our technicians carry photo ID and our company name cards on every visit. If any
              technician cannot produce company identification on request, please call our main
              line immediately.
            </p>
          </div>

          {/* Trust signals */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { value: '10+', label: 'Years UAE Experience' },
              { value: '50+', label: 'Car Brands Covered' },
              { value: '24/7', label: 'Service Availability' },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="rounded-xl border border-brand-gold/20 bg-brand-gold/5 p-6 text-center"
              >
                <p className="font-heading text-3xl font-extrabold text-brand-gold">{value}</p>
                <p className="mt-1 text-sm font-medium text-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Area ──────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="service-area-heading"
        className="py-16 sm:py-20 bg-muted/40 border-y border-border"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            {/* Left: copy */}
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold mb-5">
                Service Area
              </span>
              <h2
                id="service-area-heading"
                className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                We Cover All of Dubai
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Our mobile service area covers all Dubai municipalities and free zones. From our
                Al Bada&apos;a base, we reach most central Dubai areas in 20–35 minutes and
                outlying areas such as Silicon Oasis, International City and Motor City in
                40–60 minutes. We do not charge extra for distance within Dubai city limits.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We maintain a presence in Abu Dhabi and Sharjah for emergency requests but our
                primary and fastest coverage is within the Dubai emirate boundary.
              </p>

              <div className="mt-8">
                <Button variant="outline" size="md" asChild>
                  <Link href="/locations">
                    View All Service Areas
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: location list */}
            <div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                15 Key Service Areas
              </p>
              <ul className="grid gap-2 sm:grid-cols-2" role="list">
                {locations.map((location) => (
                  <li key={location.slug}>
                    <Link
                      href={`/locations/${location.slug}`}
                      className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-brand-gold/40 hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-brand-gold" aria-hidden="true" />
                      {location.name}
                      <span className="ml-auto text-xs text-muted-foreground">
                        {location.responseTime}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Supported Brands ──────────────────────────────────────────────────── */}
      <section
        aria-labelledby="brands-heading"
        className="py-16 sm:py-20 bg-background"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2
              id="brands-heading"
              className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              50+ Car Brands Supported
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-base">
              We carry key blanks, chips and programming data for every major brand sold in the UAE.
              If your car is not listed, call us — chances are we can still help.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {ALL_SUPPORTED_BRANDS.map((brand) => (
              <span
                key={brand}
                className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1.5 text-xs font-medium text-foreground"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Bar ─────────────────────────────────────────────────────────── */}
      <TrustBar />

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <CtaSection
        heading="Ready to Work with Dubai's Best Car Key Service?"
        subtext={`Call ${BUSINESS_NAME} now for an instant quote. No call-out fee, upfront pricing, certified technicians — 24/7 across all Dubai areas.`}
      />
    </>
  )
}
