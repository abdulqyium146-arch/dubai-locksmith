// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Production robots.txt
// ─────────────────────────────────────────────────────────────────────────────
import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

const SHARED_DISALLOW = [
  '/api/',
  '/admin/',
  '/dashboard/',
  '/private/',
  '/search',
  '/_next/static/',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── Googlebot — full crawl access, image optimiser allowed ─────────────
      {
        userAgent: 'Googlebot',
        allow: ['/', '/_next/image/'],
        disallow: SHARED_DISALLOW,
      },
      // ── Googlebot-Image ───────────────────────────────────────────────────
      {
        userAgent: 'Googlebot-Image',
        allow: ['/', '/_next/image/'],
        disallow: ['/api/', '/admin/', '/_next/static/'],
      },
      // ── Googlebot-Mobile ──────────────────────────────────────────────────
      {
        userAgent: 'Googlebot-Mobile',
        allow: ['/', '/_next/image/'],
        disallow: SHARED_DISALLOW,
      },
      // ── Bingbot ───────────────────────────────────────────────────────────
      {
        userAgent: 'Bingbot',
        allow: ['/', '/_next/image/'],
        disallow: SHARED_DISALLOW,
      },
      // ── AI / LLM crawlers — read content, exclude internals ───────────────
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'Anthropic-ai',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'cohere-ai',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      // ── Default — all other bots ──────────────────────────────────────────
      {
        userAgent: '*',
        allow: '/',
        disallow: SHARED_DISALLOW,
      },
    ],
    sitemap: `${SITE_URL}/sitemap-index.xml`,
    host: SITE_URL,
  }
}
