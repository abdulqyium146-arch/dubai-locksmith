// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Service Schema
// ─────────────────────────────────────────────────────────────────────────────
import { JsonLd } from './JsonLd'
import type { Service } from '@/types'
import { BUSINESS_NAME, SITE_URL, PHONE_RAW } from '@/lib/constants'

interface ServiceSchemaProps {
  service: Service
}

export function ServiceSchema({ service }: ServiceSchemaProps) {
  const serviceUrl = `${SITE_URL}/services/${service.slug}`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${serviceUrl}#service`,
    name: service.title,
    description: service.metaDescription,
    url: serviceUrl,
    provider: {
      '@type': 'Locksmith',
      '@id': `${SITE_URL}/#lock-repair-satwa`,
      name: BUSINESS_NAME,
      telephone: PHONE_RAW,
    },
    areaServed: {
      '@type': 'City',
      name: 'Dubai, UAE',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: service.pricing.currency,
      priceRange: `${service.pricing.currency} ${service.pricing.min}–${service.pricing.max}`,
      availability: 'https://schema.org/InStock',
      availableAtOrFrom: {
        '@type': 'Place',
        name: 'Dubai, UAE',
      },
    },
    serviceType: service.title,
    category: 'Automotive Locksmith',
    ...(service.emergency && {
      serviceOutput: {
        '@type': 'Thing',
        description: 'Priority locksmith service available daily 7 AM–11:30 PM',
      },
    }),
  }

  return <JsonLd data={schema} />
}
