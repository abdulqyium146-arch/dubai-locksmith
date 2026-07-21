// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Trust Bar
// ─────────────────────────────────────────────────────────────────────────────
import { Clock, Star, Zap, MapPin, DollarSign } from 'lucide-react'
import { cn } from '@/lib/utils'
import { GOOGLE_RATING } from '@/lib/constants'

const TRUST_ITEMS = [
  {
    icon: Clock,
    label: '24/7 Service',
    sub: 'Always available',
  },
  {
    icon: Star,
    label: `${GOOGLE_RATING}★ Google Rated`,
    sub: 'Verified reviews',
  },
  {
    icon: Zap,
    label: '20-Min Response',
    sub: 'Central Dubai',
  },
  {
    icon: MapPin,
    label: 'All Dubai Covered',
    sub: '15 key areas',
  },
  {
    icon: DollarSign,
    label: 'Upfront Pricing',
    sub: 'No hidden fees',
  },
] as const

interface TrustBarProps {
  /** Dark background variant (for use on light-bg pages) */
  dark?: boolean
  className?: string
}

export function TrustBar({ dark = false, className }: TrustBarProps) {
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
