// ─────────────────────────────────────────────────────────────────────────────
// Lock repair service — Services Index Page (Categorised)
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, MessageCircle, AlertTriangle } from 'lucide-react'

import { ServiceCard } from '@/components/sections/ServiceCard'
import { CtaSection } from '@/components/sections/CtaSection'
import { BreadcrumbNav } from '@/components/sections/BreadcrumbNav'
import { TrustBar } from '@/components/sections/TrustBar'
import { Button } from '@/components/ui/Button'
import { WebPageSchema } from '@/components/schema/WebPageSchema'
import { JsonLd } from '@/components/schema/JsonLd'
import { buildItemListSchema } from '@/lib/seo'

import {
  services,
  RESIDENTIAL_SERVICES,
  COMMERCIAL_SERVICES,
  AUTOMOTIVE_SERVICES,
} from '@/data/services'
import {
  BUSINESS_NAME,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_HREF,
  SITE_URL,
  DEFAULT_OG_IMAGE,
} from '@/lib/constants'
import { parseWithLinks } from '@/lib/link-parser'
import type { Service } from '@/types'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: { absolute: 'Locksmith Services Dubai — 32+ Car, Home & Commercial | Lock repair service' },
  description:
    '32+ locksmith services in Dubai — car key cutting, lock repair, emergency unlock, smart locks, access control. Mobile dispatch 24/7. Call +971 52 642 6161.',
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: `${SITE_URL}/services`,
    siteName: BUSINESS_NAME,
    title: 'Locksmith Services Dubai — 32+ Car, Home & Commercial | Lock repair service',
    description:
      '32+ locksmith services in Dubai — car key cutting, lock repair, emergency unlock, smart locks, access control. Mobile dispatch 24/7. Call +971 52 642 6161.',
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `${BUSINESS_NAME} — 32+ Services in Dubai` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Locksmith Services Dubai — 32+ Car, Home & Commercial',
    description: '32+ locksmith services in Dubai — car keys, lock repair, emergency unlock, smart locks. Mobile 24/7.',
    images: [DEFAULT_OG_IMAGE],
  },
}

// ── Breadcrumb data ───────────────────────────────────────────────────────────

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
]

// ── Emergency services subset ─────────────────────────────────────────────────

const emergencyServices = services.filter((s) => s.emergency)

// ── Category config ───────────────────────────────────────────────────────────

type CategorySection = {
  id: string
  label: string
  description: string
  icon: string
  services: Service[]
  darkBg?: boolean
}

const CATEGORIES: CategorySection[] = [
  {
    id: 'residential',
    label: 'Home & Residential Services',
    description:
      'Key duplication, lock change, lock repair, smart lock installation and safe opening for Dubai apartments, villas and townhouses. Covers all standard door types — metal, wooden and aluminium. From AED 50 for a key copy to AED 1,200 for a full smart lock setup.',
    icon: '🏠',
    services: RESIDENTIAL_SERVICES,
  },
  {
    id: 'commercial',
    label: 'Commercial & Office Services',
    description:
      'Master key systems, access control installation, door closers, push bars and cabinet locks for Dubai offices, shops and commercial buildings. Each commercial service includes consultation on the right hardware for your door type, footfall, and security grade required.',
    icon: '🏢',
    services: COMMERCIAL_SERVICES,
    darkBg: true,
  },
  {
    id: 'automotive',
    label: 'Automotive Car Key & Lock Services',
    description:
      'Car key cutting, transponder programming, lost-all-keys replacement, emergency unlock, ignition repair and flip key services for 50+ vehicle brands. Performed on-site at your location anywhere in Dubai using professional OBD diagnostic equipment — no towing or workshop visit needed.',
    icon: '🚗',
    services: AUTOMOTIVE_SERVICES,
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <>
      <WebPageSchema
        pageUrl={`${SITE_URL}/services`}
        pageId="services-hub"
        name="Locksmith Services Dubai — 32+ Car, Home & Commercial"
        description="32+ locksmith services in Dubai — car key cutting, lock repair, emergency unlock, smart locks, access control. Mobile dispatch 24/7."
        breadcrumbs={[
          { name: 'Home', url: SITE_URL },
          { name: 'Services', url: `${SITE_URL}/services` },
        ]}
      />
      <JsonLd data={buildItemListSchema(
        'Locksmith Services Dubai — Complete Service List',
        '32+ locksmith services in Dubai by Lock repair service — car key programming, lock repair, emergency unlock, smart locks, and access control.',
        services.map((s) => ({ name: s.title, url: `${SITE_URL}/services/${s.slug}` }))
      )} />

      {/* ── Page Header ─────────────────────────────────────────────────────── */}
      <section
        aria-label="Services page header"
        className="relative overflow-hidden bg-brand-navy pt-[72px]"
      >
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <Image
            src="/images/services/locksmith-tools-lock-cylinders-dubai.webp"
            alt=""
            fill
            className="object-cover object-center opacity-45"
            priority
            quality={50}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/92 via-brand-navy/78 to-brand-navy/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/65 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <BreadcrumbNav items={breadcrumbs} light />

          <div className="mt-6 max-w-3xl">
            <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              All Locksmith{' '}
              <span className="text-gold-gradient">Services in Dubai</span>
              {' '}— Mobile & Fast
            </h1>

            {/* Direct Answer Opener */}
            <div className="mt-6 rounded-xl border-l-4 border-brand-gold bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-base leading-relaxed text-white/90">
                Lock repair service provides {services.length}+ locksmith and car key services across Dubai —
                residential, commercial and automotive — delivered by mobile technicians dispatched to your
                location. Every service available in all 24 Dubai areas, 24/7. Call{' '}
                <a href={PHONE_HREF} className="font-semibold text-brand-gold hover:underline">
                  +971 52 642 6161
                </a>.
              </p>
            </div>

            {/* Quick coverage stats */}
            <div className="mt-5 flex flex-wrap gap-3">
              {[
                { emoji: '🚗', stat: 'Mobile Dispatch', sub: 'We come to you' },
                { emoji: '⚡', stat: '20–45 Min Response', sub: 'All Dubai areas' },
                { emoji: '📍', stat: '24 Areas Covered', sub: 'Every part of Dubai' },
                { emoji: '🕐', stat: 'Open 24/7', sub: 'Including holidays' },
              ].map(({ emoji, stat, sub }) => (
                <div
                  key={stat}
                  className="inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/8 px-3.5 py-2.5 backdrop-blur-sm"
                >
                  <span className="text-lg" aria-hidden="true">{emoji}</span>
                  <div className="leading-none">
                    <p className="text-xs font-bold text-white">{stat}</p>
                    <p className="mt-0.5 text-[10px] text-white/50">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TrustBar dark />

      {/* ── Category Sections ─────────────────────────────────────────────────── */}
      {CATEGORIES.map((cat) => (
        <section
          key={cat.id}
          id={cat.id}
          aria-labelledby={`cat-${cat.id}-heading`}
          className={`py-16 sm:py-20 ${cat.darkBg ? 'bg-muted/40' : 'bg-background'}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="mb-10">
              <div className="mb-2 flex items-center gap-3">
                <span className="text-3xl" aria-hidden="true">{cat.icon}</span>
                <h2
                  id={`cat-${cat.id}-heading`}
                  className="font-heading text-2xl font-bold text-foreground sm:text-3xl"
                >
                  {cat.label}
                </h2>
              </div>
              <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                {parseWithLinks(cat.description)}
              </p>
            </div>

            {/* Service grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {cat.services.map((service) => (
                <ServiceCard
                  key={service.slug}
                  service={service}
                  featured={
                    service.slug === 'emergency-car-unlock' ||
                    service.slug === 'car-key-replacement' ||
                    service.slug === 'home-lockout'
                  }
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── Emergency Services Callout ───────────────────────────────────────── */}
      <section
        aria-labelledby="emergency-callout-heading"
        className="py-12 bg-destructive/10 border-y border-destructive/20"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-destructive/20">
                <AlertTriangle className="h-6 w-6 text-destructive" aria-hidden="true" />
              </div>
              <div>
                <h2
                  id="emergency-callout-heading"
                  className="font-heading text-xl font-bold text-foreground"
                >
                  Need a Locksmith? We Respond Daily 24/7
                </h2>
                <p className="mt-1 text-sm text-muted-foreground max-w-lg">
                  The following services are available as priority call-outs:{' '}
                  <strong className="text-foreground">
                    {emergencyServices.map((s) => s.title).join(', ')}
                  </strong>
                  . We dispatch quickly — average arrival in 20–45 minutes.
                </p>
              </div>
            </div>

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
                  aria-label="WhatsApp emergency"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Which service do I need? Decision guide ─────────────────────────── */}
      <section
        aria-labelledby="service-guide-heading"
        className="py-14 sm:py-16 bg-background border-y border-border"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="service-guide-heading"
            className="font-heading text-2xl font-bold text-foreground sm:text-3xl mb-2"
          >
            Not sure which service you need?
          </h2>
          <p className="text-sm text-muted-foreground mb-8">
            Call <a href={PHONE_HREF} className="font-semibold text-brand-gold hover:underline">{PHONE_DISPLAY}</a> — we identify the right service in under 2 minutes. Or use this guide:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                scenario: 'I have one working key and want a spare',
                service: 'Key Duplication',
                href: '/services/key-duplication',
                note: 'Fastest and cheapest option — from AED 50 in-shop.',
              },
              {
                scenario: 'I lost all my car keys',
                service: 'Car Key Replacement',
                href: '/services/car-key-replacement',
                note: 'We generate a new key from VIN/OBD data — no original needed. AED 400–900.',
              },
              {
                scenario: 'My car key works mechanically but the remote or immobiliser doesn\'t',
                service: 'Remote / Smart Key Programming',
                href: '/services/remote-smart-key-programming',
                note: 'Transponder or remote re-programmed on-site. AED 300–700.',
              },
              {
                scenario: 'I\'m locked inside or outside my home or car right now',
                service: 'Emergency Unlock',
                href: '/services/emergency-car-unlock',
                note: '24/7 dispatch — 20–45 min arrival. Non-destructive where possible.',
              },
              {
                scenario: 'My door lock is stiff, broken or won\'t turn',
                service: 'Lock Repair',
                href: '/services/lock-repair',
                note: 'Cylinder, latch and handle repairs from AED 100. Mobile visit.',
              },
              {
                scenario: 'I want to upgrade to a fingerprint or keypad lock',
                service: 'Smart Door Lock Installation',
                href: '/services/smart-door-locks',
                note: 'Supply and fit from AED 350. Same-day installation available.',
              },
            ].map(({ scenario, service, href, note }) => (
              <div
                key={href}
                className="rounded-xl border border-border bg-card p-4 flex flex-col gap-2"
              >
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">&ldquo;{scenario}&rdquo;</span>
                </p>
                <div className="flex items-start gap-2 mt-1">
                  <span className="text-brand-gold text-xs font-bold mt-0.5">→</span>
                  <div>
                    <Link
                      href={href}
                      className="text-sm font-semibold text-brand-gold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                    >
                      {service}
                    </Link>
                    <p className="text-xs text-muted-foreground mt-0.5">{note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contextual back-link to homepage — hub-and-spoke internal link */}
          <p className="mt-8 text-sm text-muted-foreground text-center">
            Browse the complete offering at our{' '}
            <Link
              href="/"
              className="font-semibold text-brand-gold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            >
              Dubai locksmith homepage
            </Link>
            , or view{' '}
            <Link
              href="/locations"
              className="font-semibold text-brand-gold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            >
              all 24 service areas
            </Link>
            {' '}to confirm we cover your location.
          </p>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <CtaSection
        heading="Ready to Book? Get an Instant Quote."
        subtext={`Call or WhatsApp ${BUSINESS_NAME} now. We confirm your price on the phone before dispatching — upfront, transparent, no surprises.`}
      />
    </>
  )
}
