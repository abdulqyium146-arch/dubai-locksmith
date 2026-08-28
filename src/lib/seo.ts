// ─────────────────────────────────────────────────────────────────────────────
// Lock repair service — SEO Utility: Related Content & Internal Linking
// Drives PageRank flow and topical authority across all page types
// ─────────────────────────────────────────────────────────────────────────────
import { services } from '@/data/services'
import { locations } from '@/data/locations'
import { products } from '@/data/products'
import type { Service } from '@/types'

// ── Related Services ──────────────────────────────────────────────────────────

/**
 * Returns up to `limit` related services for a given service slug.
 * Priority: same category first, then by adjacency in the services array.
 */
export function getRelatedServices(currentSlug: string, limit = 5): Service[] {
  const current = services.find((s) => s.slug === currentSlug)
  if (!current) return services.filter((s) => s.slug !== currentSlug).slice(0, limit)

  const sameCategory = services.filter(
    (s) => s.slug !== currentSlug && s.category === current.category
  )
  const other = services.filter(
    (s) => s.slug !== currentSlug && s.category !== current.category
  )

  return [...sameCategory, ...other].slice(0, limit)
}

// ── Service → Location links ──────────────────────────────────────────────────

/** Top 5 locations every service page links to (highest-priority areas). */
export const TOP_SERVICE_LOCATIONS = [
  { slug: 'al-satwa',      name: 'Al Satwa' },
  { slug: 'al-badaa',      name: "Al Bada'a" },
  { slug: 'jumeirah',      name: 'Jumeirah' },
  { slug: 'business-bay',  name: 'Business Bay' },
  { slug: 'dubai-marina',  name: 'Dubai Marina' },
]

// ── Service → Product links ───────────────────────────────────────────────────

const SERVICE_TO_PRODUCTS: Record<string, string[]> = {
  // Door/lock services — direct product relevance
  'smart-door-locks':             ['fingerprint-door-locks', 'keypad-locks', 'smart-door-locks-buy'],
  'safe-box-services':            ['fireproof-safes', 'depository-safes', 'floor-safes'],
  'safe-opening':                 ['fireproof-safes', 'floor-safes', 'wall-safes'],
  'lock-change':                  ['deadbolt-locks', 'mortise-locks', 'lock-cylinders'],
  'lock-repair':                  ['lock-cylinders', 'deadbolt-locks', 'mortise-locks'],
  'home-lockout':                 ['deadbolt-locks', 'high-security-locks'],
  'master-key-system':            ['lock-cylinders', 'high-security-locks'],
  'mailbox-lock':                 ['lock-cylinders', 'cam-locks'],
  'cabinet-lock':                 ['cam-locks', 'lock-cylinders'],
  'access-control-installation':  ['magnetic-locks', 'electric-door-strikes'],
  'door-closer-installation':     ['door-closers'],
  'push-bar-installation':        ['panic-bars'],
  'sliding-patio-door-lock':      ['deadbolt-locks', 'high-security-locks'],
  'access-card-duplication':      ['magnetic-locks', 'electric-door-strikes'],
}

/** Returns up to 2 products contextually related to a service. */
export function getProductsForService(serviceSlug: string) {
  const slugs = SERVICE_TO_PRODUCTS[serviceSlug] ?? []
  return products.filter((p) => slugs.includes(p.slug)).slice(0, 2)
}

// ── Location → Services ───────────────────────────────────────────────────────

/** Top 6 services to feature on every location page. */
export const TOP_LOCATION_SERVICES = [
  { slug: 'car-key-duplication',          title: 'Key Duplication & Key Cutting' },
  { slug: 'car-key-replacement',          title: 'Car Key Replacement' },
  { slug: 'emergency-car-unlock',         title: 'Emergency Car Unlock' },
  { slug: 'remote-smart-key-programming', title: 'Smart Key Programming' },
  { slug: 'smart-door-locks',             title: 'Smart Door Locks' },
  { slug: 'safe-box-services',            title: 'Safe Box Services' },
]

// ── Location → Nearby Locations ───────────────────────────────────────────────

/** Returns 4 nearby location slugs for cross-linking. Excludes the current slug. */
export function getNearbyLocations(currentSlug: string, limit = 4) {
  const idx = locations.findIndex((l) => l.slug === currentSlug)
  if (idx === -1) return locations.filter((l) => l.slug !== currentSlug).slice(0, limit)

  const before = locations.slice(Math.max(0, idx - 2), idx)
  const after  = locations.slice(idx + 1, idx + 1 + limit)
  return [...before, ...after].slice(0, limit)
}

// ── Location → Products ───────────────────────────────────────────────────────

/** Top 3 products to cross-link on location pages. */
export const TOP_LOCATION_PRODUCTS = [
  { slug: 'deadbolt-locks',  title: 'Deadbolt Locks' },
  { slug: 'smart-locks',     title: 'Smart Electronic Locks' },
  { slug: 'mortise-locks',   title: 'Mortise Locks' },
]

// ── Product → Services ────────────────────────────────────────────────────────

const PRODUCT_TO_SERVICES: Record<string, string[]> = {
  'deadbolt-locks':          ['lock-change', 'lock-repair', 'home-lockout'],
  'mortise-locks':           ['lock-change', 'lock-repair'],
  'high-security-locks':     ['lock-change', 'master-key-system'],
  'lock-cylinders':          ['lock-repair', 'lock-change', 'master-key-system'],
  'fingerprint-door-locks':  ['smart-door-locks', 'access-control-installation'],
  'keypad-locks':            ['smart-door-locks', 'access-control-installation'],
  'smart-door-locks-buy':    ['smart-door-locks'],
  'magnetic-locks':          ['access-control-installation'],
  'electric-door-strikes':   ['access-control-installation'],
  'cam-locks':               ['cabinet-lock', 'mailbox-lock'],
  'fireproof-safes':         ['safe-box-services', 'safe-opening'],
  'depository-safes':        ['safe-box-services', 'safe-opening'],
  'floor-safes':             ['safe-box-services'],
  'wall-safes':              ['safe-box-services'],
  'panic-bars':              ['push-bar-installation'],
  'door-closers':            ['door-closer-installation'],
}

/** Returns up to 2 installation/repair services for a product. */
export function getServicesForProduct(productSlug: string) {
  const slugs = PRODUCT_TO_SERVICES[productSlug] ?? ['lock-repair', 'lock-change']
  return services.filter((s) => slugs.includes(s.slug)).slice(0, 2)
}

// ── Structured Data Helpers ───────────────────────────────────────────────────

/** Builds a schema.org ItemList from an array of { name, url } items. */
export function buildItemListSchema(
  name: string,
  description: string,
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    description,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: item.url,
    })),
  }
}
