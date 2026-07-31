// /sitemap-index.xml — master sitemap index for Google Search Console
import { SITE_URL } from '@/lib/constants'

export const dynamic = 'force-static'

export function GET() {
  const now = new Date().toISOString()

  const sitemaps = [
    `${SITE_URL}/sitemap-pages.xml`,
    `${SITE_URL}/sitemap-services.xml`,
    `${SITE_URL}/sitemap-locations.xml`,
    `${SITE_URL}/sitemap-products.xml`,
    `${SITE_URL}/sitemap-ar.xml`,
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    (loc) => `  <sitemap>
    <loc>${loc}</loc>
    <lastmod>${now}</lastmod>
  </sitemap>`,
  )
  .join('\n')}
</sitemapindex>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
