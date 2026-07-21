'use client'
// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Global Error Boundary
// ─────────────────────────────────────────────────────────────────────────────
import { useEffect } from 'react'
import { RefreshCw, Phone } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log to error monitoring service (e.g., Sentry) in production
    console.error('[GlobalError]', error)
  }, [error])

  return (
    <div className="flex min-h-[calc(100vh-72px)] flex-col items-center justify-center bg-background px-4 py-20">
      {/* Decorative background */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-destructive/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-lg text-center">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10">
          <RefreshCw className="h-10 w-10 text-destructive" />
        </div>

        {/* Headline */}
        <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Something Went Wrong
        </h1>

        {/* Sub-text */}
        <p className="mt-4 text-lg text-muted-foreground">
          We encountered an unexpected error. Please try refreshing the page. If
          the issue persists, call us directly — open daily 7 AM–11:30 PM.
        </p>

        {/* Error digest for support reference */}
        {error.digest && (
          <p className="mt-3 rounded-md bg-muted px-4 py-2 font-mono text-xs text-muted-foreground">
            Error reference: {error.digest}
          </p>
        )}

        {/* Actions */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-gold px-6 py-3 font-semibold text-brand-navy transition-colors hover:bg-brand-gold-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </button>

          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Phone className="h-4 w-4 text-brand-gold" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </div>
  )
}
