// ─────────────────────────────────────────────────────────────────────────────
// Car Key Service DXB — Service Card
// ─────────────────────────────────────────────────────────────────────────────
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { formatPriceRange } from '@/lib/utils'
import type { Service } from '@/types'

interface ServiceCardProps {
  service: Service
  /** Visually highlight as featured */
  featured?: boolean
}

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const href = `/services/${service.slug}`

  return (
    <article aria-label={service.title}>
      <Card
        hover
        className={
          featured
            ? 'border-brand-gold/40 ring-1 ring-brand-gold/20'
            : undefined
        }
      >
        <CardContent className="pt-6">
          {/* Icon + emergency badge */}
          <div className="mb-4 flex items-start justify-between gap-2">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold/10 text-2xl ring-1 ring-brand-gold/20"
              aria-hidden="true"
            >
              {service.icon}
            </div>
            <div className="flex flex-wrap justify-end gap-1.5">
              {service.emergency && (
                <Badge variant="emergency" size="sm" dot>
                  Emergency
                </Badge>
              )}
              {featured && (
                <Badge variant="gold" size="sm">
                  Popular
                </Badge>
              )}
            </div>
          </div>

          {/* Title */}
          <h3 className="font-heading text-lg font-semibold text-foreground">
            {service.title}
          </h3>

          {/* Short description — first sentence of directAnswerOpener */}
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
            {service.directAnswerOpener}
          </p>

          {/* Meta row */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1 font-medium text-brand-gold">
              {formatPriceRange(service.pricing.min, service.pricing.max)}
            </span>
            <span aria-hidden="true" className="text-border">
              ·
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" aria-hidden="true" />
              {service.turnaroundTime}
            </span>
          </div>
        </CardContent>

        <CardFooter className="border-t border-border pt-4">
          <Link
            href={href}
            className="group flex items-center gap-1.5 text-sm font-semibold text-brand-gold transition-colors hover:text-brand-gold-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            aria-label={`Learn more about ${service.title}`}
          >
            Learn More
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
