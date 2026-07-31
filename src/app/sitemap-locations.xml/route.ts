// /sitemap-locations.xml — all individual location pages
import { SITE_URL } from '@/lib/constants'
import { getAllLocationSlugs } from '@/data/locations'

export const dynamic = 'force-static'

function buildXml(slugs: string[]): string {
  const now = new Date().toISOString()
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${slugs
  .map((slug) => {
    const loc = `${SITE_URL}/locations/${slug}`
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${loc}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}"/>
  </url>`
  })
  .join('\n')}
</urlset>`
}

export function GET() {
  return new Response(buildXml(getAllLocationSlugs()), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
