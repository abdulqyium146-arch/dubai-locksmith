// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — SEO Utility: Related Content & Internal Linking
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
  'car-key-duplication':          ['deadbolt-locks', 'mortise-locks'],
  'car-key-replacement':          ['deadbolt-locks', 'mortise-locks'],
  'remote-smart-key-programming': ['smart-locks', 'keypad-locks'],
  'transponder-keys':             ['deadbolt-locks', 'mortise-locks'],
  'emergency-car-unlock':         ['deadbolt-locks', 'mortise-locks'],
  'lost-broken-car-keys':         ['deadbolt-locks', 'mortise-locks'],
  'flip-keys':                    ['mortise-locks', 'rim-locks'],
  'smart-door-locks':             ['smart-locks', 'keypad-locks'],
  'safe-box-services':            ['padlocks', 'deadbolt-locks'],
  'parking-remotes':              ['smart-locks', 'keypad-locks'],
  'car-battery-replacement':      ['deadbolt-locks', 'mortise-locks'],
  'rubber-stamps':                ['deadbolt-locks', 'mortise-locks'],
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
  'deadbolt-locks':    ['lock-repair', 'lock-change'],
  'mortise-locks':     ['lock-repair', 'lock-change'],
  'smart-locks':       ['smart-door-locks', 'lock-repair'],
  'keypad-locks':      ['smart-door-locks', 'lock-repair'],
  'padlocks':          ['safe-box-services', 'lock-repair'],
  'rim-locks':         ['lock-repair', 'lock-change'],
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
