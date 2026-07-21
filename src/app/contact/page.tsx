// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Contact Page (Conversion-Focused)
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
  AlertTriangle,
  CheckCircle2,
} from 'lucide-react'

import { BreadcrumbNav } from '@/components/sections/BreadcrumbNav'
import { TrustBar } from '@/components/sections/TrustBar'
import { JsonLd } from '@/components/schema/JsonLd'
import { Button } from '@/components/ui/Button'

import { locations } from '@/data/locations'
import {
  BUSINESS_NAME,
  PHONE_DISPLAY,
  PHONE_HREF,
  PHONE_RAW,
  WHATSAPP_NUMBER,
  EMAIL,
  ADDRESS_STREET,
  ADDRESS_AREA,
  ADDRESS_CITY,
  ADDRESS_COUNTRY,
  SITE_URL,
  DEFAULT_OG_IMAGE,
  GOOGLE_MAPS_URL,
} from '@/lib/constants'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: `Contact Lock Repair Satwa | Call ${PHONE_DISPLAY}`,
  description: `Contact ${BUSINESS_NAME} for professional locksmith services in Dubai. Call ${PHONE_DISPLAY} or WhatsApp for an instant quote. Based at D90, Al Bada'a, open daily 24/7.`,
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: `${SITE_URL}/contact`,
    siteName: BUSINESS_NAME,
    title: `Contact ${BUSINESS_NAME} | Locksmith in Dubai — Al Bada'a`,
    description: `Call or WhatsApp ${PHONE_DISPLAY} for professional locksmith service anywhere in Dubai. Open daily 24/7.`,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `Contact ${BUSINESS_NAME}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contact ${BUSINESS_NAME}`,
    description: `Professional locksmith in Dubai. Call ${PHONE_DISPLAY}. Open daily 24/7.`,
    images: [DEFAULT_OG_IMAGE],
  },
}

// ── Contact Page Schema ───────────────────────────────────────────────────────

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${SITE_URL}/contact#contact-page`,
  name: `Contact ${BUSINESS_NAME}`,
  url: `${SITE_URL}/contact`,
  description: `Contact page for ${BUSINESS_NAME} — Dubai's professional locksmith at D90, Al Bada'a. Open daily 24/7.`,
  mainEntity: {
    '@type': 'Locksmith',
    '@id': `${SITE_URL}/#lock-repair-satwa`,
    name: BUSINESS_NAME,
    telephone: PHONE_RAW,
    email: EMAIL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS_STREET,
      addressLocality: ADDRESS_AREA,
      addressRegion: ADDRESS_CITY,
      addressCountry: ADDRESS_COUNTRY,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.23341473023507,
      longitude: 55.275106874155064,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    hasMap: GOOGLE_MAPS_URL,
  },
}

// ── Breadcrumbs ───────────────────────────────────────────────────────────────

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Contact', href: '/contact' },
]

// ── Business hours display ────────────────────────────────────────────────────

const BUSINESS_HOURS = [
  { day: 'Monday', hours: '24/7' },
  { day: 'Tuesday', hours: '24/7' },
  { day: 'Wednesday', hours: '24/7' },
  { day: 'Thursday', hours: '24/7' },
  { day: 'Friday', hours: '24/7' },
  { day: 'Saturday', hours: '24/7' },
  { day: 'Sunday', hours: '24/7' },
]

// ─────────────────────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <>
      {/* Schemas */}
      <JsonLd data={contactPageSchema} />

      {/* ── Page Header ─────────────────────────────────────────────────────── */}
      <section aria-label="Contact page header" className="bg-hero-gradient pt-[72px]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <BreadcrumbNav items={breadcrumbs} light />
          <div className="mt-6 max-w-2xl">
            <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Contact{' '}
              <span className="text-gold-gradient">Lock Repair Satwa</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/75">
              Open daily 24/7, 7 days a week. Call or WhatsApp now
              for an instant quote — we dispatch quickly across all Dubai areas.
            </p>
          </div>
        </div>
      </section>

      <TrustBar dark />

      {/* ── Primary Contact Section ───────────────────────────────────────────── */}
      <section
        aria-labelledby="contact-primary-heading"
        className="py-16 sm:py-20 bg-background"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left: contact methods */}
            <div>
              <h2
                id="contact-primary-heading"
                className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                Get in Touch — We&apos;re Ready Now
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                For the fastest response, call or WhatsApp. We pick up immediately and can
                confirm your quote and ETA within 2 minutes.
              </p>

              {/* Primary CTA — Big Click-to-Call */}
              <div className="mt-8 flex flex-col gap-4">
                <a
                  href={PHONE_HREF}
                  aria-label={`Call Lock Repair Satwa: ${PHONE_DISPLAY}`}
                  className="group flex items-center gap-4 rounded-2xl border-2 border-brand-gold bg-brand-gold/10 p-5 transition-colors hover:bg-brand-gold/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-gold text-brand-navy shadow-md group-hover:shadow-lg transition-shadow">
                    <Phone className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                      Call Now — 24/7 Daily
                    </p>
                    <p className="font-heading text-2xl font-extrabold text-foreground sm:text-3xl">
                      {PHONE_DISPLAY}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Fastest response — typical ETA under 45 minutes
                    </p>
                  </div>
                </a>

                {/* WhatsApp CTA */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20need%20help%20with%20my%20car%20key%20in%20Dubai.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Lock Repair Satwa"
                  className="group flex items-center gap-4 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/10 p-5 transition-colors hover:bg-[#25D366]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-md">
                    <MessageCircle className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#128C7E]">
                      WhatsApp Message
                    </p>
                    <p className="font-heading text-xl font-bold text-foreground">
                      Chat on WhatsApp
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Send your location pin and car details — we respond in minutes
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand-gold/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-muted">
                    <Mail className="h-7 w-7 text-muted-foreground" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Email (non-urgent)
                    </p>
                    <p className="font-medium text-foreground">{EMAIL}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      For quotes, invoices and non-emergency enquiries
                    </p>
                  </div>
                </a>
              </div>

              {/* Emergency note */}
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-destructive/20 bg-destructive/5 p-4">
                <AlertTriangle className="h-5 w-5 shrink-0 text-destructive mt-0.5" aria-hidden="true" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Child or pet locked inside your car?</strong>{' '}
                  Call us immediately on{' '}
                  <a href={PHONE_HREF} className="font-bold text-destructive hover:underline">
                    {PHONE_DISPLAY}
                  </a>{' '}
                  and tell us — we treat this as a priority emergency dispatch.
                </p>
              </div>
            </div>

            {/* Right: location + hours */}
            <div className="space-y-6">
              {/* Address */}
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="h-5 w-5 shrink-0 text-brand-gold mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      Our Base Location
                    </h3>
                    <address className="not-italic mt-1 text-sm text-muted-foreground leading-relaxed">
                      {ADDRESS_STREET}<br />
                      {ADDRESS_AREA}, {ADDRESS_CITY}<br />
                      {ADDRESS_COUNTRY}
                    </address>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-gold hover:text-brand-gold-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                      aria-label="Open location on Google Maps"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>

                {/* Google Maps Embed — verified Place ID for Lock Repair Satwa */}
                <div className="overflow-hidden rounded-lg border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.1042121159103!2d55.275106874155064!3d25.23341473023507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43ba64cf6469%3A0x6d2acd58680471f4!2sLock%20repair%20satwa!5e0!3m2!1sen!2s!4v1784627012430!5m2!1sen!2s"
                    width="100%"
                    height="360"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    title="Lock Repair Satwa — D90, Al Bada'a, Dubai on Google Maps"
                    className="block w-full border-0"
                    aria-label="Google Maps showing Lock Repair Satwa at D90, Al Bada'a, Dubai"
                  />
                </div>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-gold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  Get Directions on Google Maps
                </a>
              </div>

              {/* Business Hours */}
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-brand-gold" aria-hidden="true" />
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    Business Hours
                  </h3>
                  <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-green-500/15 border border-green-500/30 px-2.5 py-0.5 text-xs font-semibold text-green-600 dark:text-green-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
                    Open Now
                  </span>
                </div>
                <dl className="divide-y divide-border">
                  {BUSINESS_HOURS.map(({ day, hours }) => (
                    <div key={day} className="flex justify-between py-2.5">
                      <dt className="text-sm text-muted-foreground">{day}</dt>
                      <dd className="text-sm font-semibold text-foreground">{hours}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-xs text-muted-foreground">
                  Open daily 24/7 including UAE public holidays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What to Have Ready ───────────────────────────────────────────────── */}
      <section
        aria-labelledby="prepare-heading"
        className="py-14 sm:py-16 bg-muted/40 border-y border-border"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="prepare-heading"
            className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-8"
          >
            What to Have Ready When You Call
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: 'Your Location',
                description: 'Street address, building name, or drop a WhatsApp pin. In JVC or Mirdif, share the district number too.',
              },
              {
                title: 'Car Make, Model & Year',
                description: 'E.g., "2021 Toyota Land Cruiser". This lets us confirm we have the right key blank and tools before dispatching.',
              },
              {
                title: 'Emirates ID & Vehicle Mulkiya',
                description: 'Required for key replacement and emergency unlock — protects you by ensuring we only work for the registered owner.',
              },
              {
                title: 'Nature of the Problem',
                description: 'Key lost, locked inside, broken in lock, not starting, or need a spare? Knowing in advance speeds up diagnosis.',
              },
            ].map(({ title, description }) => (
              <div
                key={title}
                className="flex gap-3 rounded-xl border border-border bg-card p-5"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Area List ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="service-areas-heading"
        className="py-14 sm:py-16 bg-background"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="service-areas-heading"
            className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6"
          >
            We Service All Major Dubai Areas
          </h2>
          <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {locations.map((location) => (
              <a
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:border-brand-gold/40 hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <MapPin className="h-3.5 w-3.5 shrink-0 text-brand-gold/60" aria-hidden="true" />
                <span>{location.name}</span>
                <span className="ml-auto text-xs text-muted-foreground/60">
                  {location.responseTime}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────────── */}
      <section
        aria-label="Emergency contact CTA"
        className="py-16 bg-hero-gradient"
      >
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Need Help Right Now?
          </h2>
          <p className="mt-4 text-lg text-white/75">
            Don&apos;t wait — call {BUSINESS_NAME} on{' '}
            <strong className="text-brand-gold">{PHONE_DISPLAY}</strong>. We answer
            immediately and dispatch the nearest technician within minutes.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="primary" className="btn-pulse w-full sm:w-auto" asChild>
              <a href={PHONE_HREF} aria-label={`Call now: ${PHONE_DISPLAY}`}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {PHONE_DISPLAY}
              </a>
            </Button>
            <Button size="lg" variant="whatsapp" className="w-full sm:w-auto" asChild>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20need%20car%20key%20help%20in%20Dubai.`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp now"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                WhatsApp Now
              </a>
            </Button>
          </div>
          <p className="mt-5 text-sm text-white/40">
            No call-out fee · Price confirmed before work starts · Open daily 24/7
          </p>
        </div>
      </section>
    </>
  )
}
