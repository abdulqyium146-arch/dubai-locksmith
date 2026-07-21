// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Page Loading Skeleton
// ─────────────────────────────────────────────────────────────────────────────

export default function Loading() {
  return (
    <div className="min-h-screen bg-background" aria-label="Loading page content" role="status">
      {/* Hero skeleton */}
      <div className="bg-brand-navy py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mx-auto mb-4 h-6 w-32 rounded-full skeleton" />
            {/* Heading */}
            <div className="mx-auto mb-3 h-10 w-3/4 rounded-lg skeleton" />
            <div className="mx-auto mb-6 h-10 w-1/2 rounded-lg skeleton" />
            {/* Subheading */}
            <div className="mx-auto mb-2 h-5 w-full max-w-lg rounded skeleton" />
            <div className="mx-auto mb-8 h-5 w-2/3 rounded skeleton" />
            {/* CTA buttons */}
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <div className="h-12 w-40 rounded-lg skeleton" />
              <div className="h-12 w-44 rounded-lg skeleton" />
            </div>
          </div>

          {/* Trust bar */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="h-8 w-8 rounded-full skeleton" />
                <div className="h-4 w-20 rounded skeleton" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content section skeleton */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          <div className="mx-auto mb-10 max-w-md text-center">
            <div className="mx-auto mb-3 h-8 w-48 rounded-lg skeleton" />
            <div className="mx-auto h-5 w-64 rounded skeleton" />
          </div>

          {/* Card grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="mb-4 h-10 w-10 rounded-lg skeleton" />
                <div className="mb-2 h-5 w-3/4 rounded skeleton" />
                <div className="mb-1 h-4 w-full rounded skeleton" />
                <div className="mb-4 h-4 w-5/6 rounded skeleton" />
                <div className="h-4 w-24 rounded skeleton" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
