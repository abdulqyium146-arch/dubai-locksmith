// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Bilingual Services Index [locale]/services/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'
import { Phone, MessageCircle, AlertTriangle } from 'lucide-react'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { ServiceCard } from '@/components/sections/ServiceCard'
import { CtaSection } from '@/components/sections/CtaSection'
import { BreadcrumbNav } from '@/components/sections/BreadcrumbNav'
import { TrustBar } from '@/components/sections/TrustBar'
import { Button } from '@/components/ui/Button'

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
import type { Service } from '@/types'

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'services' })

  return {
    title: t('pageTitle'),
    description: t('pageDescription'),
    alternates: {
      canonical: `${SITE_URL}/${locale}/services`,
      languages: {
        en: `${SITE_URL}/en/services`,
        ar: `${SITE_URL}/ar/services`,
      },
    },
    openGraph: {
      locale: locale === 'ar' ? 'ar_AE' : 'en_AE',
      title: t('pageTitle'),
      description: t('pageDescription'),
      type: 'website',
      url: `${SITE_URL}/${locale}/services`,
      siteName: BUSINESS_NAME,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `${BUSINESS_NAME} Services` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('pageTitle'),
      description: t('pageDescription'),
      images: [DEFAULT_OG_IMAGE],
    },
  }
}

// ── Emergency services subset ─────────────────────────────────────────────────

const emergencyServices = services.filter((s) => s.emergency)

// ── Category config type ──────────────────────────────────────────────────────

type CategorySection = {
  id: string
  label: string
  description: string
  icon: string
  services: Service[]
  darkBg?: boolean
}

// ─────────────────────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────────────────────

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations('services')
  const tCommon = await getTranslations('common')
  const tNav = await getTranslations('nav')

  const breadcrumbs = [
    { name: tCommon('breadcrumbHome'), href: '/' },
    { name: tNav('services'), href: '/services' },
  ]

  const CATEGORIES: CategorySection[] = [
    {
      id: 'residential',
      label: t('residential'),
      description:
        'Home lock services for Dubai apartments and villas — key duplication, lock change, lock repair, safe opening, smart lock installation, home lockout and more.',
      icon: '🏠',
      services: RESIDENTIAL_SERVICES,
    },
    {
      id: 'commercial',
      label: t('commercial'),
      description:
        'Security solutions for Dubai offices, shops and commercial buildings — master key systems, access control, door closers, push bars and cabinet locks.',
      icon: '🏢',
      services: COMMERCIAL_SERVICES,
      darkBg: true,
    },
    {
      id: 'automotive',
      label: t('automotive'),
      description:
        'Mobile car key and lock services across Dubai — car key programming, key replacement, emergency unlock, ignition repair, transponder keys and more.',
      icon: '🚗',
      services: AUTOMOTIVE_SERVICES,
    },
  ]

  return (
    <>
      {/* ── Page Header ─────────────────────────────────────────────────────── */}
      <section
        aria-label="Services page header"
        className="bg-hero-gradient pt-[72px]"
      >
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <BreadcrumbNav items={breadcrumbs} light />

          <div className="mt-6 max-w-3xl">
            <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              {t('heroHeading')}
            </h1>

            {/* Direct Answer Opener */}
            <div className="mt-6 rounded-xl border-l-4 border-brand-gold bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-base leading-relaxed text-white/90">
                Lock Repair Satwa (D90, Al Bada&apos;a, Dubai) provides {services.length} locksmith and car key services
                across Dubai — residential, commercial and automotive — all delivered by mobile technicians
                who come directly to your location. Open daily 24/7. Call{' '}
                <a href={PHONE_HREF} className="font-semibold text-brand-gold hover:underline">
                  +971 52 642 6161
                </a>.
              </p>
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
                {cat.description}
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
                  {t('emergencyAlert')}
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
                  {t('callEmergency')}
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

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <CtaSection
        heading={t('ctaHeading')}
        subtext={t('ctaSubtext')}
      />
    </>
  )
}
