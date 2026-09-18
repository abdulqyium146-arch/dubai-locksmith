import { JsonLd } from './JsonLd'
import type { CarBrand } from '@/types'
import { BUSINESS_NAME, SITE_URL, PHONE_RAW } from '@/lib/constants'

export function CarBrandServiceSchema({ brand }: { brand: CarBrand }) {
  const brandUrl = `${SITE_URL}/car-brands/${brand.slug}`

  const priceMin = brand.priceRangeAED.length
    ? Math.min(...brand.priceRangeAED.map((p) => p.min))
    : 300
  const priceMax = brand.priceRangeAED.length
    ? Math.max(...brand.priceRangeAED.map((p) => p.max))
    : 1600

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${brandUrl}#service`,
    name: `${brand.name} Car Key Replacement & Programming Dubai`,
    description: brand.metaDescription,
    url: brandUrl,
    provider: {
      '@type': 'Locksmith',
      '@id': `${SITE_URL}/#lock-repair-satwa`,
      name: BUSINESS_NAME,
      telephone: PHONE_RAW,
    },
    areaServed: { '@type': 'City', name: 'Dubai, UAE' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'AED',
      priceRange: `AED ${priceMin}–${priceMax}`,
      availability: 'https://schema.org/InStock',
      availableAtOrFrom: { '@type': 'Place', name: 'Dubai, UAE' },
    },
    serviceType: `${brand.name} Car Key Service`,
    category: 'Automotive Locksmith',
  }

  return <JsonLd data={schema} />
}

export function CarBrandFaqSchema({ brand }: { brand: CarBrand }) {
  if (!brand.faqs || brand.faqs.length === 0) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: brand.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return <JsonLd data={schema} />
}

export function CarBrandBreadcrumbSchema({ brand }: { brand: CarBrand }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Car Brands',
        item: `${SITE_URL}/car-brands`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: brand.name,
        item: `${SITE_URL}/car-brands/${brand.slug}`,
      },
    ],
  }

  return <JsonLd data={schema} />
}

export function CarBrandHubItemListSchema({ brands }: { brands: CarBrand[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Car Brands Supported – Dubai Car Key Locksmith',
    description:
      'Complete list of car makes supported for key cutting, transponder programming and remote key replacement in Dubai.',
    numberOfItems: brands.length,
    itemListElement: brands.map((brand, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `${brand.name} Car Key Service Dubai`,
      url: `${SITE_URL}/car-brands/${brand.slug}`,
    })),
  }

  return <JsonLd data={schema} />
}
