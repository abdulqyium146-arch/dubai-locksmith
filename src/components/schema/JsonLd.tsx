// ─────────────────────────────────────────────────────────────────────────────
// Car Key Service DXB — Generic JSON-LD Component
// ─────────────────────────────────────────────────────────────────────────────

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[]
}

/**
 * Renders a <script type="application/ld+json"> tag with the given data.
 * Safe against XSS — data is serialised with standard JSON.stringify.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 0),
      }}
    />
  )
}
