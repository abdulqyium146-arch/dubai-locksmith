// /sitemap-pages.xml — static / hub pages only
import { SITE_URL } from '@/lib/constants'

export const dynamic = 'force-static'

interface SitemapEntry {
  loc: string
  priority: string
  changefreq: string
}

function buildXml(entries: SitemapEntry[]): string {
  const now = new Date().toISOString()
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries
  .map(
    ({ loc, priority, changefreq }) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${loc}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}"/>
  </url>`,
  )
  .join('\n')}
</urlset>`
}

export function GET() {
  const entries: SitemapEntry[] = [
    { loc: SITE_URL,                      priority: '1.0', changefreq: 'daily'   },
    { loc: `${SITE_URL}/services`,        priority: '0.9', changefreq: 'weekly'  },
    { loc: `${SITE_URL}/locations`,       priority: '0.9', changefreq: 'weekly'  },
    { loc: `${SITE_URL}/products`,        priority: '0.75', changefreq: 'weekly' },
    { loc: `${SITE_URL}/contact`,         priority: '0.7', changefreq: 'monthly' },
    { loc: `${SITE_URL}/booking`,         priority: '0.7', changefreq: 'monthly' },
    { loc: `${SITE_URL}/about`,           priority: '0.6', changefreq: 'monthly' },
  ]

  return new Response(buildXml(entries), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
