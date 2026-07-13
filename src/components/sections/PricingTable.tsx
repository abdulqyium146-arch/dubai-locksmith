// ─────────────────────────────────────────────────────────────────────────────
// Car Key Service DXB — Pricing Table
// ─────────────────────────────────────────────────────────────────────────────
import { CheckCircle2, Info } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PHONE_HREF, PHONE_DISPLAY } from '@/lib/constants'

export interface PricingRow {
  service: string
  priceRange: string
  turnaround: string
  note?: string
  featured?: boolean
}

interface PricingTableProps {
  rows: PricingRow[]
  /** Optional caption describing the table */
  caption?: string
  className?: string
}

export function PricingTable({ rows, caption, className }: PricingTableProps) {
  return (
    <div className={cn('w-full overflow-hidden rounded-xl border border-border', className)}>
      <table className="w-full border-collapse text-sm" role="table">
        {/* Caption */}
        {caption && (
          <caption className="sr-only">{caption}</caption>
        )}

        {/* Header */}
        <thead>
          <tr className="bg-brand-navy text-white dark:bg-brand-navy-light">
            <th
              scope="col"
              className="px-4 py-3.5 text-left font-semibold tracking-wide sm:px-6"
            >
              Service
            </th>
            <th
              scope="col"
              className="px-4 py-3.5 text-right font-semibold tracking-wide sm:px-6"
            >
              Price Range (AED)
            </th>
            <th
              scope="col"
              className="hidden px-4 py-3.5 text-right font-semibold tracking-wide sm:table-cell sm:px-6"
            >
              Turnaround
            </th>
          </tr>
        </thead>

        {/* Body */}
        <tbody className="divide-y divide-border bg-card">
          {rows.map((row, i) => (
            <tr
              key={`${row.service}-${i}`}
              className={cn(
                'transition-colors hover:bg-muted/50',
                row.featured && 'bg-brand-gold/5 hover:bg-brand-gold/8',
              )}
            >
              {/* Service name */}
              <td className="px-4 py-4 sm:px-6">
                <div className="flex items-start gap-2">
                  {row.featured && (
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold"
                      aria-hidden="true"
                    />
                  )}
                  <div>
                    <p className="font-medium text-foreground">{row.service}</p>
                    {row.note && (
                      <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                        <Info className="h-3 w-3 shrink-0" aria-hidden="true" />
                        {row.note}
                      </p>
                    )}
                    {/* Show turnaround inline on mobile */}
                    <p className="mt-1 text-xs text-muted-foreground sm:hidden">
                      {row.turnaround}
                    </p>
                  </div>
                </div>
              </td>

              {/* Price */}
              <td className="px-4 py-4 text-right sm:px-6">
                <span className="font-bold text-brand-gold">{row.priceRange}</span>
              </td>

              {/* Turnaround — hidden on mobile */}
              <td className="hidden px-4 py-4 text-right text-muted-foreground sm:table-cell sm:px-6">
                {row.turnaround}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer note */}
      <div className="border-t border-border bg-muted/40 px-4 py-3 sm:px-6">
        <p className="text-xs text-muted-foreground">
          All prices include labour. Final quote confirmed before work begins —
          no hidden fees.{' '}
          <a
            href={PHONE_HREF}
            className="font-medium text-brand-gold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
          >
            Call {PHONE_DISPLAY}
          </a>{' '}
          for an instant quote.
        </p>
      </div>
    </div>
  )
}
