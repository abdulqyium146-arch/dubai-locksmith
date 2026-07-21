// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Reviews Section
//
// TODO (business owner): Replace the placeholder reviews array below with
// real, verbatim Google review content. Fabricating or paraphrasing reviews
// violates Google's review policies. Real reviews must be provided by the
// business owner with the reviewer's name and date as shown on Google Maps.
// ─────────────────────────────────────────────────────────────────────────────
import { Star, Quote } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import { GOOGLE_RATING, GOOGLE_MAPS_URL } from '@/lib/constants'
import type { Review } from '@/types'

// ── Aggregate Rating Display ──────────────────────────────────────────────────

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div
      className="flex gap-0.5"
      aria-label={`${rating} out of ${max} stars`}
      role="img"
    >
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < Math.floor(rating)
              ? 'fill-brand-gold text-brand-gold'
              : i < rating
              ? 'fill-brand-gold/50 text-brand-gold/50'
              : 'fill-muted text-muted'
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

// ── Individual Review Card ────────────────────────────────────────────────────

function ReviewCard({ review }: { review: Review }) {
  return (
    <article
      className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm"
      aria-label={`Review by ${review.authorName}`}
    >
      {/* Quote icon */}
      <Quote
        className="mb-3 h-6 w-6 text-brand-gold/40"
        aria-hidden="true"
      />

      {/* Review text */}
      <blockquote className="flex-1 text-sm leading-relaxed text-foreground">
        <p>&ldquo;{review.text}&rdquo;</p>
      </blockquote>

      {/* Reviewer info */}
      <footer className="mt-4 border-t border-border pt-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-semibold text-foreground text-sm">
              {review.authorName}
            </p>
            {review.service && (
              <p className="text-xs text-muted-foreground mt-0.5">
                {review.service}
              </p>
            )}
          </div>
          <div className="flex flex-col items-end gap-1">
            <StarRating rating={review.rating} />
            <time
              dateTime={review.date}
              className="text-xs text-muted-foreground"
            >
              {formatDate(review.date)}
            </time>
          </div>
        </div>
      </footer>
    </article>
  )
}

// ── Reviews Section ───────────────────────────────────────────────────────────

interface ReviewsSectionProps {
  reviews: Review[]
  heading?: string
  /** Show the aggregate rating summary above the reviews */
  showAggregate?: boolean
}

export function ReviewsSection({
  reviews,
  heading = 'What Our Customers Say',
  showAggregate = true,
}: ReviewsSectionProps) {
  if (!reviews || reviews.length === 0) return null

  return (
    <section aria-labelledby="reviews-heading" className="w-full">
      {/* Heading */}
      <div className="mb-10 text-center">
        <h2
          id="reviews-heading"
          className="font-heading text-3xl font-bold tracking-tight text-foreground"
        >
          {heading}
        </h2>

        {/* Aggregate rating */}
        {showAggregate && (
          <div className="mt-4 flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <StarRating rating={GOOGLE_RATING} />
              <span className="text-2xl font-bold text-foreground">
                {GOOGLE_RATING}
              </span>
              <span className="text-muted-foreground">/ 5</span>
            </div>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-brand-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
              aria-label="View all our Google reviews"
            >
              Based on verified Google reviews — View all
            </a>
          </div>
        )}
      </div>

      {/* Review cards grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {/* CTA to Google */}
      <div className="mt-10 text-center">
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand-gold/40 hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {/* Google G */}
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          See All Reviews on Google Maps
        </a>
      </div>
    </section>
  )
}
