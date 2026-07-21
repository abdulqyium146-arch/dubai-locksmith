// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Next.js Sitemap API Route
// Generates /sitemap.xml automatically for all pages
// ─────────────────────────────────────────────────────────────────────────────
import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'
import { getAllServiceSlugs } from '@/data/services'
import { getAllLocationSlugs } from '@/data/locations'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // ── Static pages ────────────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/locations`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // ── Service pages (/services/[slug]) ────────────────────────────────────────
  const servicePages: MetadataRoute.Sitemap = getAllServiceSlugs().map(
    (slug) => ({
      url: `${SITE_URL}/services/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }),
  )

  // ── Location pages (/locations/[slug]) ──────────────────────────────────────
  const locationPages: MetadataRoute.Sitemap = getAllLocationSlugs().map(
    (slug) => ({
      url: `${SITE_URL}/locations/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }),
  )

  return [...staticPages, ...servicePages, ...locationPages]
}
