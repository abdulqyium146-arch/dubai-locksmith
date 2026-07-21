// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Root Layout
// ─────────────────────────────────────────────────────────────────────────────
import type { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileFloatingCTA } from '@/components/layout/MobileFloatingCTA'
import { LocalBusinessSchema } from '@/components/schema/LocalBusinessSchema'

import {
  BUSINESS_NAME,
  BUSINESS_TAGLINE,
  DEFAULT_META_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  PHONE_DISPLAY,
  SITE_URL,
} from '@/lib/constants'

// ── Fonts ─────────────────────────────────────────────────────────────────────

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-heading',
})

// ── Metadata ──────────────────────────────────────────────────────────────────

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
    'key duplication Dubai',
    'key cutting Dubai',
    'key maker Dubai',
    'locksmith near me Dubai',
    'duplicate key near me',
    'key shop Satwa',
    'locksmith Satwa',
    'car key maker Satwa',
    'key duplication Satwa',
    'door lock repair Dubai',
    'emergency locksmith Dubai',
    "locksmith Al Bada'a",
    'key cutting near me',
    'car key repair Dubai',
    'smart lock Dubai',
    'lock change Dubai',
  ],
  authors: [{ name: BUSINESS_NAME, url: SITE_URL }],
  creator: BUSINESS_NAME,
  publisher: BUSINESS_NAME,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    title: `${BUSINESS_NAME} | ${BUSINESS_TAGLINE}`,
    description: DEFAULT_META_DESCRIPTION,
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
    title: `${BUSINESS_NAME} | ${BUSINESS_TAGLINE}`,
    description: DEFAULT_META_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', type: 'image/png' }],
    shortcut: '/favicon.ico',
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
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: 'MTOWRhySJi7QRv2vRvrdz58Tvfev6NJGN9ki4DEJEkg',
  },
  other: {
    'geo.region': 'AE-DU',
    'geo.placename': "Al Bada'a, Dubai",
    'geo.position': '25.23341473023507;55.275106874155064',
    ICBM: '25.23341473023507, 55.275106874155064',
    'description:ar': 'لوك ريبير ساتوا — محل مفاتيح ونسخ مفاتيح في ساتوا دبي. نسخ مفاتيح السيارات والأبواب، إصلاح الأقفال، خدمة 24/7. اتصل بنا: 52 642 6161 971+',
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

// ── Root Layout ───────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to key third-party origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Telephone schema micro-data */}
        <meta name="telephone" content={PHONE_DISPLAY} />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground">
        {/* Accessibility: skip to main content */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Structured data — emitted on every page */}
        <LocalBusinessSchema />

        {/* Sticky header */}
        <Header />

        {/* Page content */}
        <main id="main-content" tabIndex={-1} className="outline-none">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Mobile floating CTA bar */}
        <MobileFloatingCTA />
      </body>
    </html>
  )
}
