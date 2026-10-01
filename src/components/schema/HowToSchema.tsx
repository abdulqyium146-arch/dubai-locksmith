import { JsonLd } from './JsonLd'
import type { Service } from '@/types'
import { SITE_URL } from '@/lib/constants'

export function HowToSchema({ service }: { service: Service }) {
  if (service.processSteps.length === 0) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${SITE_URL}/services/${service.slug}#howto`,
    name: `How Our ${service.title} Service Works in Dubai`,
    description: service.metaDescription,
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: service.pricing.currency,
      minValue: service.pricing.min,
      maxValue: service.pricing.max,
    },
    step: service.processSteps.map((step) => ({
      '@type': 'HowToStep',
      position: step.step,
      name: step.title,
      text: step.description,
    })),
  }

  return <JsonLd data={schema} />
}
