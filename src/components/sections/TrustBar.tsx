// ─────────────────────────────────────────────────────────────────────────────
// Lock repair service — Trust Bar
// ─────────────────────────────────────────────────────────────────────────────
import { Clock, Star, Zap, MapPin, DollarSign, Car } from 'lucide-react'
import { cn } from '@/lib/utils'
import { GOOGLE_RATING } from '@/lib/constants'

interface TrustBarProps {
  /** Dark background variant (for use on light-bg pages) */
  dark?: boolean
  className?: string
}

export async function TrustBar({ dark = false, className }: TrustBarProps) {
  const TRUST_ITEMS = [
    {
      icon: Car,
      label: 'Mobile Service',
      sub: 'We come to you',
    },
    {
      icon: Clock,
      label: '24/7 Available',
      sub: 'Every day, all year',
    },
    {
      icon: Zap,
      label: '20–45 Min Response',
      sub: 'All Dubai areas',
    },
    {
      icon: MapPin,
      label: '24 Areas Covered',
      sub: 'All of Dubai, UAE',
    },
    {
      icon: Star,
      label: `${GOOGLE_RATING}★ Google Rated`,
      sub: 'Verified reviews',
    },
    {
      icon: DollarSign,
      label: 'Upfront Pricing',
      sub: 'No hidden fees',
    },
  ]

  return (
    <section
      aria-label="Trust signals"
      className={cn(
        'w-full py-6',
        dark
          ? 'bg-brand-navy-dark border-t border-white/10'
          : 'bg-muted/60 border-y border-border',
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul
          role="list"
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:flex-wrap lg:gap-8"
        >
          {TRUST_ITEMS.map(({ icon: Icon, label, sub }) => (
            <li
              key={label}
              className="flex items-center gap-3"
            >
              <div
                className={cn(
                  'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg',
                  dark
                    ? 'bg-brand-gold/15 ring-1 ring-brand-gold/30'
                    : 'bg-brand-gold/10 ring-1 ring-brand-gold/20',
                )}
                aria-hidden="true"
              >
                <Icon className="h-4 w-4 text-brand-gold" />
              </div>
              <div>
                <p
                  className={cn(
                    'text-sm font-semibold leading-tight',
                    dark ? 'text-white' : 'text-foreground',
                  )}
                >
                  {label}
                </p>
                <p
                  className={cn(
                    'text-xs leading-tight',
                    dark ? 'text-white/50' : 'text-muted-foreground',
                  )}
                >
                  {sub}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
