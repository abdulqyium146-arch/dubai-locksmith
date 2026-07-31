// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Shared Metadata Builder Utility
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

/**
 * Builds hreflang alternates for an English-canonical page.
 * Arabic alternate is omitted until /ar/* pages are live to avoid soft 404s.
 * Both `en` and `x-default` point to the English canonical URL.
 */
function buildAlternates(canonicalUrl: string) {
  return {
    canonical: canonicalUrl,
    languages: {
      en: canonicalUrl,
      'x-default': canonicalUrl,
    } as Record<string, string>,
  }
}

const FULL_ROBOTS = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-video-preview': -1 as const,
    'max-image-preview': 'large' as const,
    'max-snippet': -1 as const,
  },
}

// ── Service page metadata ─────────────────────────────────────────────────────

export function buildServiceMetadata(service: Service): Metadata {
  const canonicalUrl = absoluteUrl(`/services/${service.slug}`)
  const { metaTitle: title, metaDescription: description } = service

  return {
    title,
    description,
    alternates: buildAlternates(canonicalUrl),
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      siteName: BUSINESS_NAME,
      title: `${title} | ${BUSINESS_NAME}`,
      description,
      locale: 'en_AE',
      images: ogImage(title, description),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${BUSINESS_NAME}`,
      description,
      images: [buildOgImageUrl({ title, description })],
    },
    robots: FULL_ROBOTS,
  }
}

// ── Location page metadata ────────────────────────────────────────────────────

export function buildLocationMetadata(location: Location): Metadata {
  const canonicalUrl = absoluteUrl(`/locations/${location.slug}`)
  const { metaTitle: title, metaDescription: description } = location

  return {
    title,
    description,
    alternates: buildAlternates(canonicalUrl),
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      siteName: BUSINESS_NAME,
      title: `${title} | ${BUSINESS_NAME}`,
      description,
      locale: 'en_AE',
      images: ogImage(title, description),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${BUSINESS_NAME}`,
      description,
      images: [buildOgImageUrl({ title, description })],
    },
    robots: FULL_ROBOTS,
  }
}

// ── Generic page metadata ─────────────────────────────────────────────────────

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
    alternates: buildAlternates(canonicalUrl),
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      siteName: BUSINESS_NAME,
      title: fullTitle,
      description,
      locale: 'en_AE',
      images: ogImage(title, description),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [buildOgImageUrl({ title, description })],
    },
    robots: FULL_ROBOTS,
  }
}

export { SITE_URL, BUSINESS_NAME, BUSINESS_TAGLINE }
