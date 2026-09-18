// ─────────────────────────────────────────────────────────────────────────────
// Lock repair service — Car Brands Hub Page
// /car-brands — overview of all supported car makes
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'

import { CtaSection } from '@/components/sections/CtaSection'
import { BreadcrumbNav } from '@/components/sections/BreadcrumbNav'
import { TrustBar } from '@/components/sections/TrustBar'
import { CarBrandHubItemListSchema } from '@/components/schema/CarBrandSchema'

import { getAllCarBrands } from '@/data/car-brands'
import {
  BUSINESS_NAME,
  PHONE_HREF,
  SITE_URL,
  DEFAULT_OG_IMAGE,
} from '@/lib/constants'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: { absolute: 'Car Brands We Service in Dubai | Key Replacement & Programming | Lock repair service' },
  description:
    'Lock repair service covers all major car brands in Dubai — Toyota, Nissan, BMW, Mercedes, Hyundai, Kia and more. Mobile car key replacement and programming, open 24/7. Call +971 52 642 6161.',
  alternates: {
    canonical: `${SITE_URL}/car-brands`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: `${SITE_URL}/car-brands`,
    siteName: BUSINESS_NAME,
    title: 'Car Brands We Service in Dubai | Key Replacement & Programming',
    description:
      'Mobile car key replacement and programming for all major brands in Dubai — Toyota, Nissan, BMW, Mercedes, Hyundai, Kia, Land Rover and more. Open 24/7.',
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `${BUSINESS_NAME} — Car Brands Dubai` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Brands We Service in Dubai | Lock repair service',
    description: 'Mobile car key replacement and programming for all major brands. Open 24/7.',
    images: [DEFAULT_OG_IMAGE],
  },
}

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Car Brands', href: '/car-brands' },
]

export default function CarBrandsPage() {
  const brands = getAllCarBrands()

  return (
    <>
      <CarBrandHubItemListSchema brands={brands} />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section
        aria-label="Car brands page header"
        className="relative overflow-hidden bg-brand-navy pt-[72px]"
      >
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <BreadcrumbNav items={breadcrumbs} light />

          <div className="mt-6 max-w-3xl">
            <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Car Key Services by{' '}
              <span className="text-gold-gradient">Brand — Dubai</span>
            </h1>

            <div className="mt-6 rounded-xl border-l-4 border-brand-gold bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-base leading-relaxed text-white/90">
                Lock repair service programmes and replaces car keys for {brands.length}+ major brands
                across Dubai — Toyota, Nissan, BMW, Mercedes, Hyundai, Kia, and more. Mobile on-site
                service, no workshop visit required. Call{' '}
                <a href={PHONE_HREF} className="font-semibold text-brand-gold hover:underline">
                  +971 52 642 6161
                </a>.
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {[
                { emoji: '🚗', stat: `${brands.length}+ Car Brands`, sub: 'All makes covered' },
                { emoji: '⚡', stat: '20–45 Min Response', sub: 'All Dubai areas' },
                { emoji: '🔑', stat: 'On-Site Programming', sub: 'No workshop needed' },
                { emoji: '🕐', stat: 'Open 24/7', sub: 'Including holidays' },
              ].map(({ emoji, stat, sub }) => (
                <div
                  key={stat}
                  className="inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/8 px-3.5 py-2.5 backdrop-blur-sm"
                >
                  <span className="text-lg" aria-hidden="true">{emoji}</span>
                  <div className="leading-none">
                    <p className="text-xs font-bold text-white">{stat}</p>
                    <p className="mt-0.5 text-[10px] text-white/50">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TrustBar dark />

      {/* ── Brand Grid ────────────────────────────────────────────────────────── */}
      <section aria-labelledby="brands-heading" className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 id="brands-heading" className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
              All Supported Car Brands
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Select your car brand to see model-specific key systems, common issues, pricing, and FAQs.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {brands.map((brand) => {
              const priceMin = brand.priceRangeAED.length
                ? Math.min(...brand.priceRangeAED.map((p) => p.min))
                : null

              return (
                <Link
                  key={brand.slug}
                  href={`/car-brands/${brand.slug}`}
                  className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-brand-gold/50 hover:shadow-md hover:shadow-brand-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-2xl" aria-hidden="true">{brand.icon}</span>
                    <div>
                      <h3 className="font-heading text-base font-bold text-foreground group-hover:text-brand-gold transition-colors leading-tight">
                        {brand.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">{brand.originCountry}</p>
                    </div>
                  </div>

                  <p className="mb-3 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {brand.popularModelsUAE.slice(0, 4).join(', ')}
                    {brand.popularModelsUAE.length > 4 && ' & more'}
                  </p>

                  <div className="mt-auto flex items-center justify-between">
                    {priceMin !== null && (
                      <span className="text-xs font-semibold text-brand-gold">
                        From AED {priceMin}
                      </span>
                    )}
                    <span className="ml-auto text-xs font-medium text-brand-gold group-hover:underline">
                      View details →
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Why brand-specific matters ───────────────────────────────────────── */}
      <section aria-labelledby="why-heading" className="bg-muted/40 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 id="why-heading" className="font-heading text-2xl font-bold text-foreground mb-6">
            Why Brand-Specific Key Programming Matters
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: 'Transponder chip compatibility',
                body: 'Toyota G-chip vs H-chip AES, BMW CAS vs FEM/BDC, Nissan iKey BCM — each brand uses proprietary protocols that require brand-matched tools and blanks.',
              },
              {
                title: 'OEM vs aftermarket blanks',
                body: 'High-security brands like BMW, Mercedes, and Land Rover 2015+ require OEM-sourced key blanks. Generic aftermarket chips fail enrolment on AES-encrypted systems.',
              },
              {
                title: 'Security access requirements',
                body: 'Some platforms (Audi IMMO-4, BMW FEM, Porsche PIWIS) require security seed codes or dealer-grade access — we confirm feasibility before booking.',
              },
              {
                title: 'All-keys-lost complexity',
                body: 'All-keys-lost recovery varies massively by brand and generation. We assess each VIN individually and provide an honest feasibility check before commitment.',
              },
            ].map(({ title, body }) => (
              <div key={title} className="flex gap-3 rounded-xl border border-border bg-card p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-foreground text-sm">{title}</p>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        heading="Need a Car Key? Call for an Instant Quote."
        subtext={`Tell us your car brand and model — we confirm the price and turnaround before dispatching. ${BUSINESS_NAME}, open 24/7 across all Dubai areas.`}
      />
    </>
  )
}
