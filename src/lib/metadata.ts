// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Shared Metadata Builder Utility
// Provides typed Next.js Metadata objects for service, location and generic pages.
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'
import type { Service, Location } from '@/types'
import { SITE_URL, BUSINESS_NAME, BUSINESS_TAGLINE } from '@/lib/constants'
import { buildOgImageUrl } from '@/components/sections/OpenGraphImage'

// ── Internal helpers ──────────────────────────────────────────────────────────

function absoluteUrl(path: string): string {
  const normalised = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalised}`
}

function ogImage(title: string, description: string) {
  return [
    {
      url: buildOgImageUrl({ title, description }),
      width: 1200,
      height: 630,
      alt: `${title} | ${BUSINESS_NAME}`,
    },
  ]
}

// ── Service page metadata ─────────────────────────────────────────────────────

/**
 * Builds a full Next.js Metadata object for a /services/[slug] page.
 */
export function buildServiceMetadata(service: Service): Metadata {
  const canonicalPath = `/services/${service.slug}`
  const canonicalUrl = absoluteUrl(canonicalPath)
  const title = service.metaTitle
  const description = service.metaDescription

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      siteName: BUSINESS_NAME,
      title: `${title} | ${BUSINESS_NAME}`,
      description,
      images: ogImage(title, description),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${BUSINESS_NAME}`,
      description,
      images: [buildOgImageUrl({ title, description })],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

// ── Location page metadata ────────────────────────────────────────────────────

/**
 * Builds a full Next.js Metadata object for a /locations/[slug] page.
 */
export function buildLocationMetadata(location: Location): Metadata {
  const canonicalPath = `/locations/${location.slug}`
  const canonicalUrl = absoluteUrl(canonicalPath)
  const title = location.metaTitle
  const description = location.metaDescription

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      siteName: BUSINESS_NAME,
      title: `${title} | ${BUSINESS_NAME}`,
      description,
      images: ogImage(title, description),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${BUSINESS_NAME}`,
      description,
      images: [buildOgImageUrl({ title, description })],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

// ── Generic page metadata ─────────────────────────────────────────────────────

/**
 * Builds a full Next.js Metadata object for any static page (About, Contact, etc.).
 *
 * @param title       The page title (without the site name suffix)
 * @param description The meta description (<160 chars recommended)
 * @param path        The canonical path, e.g. "/about"
 */
export function buildPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const canonicalUrl = absoluteUrl(path)
  const fullTitle = `${title} | ${BUSINESS_NAME}`

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      siteName: BUSINESS_NAME,
      title: fullTitle,
      description,
      images: ogImage(title, description),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [buildOgImageUrl({ title, description })],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

// Re-export site constants for convenience
export { SITE_URL, BUSINESS_NAME, BUSINESS_TAGLINE }
