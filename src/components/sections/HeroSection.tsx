// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Hero Section (Split layout with image card)
// ─────────────────────────────────────────────────────────────────────────────
import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, MessageCircle, ChevronRight, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { TrustBar } from '@/components/sections/TrustBar'
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_HREF,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
} from '@/lib/constants'

interface HeroSectionProps {
  title?: ReactNode
  subtitle?: string
  ctaLabel?: string
  ctaHref?: string
  showTrustBar?: boolean
  badge?: string
}

export function HeroSection({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  showTrustBar = true,
  badge = 'Key Maker & Locksmith — Satwa & All Dubai Areas',
}: HeroSectionProps) {
  const headlineDefault = (
    <>
      Dubai&apos;s Professional{' '}
      <span className="text-gold-gradient">Locksmith</span>
      {' '}— Lock Repair Satwa
    </>
  )

  const subtitleDefault =
    "Lock Repair Satwa, D90 Al Bada'a, Dubai — car key duplication, door lock repair, smart key programming and emergency locksmith across all Dubai areas. On-site in 20–45 minutes."

  return (
    <>
      <section
        aria-label="Hero"
        className="relative overflow-hidden bg-hero-gradient pt-[72px]"
      >
        {/* ── Decorative background ───────────────────────────────────────── */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {/* Radial glows */}
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-gold/8 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-brand-gold/5 blur-3xl" />
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        {/* ── Main content grid ────────────────────────────────────────────── */}
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_520px] lg:gap-14 xl:gap-20">

            {/* ── Left: text content ─────────────────────────────────────── */}
            <div className="order-1 text-center lg:text-left">

              {/* Badge */}
              <Badge variant="gold" size="md" dot className="mb-6 inline-flex">
                {badge}
              </Badge>

              {/* H1 */}
              <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
                {title ?? headlineDefault}
              </h1>

              {/* Subtitle */}
              <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg lg:max-w-lg">
                {subtitle ?? subtitleDefault}
              </p>

              {/* Star rating + review count */}
              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 lg:justify-start">
                <div
                  className="flex gap-0.5"
                  aria-label={`Rated ${GOOGLE_RATING} out of 5 stars on Google`}
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
                <span className="text-sm font-bold text-white">{GOOGLE_RATING}</span>
                <span className="text-sm text-white/45">
                  · {GOOGLE_REVIEW_COUNT} verified Google reviews
                </span>
              </div>

              {/* Primary CTA buttons */}
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Button
                  size="lg"
                  variant="primary"
                  className="btn-pulse w-full sm:w-auto"
                  asChild
                >
                  <a href={PHONE_HREF} aria-label={`Call Lock Repair Satwa: ${PHONE_DISPLAY}`}>
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    Call Now — {PHONE_DISPLAY}
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
                    WhatsApp Us
                  </a>
                </Button>
              </div>

              {/* Secondary link */}
              {ctaLabel && ctaHref && (
                <div className="mt-4">
                  <Link
                    href={ctaHref}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-white/60 transition-colors hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    {ctaLabel}
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              )}

              {/* Trust micro-copy */}
              <p className="mt-7 text-[11px] font-medium uppercase tracking-widest text-white/30">
                No call-out fee &nbsp;·&nbsp; Price confirmed first &nbsp;·&nbsp; Open 24/7 daily
              </p>
            </div>

            {/* ── Right: hero image card ──────────────────────────────────── */}
            <div className="order-2 relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">

              {/* Ambient glow behind the card */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-brand-gold/25 via-transparent to-brand-gold/10 blur-2xl opacity-70"
              />

              {/* Main image card */}
              <div className="relative overflow-hidden rounded-2xl shadow-[0_32px_80px_rgba(0,0,0,0.55)] ring-1 ring-white/10">
                <Image
                  src="/images/services/car-remote-key-blanks-locksmith-shop-dubai.webp"
                  alt="Car remote key blanks and transponder keys on display at Lock Repair Satwa shop, Al Bada'a Dubai"
                  width={520}
                  height={380}
                  priority
                  quality={88}
                  sizes="(max-width: 640px) calc(100vw - 64px), (max-width: 768px) 448px, (max-width: 1024px) 400px, 520px"
                  className="w-full object-cover"
                />
                {/* Subtle bottom fade for badge legibility */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
                />
              </div>

              {/* Floating badge: Google Rating (top-right) */}
              <div
                className="absolute -top-4 -right-2 sm:-right-4 flex items-center gap-2.5 rounded-xl bg-brand-gold px-3.5 py-2.5 shadow-[0_8px_32px_rgba(201,168,76,0.45)]"
                aria-label={`${GOOGLE_RATING} star Google rating`}
              >
                <span className="font-heading text-2xl font-extrabold leading-none text-brand-navy">
                  {GOOGLE_RATING}★
                </span>
                <div className="leading-none">
                  <p className="text-[11px] font-extrabold uppercase tracking-wide text-brand-navy">
                    Google
                  </p>
                  <p className="mt-0.5 text-[10px] font-semibold text-brand-navy/65">
                    {GOOGLE_REVIEW_COUNT} reviews
                  </p>
                </div>
              </div>

              {/* Floating badge: Open 24/7 (bottom-left) */}
              <div className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-xl border border-white/15 bg-brand-navy/90 px-4 py-3 shadow-xl backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
                </span>
                <div className="leading-none">
                  <p className="text-xs font-bold text-white">Open 24/7</p>
                  <p className="mt-0.5 text-[11px] text-white/50">
                    D90, Al Bada&apos;a · 20–45 min
                  </p>
                </div>
              </div>

              {/* Floating badge: Location (bottom-right, only wide desktop) */}
              <div className="absolute bottom-10 -right-4 hidden xl:flex items-center gap-2 rounded-xl border border-white/10 bg-white/8 px-3 py-2.5 backdrop-blur-sm">
                <MapPin className="h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                <div className="leading-none">
                  <p className="text-[11px] font-bold text-white">Al Bada&apos;a</p>
                  <p className="mt-0.5 text-[10px] text-white/55">Dubai, UAE</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {showTrustBar && <TrustBar dark />}
    </>
  )
}
