// ─────────────────────────────────────────────────────────────────────────────
// Car Key Service DXB — Site-wide Constants
// ─────────────────────────────────────────────────────────────────────────────

// ── Business Identity ─────────────────────────────────────────────────────────

export const BUSINESS_NAME = 'Car Key Service DXB' as const
export const BUSINESS_TAGLINE = 'Dubai\'s Trusted 24/7 Automotive Locksmith' as const
export const BUSINESS_CATEGORY = 'Automotive Locksmith' as const

// ── Contact ───────────────────────────────────────────────────────────────────

export const PHONE_RAW = '+971528176909' as const
export const PHONE_DISPLAY = '+971 52 817 6909' as const
export const PHONE_HREF = 'tel:+971528176909' as const
export const WHATSAPP_NUMBER = '971528176909' as const
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}` as const
export const EMAIL = 'info@locksmith-dubai.com' as const

// ── Address ───────────────────────────────────────────────────────────────────

export const ADDRESS_STREET = '7C Street 56' as const
export const ADDRESS_AREA = 'Al Bada\'a' as const
export const ADDRESS_CITY = 'Dubai' as const
export const ADDRESS_COUNTRY = 'UAE' as const
export const ADDRESS_FULL =
  `${ADDRESS_STREET}, ${ADDRESS_AREA}, ${ADDRESS_CITY}, ${ADDRESS_COUNTRY}` as const

export const COORDINATES = {
  lat: 25.2092,
  lng: 55.2597,
} as const

// ── Social & Reviews ──────────────────────────────────────────────────────────

export const GOOGLE_RATING = 4.7 as const
export const GOOGLE_MAPS_URL =
  'https://maps.google.com/?q=Car+Key+Service+DXB+Al+Bada%27a+Dubai' as const

// ── Site ──────────────────────────────────────────────────────────────────────

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://locksmith-dubai.com'

export const SITE_NAME = BUSINESS_NAME

// Default Open Graph image (1200 × 630 px)
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-default.jpg` as const

// ── SEO Defaults ──────────────────────────────────────────────────────────────

export const DEFAULT_TITLE_TEMPLATE = `%s | ${BUSINESS_NAME}` as const
export const DEFAULT_META_DESCRIPTION =
  'Car Key Service DXB offers 24/7 automotive locksmith services across Dubai — car key duplication, smart key programming, emergency unlock, transponder keys and more. Call +971 52 817 6909.' as const

// ── Service Hours ─────────────────────────────────────────────────────────────

export const SERVICE_HOURS = {
  availability: '24/7' as const,
  daysOpen: 'Monday – Sunday' as const,
  hoursOpen: '24 Hours' as const,
  emergencyAvailable: true,
} as const

// ── Response Times ────────────────────────────────────────────────────────────

export const RESPONSE_TIME_AVERAGE = '20-45 minutes' as const
export const RESPONSE_TIME_NEARBY = '10-20 minutes' as const
export const RESPONSE_TIME_FAR = '30-60 minutes' as const

// ── ISR / Caching ─────────────────────────────────────────────────────────────

/** Revalidation interval for service/location pages (12 hours in seconds) */
export const ISR_REVALIDATE_SECONDS = 43_200 as const

/** Revalidation interval for the home page (1 hour in seconds) */
export const HOME_REVALIDATE_SECONDS = 3_600 as const

// ── Pricing ───────────────────────────────────────────────────────────────────

export const CURRENCY = 'AED' as const

export const PRICING_RANGES = {
  keyDuplication: { min: 150, max: 350 },
  smartKeyProgramming: { min: 400, max: 900 },
  emergencyUnlock: { min: 200, max: 500 },
  transponderKey: { min: 350, max: 700 },
  remoteKey: { min: 300, max: 700 },
  flipKey: { min: 250, max: 550 },
  carBattery: { min: 250, max: 600 },
  smartDoorLock: { min: 350, max: 1200 },
  safeBox: { min: 200, max: 800 },
  parkingRemote: { min: 150, max: 450 },
  rubberStamp: { min: 50, max: 200 },
  lostBrokenKey: { min: 200, max: 700 },
} as const

// ── Supported Car Brands (global list) ────────────────────────────────────────

export const ALL_SUPPORTED_BRANDS = [
  'Toyota',
  'Nissan',
  'Honda',
  'Mitsubishi',
  'Mazda',
  'Subaru',
  'Isuzu',
  'BMW',
  'Mercedes-Benz',
  'Audi',
  'Volkswagen',
  'Porsche',
  'Land Rover',
  'Jaguar',
  'Volvo',
  'Ford',
  'Chevrolet',
  'GMC',
  'Cadillac',
  'Jeep',
  'Dodge',
  'RAM',
  'Chrysler',
  'Lexus',
  'Infiniti',
  'Acura',
  'Hyundai',
  'Kia',
  'Genesis',
  'Tesla',
  'Rivian',
  'Peugeot',
  'Renault',
  'Citroën',
  'Fiat',
  'Alfa Romeo',
  'Maserati',
  'Ferrari',
  'Lamborghini',
  'Bentley',
  'Rolls-Royce',
  'McLaren',
  'Aston Martin',
  'MINI',
  'Smart',
  'Suzuki',
  'Daihatsu',
  'BYD',
  'MG',
  'Chery',
  'Geely',
] as const

export type SupportedBrand = (typeof ALL_SUPPORTED_BRANDS)[number]

// ── Navigation ────────────────────────────────────────────────────────────────

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Locations', href: '/locations' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const

// ── Social media ──────────────────────────────────────────────────────────────

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/carkeyservicedxb',
  instagram: 'https://www.instagram.com/carkeyservicedxb',
  twitter: 'https://twitter.com/carkeyservicedxb',
} as const

// ── Schema.org identifiers ────────────────────────────────────────────────────

export const SCHEMA_ORG = {
  type: 'Locksmith' as const,
  priceRange: 'AED 150 – AED 1200' as const,
  areaServed: 'Dubai, UAE' as const,
  currenciesAccepted: 'AED, USD' as const,
  paymentAccepted: 'Cash, Credit Card, Bank Transfer' as const,
} as const
