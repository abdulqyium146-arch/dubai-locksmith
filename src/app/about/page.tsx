// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — About Page (E-E-A-T Focused)
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'
import Image from 'next/image'
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
  title: { absolute: `About Lock Repair Satwa | Professional Locksmith in Dubai` },
  description:
    `Learn about Lock Repair Satwa — Dubai's professional locksmith based at D90, Al Bada'a. We provide lock repair, car key duplication, smart key programming and emergency locksmith services across all Dubai areas. Rated 4.7★ on Google.`,
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: `${SITE_URL}/about`,
    siteName: BUSINESS_NAME,
    title: `About ${BUSINESS_NAME} | Professional Locksmith in Dubai`,
    description: `${BUSINESS_NAME} — professional locksmith based at D90, Al Bada'a, Dubai. Open daily 24/7, 32 services, 24+ areas covered. Rated 4.7★ on Google.`,
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
  description: `${BUSINESS_NAME} is a professional locksmith based at D90, Al Bada'a, Dubai. We provide lock repair, car key duplication, and emergency locksmith services across all Dubai areas. Open daily 24/7.`,
  mainEntity: {
    '@type': 'Locksmith',
    '@id': `${SITE_URL}/#lock-repair-satwa`,
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

const GMB_VIDEO_URL =
  'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWltHE0hQs14hXUSwhOqqGkXztZllu27k47AZowjW41jU26vvWBCJPVe5-uJLaZkYDBQN4CrB2W4Ax9ICo0-Pv0mRxTLKMi0BruM3EsaO5P18im2Ay8fffq8MR-kCpAZZcFIzTEwrw=m18'

const videoObjectSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Lock Repair Satwa — Professional Locksmith in Dubai',
  description:
    "Watch Lock Repair Satwa professionals at work — key duplication, car key programming, door lock repair and emergency locksmith services at D90, Al Bada'a, Dubai.",
  contentUrl: GMB_VIDEO_URL,
  thumbnailUrl: GMB_VIDEO_URL,
  uploadDate: '2025-01-01',
  publisher: {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#lock-repair-satwa`,
    name: BUSINESS_NAME,
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
    title: 'Open Daily 7 AM – 11:30 PM',
    description:
      'We are open every day from 7:00 AM to 11:30 PM, including weekends and public holidays. Call us for lock repair, key duplication, or any locksmith need during our operating hours.',
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
    title: 'UAE Trade Licensed Business',
    description:
      'Lock Repair Satwa operates under a valid UAE trade licence. Every technician carries company ID on every visit and every completed job is confirmed with a receipt.',
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
      <JsonLd data={aboutPageSchema} />
      <JsonLd data={videoObjectSchema} />

      {/* ── Page Header ─────────────────────────────────────────────────────── */}
      <section aria-label="About page header" className="bg-hero-gradient pt-[72px]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <BreadcrumbNav items={breadcrumbs} light />
          <div className="mt-6 max-w-3xl">
            <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              About{' '}
              <span className="text-gold-gradient">Lock Repair Satwa</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/75 max-w-2xl">
              Lock Repair Satwa is a professional locksmith based at D90, Al Bada&apos;a, Dubai —
              serving all Dubai areas daily from 7 AM to 11:30 PM. Rated 4.7&#9733; on Google.
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
            Why We Started Lock Repair Satwa
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Lock Repair Satwa is a professional locksmith and key shop based at D90, Al Bada&apos;a,
              Dubai — the neighbourhood immediately adjacent to Al Satwa Road. We built the business
              around the three things Dubai residents consistently tell us they need most:{' '}
              <strong>speed</strong>, <strong>reliability</strong>, and <strong>honest, upfront pricing</strong>.
            </p>
            <p>
              Dubai residents face a frustrating choice when a key breaks or a lock fails: wait days
              and pay premium prices at a franchised dealership, or take a chance on an unaccountable
              roadside operator. Lock Repair Satwa exists to be the professional third option — a
              fully equipped mobile service that brings the workshop to you, at transparent prices,
              across all Dubai areas.
            </p>
            <p>
              Our physical shop at D90, Al Bada&apos;a is open daily from 7:00 AM to 11:30 PM for
              walk-in key cutting, lock repair and hardware sales. Our mobile technicians extend
              that service 24/7 across every Dubai community — from Downtown and Dubai Marina to
              International City and Motor City. Call us on +971 52 642 6161.
            </p>
            <p>
              Every job we complete earns the right to be called back the next time that customer —
              or their family or neighbours — needs a locksmith. That is the reputation we work to
              protect on every call-out.
            </p>
          </div>
        </div>
      </section>

      {/* ── GMB Video ─────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="video-heading"
        className="py-16 sm:py-20 bg-muted/40 border-y border-border"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold mb-4">
              See Us In Action
            </span>
            <h2
              id="video-heading"
              className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Watch Our Team at Work
            </h2>
            <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto">
              Real professionals, real equipment, real results — from our workshop at D90,
              Al Bada&apos;a, Dubai.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-lg bg-black">
            <video
              src={GMB_VIDEO_URL}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full aspect-video block"
              aria-label="Lock Repair Satwa — professional locksmith team in action at Al Bada'a Dubai"
            />
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Lock Repair Satwa · D90, Al Bada&apos;a, Dubai · Professional Locksmith Services
          </p>
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
              What Makes Lock Repair Satwa Different
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
            Technicians Who Know Dubai
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Every Lock Repair Satwa technician is trained on the lock systems, key types and
              vehicle brands most common in Dubai before being deployed on customer calls. Our
              team covers the full range of automotive key programming — from Toyota and Nissan
              through to BMW, Mercedes-Benz, Land Rover and other European makes — using
              professional OBD diagnostic equipment.
            </p>
            <p>
              We only work with technicians who hold valid UAE employment documentation and who
              carry professional identification on every call-out. This is both a legal and
              ethical requirement — you have the right to know who is working on your vehicle or
              your property.
            </p>
            <p>
              Every technician carries company photo ID and name cards on every visit. If any
              technician arrives without company identification, please call our main line on
              +971 52 642 6161 immediately before allowing any work to proceed.
            </p>
          </div>

          {/* Trust signals */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { value: '50+', label: 'Car Brands Covered' },
              { value: '24/7', label: 'Mobile Service Hours' },
              { value: '4.7★', label: 'Google Rating' },
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

      {/* ── Shop Photo Gallery ────────────────────────────────────────────────── */}
      <section
        aria-labelledby="gallery-heading"
        className="py-16 sm:py-20 bg-background"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold mb-4">
              Our Shop &amp; Equipment
            </span>
            <h2
              id="gallery-heading"
              className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Inside Lock Repair Satwa — Al Bada&apos;a, Dubai
            </h2>
            <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto">
              Real shop. Real stock. Real technicians. Based at D90, Al Bada&apos;a — serving all Dubai areas daily 24/7.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                src: '/images/shop/locksmith-shop-satwa-al-badaa-dubai.webp',
                alt: 'Lock Repair Satwa shop exterior in Al Bada\'a Satwa area, Dubai — professional locksmith and key maker',
                caption: 'Shop — Al Bada\'a, Satwa',
              },
              {
                src: '/images/shop/padlock-collection-lock-shop-satwa-dubai.webp',
                alt: 'Wall display of padlocks and door locks at Lock Repair Satwa shop in Satwa, Dubai',
                caption: 'Padlocks & Locks Stock',
              },
              {
                src: '/images/shop/door-lock-handles-repair-shop-satwa-dubai.webp',
                alt: 'Door handles and lock hardware display at Lock Repair Satwa, Dubai — door lock repair and replacement',
                caption: 'Door Handles & Hardware',
              },
              {
                src: '/images/shop/key-duplication-display-for-sale-satwa-dubai.webp',
                alt: 'Key duplication display stand at Lock Repair Satwa shop — duplicate keys for sale in Satwa Dubai',
                caption: 'Key Duplication Display',
              },
            ].map(({ src, alt, caption }) => (
              <figure key={src} className="group overflow-hidden rounded-xl border border-border shadow-sm">
                <div className="overflow-hidden bg-muted aspect-[4/3]">
                  <Image
                    src={src}
                    alt={alt}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <figcaption className="px-3 py-2 text-xs font-medium text-muted-foreground text-center border-t border-border">
                  {caption}
                </figcaption>
              </figure>
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
                Our mobile service covers all Dubai municipalities and free zones. From our
                Al Bada&apos;a base we reach most central Dubai areas in 20–35 minutes, and
                outlying communities such as Silicon Oasis, International City and Motor City
                in 40–60 minutes. We do not charge extra for distance within Dubai city limits.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Our primary and fastest coverage is within the Dubai emirate boundary — call us
                on +971 52 642 6161 and we will confirm arrival time for your specific location
                before you commit.
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
                24 Service Areas Covered
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
        heading="Ready to Work with Dubai's Professional Locksmith?"
        subtext={`Call ${BUSINESS_NAME} now for an instant quote. D90, Al Bada'a, Dubai. No call-out fee, upfront pricing, trained technicians — open daily 24/7 across all Dubai areas.`}
      />
    </>
  )
}
