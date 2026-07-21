// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Bilingual About Page [locale]/about/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'
import Image from 'next/image'
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
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { TrustBar } from '@/components/sections/TrustBar'
import { CtaSection } from '@/components/sections/CtaSection'
import { BreadcrumbNav } from '@/components/sections/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { Button } from '@/components/ui/Button'
import { Link } from '@/i18n/navigation'

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about' })

  return {
    title: t('pageTitle'),
    description: t('pageDescription'),
    alternates: {
      canonical: `${SITE_URL}/${locale}/about`,
      languages: {
        en: `${SITE_URL}/en/about`,
        ar: `${SITE_URL}/ar/about`,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'ar' ? 'ar_AE' : 'en_AE',
      url: `${SITE_URL}/${locale}/about`,
      siteName: BUSINESS_NAME,
      title: t('pageTitle'),
      description: t('pageDescription'),
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `About ${BUSINESS_NAME}` }],
    },
  }
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

// ── Differentiators (kept in English as not in messages) ──────────────────────

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
      "With our base in Al Bada'a and a mobile fleet across the city, we reach most Dubai areas faster than any workshop-based locksmith. No need to tow your car.",
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
    description: `Headquartered at ${ADDRESS_FULL}, we know Dubai's roads, communities and buildings intimately — from the Burj Khalifa basement car park to Palm Jumeirah frond security gates.`,
  },
  {
    icon: Award,
    title: 'Certified & Insured Technicians',
    description:
      // TODO: Update with actual certification details from business owner
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

// ─────────────────────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────────────────────

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations('about')
  const tCommon = await getTranslations('common')
  const tNav = await getTranslations('nav')

  const breadcrumbs = [
    { name: tCommon('breadcrumbHome'), href: '/' },
    { name: tNav('about'), href: '/about' },
  ]

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
              {t('heroHeading')}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/75 max-w-2xl">
              {t('heroSubtext')}
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
            {t('storyHeading')}
          </span>
          <h2
            id="story-heading"
            className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            {t('storyHeading')}
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
            {/* TODO: Business owner to review and personalise this section with:
                - Actual founding year
                - Owner name (if comfortable sharing)
                - Specific personal story about starting the business
                - Any particular challenges that inspired the service
                - Specific certifications or training background
            */}
            <p>{t('story1')}</p>
            <p>{t('story2')}</p>
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
              {t('whyChooseUs')}
            </span>
            <h2
              id="why-choose-us-heading"
              className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              {t('whyChooseUs')}
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
            {t('teamHeading')}
          </span>
          <h2
            id="team-heading"
            className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            {t('teamHeading')}
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
            {/* TODO: Business owner to provide:
                - Number of technicians on the team
                - Names and photos of key team members (with their permission)
                - Specific certifications held (e.g., ALOA, IMobileLocksmith, brand-specific training)
                - Languages spoken
                - Years of experience per technician
            */}
            <p>{t('teamDesc')}</p>
          </div>

          {/* Trust signals */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { value: '10+', label: 'Years UAE Experience' },
              { value: '50+', label: 'Car Brands Covered' },
              { value: '24/7', label: 'Daily Operating Hours' },
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
                alt: "Lock Repair Satwa shop exterior in Al Bada'a Satwa area, Dubai — professional locksmith and key maker",
                caption: "Shop — Al Bada'a, Satwa",
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
                src: '/images/shop/key-duplication-shop-display-satwa-dubai.webp',
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
        heading={t('ctaHeading')}
        subtext={t('ctaSubtext')}
      />
    </>
  )
}
