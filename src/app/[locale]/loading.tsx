export default function Loading() {
  return (
    <div className="min-h-screen pt-[var(--header-height)] animate-pulse">
      {/* Hero skeleton */}
      <div className="bg-brand-navy py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl space-y-4">
            <div className="h-3.5 w-32 rounded-full bg-brand-gold/20" />
            <div className="h-10 w-full rounded-lg bg-white/10" />
            <div className="h-10 w-4/5 rounded-lg bg-white/10" />
            <div className="h-5 w-full rounded bg-white/8 mt-2" />
            <div className="h-5 w-3/4 rounded bg-white/8" />
            <div className="mt-6 flex gap-3">
              <div className="h-14 w-44 rounded-lg bg-brand-gold/25" />
              <div className="h-14 w-40 rounded-lg bg-[#25D366]/20" />
            </div>
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-sm space-y-3 text-center">
            <div className="mx-auto h-4 w-36 rounded-full bg-muted" />
            <div className="mx-auto h-8 w-72 rounded-lg bg-muted" />
            <div className="mx-auto h-5 w-80 rounded bg-muted/70" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-44 rounded-xl border border-border bg-card"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
