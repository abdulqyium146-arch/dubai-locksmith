// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — OpenGraph Image URL Builder
// Helper to construct /api/og URLs for use in generateMetadata functions.
// ─────────────────────────────────────────────────────────────────────────────
import { SITE_URL } from '@/lib/constants'

interface OgImageOptions {
  title?: string
  description?: string
}

/**
 * Build an absolute URL for the dynamic OG image route.
 *
 * Usage in generateMetadata:
 *   openGraph: {
 *     images: [buildOgImageUrl({ title: service.metaTitle })],
 *   }
 */
export function buildOgImageUrl(options: OgImageOptions = {}): string {
  const params = new URLSearchParams()

  if (options.title) {
    params.set('title', options.title)
  }

  if (options.description) {
    params.set('description', options.description)
  }

  const query = params.toString()
  return `${SITE_URL}/api/og${query ? `?${query}` : ''}`
}
