// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Booking Page [locale]/booking/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'
import { Phone, MessageCircle, Clock, Shield, Star } from 'lucide-react'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { BreadcrumbNav } from '@/components/sections/BreadcrumbNav'
import { TrustBar } from '@/components/sections/TrustBar'
import { JsonLd } from '@/components/schema/JsonLd'
import { Button } from '@/components/ui/Button'
import { BookingForm } from '@/components/booking/BookingForm'

import {
  BUSINESS_NAME,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_HREF,
  SITE_URL,
  DEFAULT_OG_IMAGE,
} from '@/lib/constants'
import { routing } from '@/i18n/routing'

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  const title = 'Book a Locksmith in Dubai | Lock Repair Satwa'
  const description =
    'Book a locksmith or car key service in Dubai online. Lock Repair Satwa — mobile service across all Dubai areas. Same-day response, upfront pricing. Call +971 52 642 6161.'

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/booking`,
      languages: {
        en: `${SITE_URL}/en/booking`,
        ar: `${SITE_URL}/ar/booking`,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'ar' ? 'ar_AE' : 'en_AE',
      url: `${SITE_URL}/${locale}/booking`,
      siteName: BUSINESS_NAME,
      title,
      description,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `Book ${BUSINESS_NAME}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

// ── Schema ────────────────────────────────────────────────────────────────────

const bookingPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE_URL}/en/booking#page`,
  name: 'Book a Locksmith in Dubai',
  description:
    'Online booking form for locksmith and car key services in Dubai. Lock Repair Satwa serves all Dubai areas with mobile technicians.',
  url: `${SITE_URL}/en/booking`,
  provider: {
    '@type': 'Locksmith',
    '@id': `${SITE_URL}/#lock-repair-satwa`,
    name: BUSINESS_NAME,
  },
  potentialAction: {
    '@type': 'ReserveAction',
    target: `${SITE_URL}/en/booking`,
    result: {
      '@type': 'Reservation',
      name: 'Locksmith Service Booking',
    },
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────────────────────

export default async function BookingPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const tCommon = await getTranslations('common')

  const breadcrumbs = [
    { name: tCommon('breadcrumbHome'), href: '/' },
    { name: 'Book a Service', href: '/booking' },
  ]

  return (
    <>
      <JsonLd data={bookingPageSchema} />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section
        aria-label="Booking page hero"
        className="bg-hero-gradient pt-[72px]"
      >
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <BreadcrumbNav items={breadcrumbs} light />

          <div className="mt-6 max-w-3xl">
            <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Book a Locksmith in Dubai
            </h1>

            <div className="mt-6 rounded-xl border-l-4 border-brand-gold bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-base leading-relaxed text-white/90">
                Fill in the form below and we&apos;ll call you back to confirm your booking and
                give you an exact ETA. For emergencies, call or WhatsApp us directly — we dispatch
                within minutes.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" variant="primary" className="btn-pulse w-full sm:w-auto" asChild>
                <a href={PHONE_HREF} aria-label={`Call for emergency: ${PHONE_DISPLAY}`}>
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Emergency Call — {PHONE_DISPLAY}
                </a>
              </Button>
              <Button size="lg" variant="whatsapp" className="w-full sm:w-auto" asChild>
                <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp booking">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  WhatsApp Booking
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TrustBar dark />

      {/* ── Main: Form + Sidebar ──────────────────────────────────────────────── */}
      <section
        aria-labelledby="booking-form-heading"
        className="py-16 sm:py-20 bg-background"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">

            {/* Form — 2/3 width */}
            <div className="lg:col-span-2">
              <h2
                id="booking-form-heading"
                className="font-heading text-2xl font-bold text-foreground mb-2"
              >
                Request a Booking
              </h2>
              <p className="text-sm text-muted-foreground mb-8">
                We&apos;ll call you back within 15 minutes to confirm. All fields marked * are required.
              </p>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
                <BookingForm />
              </div>
            </div>

            {/* Sidebar — 1/3 width */}
            <aside aria-label="Why book with us" className="space-y-6">

              {/* Why us card */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-heading text-base font-bold text-foreground mb-5">
                  Why Book with Lock Repair Satwa?
                </h3>
                <ul className="space-y-4">
                  {[
                    { icon: Clock, text: '20–45 min response across all Dubai areas' },
                    { icon: Shield, text: 'Upfront pricing confirmed before work starts' },
                    { icon: Star, text: 'Rated 4.7★ on Google Maps by verified customers' },
                    { icon: Phone, text: 'Open 24/7 — including UAE public holidays' },
                  ].map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-gold/10">
                        <Icon className="h-4 w-4 text-brand-gold" aria-hidden="true" />
                      </div>
                      <p className="text-sm leading-snug text-foreground">{text}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Emergency callout */}
              <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6">
                <h3 className="font-heading text-base font-bold text-foreground mb-2">
                  Emergency? Don&apos;t Wait
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For locked out of car, child locked inside, or other urgent situations — call us
                  directly. We dispatch immediately.
                </p>
                <Button size="sm" variant="primary" className="btn-pulse w-full" asChild>
                  <a href={PHONE_HREF}>
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {PHONE_DISPLAY}
                  </a>
                </Button>
              </div>

              {/* Response time */}
              <div className="rounded-2xl border border-border bg-muted/40 p-6">
                <h3 className="font-heading text-sm font-bold text-foreground mb-3 uppercase tracking-wide">
                  Typical Response Times
                </h3>
                <ul className="space-y-2 text-sm">
                  {[
                    ["Al Satwa / Al Bada'a", '5–15 min'],
                    ['Jumeirah / Business Bay', '15–25 min'],
                    ['Dubai Marina / JBR', '20–35 min'],
                    ['Mirdif / International City', '30–50 min'],
                  ].map(([area, time]) => (
                    <li key={area} className="flex items-center justify-between gap-2 border-b border-border pb-2 last:border-0 last:pb-0">
                      <span className="text-muted-foreground">{area}</span>
                      <span className="font-semibold text-foreground shrink-0">{time}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
