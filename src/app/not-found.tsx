// ─────────────────────────────────────────────────────────────────────────────
// Car Key Service DXB — 404 Not Found Page
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, Phone } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from '@/lib/constants'

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  description: 'The page you are looking for does not exist. Return to Car Key Service DXB home page.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-72px)] flex-col items-center justify-center bg-background px-4 py-20">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        {/* 404 number */}
        <p className="font-heading text-[8rem] font-extrabold leading-none text-gold-gradient sm:text-[10rem]">
          404
        </p>

        {/* Headline */}
        <h1 className="mt-4 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Page Not Found
        </h1>

        {/* Sub-text */}
        <p className="mt-4 text-lg text-muted-foreground">
          Looks like this key doesn&apos;t fit any lock. The page you&apos;re
          looking for may have moved, been renamed, or never existed.
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-gold px-6 py-3 font-semibold text-brand-navy transition-colors hover:bg-brand-gold-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>

          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Phone className="h-4 w-4 text-brand-gold" />
            {PHONE_DISPLAY}
          </a>
        </div>

        {/* Quick links */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm font-medium text-muted-foreground">
            Or try one of these popular pages:
          </p>
          <nav
            aria-label="Suggested pages"
            className="mt-4 flex flex-wrap justify-center gap-3"
          >
            {[
              { href: '/services', label: 'All Services' },
              { href: '/services/emergency-car-unlock', label: 'Emergency Unlock' },
              { href: '/services/car-key-duplication', label: 'Key Duplication' },
              { href: '/locations', label: 'Service Areas' },
              { href: '/contact', label: 'Contact Us' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-brand-gold hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* WhatsApp help */}
        <p className="mt-8 text-sm text-muted-foreground">
          Need help?{' '}
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand-gold hover:underline"
          >
            Chat with us on WhatsApp
          </a>
        </p>
      </div>
    </div>
  )
}
