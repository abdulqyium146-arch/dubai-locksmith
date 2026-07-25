import type { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'
import dynamic from 'next/dynamic'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LocalBusinessSchema } from '@/components/schema/LocalBusinessSchema'
import {
  BUSINESS_NAME,
  BUSINESS_TAGLINE,
  DEFAULT_META_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  PHONE_DISPLAY,
  SITE_URL,
} from '@/lib/constants'

// Skip SSR for this component — it uses useState/useEffect for a slide-in animation
// and has no SEO value. Avoids React hydration mismatch (#418/#423).
const MobileFloatingCTA = dynamic(
  () => import('@/components/layout/MobileFloatingCTA').then((m) => m.MobileFloatingCTA),
  { ssr: false },
)

// ── English Fonts ─────────────────────────────────────────────────────────────

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Headings only — 600 (semibold), 700 (bold), 800 (extrabold used in H1s)
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
})

// ── Root Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS_NAME} | ${BUSINESS_TAGLINE}`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description: DEFAULT_META_DESCRIPTION,
  keywords: [
    'locksmith Dubai',
    'lock repair Satwa',
    'key maker near me',
    'key duplication service',
    'key cutting Dubai',
    'key maker Dubai',
    'locksmith near me Dubai',
    'duplicate key near me',
    'key shop Satwa',
    'car key maker Satwa',
    'door lock repair Dubai',
    'emergency locksmith Dubai',
    'smart lock Dubai',
    'lock change Dubai',
  ],
  authors: [{ name: BUSINESS_NAME, url: SITE_URL }],
  creator: BUSINESS_NAME,
  publisher: BUSINESS_NAME,
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    siteName: BUSINESS_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${BUSINESS_NAME} — Dubai's Professional Locksmith in Al Bada'a`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'MTOWRhySJi7QRv2vRvrdz58Tvfev6NJGN9ki4DEJEkg',
  },
  other: {
    'geo.region': 'AE-DU',
    'geo.placename': "Al Bada'a, Dubai",
    'geo.position': '25.23341473023507;55.275106874155064',
    ICBM: '25.23341473023507, 55.275106874155064',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0B1F3A' },
  ],
}

// ── Layout ────────────────────────────────────────────────────────────────────

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${inter.variable} ${poppins.variable}`}
      style={{ backgroundColor: '#0B1F3A' }}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="telephone" content={PHONE_DISPLAY} />
        <link rel="alternate" hrefLang="en" href={SITE_URL} />
        <link rel="alternate" hrefLang="x-default" href={SITE_URL} />
      </head>
      <body suppressHydrationWarning className="min-h-screen bg-background font-sans text-foreground">
        <>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>

          <LocalBusinessSchema />

          <Header />

          <main id="main-content" tabIndex={-1} className="outline-none">
            {children}
          </main>

          <Footer />

          <MobileFloatingCTA />
        </>
      </body>
    </html>
  )
}
