// ─────────────────────────────────────────────────────────────────────────────
// Lock repair service — Products Hub Page
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, MessageCircle } from 'lucide-react'

import { BreadcrumbNav } from '@/components/sections/BreadcrumbNav'
import { CtaSection } from '@/components/sections/CtaSection'
import { TrustBar } from '@/components/sections/TrustBar'
import { Button } from '@/components/ui/Button'
import { WebPageSchema } from '@/components/schema/WebPageSchema'

import {
  LOCK_PRODUCTS,
  ELECTRONIC_LOCK_PRODUCTS,
  SAFE_PRODUCTS,
  COMMERCIAL_HARDWARE_PRODUCTS,
  PRODUCT_CATEGORY_LABELS,
} from '@/data/products'
import type { Product } from '@/types'
import {
  BUSINESS_NAME,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_HREF,
  SITE_URL,
  DEFAULT_OG_IMAGE,
} from '@/lib/constants'
import { formatPriceRange } from '@/lib/utils'
import { parseWithLinks } from '@/lib/link-parser'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: { absolute: 'Security Products Dubai | Locks, Safes & Hardware | Lock repair service' },
  description:
    'Locks, smart locks, safes supplied and installed in Dubai. Deadbolts, fingerprint locks, commercial hardware. Same-day installation. Call +971 52 642 6161.',
  alternates: {
    canonical: `${SITE_URL}/products`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: `${SITE_URL}/products`,
    siteName: BUSINESS_NAME,
    title: 'Security Products Dubai — Locks, Safes & Hardware | Lock repair service',
    description:
      'Locks, smart locks & safes supplied and installed in Dubai. Deadbolts, fingerprint locks, commercial hardware. Same-day installation.',
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `${BUSINESS_NAME} — Security Products Supply & Installation, Dubai` }],
  },
}

// ── Breadcrumbs ───────────────────────────────────────────────────────────────

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
]

// ── Category config ───────────────────────────────────────────────────────────

type CategoryBlock = {
  key: Product['category']
  label: string
  description: string
  icon: string
  products: Product[]
}

const CATEGORIES: CategoryBlock[] = [
  {
    key: 'locks',
    label: PRODUCT_CATEGORY_LABELS['locks'],
    description:
      'Deadbolts, mortise locks and high-security cylinders for Dubai homes, apartments and offices. Compatible with standard UAE door types — metal, wooden and aluminium. Supply and fit from AED 150.',
    icon: '🔒',
    products: LOCK_PRODUCTS,
  },
  {
    key: 'electronic-locks',
    label: PRODUCT_CATEGORY_LABELS['electronic-locks'],
    description:
      'Smart door locks with fingerprint, keypad, RFID card and app control — for Dubai apartments, villas and offices. Installation from AED 350 including the lock unit. Same-day setup available.',
    icon: '📱',
    products: ELECTRONIC_LOCK_PRODUCTS,
  },
  {
    key: 'safes',
    label: PRODUCT_CATEGORY_LABELS['safes'],
    description:
      'Fireproof safes, depository safes, gun safes and hotel safes — supplied and anchored to floor or wall by our technicians across Dubai. Safe opening and combination reset also available from AED 200.',
    icon: '🔓',
    products: SAFE_PRODUCTS,
  },
  {
    key: 'commercial-door-hardware',
    label: PRODUCT_CATEGORY_LABELS['commercial-door-hardware'],
    description:
      'Magnetic locks, electric strikes, panic bars, door closers and commercial-grade cylinders for Dubai offices, retail units and warehouses. Installed and tested on-site — no separate contractor needed.',
    icon: '🏢',
    products: COMMERCIAL_HARDWARE_PRODUCTS,
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Product Card
// ─────────────────────────────────────────────────────────────────────────────

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-brand-gold/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {/* Icon */}
      <div
        className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gold/10 text-2xl ring-1 ring-brand-gold/20 group-hover:bg-brand-gold/20 transition-colors"
        aria-hidden="true"
      >
        {product.icon}
      </div>

      {/* Title */}
      <h3 className="font-heading text-base font-semibold text-foreground group-hover:text-brand-gold transition-colors">
        {product.title}
      </h3>

      {/* Price */}
      <p className="mt-1 text-xs font-medium text-brand-gold">
        {formatPriceRange(product.pricing.min, product.pricing.max)}
      </p>

      {/* Description snippet */}
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2 flex-1">
        {product.description.split('\n\n')[0].slice(0, 110)}
        {product.description.split('\n\n')[0].length > 110 ? '…' : ''}
      </p>

      {/* Arrow */}
      <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-brand-gold">
        View Details
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </div>
    </Link>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────────────────────

export default function ProductsPage() {
  return (
    <>
      <WebPageSchema
        pageUrl={`${SITE_URL}/products`}
        pageId="products-hub"
        name="Security Products Dubai — Locks, Safes & Hardware"
        description="Locks, smart locks, safes supplied and installed in Dubai. Deadbolts, fingerprint locks, commercial hardware. Same-day installation."
        breadcrumbs={[
          { name: 'Home', url: SITE_URL },
          { name: 'Products', url: `${SITE_URL}/products` },
        ]}
      />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section
        aria-label="Products page header"
        className="relative overflow-hidden bg-brand-navy pt-[72px]"
      >
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <Image
            src="/images/shop/key-duplication-display-for-sale-satwa-dubai.webp"
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
              Security Products{' '}
              <span className="text-gold-gradient">Supply &amp; Installation</span>
            </h1>

            <div className="mt-6 rounded-xl border-l-4 border-brand-gold bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-base leading-relaxed text-white/90">
                Lock repair service supplies and installs a complete range of security products across Dubai —
                from deadbolt locks and high-security cylinders to smart door locks, electronic safes and
                commercial door hardware. Every product we sell is also installed by our trained
                technicians. Call{' '}
                <a href={PHONE_HREF} className="font-semibold text-brand-gold hover:underline">
                  {PHONE_DISPLAY}
                </a>{' '}
                for a supply and installation quote.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" variant="primary" className="btn-pulse w-full sm:w-auto" asChild>
                <a href={PHONE_HREF} aria-label={`Call ${PHONE_DISPLAY}`}>
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Call for a Quote
                </a>
              </Button>
              <Button size="lg" variant="whatsapp" className="w-full sm:w-auto" asChild>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TrustBar dark />

      {/* ── Category Sections ─────────────────────────────────────────────────── */}
      {CATEGORIES.map((cat, idx) => (
        <section
          key={cat.key}
          aria-labelledby={`cat-heading-${cat.key}`}
          className={`py-16 sm:py-20 ${idx % 2 === 0 ? 'bg-background' : 'bg-muted/40'}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Category header */}
            <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-3xl" aria-hidden="true">{cat.icon}</span>
                  <h2
                    id={`cat-heading-${cat.key}`}
                    className="font-heading text-2xl font-bold text-foreground sm:text-3xl"
                  >
                    {cat.label}
                  </h2>
                </div>
                <p className="max-w-2xl text-sm text-muted-foreground">
                  {parseWithLinks(cat.description)}
                </p>
              </div>
              <div className="shrink-0">
                <span className="text-xs text-muted-foreground">
                  {cat.products.length} products
                </span>
              </div>
            </div>

            {/* Product grid */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {cat.products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── Contextual back-link to homepage and services ────────────────────── */}
      <section className="py-8 bg-muted/30 border-y border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center text-sm text-muted-foreground">
          <p>
            All products can be installed by our mobile technicians — see{' '}
            <Link
              href="/services"
              className="font-semibold text-brand-gold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            >
              installation services
            </Link>
            {' '}or visit our{' '}
            <Link
              href="/"
              className="font-semibold text-brand-gold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            >
              Dubai locksmith homepage
            </Link>
            {' '}for the full service overview.
          </p>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <CtaSection
        heading="Need Help Choosing the Right Product?"
        subtext={`Call or WhatsApp ${BUSINESS_NAME}. We advise on the right security product for your door, budget and security level — and install it in the same visit.`}
      />
    </>
  )
}
