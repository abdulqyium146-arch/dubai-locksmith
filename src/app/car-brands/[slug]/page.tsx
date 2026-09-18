// ─────────────────────────────────────────────────────────────────────────────
// Lock repair service — Dynamic Car Brand Page
// /car-brands/[slug] — e.g. /car-brands/toyota
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
} from 'lucide-react'

import { BreadcrumbNav } from '@/components/sections/BreadcrumbNav'
import { PricingTable } from '@/components/sections/PricingTable'
import { FaqAccordion } from '@/components/sections/FaqAccordion'
import { CtaSection } from '@/components/sections/CtaSection'
import {
  CarBrandServiceSchema,
  CarBrandFaqSchema,
  CarBrandBreadcrumbSchema,
} from '@/components/schema/CarBrandSchema'
import { Button } from '@/components/ui/Button'

import { carBrands, getCarBrandBySlug, getAllCarBrandSlugs } from '@/data/car-brands'
import { services } from '@/data/services'
import {
  BUSINESS_NAME,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_HREF,
  SITE_URL,
  DEFAULT_OG_IMAGE,
} from '@/lib/constants'

// ── Static Params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return getAllCarBrandSlugs().map((slug) => ({ slug }))
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const brand = getCarBrandBySlug(slug)
  if (!brand) return {}

  const canonicalUrl = `${SITE_URL}/car-brands/${brand.slug}`

  return {
    title: { absolute: brand.metaTitle },
    description: brand.metaDescription,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: 'website',
      locale: 'en_AE',
      url: canonicalUrl,
      siteName: BUSINESS_NAME,
      title: brand.metaTitle,
      description: brand.metaDescription,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `${brand.name} Car Key Service Dubai` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: brand.metaTitle,
      description: brand.metaDescription,
      images: [DEFAULT_OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

// ── Page Component ────────────────────────────────────────────────────────────

export default async function CarBrandPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const brand = getCarBrandBySlug(slug)

  if (!brand) notFound()

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Car Brands', href: '/car-brands' },
    { name: brand.name, href: `/car-brands/${brand.slug}` },
  ]

  const pricingRows = brand.priceRangeAED.map((p, i) => ({
    service: p.service,
    priceRange: `AED ${p.min}–${p.max}`,
    turnaround: p.turnaround,
    featured: i === 0,
  }))

  const relatedServices = brand.relatedServiceSlugs
    .map((s) => services.find((svc) => svc.slug === s))
    .filter((s): s is (typeof services)[number] => s !== undefined)
    .slice(0, 3)

  const otherBrands = carBrands.filter((b) => b.slug !== brand.slug).slice(0, 8)

  const introParas = brand.uniqueIntro.split('\n\n')

  const priceMin = brand.priceRangeAED.length
    ? Math.min(...brand.priceRangeAED.map((p) => p.min))
    : null

  return (
    <>
      {/* Schemas */}
      <CarBrandServiceSchema brand={brand} />
      <CarBrandFaqSchema brand={brand} />
      <CarBrandBreadcrumbSchema brand={brand} />

      {/* ── 1. Hero ───────────────────────────────────────────────────────────── */}
      <section
        aria-label={`${brand.name} car key service hero`}
        className="relative overflow-hidden bg-brand-navy pt-[72px]"
      >
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <BreadcrumbNav items={breadcrumbs} light />

          <div className="mt-6 max-w-3xl">
            <div className="mb-3">
              <span className="text-4xl" aria-hidden="true">{brand.icon}</span>
            </div>

            <h1 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {brand.name} Car Key Replacement{' '}
              <span className="text-gold-gradient">&amp; Programming Dubai</span>
            </h1>

            {/* Direct Answer Opener */}
            <div className="mt-5 rounded-xl border-l-4 border-brand-gold bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-base leading-relaxed text-white/90">
                {brand.directAnswerOpener}
              </p>
            </div>

            {/* Quick stats */}
            <div className="mt-5 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/8 px-3.5 py-2.5 backdrop-blur-sm">
                <span className="text-lg" aria-hidden="true">⏱️</span>
                <div className="leading-none">
                  <p className="text-xs font-bold text-white">{brand.turnaroundTime}</p>
                  <p className="mt-0.5 text-[10px] text-white/50">Turnaround</p>
                </div>
              </div>
              {priceMin !== null && (
                <div className="inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/8 px-3.5 py-2.5 backdrop-blur-sm">
                  <span className="text-lg" aria-hidden="true">💰</span>
                  <div className="leading-none">
                    <p className="text-xs font-bold text-white">From AED {priceMin}</p>
                    <p className="mt-0.5 text-[10px] text-white/50">Starting price</p>
                  </div>
                </div>
              )}
              <div className="inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/8 px-3.5 py-2.5 backdrop-blur-sm">
                <span className="text-lg" aria-hidden="true">📍</span>
                <div className="leading-none">
                  <p className="text-xs font-bold text-white">All Dubai Areas</p>
                  <p className="mt-0.5 text-[10px] text-white/50">Mobile on-site</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Intro + Key Systems ────────────────────────────────────────────── */}
      <section aria-labelledby="intro-heading" className="bg-background py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Intro copy */}
            <div className="lg:col-span-3">
              <h2 id="intro-heading" className="font-heading text-2xl font-bold text-foreground mb-4">
                {brand.name} Key Systems &amp; Service Overview
              </h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                {introParas.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Popular models */}
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">
                  Popular Models in UAE
                </p>
                <div className="flex flex-wrap gap-2">
                  {brand.popularModelsUAE.map((model) => (
                    <span
                      key={model}
                      className="rounded-md border border-border bg-muted px-2.5 py-1 text-xs text-foreground"
                    >
                      {model}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Systems sidebar */}
            <div className="lg:col-span-2 space-y-4">
              <div className="rounded-xl border border-border bg-muted/40 p-5">
                <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-brand-gold mb-4">
                  Key Systems Used
                </h3>
                <ul className="space-y-2">
                  {brand.keySystems.map((system) => (
                    <li key={system} className="flex gap-2 text-sm text-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                      {system}
                    </li>
                  ))}
                </ul>

                {brand.transponderChipTypes && brand.transponderChipTypes.length > 0 && (
                  <>
                    <div className="my-4 h-px bg-border" />
                    <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-brand-gold mb-3">
                      Transponder Chips
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {brand.transponderChipTypes.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-md bg-brand-gold/10 border border-brand-gold/20 px-2 py-0.5 text-xs font-medium text-brand-gold"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* CTA sidebar */}
              <div className="rounded-xl border border-brand-gold/30 bg-brand-gold/5 p-5">
                <p className="text-sm font-semibold text-foreground mb-3">
                  Need a {brand.name} key now?
                </p>
                <div className="flex flex-col gap-2">
                  <Button size="sm" variant="primary" asChild>
                    <a href={PHONE_HREF} aria-label={`Call for ${brand.name} key service`}>
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      {PHONE_DISPLAY}
                    </a>
                  </Button>
                  <Button size="sm" variant="whatsapp" asChild>
                    <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Pricing ───────────────────────────────────────────────────────── */}
      {pricingRows.length > 0 && (
        <section aria-labelledby="pricing-heading" className="bg-muted/40 py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 id="pricing-heading" className="font-heading text-2xl font-bold text-foreground mb-2">
              {brand.name} Key Replacement Pricing in Dubai
            </h2>
            <p className="text-sm text-muted-foreground mb-8">
              All prices are estimates — final quote confirmed on-site. No call-out fee.
            </p>
            <PricingTable
              rows={pricingRows}
              caption={`${brand.name} car key replacement and programming prices in Dubai (AED)`}
            />
          </div>
        </section>
      )}

      {/* ── 4. Common Issues + OEM vs Aftermarket ───────────────────────────── */}
      <section aria-labelledby="issues-heading" className="bg-background py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 id="issues-heading" className="font-heading text-xl font-bold text-foreground mb-5">
                Common {brand.name} Key Problems
              </h2>
              <ul className="space-y-3">
                {brand.commonIssues.map((issue) => (
                  <li key={issue} className="flex gap-3 rounded-lg border border-border bg-muted/30 p-3.5">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" aria-hidden="true" />
                    <p className="text-sm text-foreground leading-relaxed">{issue}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-foreground mb-5">
                OEM vs Aftermarket Keys — {brand.name}
              </h2>
              <div className="rounded-xl border border-border bg-muted/30 p-5 text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                {brand.oemVsAftermarket}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. FAQs ──────────────────────────────────────────────────────────── */}
      {brand.faqs.length > 0 && (
        <section aria-labelledby="faq-heading" className="bg-muted/40 py-14 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 id="faq-heading" className="font-heading text-2xl font-bold text-foreground mb-8">
              {brand.name} Car Key FAQs
            </h2>
            <FaqAccordion faqs={brand.faqs} withSchema={false} />
          </div>
        </section>
      )}

      {/* ── 6. Related Services ───────────────────────────────────────────────── */}
      {relatedServices.length > 0 && (
        <section aria-labelledby="related-svc-heading" className="bg-background py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="related-svc-heading" className="font-heading text-xl font-bold text-foreground mb-6">
              Related Services for {brand.name} Owners
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {relatedServices.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 hover:border-brand-gold/50 hover:shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="text-2xl shrink-0" aria-hidden="true">{svc.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-foreground group-hover:text-brand-gold transition-colors">
                      {svc.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      From AED {svc.pricing.min}
                    </p>
                  </div>
                  <ChevronRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground group-hover:text-brand-gold" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 7. Other Brands ──────────────────────────────────────────────────── */}
      <section aria-labelledby="other-brands-heading" className="bg-muted/40 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="other-brands-heading" className="font-heading text-lg font-bold text-foreground mb-4">
            Other Car Brands We Service
          </h2>
          <div className="flex flex-wrap gap-2">
            {otherBrands.map((b) => (
              <Link
                key={b.slug}
                href={`/car-brands/${b.slug}`}
                className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground hover:border-brand-gold/50 hover:text-brand-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span aria-hidden="true">{b.icon}</span>
                {b.name}
              </Link>
            ))}
            <Link
              href="/car-brands"
              className="flex items-center gap-1.5 rounded-lg border border-brand-gold/30 bg-brand-gold/5 px-3 py-2 text-sm font-medium text-brand-gold hover:bg-brand-gold/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              View all brands →
            </Link>
          </div>
        </div>
      </section>

      <CtaSection
        heading={`Need a ${brand.name} Key? We Come to You.`}
        subtext={`Mobile ${brand.name} car key replacement and programming anywhere in Dubai. ${BUSINESS_NAME} — open 24/7, no call-out fee.`}
      />
    </>
  )
}
