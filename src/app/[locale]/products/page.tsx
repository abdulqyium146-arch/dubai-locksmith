// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Bilingual Products Hub Page
// [locale]/products/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'
import { ArrowRight, Phone, MessageCircle } from 'lucide-react'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { BreadcrumbNav } from '@/components/sections/BreadcrumbNav'
import { CtaSection } from '@/components/sections/CtaSection'
import { TrustBar } from '@/components/sections/TrustBar'
import { Button } from '@/components/ui/Button'
import { Link } from '@/i18n/navigation'

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
import { routing } from '@/i18n/routing'

// ─────────────────────────────────────────────────────────────────────────────
// Static Params
// ─────────────────────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

// ─────────────────────────────────────────────────────────────────────────────
// Metadata
// ─────────────────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'products' })

  return {
    title: t('pageTitle'),
    description: t('pageDescription'),
    alternates: {
      canonical: `${SITE_URL}/${locale}/products`,
      languages: {
        en: `${SITE_URL}/en/products`,
        ar: `${SITE_URL}/ar/products`,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'ar' ? 'ar_AE' : 'en_AE',
      url: `${SITE_URL}/${locale}/products`,
      siteName: BUSINESS_NAME,
      title: t('pageTitle'),
      description: t('pageDescription'),
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `${BUSINESS_NAME} Products` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('pageTitle'),
      description: t('pageDescription'),
      images: [DEFAULT_OG_IMAGE],
    },
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Category config
// ─────────────────────────────────────────────────────────────────────────────

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
      'Deadbolts, mortise locks, high-security cylinders and specialist locks for every door type in Dubai homes and offices.',
    icon: '🔒',
    products: LOCK_PRODUCTS,
  },
  {
    key: 'electronic-locks',
    label: PRODUCT_CATEGORY_LABELS['electronic-locks'],
    description:
      'Smart door locks, fingerprint biometric locks, keyless entry systems and keypad locks for modern Dubai residences.',
    icon: '📱',
    products: ELECTRONIC_LOCK_PRODUCTS,
  },
  {
    key: 'safes',
    label: PRODUCT_CATEGORY_LABELS['safes'],
    description:
      'Depository safes, gun safes, fireproof safes, floor safes and hotel safes supplied and installed across Dubai.',
    icon: '🔓',
    products: SAFE_PRODUCTS,
  },
  {
    key: 'commercial-door-hardware',
    label: PRODUCT_CATEGORY_LABELS['commercial-door-hardware'],
    description:
      'Commercial locks, magnetic locks, electric strikes, panic bars, door closers and door operators for Dubai businesses.',
    icon: '🏢',
    products: COMMERCIAL_HARDWARE_PRODUCTS,
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Product Card (server component)
// ─────────────────────────────────────────────────────────────────────────────

function ProductCard({ product, viewLabel }: { product: Product; viewLabel: string }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-brand-gold/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div
        className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gold/10 text-2xl ring-1 ring-brand-gold/20 group-hover:bg-brand-gold/20 transition-colors"
        aria-hidden="true"
      >
        {product.icon}
      </div>
      <h3 className="font-heading text-base font-semibold text-foreground group-hover:text-brand-gold transition-colors">
        {product.title}
      </h3>
      <p className="mt-1 text-xs font-medium text-brand-gold">
        {formatPriceRange(product.pricing.min, product.pricing.max)}
      </p>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2 flex-1">
        {product.description.split('\n\n')[0].slice(0, 110)}
        {product.description.split('\n\n')[0].length > 110 ? '…' : ''}
      </p>
      <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-brand-gold">
        {viewLabel}
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </div>
    </Link>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────────────────────

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations('products')
  const tCommon = await getTranslations('common')
  const tNav = await getTranslations('nav')

  const breadcrumbs = [
    { name: tCommon('breadcrumbHome'), href: '/' },
    { name: tNav('products'), href: '/products' },
  ]

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section
        aria-label="Products page header"
        className="bg-hero-gradient pt-[72px]"
      >
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <BreadcrumbNav items={breadcrumbs} light />

          <div className="mt-6 max-w-3xl">
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/15 px-3 py-1 text-xs font-semibold text-brand-gold">
              {t('heroBadge')}
            </span>
            <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              {t('heroHeading')}
            </h1>

            <div className="mt-6 rounded-xl border-l-4 border-brand-gold bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-base leading-relaxed text-white/90">
                {t('heroSubtext')}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" variant="primary" className="btn-pulse w-full sm:w-auto" asChild>
                <a href={PHONE_HREF} aria-label={`Call ${PHONE_DISPLAY}`}>
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  {t('callNow', { phone: PHONE_DISPLAY })}
                </a>
              </Button>
              <Button size="lg" variant="whatsapp" className="w-full sm:w-auto" asChild>
                <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  {t('whatsappUs')}
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
                  {cat.description}
                </p>
              </div>
              <div className="shrink-0">
                <span className="text-xs text-muted-foreground">
                  {cat.products.length} products
                </span>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {cat.products.map((product) => (
                <ProductCard key={product.slug} product={product} viewLabel={t('viewProduct')} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <CtaSection
        heading={t('ctaHeading')}
        subtext={t('ctaSubtext')}
      />
    </>
  )
}
