// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Product Detail Page
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Tag,
  ChevronDown,
} from 'lucide-react'

import { BreadcrumbNav } from '@/components/sections/BreadcrumbNav'
import { FaqAccordion } from '@/components/sections/FaqAccordion'
import { CtaSection } from '@/components/sections/CtaSection'
import { JsonLd } from '@/components/schema/JsonLd'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

import {
  getProductBySlug,
  getAllProductSlugs,
  getProductsByCategory,
  PRODUCT_CATEGORY_LABELS,
} from '@/data/products'
import {
  BUSINESS_NAME,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_HREF,
  SITE_URL,
  DEFAULT_OG_IMAGE,
  ADDRESS_STREET,
  ADDRESS_AREA,
  ADDRESS_CITY,
  COORDINATES,
  PHONE_RAW,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
} from '@/lib/constants'
import { formatPriceRange } from '@/lib/utils'
import type { Product } from '@/types'

// ─────────────────────────────────────────────────────────────────────────────
// Static Params
// ─────────────────────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }))
}

// ─────────────────────────────────────────────────────────────────────────────
// Metadata
// ─────────────────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}

  const canonicalUrl = `${SITE_URL}/products/${product.slug}`

  return {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: 'website',
      locale: 'en_AE',
      url: canonicalUrl,
      siteName: BUSINESS_NAME,
      title: product.metaTitle,
      description: product.metaDescription,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `${product.title} — ${BUSINESS_NAME}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.metaTitle,
      description: product.metaDescription,
      images: [DEFAULT_OG_IMAGE],
    },
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Helper: build LocalBusiness + Product schema
// ─────────────────────────────────────────────────────────────────────────────

function buildProductSchema(product: Product) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/#localbusiness`,
        name: BUSINESS_NAME,
        url: SITE_URL,
        telephone: PHONE_RAW,
        address: {
          '@type': 'PostalAddress',
          streetAddress: ADDRESS_STREET,
          addressLocality: ADDRESS_AREA,
          addressRegion: ADDRESS_CITY,
          addressCountry: 'AE',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: COORDINATES.lat,
          longitude: COORDINATES.lng,
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: GOOGLE_RATING,
          reviewCount: GOOGLE_REVIEW_COUNT,
          bestRating: 5,
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      },
      {
        '@type': 'Product',
        name: product.title,
        description: product.description.split('\n\n')[0],
        url: `${SITE_URL}/products/${product.slug}`,
        brand: {
          '@type': 'Brand',
          name: BUSINESS_NAME,
        },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'AED',
          lowPrice: product.pricing.min,
          highPrice: product.pricing.max,
          offerCount: 1,
          seller: {
            '@type': 'LocalBusiness',
            name: BUSINESS_NAME,
          },
        },
      },
    ],
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Helper: related products from same category
// ─────────────────────────────────────────────────────────────────────────────

function getRelatedProducts(currentSlug: string, category: Product['category'], count = 3): Product[] {
  return getProductsByCategory(category)
    .filter((p) => p.slug !== currentSlug)
    .slice(0, count)
}

// ─────────────────────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────────────────────

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) notFound()

  const relatedProducts = getRelatedProducts(product.slug, product.category)
  const categoryLabel = PRODUCT_CATEGORY_LABELS[product.category]

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: product.title, href: `/products/${product.slug}` },
  ]

  return (
    <>
      {/* Schema */}
      <JsonLd data={buildProductSchema(product)} />

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section
        aria-label={`${product.title} product hero`}
        className="bg-hero-gradient pt-[72px]"
      >
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <BreadcrumbNav items={breadcrumbs} light />

          <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left: title and description */}
            <div>
              {/* Category badge */}
              <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/15 px-3 py-1 text-xs font-semibold text-brand-gold">
                {categoryLabel}
              </div>

              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gold/15 text-3xl ring-2 ring-brand-gold/30"
                  aria-hidden="true"
                >
                  {product.icon}
                </div>
                <h1 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                  {product.title}
                </h1>
              </div>

              {/* Pricing badge */}
              <div className="mt-4 flex flex-wrap gap-3">
                <Badge variant="gold" size="md">
                  <Tag className="h-3.5 w-3.5 mr-1.5" aria-hidden="true" />
                  {formatPriceRange(product.pricing.min, product.pricing.max)}
                </Badge>
              </div>

              <p className="mt-4 text-xs text-white/50">{product.pricing.note}</p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" variant="primary" className="btn-pulse w-full sm:w-auto" asChild>
                  <a href={PHONE_HREF} aria-label={`Call for ${product.title}: ${PHONE_DISPLAY}`}>
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    Call for a Quote — {PHONE_DISPLAY}
                  </a>
                </Button>
                <Button size="lg" variant="whatsapp" className="w-full sm:w-auto" asChild>
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp about ${product.title}`}
                  >
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>

              <p className="mt-4 text-xs text-white/40">
                Supply &amp; installation · All Dubai areas · Price confirmed before work starts
              </p>
            </div>

            {/* Right: features preview */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h2 className="font-heading text-lg font-semibold text-white mb-5">
                Key Features
              </h2>
              <ul className="space-y-3">
                {product.features.slice(0, 5).map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-white/80">{feature}</span>
                  </li>
                ))}
                {product.features.length > 5 && (
                  <li className="flex items-center gap-1.5 text-xs text-white/40 pl-7">
                    <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                    {product.features.length - 5} more features below
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Description ──────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="product-description-heading"
        className="py-14 sm:py-16 bg-background"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="product-description-heading"
            className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            About {product.title}
          </h2>
          <div className="mt-6 space-y-4">
            {product.description.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── All Features ─────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="features-heading"
        className="py-14 sm:py-16 bg-muted/40 border-y border-border"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="features-heading"
            className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-8"
          >
            Features &amp; Specifications
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {product.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold"
                  aria-hidden="true"
                />
                <span className="text-sm leading-relaxed text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="product-pricing-heading"
        className="py-14 sm:py-16 bg-background"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="product-pricing-heading"
            className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-4"
          >
            Pricing — {product.title} in Dubai
          </h2>
          <p className="text-muted-foreground text-sm mb-8">{product.pricing.note}</p>

          {/* Pricing card */}
          <div className="rounded-xl border-2 border-brand-gold/30 bg-brand-gold/5 p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                  Price Range (Supply &amp; Installation)
                </p>
                <p className="font-heading text-3xl font-bold text-brand-gold">
                  {formatPriceRange(product.pricing.min, product.pricing.max)}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{product.pricing.note}</p>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <Button size="lg" variant="primary" className="btn-pulse" asChild>
                  <a href={PHONE_HREF}>
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    Get an Instant Quote
                  </a>
                </Button>
                <Button size="lg" variant="whatsapp" asChild>
                  <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    WhatsApp for Quote
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ─────────────────────────────────────────────────────────────── */}
      {product.faqs.length > 0 && (
        <section
          aria-labelledby="product-faqs-heading"
          className="py-14 sm:py-16 bg-muted/40 border-y border-border"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2
              id="product-faqs-heading"
              className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-8"
            >
              Frequently Asked Questions — {product.title}
            </h2>
            <FaqAccordion faqs={product.faqs} withSchema={true} />
          </div>
        </section>
      )}

      {/* ── Final CTA ─────────────────────────────────────────────────────────── */}
      <CtaSection
        heading={`Order ${product.title} in Dubai — Supply & Installation`}
        subtext={`${BUSINESS_NAME} (D90, Al Bada'a, Dubai) supplies and installs ${product.title} across all Dubai areas. Call or WhatsApp for an upfront price — no hidden charges, certified installation, 7 days a week.`}
      />

      {/* ── Related Products ──────────────────────────────────────────────────── */}
      {relatedProducts.length > 0 && (
        <section
          aria-labelledby="related-products-heading"
          className="py-14 sm:py-16 bg-background"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2
                id="related-products-heading"
                className="font-heading text-2xl font-bold tracking-tight text-foreground"
              >
                More {categoryLabel}
              </h2>
              <Link
                href="/products"
                className="flex items-center gap-1.5 text-sm font-semibold text-brand-gold hover:text-brand-gold-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
              >
                All Products
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/products/${related.slug}`}
                  className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-brand-gold/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gold/10 text-xl ring-1 ring-brand-gold/20" aria-hidden="true">
                    {related.icon}
                  </div>
                  <h3 className="font-heading text-sm font-semibold text-foreground group-hover:text-brand-gold transition-colors">
                    {related.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-brand-gold">
                    {formatPriceRange(related.pricing.min, related.pricing.max)}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground line-clamp-2 flex-1">
                    {related.description.split('\n\n')[0].slice(0, 90)}…
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-brand-gold">
                    View Details
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
