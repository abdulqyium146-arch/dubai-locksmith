// /sitemap-images.xml — Google Image Sitemap
// Groups all 28 content images by the page they appear on.
// Format: https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps
import { SITE_URL } from '@/lib/constants'

export const dynamic = 'force-static'

const GEO = "Al Bada'a, Dubai, UAE"

interface ImageEntry {
  loc: string
  title: string
  caption: string
  geo?: string
}

interface PageImages {
  pageUrl: string
  images: ImageEntry[]
}

const IMAGE_MAP: PageImages[] = [
  // ── Homepage ────────────────────────────────────────────────────────────────
  {
    pageUrl: SITE_URL,
    images: [
      {
        loc: `${SITE_URL}/images/shop/wire-key-rings-accessories-dubai.webp`,
        title: 'Wire Key Rings and Key Accessories — Lock Repair Satwa Dubai',
        caption: 'Wire key rings and key accessories at Lock Repair Satwa key shop, Al Bada\'a Dubai. Key shop near me in Satwa.',
        geo: GEO,
      },
      {
        loc: `${SITE_URL}/images/shop/locksmith-shop-satwa-al-badaa-dubai.webp`,
        title: 'Key Shop Satwa Al Bada\'a Dubai — Lock Repair Satwa',
        caption: 'Lock Repair Satwa key shop exterior in Al Bada\'a, nearest key shop to Al Satwa Road, Dubai.',
        geo: GEO,
      },
    ],
  },

  // ── Services Hub ────────────────────────────────────────────────────────────
  {
    pageUrl: `${SITE_URL}/services`,
    images: [
      {
        loc: `${SITE_URL}/images/services/car-remote-key-blanks-locksmith-shop-dubai.webp`,
        title: 'Car Remote Key Blanks — Lock Repair Satwa Locksmith Shop Dubai',
        caption: 'Car remote key blanks for all brands at Lock Repair Satwa locksmith and key shop, Al Bada\'a Satwa Dubai.',
        geo: GEO,
      },
      {
        loc: `${SITE_URL}/images/services/locksmith-tools-lock-cylinders-dubai.webp`,
        title: 'Professional Locksmith Tools and Lock Cylinders Dubai',
        caption: 'Professional locksmith tools and lock cylinders used by Lock Repair Satwa technicians in Dubai.',
        geo: GEO,
      },
    ],
  },

  // ── Key Duplication & Key Cutting ───────────────────────────────────────────
  {
    pageUrl: `${SITE_URL}/services/car-key-duplication`,
    images: [
      {
        loc: `${SITE_URL}/images/services/nissan-car-key-duplication-dubai.webp`,
        title: 'Nissan Car Key Duplication Service Dubai — Lock Repair Satwa',
        caption: 'Nissan car key duplication by Lock Repair Satwa — key duplication service in Dubai from AED 150. Key maker near me in Satwa.',
        geo: GEO,
      },
      {
        loc: `${SITE_URL}/images/services/bentley-spare-car-key-duplication-dubai.webp`,
        title: 'Bentley Spare Car Key Duplication Dubai — Lock Repair Satwa',
        caption: 'Bentley spare key duplication service in Dubai by Lock Repair Satwa — key cutting for luxury vehicles from AED 350.',
        geo: GEO,
      },
      {
        loc: `${SITE_URL}/images/services/ducati-motorcycle-key-cutting-dubai.webp`,
        title: 'Ducati Motorcycle Key Cutting Service Dubai — Lock Repair Satwa',
        caption: 'Ducati motorcycle key cutting service in Dubai — Lock Repair Satwa provides key cutting for motorbikes and scooters.',
        geo: GEO,
      },
      {
        loc: `${SITE_URL}/images/shop/key-duplication-display-for-sale-satwa-dubai.webp`,
        title: 'Key Duplication Display — Lock Repair Satwa Key Shop Satwa Dubai',
        caption: 'Key duplication display at Lock Repair Satwa key shop, Satwa Dubai. Key duplication service from AED 50 for all key types.',
        geo: GEO,
      },
    ],
  },

  // ── Car Key Replacement ─────────────────────────────────────────────────────
  {
    pageUrl: `${SITE_URL}/services/car-key-replacement`,
    images: [
      {
        loc: `${SITE_URL}/images/nissan-car-key-replacement-satwa-dubai.webp`,
        title: 'Nissan Car Key Replacement Satwa Dubai — Lock Repair Satwa Auto Locksmith',
        caption: 'Nissan car key replacement completed in Satwa, Dubai by Lock Repair Satwa certified auto locksmith. Car key replacement from AED 300.',
        geo: GEO,
      },
      {
        loc: `${SITE_URL}/images/lexus-car-key-replacement-dubai-auto-locksmith.jpg.webp`,
        title: 'Lexus Car Key Replacement Dubai — Lock Repair Satwa Auto Locksmith',
        caption: 'Lexus car key replacement service in Dubai by Lock Repair Satwa. Transponder key cut and programmed on-site.',
        geo: GEO,
      },
    ],
  },

  // ── Remote & Smart Key Programming ─────────────────────────────────────────
  {
    pageUrl: `${SITE_URL}/services/remote-smart-key-programming`,
    images: [
      {
        loc: `${SITE_URL}/images/services/transponder-chip-smart-key-programming-dubai.webp`,
        title: 'Transponder Chip Smart Key Programming Dubai — Lock Repair Satwa',
        caption: 'Transponder chip and smart key programming service in Dubai — Lock Repair Satwa programs all car brands using OBD tools.',
        geo: GEO,
      },
      {
        loc: `${SITE_URL}/images/lexus-smart-key-programming-dubai-car-locksmith.jpg.webp`,
        title: 'Lexus Smart Key Programming Dubai — Lock Repair Satwa Car Locksmith',
        caption: 'Lexus smart key programming in Dubai by Lock Repair Satwa certified car locksmith. Remote key programming from AED 400.',
        geo: GEO,
      },
    ],
  },

  // ── Flip Keys ───────────────────────────────────────────────────────────────
  {
    pageUrl: `${SITE_URL}/services/flip-keys`,
    images: [
      {
        loc: `${SITE_URL}/images/services/kia-flip-key-programming-keydiy-dubai.webp`,
        title: 'Kia Flip Key Programming with KeyDIY Tool Dubai — Lock Repair Satwa',
        caption: 'Kia flip key programming using KeyDIY tool in Dubai — Lock Repair Satwa flip key replacement service from AED 250.',
        geo: GEO,
      },
    ],
  },

  // ── Smart Door Locks ────────────────────────────────────────────────────────
  {
    pageUrl: `${SITE_URL}/services/smart-door-locks`,
    images: [
      {
        loc: `${SITE_URL}/images/services/smart-door-lock-installation-dubai.webp`,
        title: 'Smart Door Lock Installation Service Dubai — Lock Repair Satwa',
        caption: 'Smart door lock installation in Dubai by Lock Repair Satwa. Electronic keypad and fingerprint locks from AED 350.',
        geo: GEO,
      },
      {
        loc: `${SITE_URL}/images/smart-door-lock-fingerprint-reader-dubai.webp`,
        title: 'Smart Door Lock Fingerprint Reader Dubai — Lock Repair Satwa',
        caption: 'Smart door lock with fingerprint reader installed on apartment door in Dubai by Lock Repair Satwa.',
        geo: GEO,
      },
      {
        loc: `${SITE_URL}/images/digital-door-lock-fingerprint-installation-dubai.webp`,
        title: 'Digital Door Lock Fingerprint Installation Dubai — Lock Repair Satwa',
        caption: 'Premium digital door lock with fingerprint panel installed on villa door in Dubai by Lock Repair Satwa security specialist.',
        geo: GEO,
      },
    ],
  },

  // ── Lock Repair ─────────────────────────────────────────────────────────────
  {
    pageUrl: `${SITE_URL}/services/lock-repair`,
    images: [
      {
        loc: `${SITE_URL}/images/services/padlock-door-lock-repair-dubai.webp`,
        title: 'Padlock and Door Lock Repair Service Dubai — Lock Repair Satwa',
        caption: 'Padlock and door lock repair service in Dubai by Lock Repair Satwa. Lock repair from AED 100, body change from AED 250.',
        geo: GEO,
      },
      {
        loc: `${SITE_URL}/images/shop/door-lock-handles-repair-shop-satwa-dubai.webp`,
        title: 'Door Lock Handles and Hardware — Lock Repair Satwa Satwa Dubai',
        caption: 'Door lock handles and hardware available at Lock Repair Satwa repair shop in Satwa, Dubai. Metal door lock body change from AED 250.',
        geo: GEO,
      },
      {
        loc: `${SITE_URL}/images/door-lock-repair-dubai-lock-replacement-satwa.jpg.webp`,
        title: 'Door Lock Repair and Replacement Satwa Dubai — Lock Repair Satwa',
        caption: 'Door lock repair and replacement service in Satwa, Dubai by Lock Repair Satwa locksmith. Wooden door patti repair from AED 150.',
        geo: GEO,
      },
    ],
  },

  // ── Safe Box Services ───────────────────────────────────────────────────────
  {
    pageUrl: `${SITE_URL}/services/safe-box-services`,
    images: [
      {
        loc: `${SITE_URL}/images/safe-box-opening-drilled-dubai.webp`,
        title: 'Safe Box Opening Service Dubai — Lock Repair Satwa Safe Specialist',
        caption: 'Commercial safe box drilled and opened by Lock Repair Satwa safe specialist in Dubai. Safe opening service from AED 200.',
        geo: GEO,
      },
      {
        loc: `${SITE_URL}/images/commercial-safe-internal-lock-mechanism-dubai.webp`,
        title: 'Commercial Safe Internal Lock Mechanism Dubai — Lock Repair Satwa',
        caption: 'Commercial safe internal lock mechanism repair in Dubai — Lock Repair Satwa safe box service specialist.',
        geo: GEO,
      },
      {
        loc: `${SITE_URL}/images/residential-safe-combination-lock-dubai.webp`,
        title: 'Residential Safe Combination Lock Service Dubai — Lock Repair Satwa',
        caption: 'Residential safe combination lock service in Dubai — Lock Repair Satwa repairs and opens all safe types.',
        geo: GEO,
      },
      {
        loc: `${SITE_URL}/images/safe-lock-repair-combination-dial-dubai.webp`,
        title: 'Safe Lock Repair Combination Dial Dubai — Lock Repair Satwa',
        caption: 'Safe lock repair and combination dial service in Dubai by Lock Repair Satwa. Safe lock repair from AED 200.',
        geo: GEO,
      },
      {
        loc: `${SITE_URL}/images/safe-lock-replacement-broken-cylinder-dubai.webp`,
        title: 'Safe Lock Cylinder Replacement Dubai — Lock Repair Satwa',
        caption: 'Broken safe lock cylinder replacement in Dubai by Lock Repair Satwa. Safe lock replacement service from AED 300.',
        geo: GEO,
      },
    ],
  },

  // ── Homepage — Recent Work (Jobs 7-11 new images) ──────────────────────────
  {
    pageUrl: SITE_URL,
    images: [
      {
        loc: `${SITE_URL}/images/mercedes-benz-smart-key-replacement-dubai.webp`,
        title: 'Mercedes-Benz Smart Key Replacement Dubai — Lock Repair Satwa',
        caption: 'Mercedes-Benz smart key replacement completed in Dubai by Lock Repair Satwa — OEM-grade smart key programmed on-site.',
        geo: GEO,
      },
      {
        loc: `${SITE_URL}/images/mercedes-car-key-cutting-duplication-dubai.webp`,
        title: 'Mercedes Car Key Cutting and Duplication Dubai — Lock Repair Satwa',
        caption: 'Mercedes car key cutting and duplication service in Dubai by Lock Repair Satwa. Precision key cutting from AED 150.',
        geo: GEO,
      },
      {
        loc: `${SITE_URL}/images/luxury-car-key-programming-service-dubai.webp`,
        title: 'Luxury Car Key Programming Service Dubai — Lock Repair Satwa',
        caption: 'Luxury car key programming service in Dubai — Lock Repair Satwa programs all luxury vehicle smart keys and transponders.',
        geo: GEO,
      },
      {
        loc: `${SITE_URL}/images/eufy-smart-lock-installation-al-satwa-dubai.webp`,
        title: 'Eufy Smart Lock Installation Al Satwa Dubai — Lock Repair Satwa',
        caption: 'Eufy smart door lock installation in Al Satwa, Dubai by Lock Repair Satwa. Smart lock installation from AED 350.',
        geo: "Al Satwa, Dubai, UAE",
      },
      {
        loc: `${SITE_URL}/images/electronic-door-lock-repair-al-bada-dubai.webp`,
        title: "Electronic Door Lock Repair Al Bada'a Dubai — Lock Repair Satwa",
        caption: "Electronic door lock repair service in Al Bada'a, Dubai by Lock Repair Satwa certified technician.",
        geo: GEO,
      },
    ],
  },

  // ── Al Satwa Location ───────────────────────────────────────────────────────
  {
    pageUrl: `${SITE_URL}/locations/al-satwa`,
    images: [
      {
        loc: `${SITE_URL}/images/shop/padlock-collection-lock-shop-satwa-dubai.webp`,
        title: 'Padlock Collection — Key Shop Al Satwa Dubai',
        caption: 'Padlock collection at Lock Repair Satwa key shop, Al Bada\'a — nearest key shop to Al Satwa, Dubai.',
        geo: GEO,
      },
      {
        loc: `${SITE_URL}/images/shop/keychains-accessories-key-shop-satwa-dubai.webp`,
        title: 'Key Accessories at Key Shop Satwa Dubai — Lock Repair Satwa',
        caption: 'Key accessories and keychains at Lock Repair Satwa key shop in Satwa, Dubai. Satwa key shop serving all area residents.',
        geo: "Al Satwa, Dubai, UAE",
      },
      {
        loc: `${SITE_URL}/images/misc/satwa-area-retail-dubai.webp`,
        title: 'Al Satwa Area Retail District Dubai — Key Shop Nearby',
        caption: 'Al Satwa area retail district in Dubai — Lock Repair Satwa key shop and locksmith serves the entire Satwa neighbourhood.',
        geo: "Al Satwa, Dubai, UAE",
      },
      {
        loc: `${SITE_URL}/images/misc/satwa-area-shop-dubai.webp`,
        title: 'Al Satwa Shops Dubai — Satwa Key Shop and Locksmith Near Me',
        caption: 'Al Satwa area shops and market in Dubai — Lock Repair Satwa key shop is 2 minutes from Al Satwa Road.',
        geo: "Al Satwa, Dubai, UAE",
      },
    ],
  },
]

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function buildXml(): string {
  const now = new Date().toISOString()

  const urlEntries = IMAGE_MAP.map(({ pageUrl, images }) => {
    const imageBlocks = images
      .map(
        ({ loc, title, caption, geo }) => `    <image:image>
      <image:loc>${escapeXml(loc)}</image:loc>
      <image:title>${escapeXml(title)}</image:title>
      <image:caption>${escapeXml(caption)}</image:caption>
      ${geo ? `<image:geo_location>${escapeXml(geo)}</image:geo_location>` : ''}
    </image:image>`,
      )
      .join('\n')

    return `  <url>
    <loc>${escapeXml(pageUrl)}</loc>
    <lastmod>${now}</lastmod>
${imageBlocks}
  </url>`
  }).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
</urlset>`
}

export function GET() {
  return new Response(buildXml(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
