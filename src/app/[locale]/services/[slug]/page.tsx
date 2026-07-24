// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Bilingual Service Detail Page
// [locale]/services/[slug]/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  Phone,
  MessageCircle,
  Clock,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Zap,
  CalendarDays,
} from 'lucide-react'
import Image from 'next/image'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { BreadcrumbNav } from '@/components/sections/BreadcrumbNav'
import { PricingTable } from '@/components/sections/PricingTable'
import { FaqAccordion } from '@/components/sections/FaqAccordion'
import { ReviewsSection } from '@/components/sections/ReviewsSection'
import { CtaSection } from '@/components/sections/CtaSection'
import { ServiceCard } from '@/components/sections/ServiceCard'
import { ServiceSchema } from '@/components/schema/ServiceSchema'
import { JsonLd } from '@/components/schema/JsonLd'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Link } from '@/i18n/navigation'

import { getServiceBySlug, getAllServiceSlugs } from '@/data/services'
import {
  BUSINESS_NAME,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_HREF,
  SITE_URL,
  DEFAULT_OG_IMAGE,
} from '@/lib/constants'
import { formatPriceRange } from '@/lib/utils'
import { routing } from '@/i18n/routing'
import { getRelatedServices, TOP_SERVICE_LOCATIONS, getProductsForService } from '@/lib/seo'
import type { Review } from '@/types'

// ─────────────────────────────────────────────────────────────────────────────
// Static Params — locale × slug combinations
// ─────────────────────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getAllServiceSlugs().map((slug) => ({ locale, slug }))
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Metadata
// ─────────────────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}

  const ogImage = service.heroImage
    ? `${SITE_URL}${service.heroImage}`
    : DEFAULT_OG_IMAGE

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/${locale}/services/${slug}`,
      languages: {
        en: `${SITE_URL}/en/services/${slug}`,
        ar: `${SITE_URL}/ar/services/${slug}`,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'ar' ? 'ar_AE' : 'en_AE',
      url: `${SITE_URL}/${locale}/services/${slug}`,
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
  }
}

// ── TODO: Replace with real, verbatim Google reviews ─────────────────────────
const PLACEHOLDER_REVIEWS: Review[] = []

// ─────────────────────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────────────────────

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const t = await getTranslations('serviceDetail')
  const tCommon = await getTranslations('common')

  const relatedServices = getRelatedServices(service.slug, 4)
  const relatedProducts = getProductsForService(service.slug)

  const breadcrumbs = [
    { name: tCommon('breadcrumbHome'), href: '/' },
    { name: t('breadcrumbServices'), href: '/services' },
    { name: service.title, href: `/services/${service.slug}` },
  ]

  const pricingRows = [
    {
      service: service.title,
      priceRange: formatPriceRange(service.pricing.min, service.pricing.max),
      turnaround: service.turnaroundTime,
      note: service.pricing.note,
      featured: true,
    },
  ]

  return (
    <>
      {/* Schemas */}
      <ServiceSchema service={service} />
      {service.heroImage && (
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'ImageObject',
          '@id': `${SITE_URL}/${locale}/services/${service.slug}#hero-image`,
          url: `${SITE_URL}${service.heroImage}`,
          contentUrl: `${SITE_URL}${service.heroImage}`,
          name: service.heroImageAlt ?? `${service.title} in Dubai — ${BUSINESS_NAME}`,
          description: service.metaDescription,
          width: 900,
          height: 500,
          representativeOfPage: true,
          author: { '@id': `${SITE_URL}/#lock-repair-satwa` },
        }} />
      )}

      {/* ── 1. Hero ─────────────────────────────────────────────────────────── */}
      <section
        aria-label={`${service.title} hero`}
        className={`pt-[72px] ${service.emergency ? 'bg-gradient-to-br from-brand-navy via-brand-navy to-red-950' : 'bg-hero-gradient'}`}
      >
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
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
                <h1 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                  {service.title}
                </h1>
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

              {/* Direct Answer Opener */}
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
                    {t('callNow', { phone: PHONE_DISPLAY })}
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
                    {t('whatsappUs')}
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white hover:text-brand-navy" asChild>
                  <Link href="/booking" aria-label={`Book ${service.title} online`}>
                    <CalendarDays className="h-5 w-5" aria-hidden="true" />
                    Book Online
                  </Link>
                </Button>
              </div>

              <p className="mt-4 text-xs text-white/40">
                Mobile service · Price confirmed before work starts · All Dubai areas
              </p>
            </div>

            {/* Right: process preview (first 3 steps) */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
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

      {/* ── 1b. Hero Image ──────────────────────────────────────────────────── */}
      {service.heroImage && (
        <div className="bg-muted/40 border-b border-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="overflow-hidden rounded-2xl border border-border shadow-md">
              <Image
                src={service.heroImage}
                alt={service.heroImageAlt ?? `${service.title} in Dubai — Lock Repair Satwa`}
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
                {paragraph}
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
              {t('benefits')} — {service.title}
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
              {t('process')} — {service.title}
            </h2>
            <ol className="space-y-6">
              {service.processSteps.map((step) => (
                <li key={step.step} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gold text-sm font-bold text-brand-navy shadow-md"
                      aria-label={`Step ${step.step}`}
                    >
                      {step.step}
                    </span>
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
            {t('pricing')} — {service.title}
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
                {t('getQuote')}
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
                {t('whatsappUs')}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
              <Link href="/booking" aria-label={`Book ${service.title} — schedule online`}>
                <CalendarDays className="h-5 w-5" aria-hidden="true" />
                Book This Service
              </Link>
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
              {t('supportedBrands')}
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
              {t('faqs')} — {service.title}
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
        heading={t('ctaHeading')}
        subtext={t('ctaSubtext')}
      />

      {/* ── 10. Service Areas ────────────────────────────────────────────────── */}
      <section
        aria-labelledby="service-areas-heading"
        className="py-12 sm:py-14 bg-muted/40 border-y border-border"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="service-areas-heading"
            className="font-heading text-xl font-bold text-foreground mb-4"
          >
            {service.title} Service Areas in Dubai
          </h2>
          <p className="text-sm text-muted-foreground mb-5">
            Our mobile technicians cover all Dubai areas. Priority response in these key locations:
          </p>
          <div className="flex flex-wrap gap-3">
            {TOP_SERVICE_LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground hover:border-brand-gold/50 hover:bg-brand-gold/5 hover:text-brand-gold transition-colors"
              >
                {loc.name}
                <ArrowRight className="h-3.5 w-3.5 opacity-50" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. Related Products ─────────────────────────────────────────────── */}
      {relatedProducts.length > 0 && (
        <section
          aria-labelledby="related-products-heading"
          className="py-12 sm:py-14 bg-background"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 flex items-end justify-between gap-4">
              <h2
                id="related-products-heading"
                className="font-heading text-xl font-bold text-foreground"
              >
                Related Products
              </h2>
              <Link
                href="/products"
                className="flex items-center gap-1.5 text-sm font-semibold text-brand-gold hover:text-brand-gold-dark transition-colors"
              >
                All Products
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {relatedProducts.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm hover:border-brand-gold/40 hover:shadow-md transition-all"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-heading font-semibold text-foreground group-hover:text-brand-gold transition-colors text-sm">
                      {product.title}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                      {product.metaDescription}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-brand-gold transition-colors mt-0.5" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 12. Related Services ─────────────────────────────────────────────── */}
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
              {t('relatedServices')}
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
    </>
  )
}
