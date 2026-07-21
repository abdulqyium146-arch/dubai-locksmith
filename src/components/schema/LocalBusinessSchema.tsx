// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — LocalBusiness Schema
// ─────────────────────────────────────────────────────────────────────────────
import { JsonLd } from './JsonLd'
import {
  BUSINESS_NAME,
  BUSINESS_TAGLINE,
  PHONE_RAW,
  EMAIL,
  ADDRESS_STREET,
  ADDRESS_AREA,
  ADDRESS_CITY,
  COORDINATES,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  GOOGLE_MAPS_URL,
  SITE_URL,
  SCHEMA_ORG,
  SOCIAL_LINKS,
} from '@/lib/constants'

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Locksmith', 'LocalBusiness'],
    '@id': `${SITE_URL}/#lock-repair-satwa`,
    name: BUSINESS_NAME,
    description: BUSINESS_TAGLINE,
    url: SITE_URL,
    telephone: PHONE_RAW,
    email: EMAIL,
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
    hasMap: GOOGLE_MAPS_URL,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    priceRange: SCHEMA_ORG.priceRange,
    currenciesAccepted: SCHEMA_ORG.currenciesAccepted,
    paymentAccepted: SCHEMA_ORG.paymentAccepted,
    areaServed: {
      '@type': 'City',
      name: SCHEMA_ORG.areaServed,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: GOOGLE_RATING,
      bestRating: 5,
      worstRating: 1,
      reviewCount: GOOGLE_REVIEW_COUNT,
    },
    sameAs: [
      SOCIAL_LINKS.facebook,
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.twitter,
      GOOGLE_MAPS_URL,
    ],
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/logo.png`,
      width: 200,
      height: 60,
    },
    image: `${SITE_URL}/images/og-default.jpg`,
  }

  return <JsonLd data={schema} />
}
