// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Footer (server component)
// ─────────────────────────────────────────────────────────────────────────────
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Facebook,
  Instagram,
  Twitter,
  Shield,
  Zap,
  Award,
} from 'lucide-react'
import {
  BUSINESS_NAME,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_HREF,
  EMAIL,
  ADDRESS_FULL,
  GOOGLE_RATING,
  GOOGLE_MAPS_URL,
  SOCIAL_LINKS,
} from '@/lib/constants'
import { services } from '@/data/services'
import { locations } from '@/data/locations'

const currentYear = new Date().getFullYear()

const FOOTER_SERVICES = services.slice(0, 7).map((s) => ({
  label: s.title,
  href: `/services/${s.slug}`,
}))

const FOOTER_LOCATIONS = locations.slice(0, 8).map((l) => ({
  label: l.name,
  href: `/locations/${l.slug}`,
}))

export async function Footer() {
  const t = await getTranslations('footer')
  const tNav = await getTranslations('nav')

  const TRUST_BADGES = [
    {
      icon: Shield,
      label: t('badge1Label'),
      sub: t('badge1Sub'),
    },
    {
      icon: Zap,
      label: t('badge2Label'),
      sub: t('badge2Sub'),
    },
    {
      icon: Award,
      label: t('badge3Label', { rating: GOOGLE_RATING }),
      sub: t('badge3Sub'),
    },
  ]

  return (
    <footer
      className="bg-brand-navy text-white"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        {t('footerLabel')}
      </h2>

      {/* ── Trust badges strip ───────────────────────────────────────────────── */}
      <div className="border-b border-white/10 bg-brand-navy-dark">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {TRUST_BADGES.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-gold/15 ring-1 ring-brand-gold/30">
                  <Icon className="h-6 w-6 text-brand-gold" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-white">{label}</p>
                  <p className="text-sm text-white/60">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main footer columns ──────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Column 1 — Brand & NAP ─────────────────────────────────────────── */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`${BUSINESS_NAME} — Home`}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gold">
                <svg
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <circle cx="13" cy="13" r="8" stroke="#0B1F3A" strokeWidth="2.5" />
                  <circle cx="13" cy="13" r="3" fill="#0B1F3A" />
                  <path d="M19 19l12 12" stroke="#0B1F3A" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M26 26l-2 4M28 28l4-2" stroke="#0B1F3A" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-heading text-base font-bold text-white">
                  Lock Repair
                </span>
                <span className="font-heading text-xs font-semibold text-brand-gold">
                  Satwa
                </span>
              </div>
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {t('taglineFull')}
            </p>

            {/* NAP */}
            <address className="mt-6 not-italic space-y-3 text-sm">
              <a
                href={PHONE_HREF}
                className="flex items-start gap-3 text-white/80 transition-colors hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                aria-label={`Call us: ${PHONE_DISPLAY}`}
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                <span className="font-medium">{PHONE_DISPLAY}</span>
              </a>

              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/80 transition-colors hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                aria-label={t('whatsappLabel')}
              >
                {/* WhatsApp icon */}
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>{t('whatsappText')}</span>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="flex items-start gap-3 text-white/80 transition-colors hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                <span>{EMAIL}</span>
              </a>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/80 transition-colors hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                <span>{ADDRESS_FULL}</span>
              </a>

              <div className="flex items-start gap-3 text-white/80">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                <span>{t('hours')}</span>
              </div>
            </address>

            {/* Social links */}
            <div className="mt-6 flex gap-3">
              {[
                { href: SOCIAL_LINKS.facebook, Icon: Facebook, label: t('socialFacebook') },
                { href: SOCIAL_LINKS.instagram, Icon: Instagram, label: t('socialInstagram') },
                { href: SOCIAL_LINKS.twitter, Icon: Twitter, label: t('socialTwitter') },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/70 transition-colors hover:bg-brand-gold hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Services ─────────────────────────────────────────────── */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-brand-gold">
              {t('ourServices')}
            </h3>
            <ul className="mt-4 space-y-2.5" role="list">
              {FOOTER_SERVICES.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/70 transition-colors hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm font-medium text-brand-gold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  {t('viewAllServices')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Locations ────────────────────────────────────────────── */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-brand-gold">
              {t('serviceAreas')}
            </h3>
            <ul className="mt-4 space-y-2.5" role="list">
              {FOOTER_LOCATIONS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/70 transition-colors hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/locations"
                  className="text-sm font-medium text-brand-gold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  {t('viewAllAreas')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Company & Google Rating ─────────────────────────────── */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-brand-gold">
              {t('company')}
            </h3>
            <ul className="mt-4 space-y-2.5" role="list">
              {[
                { label: t('aboutUs'), href: '/about' },
                { label: tNav('contact'), href: '/contact' },
                { label: t('privacyPolicy'), href: '/privacy' },
                { label: t('termsOfService'), href: '/terms' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/70 transition-colors hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Google rating badge */}
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full flex-col gap-2 rounded-xl border border-brand-gold/20 bg-brand-gold/10 p-4 transition-colors hover:border-brand-gold/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`${t('badge3Label', { rating: GOOGLE_RATING })} — View our reviews`}
            >
              <div className="flex items-center gap-2">
                {/* Google G */}
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0"
                  aria-hidden="true"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span className="text-sm font-semibold text-white">
                  {t('googleReviews')}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="flex gap-0.5"
                  aria-label={`${GOOGLE_RATING} out of 5 stars`}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(GOOGLE_RATING)
                          ? 'fill-brand-gold text-brand-gold'
                          : 'fill-brand-gold/30 text-brand-gold/30'
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <span className="text-sm font-bold text-brand-gold">
                  {GOOGLE_RATING}
                </span>
                <span className="text-xs text-white/50">/ 5</span>
              </div>
              <p className="text-xs text-white/50">
                {t('tapToRead')}
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-center text-xs text-white/50 sm:text-left">
            {t('copyright', { year: currentYear, name: BUSINESS_NAME })}
          </p>
          <p className="text-center text-xs text-white/40 sm:text-right">
            {t('footerMicroCopy', { phone: PHONE_DISPLAY })}
          </p>
        </div>
      </div>
    </footer>
  )
}
