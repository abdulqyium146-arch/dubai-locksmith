// ─────────────────────────────────────────────────────────────────────────────
// Lock repair service — Service Schema
// ─────────────────────────────────────────────────────────────────────────────
import { JsonLd } from './JsonLd'
import type { Service } from '@/types'
import {
  BUSINESS_NAME,
  SITE_URL,
  PHONE_RAW,
  ADDRESS_STREET,
  ADDRESS_AREA,
  ADDRESS_CITY,
  PLUS_CODE,
  COORDINATES,
  GOOGLE_MAPS_URL,
} from '@/lib/constants'

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
      '@id': `${SITE_URL}/#lock-repair-service`,
      name: BUSINESS_NAME,
      telephone: PHONE_RAW,
      address: {
        '@type': 'PostalAddress',
        streetAddress: ADDRESS_STREET,
        addressLocality: ADDRESS_AREA,
        addressRegion: ADDRESS_CITY,
        addressCountry: 'AE',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: COORDINATES.lat,
        longitude: COORDINATES.lng,
      },
      additionalProperty: {
        '@type': 'PropertyValue',
        name: 'Google Plus Code',
        value: PLUS_CODE,
      },
      hasMap: GOOGLE_MAPS_URL,
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
