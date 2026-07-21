// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Shared Utility Functions
// ─────────────────────────────────────────────────────────────────────────────
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind CSS class names safely, resolving conflicts.
 * Combines clsx (conditional classes) + tailwind-merge (conflict resolution).
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

/**
 * Format a price range as "AED X – AED Y"
 */
export function formatPriceRange(min: number, max: number): string {
  return `AED ${min.toLocaleString()} – AED ${max.toLocaleString()}`
}

/**
 * Truncate a string to a maximum length, appending an ellipsis if needed.
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str
  return str.slice(0, maxLength - 3) + '...'
}

/**
 * Convert a slug (e.g. "car-key-duplication") to a title-case label.
 */
export function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Generate a canonical URL from a path.
 */
export function canonicalUrl(path: string, baseUrl: string): string {
  const normalised = path.startsWith('/') ? path : `/${path}`
  return `${baseUrl}${normalised}`
}

/**
 * Generate star rating display (e.g., 4.7 → "★★★★★")
 * Returns filled, half, and empty star counts.
 */
export function parseStarRating(rating: number): {
  filled: number
  half: boolean
  empty: number
} {
  const filled = Math.floor(rating)
  const half = rating - filled >= 0.25 && rating - filled < 0.75
  const empty = 5 - filled - (half ? 1 : 0)
  return { filled, half, empty }
}

/**
 * Format an ISO date string to a human-readable date.
 */
export function formatDate(isoDate: string): string {
  const date = new Date(isoDate)
  return date.toLocaleDateString('en-AE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Check if a value is a non-empty string.
 */
export function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}
