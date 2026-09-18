// WebPage + Speakable schema — signals Google AI Overviews (AIO), Gemini,
// and answer engines (AEO/GEO) about which content to surface in direct answers.
import { JsonLd } from './JsonLd'
import { SITE_URL, BUSINESS_NAME } from '@/lib/constants'

interface WebPageSchemaProps {
  pageUrl: string
  pageId: string
  name: string
  description: string
  /** Breadcrumb trail for this page */
  breadcrumbs: Array<{ name: string; url: string }>
  /** Primary image for this page (absolute URL) */
  primaryImageUrl?: string
  primaryImageAlt?: string
  /** ISO 8601 date this page was last updated */
  dateModified?: string
  /** Additional ImageObjects for the page (for image SEO) */
  images?: Array<{ url: string; caption: string }>
}

export function WebPageSchema({
  pageUrl,
  name,
  description,
  breadcrumbs,
  primaryImageUrl,
  primaryImageAlt,
  dateModified,
  images = [],
}: WebPageSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name,
    description,
    inLanguage: 'en',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: BUSINESS_NAME,
      url: SITE_URL,
    },
    about: {
      '@id': `${SITE_URL}/#lock-repair-satwa`,
    },
    ...(dateModified && { dateModified }),
    ...(primaryImageUrl && {
      primaryImageOfPage: {
        '@type': 'ImageObject',
        '@id': `${pageUrl}#primary-image`,
        url: primaryImageUrl,
        contentUrl: primaryImageUrl,
        caption: primaryImageAlt ?? name,
      },
    }),
    ...(images.length > 0 && {
      image: images.map((img) => ({
        '@type': 'ImageObject',
        url: img.url,
        contentUrl: img.url,
        caption: img.caption,
      })),
    }),
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    },
    // Speakable — marks H1 and the first substantive paragraph (.direct-answer)
    // as suitable for Google Assistant, AI Overviews, and voice search answers.
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.direct-answer', '.page-description'],
    },
  }

  return <JsonLd data={schema} />
}

// ── HowTo schema ─────────────────────────────────────────────────────────────
// For the "How It Works" 3-step process — eligible for HowTo rich results in
// Google Search and AI Overviews.

interface HowToStep {
  position: number
  name: string
  text: string
}

interface HowToSchemaProps {
  name: string
  description: string
  steps: HowToStep[]
  /** ISO 8601 duration for the whole process, e.g. "PT45M" */
  totalTime?: string
  pageUrl?: string
}

export function HowToSchema({ name, description, steps, totalTime, pageUrl }: HowToSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    ...(totalTime && { totalTime }),
    ...(pageUrl && { url: pageUrl }),
    image: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/shop/locksmith-shop-satwa-al-badaa-dubai.webp`,
      caption: `${BUSINESS_NAME} — Key Maker & Key Shop in Al Bada'a, Satwa Dubai`,
    },
    step: steps.map(({ position, name: stepName, text }) => ({
      '@type': 'HowToStep',
      position: String(position),
      name: stepName,
      text,
      url: `${pageUrl ?? SITE_URL}#step-${position}`,
      image: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/shop/locksmith-shop-satwa-al-badaa-dubai.webp`,
      },
    })),
  }

  return <JsonLd data={schema} />
}
