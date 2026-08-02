// /api/indexnow — Bulk URL submission to IndexNow-compatible search engines.
//
// Setup (one-time):
//   1. Generate a UUID key and add to .env.local:  INDEXNOW_KEY=<uuid>
//   2. Create public/<uuid>.txt containing just the UUID (no newlines)
//   3. Protect this endpoint: add INDEXNOW_SUBMIT_SECRET=<secret> to .env.local
//
// Trigger after deploy:
//   curl -X POST https://locksmith-dubai.com/api/indexnow \
//     -H "x-indexnow-secret: YOUR_SECRET"
//
// Google monitors IndexNow submissions from Bing — submitting to Bing alone
// signals all participating engines including Yandex, Seznam, Naver, and others.
import { NextResponse } from 'next/server'
import { SITE_URL } from '@/lib/constants'
import { getAllServiceSlugs } from '@/data/services'
import { getAllLocationSlugs } from '@/data/locations'
import { getAllProductSlugs } from '@/data/products'

// All IndexNow-compatible engines (Bing propagates to Google within 48h)
const INDEXNOW_ENDPOINTS = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
  'https://search.seznam.cz/indexnow',
  'https://yandex.com/indexnow',
]

function buildUrlList(): string[] {
  const serviceSlugs = getAllServiceSlugs()
  const locationSlugs = getAllLocationSlugs()
  const productSlugs = getAllProductSlugs()

  return [
    SITE_URL,
    `${SITE_URL}/services`,
    `${SITE_URL}/locations`,
    `${SITE_URL}/products`,
    `${SITE_URL}/about`,
    `${SITE_URL}/contact`,
    `${SITE_URL}/booking`,
    ...serviceSlugs.map((s) => `${SITE_URL}/services/${s}`),
    ...locationSlugs.map((l) => `${SITE_URL}/locations/${l}`),
    ...productSlugs.map((p) => `${SITE_URL}/products/${p}`),
  ]
}

export async function POST(request: Request) {
  // Auth check — reject without secret
  const secret = process.env.INDEXNOW_SUBMIT_SECRET
  if (secret) {
    const provided = request.headers.get('x-indexnow-secret')
    if (provided !== secret) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  const key = process.env.INDEXNOW_KEY
  if (!key) {
    return NextResponse.json(
      { error: 'INDEXNOW_KEY not configured in environment' },
      { status: 500 },
    )
  }

  const host = new URL(SITE_URL).hostname
  const urlList = buildUrlList()

  const payload = {
    host,
    key,
    keyLocation: `${SITE_URL}/${key}.txt`,
    urlList,
  }

  const results = await Promise.allSettled(
    INDEXNOW_ENDPOINTS.map((endpoint) =>
      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(payload),
      }).then((r) => ({ endpoint, status: r.status })),
    ),
  )

  const summary = results.map((r) =>
    r.status === 'fulfilled' ? r.value : { endpoint: 'unknown', status: 'error', reason: r.reason },
  )

  return NextResponse.json({
    submitted: urlList.length,
    urls: urlList,
    engines: summary,
  })
}

// GET — returns the current URL list without submitting (for debugging)
export async function GET() {
  return NextResponse.json({ urls: buildUrlList(), count: buildUrlList().length })
}
