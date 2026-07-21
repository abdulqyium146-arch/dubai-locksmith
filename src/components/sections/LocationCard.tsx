// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Location Card
// ─────────────────────────────────────────────────────────────────────────────
import Link from 'next/link'
import { ArrowRight, Clock, MapPin } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import type { Location } from '@/types'

interface LocationCardProps {
  location: Location
}

export function LocationCard({ location }: LocationCardProps) {
  const href = `/locations/${location.slug}`

  // Classify response time urgency for badge styling
  const responseMinutes = parseInt(location.responseTime.split('-')[0], 10)
  const isNearest = responseMinutes <= 15
  const isFast = responseMinutes <= 30

  return (
    <article aria-label={`Car key service in ${location.name}`}>
      <Card hover>
        <CardContent className="pt-6">
          {/* Location pin + response badge */}
          <div className="mb-4 flex items-start justify-between gap-2">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy/10 dark:bg-brand-gold/10 ring-1 ring-brand-navy/20 dark:ring-brand-gold/20"
              aria-hidden="true"
            >
              <MapPin className="h-6 w-6 text-brand-gold" />
            </div>

            {isNearest ? (
              <Badge variant="gold" size="sm" dot>
                Home Base
              </Badge>
            ) : isFast ? (
              <Badge variant="success" size="sm" dot>
                Fast Response
              </Badge>
            ) : null}
          </div>

          {/* Name */}
          <h3 className="font-heading text-lg font-semibold text-foreground">
            {location.name}
          </h3>

          {/* Short description */}
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
            {location.directAnswerOpener}
          </p>

          {/* Response time */}
          <div className="mt-4 flex items-center gap-1.5 text-xs">
            <Clock className="h-3.5 w-3.5 text-brand-gold" aria-hidden="true" />
            <span className="font-medium text-brand-gold">
              {location.responseTime}
            </span>
            <span className="text-muted-foreground">response time</span>
          </div>

          {/* Key landmarks */}
          {location.landmarks.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5" aria-label="Key landmarks">
              {location.landmarks.slice(0, 3).map((landmark) => (
                <span
                  key={landmark}
                  className="inline-block rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                >
                  {landmark}
                </span>
              ))}
            </div>
          )}
        </CardContent>

        <CardFooter className="border-t border-border pt-4">
          <Link
            href={href}
            className="group flex items-center gap-1.5 text-sm font-semibold text-brand-gold transition-colors hover:text-brand-gold-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            aria-label={`Car key services in ${location.name}`}
          >
            View Services
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </CardFooter>
      </Card>
    </article>
  )
}
