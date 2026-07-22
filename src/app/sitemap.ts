// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Next.js Sitemap API Route
// Generates /sitemap.xml for all locale-prefixed pages
// ─────────────────────────────────────────────────────────────────────────────
import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'
import { getAllServiceSlugs } from '@/data/services'
import { getAllLocationSlugs } from '@/data/locations'
import { getAllProductSlugs } from '@/data/products'

const LOCALES = ['en', 'ar'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const entries: MetadataRoute.Sitemap = []

  for (const locale of LOCALES) {
    // ── Static pages ────────────────────────────────────────────────────────
    entries.push(
      {
        url: `${SITE_URL}/${locale}`,
        lastModified: now,
        changeFrequency: 'daily',
        priority: locale === 'en' ? 1.0 : 0.7,
      },
      {
        url: `${SITE_URL}/${locale}/services`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: locale === 'en' ? 0.9 : 0.6,
      },
      {
        url: `${SITE_URL}/${locale}/locations`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: locale === 'en' ? 0.9 : 0.6,
      },
      {
        url: `${SITE_URL}/${locale}/products`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: locale === 'en' ? 0.85 : 0.6,
      },
      {
        url: `${SITE_URL}/${locale}/about`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: locale === 'en' ? 0.6 : 0.4,
      },
      {
        url: `${SITE_URL}/${locale}/contact`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: locale === 'en' ? 0.7 : 0.5,
      },
    )

    // ── Service pages ─────────────────────────────────────────────────────────
    for (const slug of getAllServiceSlugs()) {
      entries.push({
        url: `${SITE_URL}/${locale}/services/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: locale === 'en' ? 0.8 : 0.55,
      })
    }

    // ── Location pages ────────────────────────────────────────────────────────
    for (const slug of getAllLocationSlugs()) {
      entries.push({
        url: `${SITE_URL}/${locale}/locations/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: locale === 'en' ? 0.75 : 0.5,
      })
    }

    // ── Product pages ─────────────────────────────────────────────────────────
    for (const slug of getAllProductSlugs()) {
      entries.push({
        url: `${SITE_URL}/${locale}/products/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: locale === 'en' ? 0.7 : 0.45,
      })
    }
  }

  return entries
}
