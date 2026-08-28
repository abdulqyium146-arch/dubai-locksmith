// ─────────────────────────────────────────────────────────────────────────────
// Lock repair service — Hero Section (Split layout with image card)
// ─────────────────────────────────────────────────────────────────────────────
import type { ReactNode } from 'react'
import Image from 'next/image'
import { Phone, MessageCircle, ChevronRight, MapPin, Car } from 'lucide-react'
import Link from 'next/link'
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

// All locksmith service categories — one chip per major type so visitors
// understand full breadth without reading a paragraph
const SERVICE_CHIPS = [
  { emoji: '🔑', label: 'Car Key Cutting',    href: '/services/car-key-duplication' },
  { emoji: '🚗', label: 'Key Programming',    href: '/services/transponder-keys' },
  { emoji: '🚪', label: 'Door Lock Repair',   href: '/services/lock-repair' },
  { emoji: '🔓', label: 'Lock Change',        href: '/services/lock-change' },
  { emoji: '🧠', label: 'Smart Locks',        href: '/services/smart-door-locks' },
  { emoji: '⚡', label: 'Emergency Unlock',   href: '/services/emergency-car-unlock' },
  { emoji: '🏦', label: 'Safe Opening',       href: '/services/safe-box-services' },
  { emoji: '🅿️', label: 'Parking Remote',    href: '/services/parking-remotes' },
]

export async function HeroSection({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  showTrustBar = true,
  badge,
}: HeroSectionProps) {
  const headlineDefault = (
    <>
      Dubai&apos;s Complete{' '}
      <span className="text-gold-gradient">Locksmith</span>
      {' '}— Mobile, Fast &amp; 24/7
    </>
  )

  return (
    <>
      <section
        aria-label="Hero"
        className="relative overflow-hidden bg-brand-navy pt-[72px]"
      >
        {/* ── Background image — <Image fill> so Googlebot indexes it (not CSS bg) */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <Image
            src="/images/shop/locksmith-shop-satwa-al-badaa-dubai.webp"
            alt=""
            fill
            className="object-cover object-center opacity-50"
            priority
            quality={50}
            sizes="100vw"
          />
          {/* Layered gradient: readability + brand colour retention */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/90 via-brand-navy/75 to-brand-navy/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />
          {/* Radial gold glows */}
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-gold/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-brand-gold/6 blur-3xl" />
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.02]"
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
                {badge ?? 'Mobile Locksmith · All Services · All 24 Dubai Areas'}
              </Badge>

              {/* H1 */}
              <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
                {title ?? headlineDefault}
              </h1>

              {/* Subtitle */}
              <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg lg:max-w-xl">
                {subtitle ?? "Mobile locksmith dispatched to your location across all 24 Dubai areas — car key duplication & programming, door lock repair, smart lock installation, emergency unlock, safe opening and more. Arrives in 20–45 minutes. No call-out fee."}
              </p>

              {/* ── Service category chips — shows full breadth at a glance ── */}
              <div
                className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start"
                aria-label="Service types available"
              >
                {SERVICE_CHIPS.map(({ emoji, label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-brand-gold/25 bg-brand-gold/10 px-3 py-1.5 text-xs font-medium text-white/80 transition-colors hover:border-brand-gold/50 hover:bg-brand-gold/20 hover:text-white"
                  >
                    <span aria-hidden="true">{emoji}</span>
                    {label}
                  </Link>
                ))}
              </div>

              {/* Star rating + review count */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 lg:justify-start">
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
                  <a href={PHONE_HREF} aria-label={`Call Lock repair service: ${PHONE_DISPLAY}`}>
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    {`Call Now — ${PHONE_DISPLAY}`}
                  </a>
                </Button>
                <Button size="lg" variant="whatsapp" className="w-full sm:w-auto" asChild>
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp Lock repair service"
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
                32+ services · 24 Dubai areas · No call-out fee · Price confirmed first · Open 24/7
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
                  alt="Car remote key blanks and transponder keys on display at Lock repair service shop, Al Bada'a Dubai"
                  width={520}
                  height={380}
                  priority
                  quality={80}
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

              {/* Floating badge: Mobile Service (bottom-left) */}
              <div className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-xl border border-white/15 bg-brand-navy/90 px-4 py-3 shadow-xl backdrop-blur-md">
                <Car className="h-5 w-5 shrink-0 text-brand-gold" aria-hidden="true" />
                <div className="leading-none">
                  <p className="text-xs font-bold text-white">Mobile — We Come to You</p>
                  <p className="mt-0.5 text-[11px] text-white/50">
                    24/7 · 20–45 min anywhere in Dubai
                  </p>
                </div>
              </div>

              {/* Floating badge: Location (bottom-right, only wide desktop) */}
              <div className="absolute bottom-10 -right-4 hidden xl:flex items-center gap-2 rounded-xl border border-white/10 bg-white/8 px-3 py-2.5 backdrop-blur-sm">
                <MapPin className="h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                <div className="leading-none">
                  <p className="text-[11px] font-bold text-white">All Dubai</p>
                  <p className="mt-0.5 text-[10px] text-white/55">24 areas covered</p>
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
