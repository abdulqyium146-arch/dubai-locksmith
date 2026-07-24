// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — LocalBusiness + Organization Schema
// Production-grade JSON-LD for maximum Google entity understanding
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
  SERVICE_HOURS,
} from '@/lib/constants'

// All 12 services with pricing — gives Google a complete offer catalog
const OFFER_CATALOG_ITEMS = [
  { name: 'Key Duplication & Key Cutting', url: `${SITE_URL}/en/services/car-key-duplication`, minPrice: '50', maxPrice: '350' },
  { name: 'Car Key Replacement', url: `${SITE_URL}/en/services/car-key-replacement`, minPrice: '300', maxPrice: '900' },
  { name: 'Remote & Smart Key Programming', url: `${SITE_URL}/en/services/remote-smart-key-programming`, minPrice: '400', maxPrice: '900' },
  { name: 'Transponder Key Programming', url: `${SITE_URL}/en/services/transponder-keys`, minPrice: '350', maxPrice: '700' },
  { name: 'Emergency Car Unlock', url: `${SITE_URL}/en/services/emergency-car-unlock`, minPrice: '200', maxPrice: '500' },
  { name: 'Lost & Broken Car Key Service', url: `${SITE_URL}/en/services/lost-broken-car-keys`, minPrice: '200', maxPrice: '700' },
  { name: 'Flip Key Replacement', url: `${SITE_URL}/en/services/flip-keys`, minPrice: '250', maxPrice: '550' },
  { name: 'Smart Door Lock Installation', url: `${SITE_URL}/en/services/smart-door-locks`, minPrice: '350', maxPrice: '1200' },
  { name: 'Safe Box Opening & Service', url: `${SITE_URL}/en/services/safe-box-services`, minPrice: '200', maxPrice: '800' },
  { name: 'Parking Remote Duplication', url: `${SITE_URL}/en/services/parking-remotes`, minPrice: '150', maxPrice: '450' },
  { name: 'Car Battery Replacement', url: `${SITE_URL}/en/services/car-battery-replacement`, minPrice: '250', maxPrice: '600' },
  { name: 'Rubber Stamp Making', url: `${SITE_URL}/en/services/rubber-stamps`, minPrice: '50', maxPrice: '200' },
]

// Dubai areas served — mirrors GMB service area targeting exactly
const DUBAI_AREAS = [
  'Al Satwa', "Al Bada'a", 'Dubai',
  'Jumeirah Village Triangle', 'Al Barari', 'Al Barsha', 'Al Barsha South',
  'Al Khawaneej', 'Dubai Marina', 'Al Quoz', 'Dubai Silicon Oasis',
  'Falconcity of Wonders', 'Jumeirah Lakes Towers', 'Jumeirah Beach Residence',
  'Discovery Gardens', 'Jebel Ali Village',
]

export function LocalBusinessSchema() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['Locksmith', 'LocalBusiness'],
    '@id': `${SITE_URL}/#lock-repair-satwa`,
    name: BUSINESS_NAME,
    alternateName: ['Lock Repair Satwa Dubai', 'Locksmith Dubai', 'Key Maker Dubai', 'Key Shop Satwa'],
    description: `${BUSINESS_TAGLINE}. Open 24/7 across all Dubai areas. Car key duplication, programming, emergency unlock, door lock repair, smart locks. Rated ${GOOGLE_RATING}★ on Google.`,
    url: SITE_URL,
    telephone: PHONE_RAW,
    email: EMAIL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS_STREET,
      addressLocality: ADDRESS_AREA,
      addressRegion: ADDRESS_CITY,
      addressCountry: 'AE',
      postalCode: '00000',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COORDINATES.lat,
      longitude: COORDINATES.lng,
    },
    hasMap: GOOGLE_MAPS_URL,
    // 24/7 — represented as array of 7-day specs (Google's preferred format)
    openingHoursSpecification: [
      'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
    ].map((day) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: day,
      opens: SERVICE_HOURS.opens,
      closes: SERVICE_HOURS.closes,
    })),
    priceRange: SCHEMA_ORG.priceRange,
    currenciesAccepted: SCHEMA_ORG.currenciesAccepted,
    paymentAccepted: SCHEMA_ORG.paymentAccepted,
    // Full Dubai service area — helps Google understand geographic relevance
    areaServed: DUBAI_AREAS.map((area) => ({
      '@type': 'City',
      name: `${area}, Dubai, UAE`,
    })),
    // Physical location context
    containedInPlace: {
      '@type': 'Neighborhood',
      name: "Al Bada'a, Dubai",
      containedInPlace: {
        '@type': 'City',
        name: 'Dubai',
        containedInPlace: {
          '@type': 'Country',
          name: 'United Arab Emirates',
          sameAs: 'https://www.wikidata.org/wiki/Q878',
        },
      },
    },
    // Complete offer catalog — all 12 services with prices and URLs
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Dubai Locksmith Services',
      itemListElement: OFFER_CATALOG_ITEMS.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: item.name,
            url: item.url,
            provider: { '@id': `${SITE_URL}/#lock-repair-satwa` },
          },
          priceCurrency: 'AED',
          priceSpecification: {
            '@type': 'PriceSpecification',
            minPrice: item.minPrice,
            maxPrice: item.maxPrice,
            priceCurrency: 'AED',
          },
          areaServed: { '@type': 'City', name: 'Dubai, UAE' },
          availability: 'https://schema.org/InStock',
          availabilityStarts: SERVICE_HOURS.opens,
          availabilityEnds: SERVICE_HOURS.closes,
        },
      })),
    },
    // Google verifiable aggregate rating
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: GOOGLE_RATING,
      bestRating: 5,
      worstRating: 1,
      reviewCount: GOOGLE_REVIEW_COUNT,
      ratingCount: GOOGLE_REVIEW_COUNT,
    },
    // Social profiles and external references for entity disambiguation
    sameAs: [
      SOCIAL_LINKS.facebook,
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.twitter,
      GOOGLE_MAPS_URL,
      `${SITE_URL}/en`,
    ],
    logo: {
      '@type': 'ImageObject',
      '@id': `${SITE_URL}/#logo`,
      url: `${SITE_URL}/images/logo.png`,
      contentUrl: `${SITE_URL}/images/logo.png`,
      width: 200,
      height: 60,
      caption: `${BUSINESS_NAME} Logo`,
    },
    image: [
      {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/og-default.jpg`,
        width: 1200,
        height: 630,
        caption: `${BUSINESS_NAME} — Professional Locksmith in Dubai`,
      },
      {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/shop/locksmith-shop-satwa-al-badaa-dubai.webp`,
        caption: "Lock Repair Satwa shop exterior in Al Bada'a, Dubai",
      },
    ],
    keywords: [
      'locksmith Dubai', 'key maker Dubai', 'key duplication Dubai',
      'car key replacement Dubai', 'emergency locksmith Dubai',
      'smart key programming Dubai', 'door lock repair Dubai',
      'نسخ مفاتيح دبي', 'لوكسميث دبي', 'مفتاح سيارة دبي',
    ].join(', '),
  }

  // Separate Organization schema — helps Google understand the brand entity
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    logo: { '@id': `${SITE_URL}/#logo` },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: PHONE_RAW,
      contactType: 'customer service',
      areaServed: 'AE',
      availableLanguage: ['English', 'Arabic'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: SERVICE_HOURS.opens,
        closes: SERVICE_HOURS.closes,
      },
    },
    sameAs: [
      SOCIAL_LINKS.facebook,
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.twitter,
      GOOGLE_MAPS_URL,
    ],
  }

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={organizationSchema} />
    </>
  )
}
