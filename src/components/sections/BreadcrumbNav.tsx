// ─────────────────────────────────────────────────────────────────────────────
// Car Key Service DXB — Breadcrumb Navigation
// Renders visible breadcrumbs + inline BreadcrumbList JSON-LD
// ─────────────────────────────────────────────────────────────────────────────
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { cn } from '@/lib/utils'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import type { BreadcrumbItem } from '@/types'

interface BreadcrumbNavProps {
  items: BreadcrumbItem[]
  /** Light text on dark background */
  light?: boolean
  className?: string
}

export function BreadcrumbNav({ items, light = false, className }: BreadcrumbNavProps) {
  if (!items || items.length === 0) return null

  // Always prepend "Home" if not already the first item
  const crumbs: BreadcrumbItem[] =
    items[0]?.href === '/'
      ? items
      : [{ name: 'Home', href: '/' }, ...items]

  return (
    <>
      {/* Inline BreadcrumbList schema */}
      <BreadcrumbSchema items={crumbs} />

      <nav
        aria-label="Breadcrumb"
        className={cn('w-full', className)}
      >
        <ol
          role="list"
          className="flex flex-wrap items-center gap-1 text-sm"
        >
          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1

            return (
              <li key={crumb.href} className="flex items-center gap-1">
                {/* Separator before each item (except first) */}
                {i > 0 && (
                  <ChevronRight
                    className={cn(
                      'h-3.5 w-3.5 shrink-0',
                      light ? 'text-white/40' : 'text-muted-foreground/60',
                    )}
                    aria-hidden="true"
                  />
                )}

                {isLast ? (
                  // Current page — not a link
                  <span
                    aria-current="page"
                    className={cn(
                      'font-medium truncate max-w-[200px]',
                      light ? 'text-white/80' : 'text-foreground',
                    )}
                  >
                    {crumb.name}
                  </span>
                ) : (
                  // Ancestor pages — links
                  <Link
                    href={crumb.href}
                    className={cn(
                      'flex items-center gap-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded',
                      light
                        ? 'text-white/60 hover:text-brand-gold'
                        : 'text-muted-foreground hover:text-brand-gold',
                    )}
                  >
                    {i === 0 && (
                      <Home
                        className="h-3.5 w-3.5 shrink-0"
                        aria-hidden="true"
                      />
                    )}
                    <span className="truncate max-w-[160px]">{crumb.name}</span>
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
