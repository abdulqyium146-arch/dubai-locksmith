// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — BreadcrumbList Schema
// ─────────────────────────────────────────────────────────────────────────────
import { JsonLd } from './JsonLd'
import type { BreadcrumbItem } from '@/types'
import { SITE_URL } from '@/lib/constants'

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  if (!items || items.length === 0) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.href.startsWith('http')
        ? item.href
        : `${SITE_URL}${item.href}`,
    })),
  }

  return <JsonLd data={schema} />
}
