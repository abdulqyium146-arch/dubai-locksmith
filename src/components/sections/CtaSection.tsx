// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Full-width CTA Section
// ─────────────────────────────────────────────────────────────────────────────
import { Phone, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_HREF,
  BUSINESS_NAME,
} from '@/lib/constants'

interface CtaSectionProps {
  /** Main CTA headline */
  heading?: string
  /** Supporting text */
  subtext?: string
  /** Dark background (default) or light */
  dark?: boolean
  className?: string
}

export function CtaSection({
  heading = 'Need a Locksmith in Dubai?',
  subtext = `${BUSINESS_NAME} is available daily 7 AM–11:30 PM across all Dubai areas. Call or WhatsApp now for an instant quote — no call-out fee, upfront pricing.`,
  dark = true,
  className,
}: CtaSectionProps) {
  return (
    <section
      aria-labelledby="cta-heading"
      className={cn(
        'relative overflow-hidden py-16 sm:py-20',
        dark ? 'bg-hero-gradient' : 'bg-brand-gold/5 border-y border-brand-gold/20',
        className,
      )}
    >
      {/* Decorative glow */}
      {dark && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-gold/10 blur-3xl" />
          <div className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-gold/8 blur-3xl" />
        </div>
      )}

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div
          className={cn(
            'mb-4 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold',
            dark
              ? 'border-brand-gold/30 bg-brand-gold/15 text-brand-gold'
              : 'border-brand-gold/20 bg-brand-gold/10 text-brand-gold',
          )}
        >
          <span
            className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-gold"
            aria-hidden="true"
          />
          Open Daily 7 AM – 11:30 PM
        </div>

        {/* Heading */}
        <h2
          id="cta-heading"
          className={cn(
            'font-heading text-3xl font-bold tracking-tight sm:text-4xl',
            dark ? 'text-white' : 'text-foreground',
          )}
        >
          {heading}
        </h2>

        {/* Subtext */}
        <p
          className={cn(
            'mt-4 text-lg leading-relaxed',
            dark ? 'text-white/75' : 'text-muted-foreground',
          )}
        >
          {subtext}
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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

        {/* Reassurance micro-copy */}
        <p
          className={cn(
            'mt-6 text-sm',
            dark ? 'text-white/40' : 'text-muted-foreground',
          )}
        >
          No call-out fee · Upfront pricing · All Dubai areas covered
        </p>
      </div>
    </section>
  )
}
