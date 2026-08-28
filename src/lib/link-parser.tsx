// ─────────────────────────────────────────────────────────────────────────────
// Lock repair service — Prose Link Parser
// Converts plain-text strings into ReactNode[] with inline Next.js Links for
// known service/product/location terms. Server-component safe (no 'use client').
// Longest term is matched first so "smart door lock installation" beats "smart lock".
// Each destination href is linked at most once per call to avoid over-linking.
// ─────────────────────────────────────────────────────────────────────────────
import Link from 'next/link'
import type { ReactNode } from 'react'

interface LinkDef {
  terms: string[]
  href: string
  external?: boolean
}

export const PROSE_LINK_DEFS: LinkDef[] = [
  // ── Services: Automotive ──────────────────────────────────────────────────
  {
    terms: ['key duplication service', 'key cutting service', 'key duplication', 'key cutting', 'duplicate key'],
    href: '/services/car-key-duplication',
  },
  {
    terms: ['car key replacement service', 'replacement car key', 'replace car key'],
    href: '/services/car-key-replacement',
  },
  {
    terms: ['car key programming service', 'smart key programming service', 'car key programming', 'smart key programming'],
    href: '/services/remote-smart-key-programming',
  },
  {
    terms: ['transponder key programming', 'transponder key duplication'],
    href: '/services/transponder-keys',
  },
  {
    terms: ['emergency car unlock service', 'emergency car unlock', 'car door opening service'],
    href: '/services/emergency-car-unlock',
  },
  {
    terms: ['car battery replacement service', 'car battery replacement'],
    href: '/services/car-battery-replacement',
  },
  {
    terms: ['flip key service', 'flip key replacement'],
    href: '/services/flip-keys',
  },
  {
    terms: ['parking remote duplication', 'parking remote service', 'parking fob duplication'],
    href: '/services/parking-remotes',
  },
  {
    terms: ['RFID card duplication', 'access card duplication service'],
    href: '/services/access-card-duplication',
  },
  {
    terms: ['ignition repair service', 'ignition lock repair'],
    href: '/services/ignition-repair',
  },
  {
    terms: ['car trunk unlock service', 'car trunk unlock'],
    href: '/services/car-trunk-unlock',
  },
  // ── Services: Door / Lock ─────────────────────────────────────────────────
  {
    terms: ['smart door lock installation', 'smart lock installation service', 'digital lock installation'],
    href: '/services/smart-door-locks',
  },
  {
    terms: ['safe opening service', 'safe box service', 'open a safe', 'safe opening'],
    href: '/services/safe-box-services',
  },
  {
    terms: ['door lock repair service', 'door lock repair', 'lock repair service'],
    href: '/services/lock-repair',
  },
  {
    terms: ['lock change service', 'lock replacement service', 'change door locks', 'replace door locks'],
    href: '/services/lock-change',
  },
  {
    terms: ['home lockout service', 'apartment lockout service'],
    href: '/services/home-lockout',
  },
  {
    terms: ['master key system installation', 'master key system'],
    href: '/services/master-key-system',
  },
  {
    terms: ['mailbox lock service', 'mailbox lock replacement'],
    href: '/services/mailbox-lock',
  },
  {
    terms: ['garage remote duplication', 'garage door remote duplication', 'garage remote service'],
    href: '/services/garage-remote-duplicate',
  },
  {
    terms: ['door closer installation service', 'door closer installation'],
    href: '/services/door-closer-installation',
  },
  {
    terms: ['access control installation service', 'access control system installation'],
    href: '/services/access-control-installation',
  },
  {
    terms: ['push bar installation', 'panic bar installation service'],
    href: '/services/push-bar-installation',
  },
  {
    terms: ['cabinet lock service', 'cabinet lock installation'],
    href: '/services/cabinet-lock',
  },
  {
    terms: ['rekeying service', 'rekey service', 'lock rekeying'],
    href: '/services/lock-change',
  },
  // ── Products ──────────────────────────────────────────────────────────────
  {
    terms: ['mortise lock set', 'mortise lock installation', 'mortise lock'],
    href: '/products/mortise-locks',
  },
  {
    terms: ['deadbolt lock installation', 'deadbolt lock supply', 'deadbolt installation', 'deadbolt lock'],
    href: '/products/deadbolt-locks',
  },
  {
    terms: ['fingerprint door lock', 'fingerprint lock installation', 'fingerprint lock'],
    href: '/products/fingerprint-door-locks',
  },
  {
    terms: ['keypad door lock', 'keypad lock installation', 'keypad lock'],
    href: '/products/keypad-locks',
  },
  {
    terms: ['high-security lock installation', 'high-security lock', 'high security lock'],
    href: '/products/high-security-locks',
  },
  {
    terms: ['lock cylinder replacement', 'euro cylinder replacement', 'euro cylinder', 'lock cylinder'],
    href: '/products/lock-cylinders',
  },
  {
    terms: ['fireproof safe installation', 'fireproof safe', 'fire-rated safe'],
    href: '/products/fireproof-safes',
  },
  {
    terms: ['floor safe installation', 'floor safe'],
    href: '/products/floor-safes',
  },
  {
    terms: ['wall safe installation', 'wall safe'],
    href: '/products/wall-safes',
  },
  {
    terms: ['magnetic lock installation', 'electromagnetic lock', 'magnetic lock'],
    href: '/products/magnetic-locks',
  },
  {
    terms: ['electric door strike', 'electric strike installation'],
    href: '/products/electric-door-strikes',
  },
  {
    terms: ['door closer supply', 'automatic door closer'],
    href: '/products/door-closers',
  },
  {
    terms: ['cam lock supply', 'cam lock installation'],
    href: '/products/cam-locks',
  },
  // ── Key pages ─────────────────────────────────────────────────────────────
  {
    terms: ['book a service online', 'book a service', 'book online', 'book an appointment'],
    href: '/booking',
  },
  {
    terms: ['view all services', 'all locksmith services', 'full list of services'],
    href: '/services',
  },
  {
    terms: ['all Dubai service areas', 'all service areas'],
    href: '/locations',
  },
  // ── External authority ────────────────────────────────────────────────────
  {
    terms: ['Roads and Transport Authority', 'Dubai RTA'],
    href: 'https://www.rta.ae',
    external: true,
  },
  {
    terms: ['Dubai Municipality'],
    href: 'https://www.dm.gov.ae',
    external: true,
  },
]

// ── Regex ─────────────────────────────────────────────────────────────────────
// Pre-compute the pattern string once; create a fresh RegExp object per call
// (regex with `g` flag is stateful — never reuse the same instance).

const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const LINK_REGEX_SOURCE = (() => {
  const allTerms = PROSE_LINK_DEFS.flatMap((d) => d.terms)
    .sort((a, b) => b.length - a.length) // longest first to avoid partial matches
    .map(escapeRegex)
  return `\\b(${allTerms.join('|')})\\b`
})()

// ── parseWithLinks ─────────────────────────────────────────────────────────────

/**
 * Converts a plain-text string into ReactNode[] with inline links for known terms.
 * - Each destination href is linked at most once per call (no over-linking).
 * - Longest term wins when multiple terms overlap.
 * - External links open in new tab with rel="noopener noreferrer".
 * - Safe to call from Server Components (uses next/link Link, no client state).
 */
export function parseWithLinks(
  text: string,
  linkClassName = 'font-medium text-brand-gold underline decoration-brand-gold/40 underline-offset-2 hover:decoration-brand-gold transition-colors'
): ReactNode[] {
  if (!text) return [text]

  const regex = new RegExp(LINK_REGEX_SOURCE, 'gi')
  const nodes: ReactNode[] = []
  const usedHrefs = new Set<string>()
  let cursor = 0
  let match: RegExpExecArray | null

  while ((match = regex.exec(text)) !== null) {
    const matchedText = match[0]
    const matchedLower = matchedText.toLowerCase()

    // Locate the rule for this matched term
    const rule = PROSE_LINK_DEFS.find((d) =>
      d.terms.some((t) => t.toLowerCase() === matchedLower)
    )

    // Skip if no rule or if we already linked this destination
    if (!rule || usedHrefs.has(rule.href)) continue

    // Flush plain text before this match
    if (match.index > cursor) {
      nodes.push(text.slice(cursor, match.index))
    }

    usedHrefs.add(rule.href)

    if (rule.external) {
      nodes.push(
        <a
          key={`${rule.href}-${match.index}`}
          href={rule.href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          {matchedText}
        </a>
      )
    } else {
      nodes.push(
        <Link
          key={`${rule.href}-${match.index}`}
          href={rule.href}
          className={linkClassName}
        >
          {matchedText}
        </Link>
      )
    }

    cursor = match.index + matchedText.length
  }

  // Flush remaining plain text
  if (cursor < text.length) {
    nodes.push(text.slice(cursor))
  }

  return nodes.length > 0 ? nodes : [text]
}
