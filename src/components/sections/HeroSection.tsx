// ─────────────────────────────────────────────────────────────────────────────
// Car Key Service DXB — Hero Section
// ─────────────────────────────────────────────────────────────────────────────
import type { ReactNode } from 'react'
import Link from 'next/link'
import { Phone, MessageCircle, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { TrustBar } from '@/components/sections/TrustBar'
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_HREF,
  GOOGLE_RATING,
} from '@/lib/constants'

interface HeroSectionProps {
  /** Main headline — supports JSX for line breaks */
  title?: ReactNode
  /** Supporting subheadline */
  subtitle?: string
  /** Override the primary CTA label */
  ctaLabel?: string
  /** Override the primary CTA href */
  ctaHref?: string
  /** Show or hide the trust bar below the hero */
  showTrustBar?: boolean
  /** Badge text above the headline */
  badge?: string
}

export function HeroSection({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  showTrustBar = true,
  badge = '24/7 Emergency Service — Dubai',
}: HeroSectionProps) {
  const headlineDefault = (
    <>
      Dubai&apos;s Trusted{' '}
      <span className="text-gold-gradient">Car Key</span>{' '}
      Specialists
    </>
  )

  const subtitleDefault =
    'Mobile automotive locksmith available around the clock. Car key duplication, smart key programming, emergency unlock and more — anywhere in Dubai in 20–45 minutes.'

  return (
    <>
      <section
        aria-label="Hero"
        className="relative overflow-hidden bg-hero-gradient pt-[72px]"
      >
        {/* Decorative background elements */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {/* Radial glow top-right */}
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-gold/8 blur-3xl" />
          {/* Radial glow bottom-left */}
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-brand-gold/5 blur-3xl" />
          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <Badge
              variant="gold"
              size="md"
              dot
              className="mb-6 inline-flex"
            >
              {badge}
            </Badge>

            {/* Headline */}
            <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {title ?? headlineDefault}
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg leading-relaxed text-white/75 sm:text-xl">
              {subtitle ?? subtitleDefault}
            </p>

            {/* Star rating inline */}
            <div className="mt-4 flex items-center justify-center gap-2">
              <div
                className="flex gap-0.5"
                aria-label={`Rated ${GOOGLE_RATING} out of 5 stars`}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`h-4 w-4 ${
                      i < Math.floor(GOOGLE_RATING)
                        ? 'text-brand-gold'
                        : 'text-brand-gold/30'
                    }`}
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-white">
                {GOOGLE_RATING}
              </span>
              <span className="text-sm text-white/50">on Google</span>
            </div>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                variant="primary"
                className="btn-pulse w-full sm:w-auto"
                asChild
              >
                <a href={PHONE_HREF} aria-label={`Call us now: ${PHONE_DISPLAY}`}>
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Call Now — {PHONE_DISPLAY}
                </a>
              </Button>

              <Button
                size="lg"
                variant="whatsapp"
                className="w-full sm:w-auto"
                asChild
              >
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with us on WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  WhatsApp Us
                </a>
              </Button>
            </div>

            {/* Secondary CTA */}
            {ctaLabel && ctaHref && (
              <div className="mt-5">
                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  {ctaLabel}
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            )}

            {/* Response time callout */}
            <p className="mt-8 text-xs font-medium tracking-wide text-white/40 uppercase">
              Average response time: 20–45 minutes across all Dubai areas
            </p>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      {showTrustBar && <TrustBar dark />}
    </>
  )
}
