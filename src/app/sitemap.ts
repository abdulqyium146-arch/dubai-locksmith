// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — /sitemap.xml
// English-only, no /en prefix. All URLs are canonical indexable routes.
// ─────────────────────────────────────────────────────────────────────────────
import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'
import { getAllServiceSlugs } from '@/data/services'
import { getAllLocationSlugs } from '@/data/locations'
import { getAllProductSlugs } from '@/data/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const serviceSlugs = getAllServiceSlugs()
  const locationSlugs = getAllLocationSlugs()
  const productSlugs = getAllProductSlugs()

  return [
    // ── Homepage ─────────────────────────────────────────────────────────────
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },

    // ── Core service hub ─────────────────────────────────────────────────────
    {
      url: `${SITE_URL}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // ── Core locations hub ───────────────────────────────────────────────────
    {
      url: `${SITE_URL}/locations`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // ── Contact ──────────────────────────────────────────────────────────────
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // ── Booking ──────────────────────────────────────────────────────────────
    {
      url: `${SITE_URL}/booking`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // ── Products hub ─────────────────────────────────────────────────────────
    {
      url: `${SITE_URL}/products`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.75,
    },

    // ── About ────────────────────────────────────────────────────────────────
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },

    // ── Individual service pages (priority 0.9 — core money pages) ───────────
    ...serviceSlugs.map((slug) => ({
      url: `${SITE_URL}/services/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),

    // ── Individual location pages (priority 0.85) ─────────────────────────────
    ...locationSlugs.map((slug) => ({
      url: `${SITE_URL}/locations/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),

    // ── Individual product pages (priority 0.75) ──────────────────────────────
    ...productSlugs.map((slug) => ({
      url: `${SITE_URL}/products/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
  ]
}
