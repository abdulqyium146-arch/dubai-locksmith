// ─────────────────────────────────────────────────────────────────────────────
// Lock repair service — Dynamic Service Page Template
// Works for all 12 services purely from data module — no hardcoded content
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  Phone,
  MessageCircle,
  Clock,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Zap,
  MapPin,
  Package,
  Car,
} from 'lucide-react'

import Image from 'next/image'
import { BreadcrumbNav } from '@/components/sections/BreadcrumbNav'
import { PricingTable } from '@/components/sections/PricingTable'
import { FaqAccordion } from '@/components/sections/FaqAccordion'
import { ReviewsSection } from '@/components/sections/ReviewsSection'
import { CtaSection } from '@/components/sections/CtaSection'
import { ServiceCard } from '@/components/sections/ServiceCard'
import { ServiceSchema } from '@/components/schema/ServiceSchema'
import { WebPageSchema } from '@/components/schema/WebPageSchema'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

import { services, getServiceBySlug, getAllServiceSlugs } from '@/data/services'
import { locations } from '@/data/locations'
import { products } from '@/data/products'
import { parseWithLinks } from '@/lib/link-parser'
import {
  BUSINESS_NAME,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_HREF,
  SITE_URL,
  DEFAULT_OG_IMAGE,
} from '@/lib/constants'
import { formatPriceRange } from '@/lib/utils'
import type { Review } from '@/types'

// ─────────────────────────────────────────────────────────────────────────────
// Static Params — generate all 12 service pages at build time
// ─────────────────────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

// ─────────────────────────────────────────────────────────────────────────────
// Metadata — per-service title, description and canonical
// ─────────────────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}

  const canonicalUrl = `${SITE_URL}/services/${service.slug}`
  const ogImage = service.heroImage
    ? `${SITE_URL}${service.heroImage}`
    : DEFAULT_OG_IMAGE

  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: { en: canonicalUrl, 'x-default': canonicalUrl },
    },
    openGraph: {
      type: 'website',
      locale: 'en_AE',
      url: canonicalUrl,
      siteName: BUSINESS_NAME,
      title: service.metaTitle,
      description: service.metaDescription,
      images: [
        {
          url: ogImage,
          width: 900,
          height: 500,
          alt: service.heroImageAlt ?? `${service.title} in Dubai — ${BUSINESS_NAME}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
  }
}

// ── TODO: Replace with real, verbatim Google reviews ─────────────────────────
// IMPORTANT: These are PLACEHOLDER slots. The business owner must supply real,
// verbatim review content before this section goes live.

const PLACEHOLDER_REVIEWS: Review[] = []

// ─────────────────────────────────────────────────────────────────────────────
// Helper: pick 3 related services (excluding current)
// ─────────────────────────────────────────────────────────────────────────────

function getRelatedServices(currentSlug: string, count = 3) {
  // Prefer emergency services first, then others
  const others = services.filter((s) => s.slug !== currentSlug)
  const emergency = others.filter((s) => s.emergency)
  const nonEmergency = others.filter((s) => !s.emergency)
  return [...emergency, ...nonEmergency].slice(0, count)
}

// ─────────────────────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────────────────────

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) notFound()

  const relatedServices = getRelatedServices(service.slug)
  const relatedProductSlugs = ((): string[] => {
    // Inline product mapping for this service (from seo.ts logic)
    const map: Record<string, string[]> = {
      'smart-door-locks':             ['fingerprint-door-locks', 'keypad-locks', 'smart-door-locks-buy'],
      'safe-box-services':            ['fireproof-safes', 'depository-safes', 'floor-safes'],
      'safe-opening':                 ['fireproof-safes', 'floor-safes', 'wall-safes'],
      'lock-change':                  ['deadbolt-locks', 'mortise-locks', 'lock-cylinders'],
      'lock-repair':                  ['lock-cylinders', 'deadbolt-locks', 'mortise-locks'],
      'home-lockout':                 ['deadbolt-locks', 'high-security-locks'],
      'master-key-system':            ['lock-cylinders', 'high-security-locks'],
      'mailbox-lock':                 ['lock-cylinders', 'cam-locks'],
      'cabinet-lock':                 ['cam-locks', 'lock-cylinders'],
      'access-control-installation':  ['magnetic-locks', 'electric-door-strikes'],
      'door-closer-installation':     ['door-closers'],
      'push-bar-installation':        ['panic-bars'],
      'sliding-patio-door-lock':      ['deadbolt-locks', 'high-security-locks'],
      'access-card-duplication':      ['magnetic-locks', 'electric-door-strikes'],
    }
    return (map[service.slug] ?? []).slice(0, 3)
  })()
  const relatedProducts = products.filter((p) => relatedProductSlugs.includes(p.slug))

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: service.title, href: `/services/${service.slug}` },
  ]

  // Build pricing table rows for this service
  const pricingRows = [
    {
      service: service.title,
      priceRange: formatPriceRange(service.pricing.min, service.pricing.max),
      turnaround: service.turnaroundTime,
      note: service.pricing.note,
      featured: true,
    },
  ]

  const servicePageUrl = `${SITE_URL}/services/${service.slug}`
  const serviceImages = service.heroImage
    ? [{ url: `${SITE_URL}${service.heroImage}`, caption: service.heroImageAlt ?? service.title }]
    : []

  return (
    <>
      {/* Schemas */}
      <ServiceSchema service={service} />
      <WebPageSchema
        pageUrl={servicePageUrl}
        pageId={`service-${service.slug}`}
        name={service.metaTitle}
        description={service.directAnswerOpener}
        breadcrumbs={[
          { name: 'Home', url: SITE_URL },
          { name: 'Services', url: `${SITE_URL}/services` },
          { name: service.title, url: servicePageUrl },
        ]}
        primaryImageUrl={service.heroImage ? `${SITE_URL}${service.heroImage}` : undefined}
        primaryImageAlt={service.heroImageAlt}
        images={serviceImages}
      />

      {/* ── 1. Hero ─────────────────────────────────────────────────────────── */}
      <section
        aria-label={`${service.title} hero`}
        className="relative overflow-hidden bg-brand-navy pt-[72px]"
      >
        {/* Background image — <Image fill> so Googlebot indexes it, not CSS bg-image */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <Image
            src={service.heroImage ?? '/images/services/locksmith-tools-lock-cylinders-dubai.webp'}
            alt=""
            fill
            className="object-cover object-center opacity-45"
            priority
            quality={50}
            sizes="100vw"
          />
          <div className={`absolute inset-0 ${service.emergency ? 'bg-gradient-to-br from-brand-navy/92 via-red-950/60 to-brand-navy/80' : 'bg-gradient-to-br from-brand-navy/92 via-brand-navy/78 to-brand-navy/60'}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/65 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          {/* Breadcrumb */}
          <BreadcrumbNav items={breadcrumbs} light />

          <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left: headline + direct answer */}
            <div>
              {/* Emergency badge */}
              {service.emergency && (
                <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-red-400/40 bg-red-500/20 px-3 py-1 text-xs font-bold text-red-300 uppercase tracking-wide">
                  <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
                  Priority Service — Daily 24/7
                </div>
              )}

              {/* Icon + title */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gold/15 text-3xl ring-2 ring-brand-gold/30"
                  aria-hidden="true"
                >
                  {service.icon}
                </div>
                <div>
                  <h1 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                    {service.title}
                  </h1>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-brand-gold/70">
                    Lock repair service · Dubai, UAE
                  </p>
                </div>
              </div>

              {/* Meta badges: price + turnaround */}
              <div className="mt-4 flex flex-wrap gap-3">
                <Badge variant="gold" size="md">
                  {formatPriceRange(service.pricing.min, service.pricing.max)}
                </Badge>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {service.turnaroundTime}
                </div>
                {service.emergency && (
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-red-400/30 bg-red-500/15 px-3 py-1 text-xs font-semibold text-red-300">
                    <Zap className="h-3.5 w-3.5" aria-hidden="true" />
                    Emergency Available
                  </div>
                )}
              </div>

              {/* Direct Answer Opener — visually distinct, extractable for AI Overviews */}
              <div className="mt-6 rounded-xl border-l-4 border-brand-gold bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-sm font-medium text-brand-gold mb-1 uppercase tracking-wide">
                  Quick Answer
                </p>
                <p className="text-base leading-relaxed text-white/90">
                  {service.directAnswerOpener}
                </p>
              </div>

              {/* CTA #1 — above the fold */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  variant="primary"
                  className="btn-pulse w-full sm:w-auto"
                  asChild
                >
                  <a href={PHONE_HREF} aria-label={`Call for ${service.title}: ${PHONE_DISPLAY}`}>
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    Call Now — {PHONE_DISPLAY}
                  </a>
                </Button>
                <Button size="lg" variant="whatsapp" className="w-full sm:w-auto" asChild>
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp for ${service.title}`}
                  >
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>

              {/* Mobile service call-out — reinforces we dispatch to customer */}
              <div className="mt-5 flex items-start gap-3 rounded-xl border border-brand-gold/25 bg-brand-gold/10 px-4 py-3">
                <Car className="h-5 w-5 shrink-0 text-brand-gold mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold text-white">Mobile — Technician Comes to You</p>
                  <p className="mt-0.5 text-xs text-white/60">
                    Dispatched to your home, office or car park anywhere in Dubai. 20–45 min arrival. Price confirmed before work starts.
                  </p>
                </div>
              </div>

              <p className="mt-4 text-xs text-white/40">
                32+ locksmith services · 24 Dubai areas · No call-out fee · Open 24/7
              </p>
            </div>

            {/* Right: process preview + service coverage */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              {/* Service coverage chips */}
              <div className="mb-5 border-b border-white/10 pb-5">
                <p className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-white/50">
                  Our Complete Locksmith Range
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { emoji: '🔑', label: 'Key Cutting', href: '/services/car-key-duplication' },
                    { emoji: '🚗', label: 'Key Programming', href: '/services/transponder-keys' },
                    { emoji: '🚪', label: 'Door Locks', href: '/services/lock-repair' },
                    { emoji: '🔓', label: 'Lock Change', href: '/services/lock-change' },
                    { emoji: '🧠', label: 'Smart Locks', href: '/services/smart-door-locks' },
                    { emoji: '⚡', label: 'Emergency', href: '/services/emergency-car-unlock' },
                    { emoji: '🏦', label: 'Safe Opening', href: '/services/safe-box-services' },
                    { emoji: '🅿️', label: 'Parking Remote', href: '/services/parking-remotes' },
                  ].map(({ emoji, label, href }) => (
                    <Link
                      key={href}
                      href={href}
                      className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/15 bg-white/8 px-2.5 py-1 text-[11px] font-medium text-white/70 transition-colors hover:border-brand-gold/40 hover:text-white"
                    >
                      <span aria-hidden="true">{emoji}</span>
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

              <h2 className="font-heading text-lg font-semibold text-white mb-5">
                How the Service Works
              </h2>
              <ol className="space-y-4">
                {service.processSteps.slice(0, 3).map((step) => (
                  <li key={step.step} className="flex gap-4">
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-gold text-xs font-bold text-brand-navy"
                      aria-hidden="true"
                    >
                      {step.step}
                    </span>
                    <div>
                      <p className="font-semibold text-white text-sm">{step.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-white/60 line-clamp-2">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
                {service.processSteps.length > 3 && (
                  <li className="text-xs text-white/40 pl-11">
                    + {service.processSteps.length - 3} more steps below
                  </li>
                )}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── 1b. Hero Image (services with a contextual photo) ───────────────── */}
      {service.heroImage && (
        <div className="bg-muted/40 border-b border-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="overflow-hidden rounded-2xl border border-border shadow-md">
              <Image
                src={service.heroImage}
                alt={service.heroImageAlt ?? `${service.title} in Dubai — Lock repair service`}
                width={900}
                height={500}
                className="w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* ── 2. What We Do ────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="what-we-do-heading"
        className="py-14 sm:py-16 bg-background"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="what-we-do-heading"
            className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            About Our {service.title} Service
          </h2>
          <div className="mt-6 space-y-4">
            {service.description.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-muted-foreground">
                {parseWithLinks(paragraph)}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Benefits ─────────────────────────────────────────────────────── */}
      {service.benefits.length > 0 && (
        <section
          aria-labelledby="benefits-heading"
          className="py-14 sm:py-16 bg-muted/40 border-y border-border"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2
              id="benefits-heading"
              className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center mb-10"
            >
              Why Choose Our {service.title} Service
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
              {service.benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-xl border border-border bg-card p-6 shadow-sm"
                >
                  <CheckCircle2
                    className="mb-3 h-6 w-6 text-brand-gold"
                    aria-hidden="true"
                  />
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 4. Full Process Steps ────────────────────────────────────────────── */}
      {service.processSteps.length > 0 && (
        <section
          aria-labelledby="process-heading"
          className="py-14 sm:py-16 bg-background"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2
              id="process-heading"
              className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-10"
            >
              Our {service.title} Process — Step by Step
            </h2>
            <ol className="space-y-6">
              {service.processSteps.map((step) => (
                <li key={step.step} className="flex gap-5">
                  {/* Numbered circle in brand gold */}
                  <div className="flex flex-col items-center">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gold text-sm font-bold text-brand-navy shadow-md"
                      aria-label={`Step ${step.step}`}
                    >
                      {step.step}
                    </span>
                    {/* Vertical connector */}
                    {step.step < service.processSteps.length && (
                      <div
                        className="mt-2 h-full w-px bg-brand-gold/20"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div className="pb-6">
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* ── 5. Pricing Table ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="pricing-heading"
        className="py-14 sm:py-16 bg-muted/40 border-y border-border"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="pricing-heading"
            className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-4"
          >
            Pricing for {service.title} in Dubai
          </h2>
          <p className="text-muted-foreground mb-8 text-sm">
            {service.pricing.note}
          </p>
          <PricingTable
            rows={pricingRows}
            caption={`${service.title} pricing in Dubai`}
          />

          {/* CTA #2 — after pricing */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button size="lg" variant="primary" className="btn-pulse w-full sm:w-auto" asChild>
              <a href={PHONE_HREF} aria-label={`Call for a quote on ${service.title}`}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call for an Instant Quote — {PHONE_DISPLAY}
              </a>
            </Button>
            <Button size="lg" variant="whatsapp" className="w-full sm:w-auto" asChild>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp for a quote"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                WhatsApp for Quote
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── 6. Supported Brands ──────────────────────────────────────────────── */}
      {service.supportedBrands.length > 0 && (
        <section
          aria-labelledby="brands-heading"
          className="py-14 sm:py-16 bg-background"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2
              id="brands-heading"
              className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-2"
            >
              Supported Car Brands
            </h2>
            <p className="text-muted-foreground text-sm mb-8">
              Our {service.title.toLowerCase()} service covers all of the following makes. Not sure if
              your car is covered? Call us and we&apos;ll confirm in under 2 minutes.
            </p>
            <div
              className="flex flex-wrap gap-2.5"
              aria-label="Supported car brands"
            >
              {service.supportedBrands.map((brand) => (
                <span
                  key={brand}
                  className="inline-flex items-center rounded-full border border-border bg-muted px-4 py-1.5 text-sm font-medium text-foreground hover:border-brand-gold/40 hover:bg-brand-gold/5 transition-colors"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 7. FAQs ──────────────────────────────────────────────────────────── */}
      {service.faqs.length > 0 && (
        <section
          aria-labelledby="faqs-heading"
          className="py-14 sm:py-16 bg-muted/40 border-y border-border"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2
              id="faqs-heading"
              className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-8"
            >
              Frequently Asked Questions — {service.title}
            </h2>
            <FaqAccordion
              faqs={service.faqs}
              withSchema={true}
            />
          </div>
        </section>
      )}

      {/* ── 8. Reviews ───────────────────────────────────────────────────────── */}
      {PLACEHOLDER_REVIEWS.length > 0 ? (
        <section
          aria-labelledby="reviews-section-heading"
          className="py-14 sm:py-16 bg-background"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ReviewsSection reviews={PLACEHOLDER_REVIEWS} />
          </div>
        </section>
      ) : (
        <section className="py-10 bg-background" aria-label="Customer reviews placeholder">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            {/* TODO: Replace with <ReviewsSection> once real Google reviews are provided */}
            <p className="text-sm text-muted-foreground">
              Rated{' '}
              <strong className="text-brand-gold">4.7★ on Google Maps</strong> by verified customers.{' '}
              <a
                href="https://maps.google.com/?q=Lock+Repair+Satwa+Al+Bada%27a+Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-brand-gold transition-colors"
              >
                Read our Google reviews
              </a>
            </p>
          </div>
        </section>
      )}

      {/* ── 9. Final CTA ─────────────────────────────────────────────────────── */}
      <CtaSection
        heading={`Need ${service.title} in Dubai? Call Now.`}
        subtext={`${BUSINESS_NAME} (D90, Al Bada'a, Dubai) comes to you anywhere in Dubai. Upfront pricing, trained technicians, average arrival in 20–45 minutes. Open daily 24/7 including weekends and public holidays.`}
      />

      {/* CTA #3 — embedded within the above CtaSection which contains Call Now button */}

      {/* ── 10. Related Services ─────────────────────────────────────────────── */}
      <section
        aria-labelledby="related-services-heading"
        className="py-14 sm:py-16 bg-background"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2
              id="related-services-heading"
              className="font-heading text-2xl font-bold tracking-tight text-foreground"
            >
              Related Services
            </h2>
            <Link
              href="/services"
              className="flex items-center gap-1.5 text-sm font-semibold text-brand-gold hover:text-brand-gold-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            >
              All Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((related) => (
              <ServiceCard key={related.slug} service={related} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. Related Products ─────────────────────────────────────────────── */}
      {relatedProducts.length > 0 && (
        <section
          aria-labelledby="related-products-heading"
          className="py-14 sm:py-16 bg-muted/40 border-y border-border"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <h2
                  id="related-products-heading"
                  className="font-heading text-2xl font-bold tracking-tight text-foreground"
                >
                  Products Used in {service.title}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  We supply and install these products as part of this service — sourced,
                  fitted, and warranted in a single visit.
                </p>
              </div>
              <Link
                href="/products"
                className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-gold hover:text-brand-gold-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
              >
                All Products
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-brand-gold/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gold/10 text-2xl ring-1 ring-brand-gold/20 group-hover:bg-brand-gold/20 transition-colors">
                      {product.icon}
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-foreground group-hover:text-brand-gold transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-xs font-medium text-brand-gold">
                        from AED {product.pricing.min}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {product.description.split('\n\n')[0]}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-brand-gold">
                    <Package className="h-3.5 w-3.5" aria-hidden="true" />
                    View product details
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 12. Dubai Areas We Serve ─────────────────────────────────────────── */}
      <section
        aria-labelledby="service-areas-heading"
        className="py-14 sm:py-16 bg-background"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2
                id="service-areas-heading"
                className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
              >
                {service.title} — Dubai Areas We Serve
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Our mobile technicians provide {service.title.toLowerCase()} across all major Dubai
                areas. Select your area for local response times and service details.
              </p>
            </div>
            <Link
              href="/locations"
              className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-gold hover:text-brand-gold-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            >
              All Areas
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-2.5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2.5 text-sm transition-all hover:border-brand-gold/40 hover:bg-brand-gold/5 hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`${service.title} in ${location.name}`}
              >
                <MapPin className="h-3.5 w-3.5 shrink-0 text-brand-gold" aria-hidden="true" />
                <span className="font-medium text-foreground group-hover:text-brand-gold transition-colors leading-tight text-xs sm:text-sm">
                  {location.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
