// /sitemap-ar.xml — Arabic locale pages
// Placeholder: populated when /ar/* routes are built and deployed.
// Keeping an empty but valid sitemap ensures the sitemap index never returns a 404.
import { SITE_URL } from '@/lib/constants'

export const dynamic = 'force-static'

export function GET() {
  const now = new Date().toISOString()

  // Arabic homepage is the only live /ar URL; individual pages added as built.
  const arEntries: Array<{ loc: string; priority: string }> = [
    // Uncomment and extend as /ar/* pages go live:
    // { loc: `${SITE_URL}/ar`,              priority: '1.0' },
    // { loc: `${SITE_URL}/ar/services`,     priority: '0.9' },
    // { loc: `${SITE_URL}/ar/locations`,    priority: '0.9' },
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${arEntries
  .map(
    ({ loc, priority }) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="${loc}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}"/>
  </url>`,
  )
  .join('\n')}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
