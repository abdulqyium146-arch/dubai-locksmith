// ─────────────────────────────────────────────────────────────────────────────
// Car Key Service DXB — FAQPage Schema
// ─────────────────────────────────────────────────────────────────────────────
import { JsonLd } from './JsonLd'
import type { Faq } from '@/types'

interface FaqSchemaProps {
  faqs: Faq[]
}

export function FaqSchema({ faqs }: FaqSchemaProps) {
  if (!faqs || faqs.length === 0) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return <JsonLd data={schema} />
}
