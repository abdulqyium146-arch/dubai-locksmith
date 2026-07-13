// ─────────────────────────────────────────────────────────────────────────────
// Car Key Service DXB — Shared TypeScript Types
// ─────────────────────────────────────────────────────────────────────────────

// ── Primitives ────────────────────────────────────────────────────────────────

export type Currency = 'AED'

export interface PricingRange {
  min: number
  max: number
  currency: Currency
  /** Human-readable clarification, e.g. "Price varies by car model" */
  note: string
}

export interface Coordinates {
  lat: number
  lng: number
}

// ── Shared building blocks ────────────────────────────────────────────────────

export interface Faq {
  question: string
  answer: string
}

export interface Benefit {
  title: string
  description: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}

// ── Service ───────────────────────────────────────────────────────────────────

export interface Service {
  /** URL-safe identifier used in /services/[slug] routes */
  slug: string
  title: string
  /** <60 chars — used in <title> tag */
  metaTitle: string
  /** <160 chars — used in <meta name="description"> */
  metaDescription: string
  /**
   * 40-60 words, fact-dense opening paragraph that can be used as a
   * "direct answer" snippet for SGE / featured snippets.
   */
  directAnswerOpener: string
  /** Full marketing description (200-400 words) */
  description: string
  benefits: Benefit[]
  processSteps: ProcessStep[]
  pricing: PricingRange
  /** Specific time range, e.g. "15-30 minutes" */
  turnaroundTime: string
  faqs: Faq[]
  /** Car makes / models supported by this service */
  supportedBrands: string[]
  /** Emoji or Lucide icon name string */
  icon: string
  /** True if this service is available as a 24/7 emergency call-out */
  emergency: boolean
}

// ── Location ──────────────────────────────────────────────────────────────────

export interface Location {
  /** URL-safe identifier used in /locations/[slug] routes */
  slug: string
  /** Display name, e.g. "Dubai Marina" */
  name: string
  /** <60 chars */
  metaTitle: string
  /** <160 chars */
  metaDescription: string
  /** 40-60 words direct-answer opener */
  directAnswerOpener: string
  /** Full area description */
  description: string
  /** Real, well-known Dubai landmarks in this area */
  landmarks: string[]
  /** Dominant residential / commercial building categories in the area */
  buildingTypes: string[]
  /** Realistic ETA from Al Bada'a base, e.g. "10-20 minutes" */
  responseTime: string
  faqs: Faq[]
  coordinates: Coordinates
}

// ── Review / Testimonial ──────────────────────────────────────────────────────

export interface Review {
  id: string
  authorName: string
  rating: number
  text: string
  /** ISO date string */
  date: string
  /** Google Profile photo URL (optional) */
  photoUrl?: string
  /** Service the reviewer used (optional, for schema markup) */
  service?: string
}

// ── Navigation ────────────────────────────────────────────────────────────────

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

// ── Schema.org / JSON-LD helpers ──────────────────────────────────────────────

export interface BreadcrumbItem {
  name: string
  href: string
}

// ── API response shapes ───────────────────────────────────────────────────────

export interface ApiSuccess<T> {
  success: true
  data: T
}

export interface ApiError {
  success: false
  error: string
  code?: string
}

export type ApiResponse<T> = ApiSuccess<T> | ApiError

// ── Contact form ──────────────────────────────────────────────────────────────

export interface ContactFormInput {
  name: string
  phone: string
  email?: string
  service?: string
  location?: string
  message: string
}

// ── Page metadata helpers ─────────────────────────────────────────────────────

export interface PageMeta {
  title: string
  description: string
  canonicalPath: string
  /** Open Graph image URL — absolute */
  ogImageUrl?: string
  noIndex?: boolean
}
