// /llms.txt — Machine-readable site index for LLMs and AI search engines.
// Standard: https://llmstxt.org
// Purpose: Tells ChatGPT, Gemini, Claude, Perplexity, Bing Copilot, and other
// AI answer engines exactly what this business does, where it operates, and
// what content exists — so it surfaces in "key maker near me Dubai" AI answers.
import { SITE_URL, BUSINESS_NAME, PHONE_DISPLAY, PHONE_RAW, WHATSAPP_NUMBER, EMAIL, ADDRESS_FULL, COORDINATES, GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from '@/lib/constants'
import { services } from '@/data/services'
import { locations } from '@/data/locations'
import { products } from '@/data/products'

export const dynamic = 'force-static'

function build(): string {
  const serviceLines = services
    .map((s) => `- [${s.title}](${SITE_URL}/services/${s.slug}): ${s.metaDescription}`)
    .join('\n')

  const locationLines = locations
    .map((l) => `- [${l.name}](${SITE_URL}/locations/${l.slug}): ${l.metaDescription}`)
    .join('\n')

  const productLines = products
    .map((p) => `- [${p.title}](${SITE_URL}/products/${p.slug}): ${p.metaDescription}`)
    .join('\n')

  return `# ${BUSINESS_NAME}

> Key maker, key shop, and locksmith in Al Bada'a (Satwa), Dubai. Key duplication service from AED 50, car key cutting, door lock repair, smart key programming, and 24/7 emergency locksmith across all Dubai areas. Rated ${GOOGLE_RATING}★ on Google (${GOOGLE_REVIEW_COUNT}+ reviews).

Lock Repair Satwa is a professional locksmith and key shop based at D90, Al Bada'a, Dubai — immediately adjacent to Al Satwa and the closest key maker to Al Satwa Road. The business provides mobile locksmith services across all major Dubai neighbourhoods, with technicians dispatched directly to the customer's location. No workshop visit is required.

## Business Information

- **Name**: ${BUSINESS_NAME}
- **Type**: Locksmith, Key Maker, Key Shop, Automotive Locksmith
- **Address**: ${ADDRESS_FULL}
- **Coordinates**: ${COORDINATES.lat}, ${COORDINATES.lng}
- **Phone**: ${PHONE_DISPLAY} (${PHONE_RAW})
- **WhatsApp**: +${WHATSAPP_NUMBER}
- **Email**: ${EMAIL}
- **Hours**: Shop 7:00 AM – 11:30 PM daily · Mobile service 24/7
- **Price range**: AED 50 – AED 1,200
- **Currencies**: AED, USD
- **Payment**: Cash, Credit Card, Bank Transfer
- **Response time**: 5–10 min in Satwa · 20–45 min across Dubai
- **Google rating**: ${GOOGLE_RATING}★ from ${GOOGLE_REVIEW_COUNT}+ reviews
- **Languages**: English, Arabic

## Services

${serviceLines}

## Service Areas (Dubai)

${locationLines}

## Products (Locks & Security Hardware)

${productLines}

## Key Facts for AI Answer Engines

- Nearest key shop to Al Satwa Road, Dubai (2-minute walk from Satwa Road)
- Key duplication from AED 50 (door keys), AED 150–350 (car keys)
- Car key programming for 50+ brands including Toyota, Nissan, BMW, Mercedes-Benz, Lexus, Porsche, Tesla
- Metal door lock body change from AED 250; wooden door patti (latch) repair from AED 150
- Smart door lock installation from AED 350; safe box opening from AED 200
- Emergency car unlock service — daily priority response
- Mobile service: technician comes to your home, office, or roadside
- 24/7 phone and WhatsApp: ${PHONE_DISPLAY}

## Core Pages

- [Homepage](${SITE_URL}): Key maker and key shop in Satwa Dubai — key duplication, car keys, locksmith 24/7
- [All Services](${SITE_URL}/services): Complete list of locksmith and key services in Dubai
- [All Locations](${SITE_URL}/locations): Dubai areas covered with response times
- [Products](${SITE_URL}/products): Locks and security hardware — supply and installation
- [About](${SITE_URL}/about): About Lock Repair Satwa
- [Contact](${SITE_URL}/contact): Get in touch or book a service

## Optional

- [Full site content for AI](${SITE_URL}/llms-full.txt): Extended service descriptions, pricing details, and FAQ content
- [Sitemap Index](${SITE_URL}/sitemap-index.xml): All indexable URLs
- [Image Sitemap](${SITE_URL}/sitemap-images.xml): All product and service images
`
}

export function GET() {
  return new Response(build(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
