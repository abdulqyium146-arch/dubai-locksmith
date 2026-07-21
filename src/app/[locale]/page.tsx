// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Bilingual Homepage [locale]/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, MessageCircle, CheckCircle2, ArrowRight, PhoneCall, Wrench, ThumbsUp, MapPin, Clock } from 'lucide-react'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { HeroSection } from '@/components/sections/HeroSection'
import { TrustBar } from '@/components/sections/TrustBar'
import { ServiceCard } from '@/components/sections/ServiceCard'
import { LocationCard } from '@/components/sections/LocationCard'
import { ReviewsSection } from '@/components/sections/ReviewsSection'
import { CtaSection } from '@/components/sections/CtaSection'
import { JsonLd } from '@/components/schema/JsonLd'
import { Button } from '@/components/ui/Button'
import { Link } from '@/i18n/navigation'

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
} from '@/lib/constants'
import { formatPriceRange } from '@/lib/utils'
import type { Review } from '@/types'

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta' })

  return {
    title: `${t('siteName')} | ${t('tagline')}`,
    description: t('defaultDescription'),
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        en: `${SITE_URL}/en`,
        ar: `${SITE_URL}/ar`,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'ar' ? 'ar_AE' : 'en_AE',
      url: `${SITE_URL}/${locale}`,
      siteName: t('siteName'),
      title: `${t('siteName')} | ${t('tagline')}`,
      description: t('defaultDescription'),
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: t('ogAlt'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t('siteName')} | ${t('tagline')}`,
      description: t('defaultDescription'),
      images: [DEFAULT_OG_IMAGE],
    },
  }
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

// ── TODO: Replace with real, verbatim Google reviews from business owner ──────
// IMPORTANT: The reviews below are PLACEHOLDERS only. Do not publish these
// placeholder reviews on the live site. The business owner must supply real,
// verbatim review content with actual reviewer names and verified dates from
// Google Maps before going live.

const PLACEHOLDER_REVIEWS: Review[] = [
  // TODO: Replace with real Google reviews — contact business owner
]

// ── Featured locations (first 6) ──────────────────────────────────────────────

const featuredLocations = locations.slice(0, 6)

// ─────────────────────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────────────────────

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations('home')

  const HOW_IT_WORKS = [
    {
      step: 1,
      icon: PhoneCall,
      title: t('step1Title'),
      description: t('step1Desc'),
    },
    {
      step: 2,
      icon: Wrench,
      title: t('step2Title'),
      description: t('step2Desc'),
    },
    {
      step: 3,
      icon: ThumbsUp,
      title: t('step3Title'),
      description: t('step3Desc'),
    },
  ]

  const DIFFERENTIATORS = [
    { title: t('diff1Title'), description: t('diff1Desc') },
    { title: t('diff2Title'), description: t('diff2Desc') },
    { title: t('diff3Title'), description: t('diff3Desc') },
    { title: t('diff4Title'), description: t('diff4Desc') },
    { title: t('diff5Title'), description: t('diff5Desc') },
    { title: t('diff6Title'), description: t('diff6Desc') },
  ]

  const SHOP_IMAGES = [
    {
      src: '/images/shop/locksmith-shop-satwa-al-badaa-dubai.webp',
      alt: "Lock Repair Satwa shop exterior in Al Bada'a — key maker and locksmith in Satwa Dubai",
      caption: t('shopCaption1'),
    },
    {
      src: '/images/shop/padlock-collection-lock-shop-satwa-dubai.webp',
      alt: "Padlock and lock collection on display at Lock Repair Satwa, Al Bada'a Dubai",
      caption: t('shopCaption2'),
    },
    {
      src: '/images/shop/key-duplication-display-for-sale-satwa-dubai.webp',
      alt: 'Key duplication display stand showing duplicate keys for sale — Lock Repair Satwa, Dubai',
      caption: t('shopCaption3'),
    },
    {
      src: '/images/services/car-remote-key-blanks-locksmith-shop-dubai.webp',
      alt: 'Car remote key blanks and spare keys on display at Lock Repair Satwa locksmith shop, Dubai',
      caption: t('shopCaption4'),
    },
    {
      src: '/images/shop/door-lock-handles-repair-shop-satwa-dubai.webp',
      alt: 'Door handles and lock hardware display at Lock Repair Satwa, Satwa Dubai',
      caption: t('shopCaption5'),
    },
    {
      src: '/images/shop/keychains-accessories-key-shop-satwa-dubai.webp',
      alt: 'Key accessories and keychains at Lock Repair Satwa key shop in Satwa, Dubai',
      caption: t('shopCaption6'),
    },
  ]

  return (
    <>
      {/* Structured data */}
      <JsonLd data={websiteSchema} />

      {/* ── 1. Hero ─────────────────────────────────────────────────────────── */}
      <HeroSection
        title={
          <>
            Dubai&apos;s Professional Locksmith —{' '}
            <span className="text-gold-gradient">Lock Repair Satwa</span>
          </>
        }
        subtitle="Dubai's most-searched key maker and locksmith, based in Al Satwa. Key duplication from AED 50, car key cutting and programming, door lock repair, and emergency locksmith — 24/7 across all Dubai areas."
        badge="Key Maker Near Me in Dubai — Satwa & All Areas"
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
              {t('servicesBadge')}
            </span>
            <h2
              id="services-heading"
              className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              {t('servicesHeading')}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('servicesSubtext')}
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
                {t('viewAllServices')}
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
              {t('howItWorksBadge')}
            </span>
            <h2
              id="how-it-works-heading"
              className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              {t('howItWorksHeading')}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              {t('howItWorksSubtext')}
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
              <a href={PHONE_HREF} aria-label={`Call Lock Repair Satwa: ${PHONE_DISPLAY}`}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                {t('callNow', { phone: PHONE_DISPLAY })}
              </a>
            </Button>
            <Button size="lg" variant="whatsapp" className="w-full sm:w-auto" asChild>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Lock Repair Satwa"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                {t('whatsappUs')}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Services in Action Gallery ──────────────────────────────────────── */}
      <section
        aria-labelledby="gallery-heading"
        className="py-16 sm:py-20 bg-background"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold mb-4">
              {t('galleryBadge')}
            </span>
            <h2
              id="gallery-heading"
              className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              {t('galleryHeading')}
            </h2>
            <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto">
              {t('gallerySubtext')}
            </p>
          </div>

          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {services
              .filter((s) => s.heroImage)
              .map((service, index) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-border shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={`${service.title} — ${formatPriceRange(service.pricing.min, service.pricing.max)}`}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src={service.heroImage!}
                      alt={service.heroImageAlt ?? `${service.title} in Dubai — Lock Repair Satwa`}
                      width={400}
                      height={300}
                      priority={index < 2}
                      loading={index < 2 ? undefined : 'lazy'}
                      sizes="(max-width: 640px) calc(50vw - 24px), (max-width: 1024px) calc(50vw - 24px), calc(25vw - 24px)"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">
                      {formatPriceRange(service.pricing.min, service.pricing.max)}
                    </p>
                    <p className="text-sm font-semibold text-white leading-snug mt-0.5">
                      {service.title}
                    </p>
                  </div>
                  {/* Hover arrow badge */}
                  <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md">
                    <ArrowRight className="h-3.5 w-3.5 text-brand-navy" aria-hidden="true" />
                  </div>
                </Link>
              ))}
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            {t('galleryFootnote')}
          </p>
        </div>
      </section>

      {/* ── Satwa Key Shop Section ──────────────────────────────────────────── */}
      <section
        aria-labelledby="satwa-section-heading"
        className="py-16 sm:py-20 bg-brand-navy text-white"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/15 px-3 py-1 text-xs font-semibold text-brand-gold mb-5">
                {t('satwaBadge')}
              </span>
              <h2 id="satwa-section-heading" className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {t('satwaHeading')}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/75">
                {t('satwaSubtext')}
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  t('satwaItem1'),
                  t('satwaItem2'),
                  t('satwaItem3'),
                  t('satwaItem4'),
                  t('satwaItem5'),
                  t('satwaItem6'),
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="primary" size="lg" className="btn-pulse" asChild>
                  <a href={PHONE_HREF}>
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    {t('callNowFull', { phone: PHONE_DISPLAY })}
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/locations/al-satwa">
                    {t('satwaPageLink')}
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {SHOP_IMAGES.map(({ src, alt, caption }) => (
                <figure key={src} className="group">
                  <div className="aspect-square overflow-hidden rounded-xl border border-white/10">
                    <Image
                      src={src}
                      alt={alt}
                      width={220}
                      height={220}
                      loading="lazy"
                      sizes="(max-width: 1024px) 33vw, 220px"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="mt-1.5 text-center text-[11px] font-medium text-white/50 truncate">
                    {caption}
                  </figcaption>
                </figure>
              ))}
            </div>
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
              {t('locationsBadge')}
            </span>
            <h2
              id="locations-heading"
              className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              {t('locationsHeading')}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('locationsSubtext')}
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
                {t('viewAllAreas', { count: locations.length })}
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
                {t('aboutBadge')}
              </span>
              <h2
                id="about-heading"
                className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                {t('aboutHeading')}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/75">
                {t('aboutPara1')}
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/75">
                {t('aboutPara2')}
              </p>

              {/* Brand tags */}
              <div className="mt-6">
                <p className="text-sm font-semibold text-white/50 mb-3 uppercase tracking-wide">
                  {t('supportedMakesLabel')}
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
                    {t('moreBrands', { count: 40 })}
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <Button variant="primary" size="lg" className="btn-pulse" asChild>
                  <Link href="/about">
                    {t('learnMoreAboutUs')}
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
              {t('reviewsComingSoon', { rating: 4.7 })}{' '}
              <a
                href="https://maps.google.com/?q=Lock+Repair+Satwa+Al+Bada%27a+Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-brand-gold transition-colors"
              >
                {t('readReviews')}
              </a>
            </p>
          </div>
        </section>
      )}

      {/* ── 7. Find Us — Map Section ────────────────────────────────────────── */}
      <section
        aria-labelledby="map-heading"
        className="py-16 sm:py-20 bg-muted/30 border-y border-border"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold mb-4">
              {t('visitUsBadge')}
            </span>
            <h2
              id="map-heading"
              className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              {t('findUsHeading')}
            </h2>
            <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto">
              {t('findUsSubtext')}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_320px] items-start">
            {/* Map iframe */}
            <div className="overflow-hidden rounded-2xl border border-border shadow-md aspect-[16/9] lg:aspect-auto lg:h-[420px]">
              <iframe
                src="https://www.google.com/maps?q=25.23341473023507,55.275106874155064&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t('mapTitle')}
              />
            </div>

            {/* Address + CTA card */}
            <div className="rounded-2xl border border-border bg-background p-6 shadow-sm lg:sticky lg:top-24">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-5">
                {t('ourLocation')}
              </h3>
              <address className="not-italic space-y-4 text-sm text-muted-foreground">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                  <span>
                    <strong className="block text-foreground mb-0.5">{t('addressLine1')}</strong>
                    {t('addressLine2')}<br />
                    {t('addressLine3')}
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                  <span>
                    <strong className="block text-foreground mb-0.5">{t('hoursLabel')}</strong>
                    {t('shopHours')}<br />
                    <span className="text-green-600 dark:text-green-400 font-medium">
                      {t('mobileHours')}
                    </span>
                  </span>
                </p>
              </address>

              <div className="mt-6 flex flex-col gap-3">
                <Button size="md" variant="primary" className="btn-pulse w-full" asChild>
                  <a href={PHONE_HREF} aria-label={`Call Lock Repair Satwa: ${PHONE_DISPLAY}`}>
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {t('callPhone', { phone: PHONE_DISPLAY })}
                  </a>
                </Button>
                <Button size="md" variant="whatsapp" className="w-full" asChild>
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp Lock Repair Satwa"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    {t('whatsappUs')}
                  </a>
                </Button>
                <a
                  href="https://maps.google.com/?q=Lock+Repair+Satwa+Al+Bada%27a+Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-xs text-muted-foreground hover:text-brand-gold transition-colors underline underline-offset-2"
                >
                  {t('openGoogleMaps')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Final CTA ────────────────────────────────────────────────────── */}
      <CtaSection
        heading={t('finalCtaHeading')}
        subtext={t('finalCtaSubtext')}
      />
    </>
  )
}
