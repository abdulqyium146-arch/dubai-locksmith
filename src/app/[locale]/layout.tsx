import type { ReactNode } from 'react'
import { Suspense } from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins, Cairo } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'

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
import { routing } from '@/i18n/routing'
import type { Locale } from '@/i18n/routing'

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

// ── Arabic Font ───────────────────────────────────────────────────────────────

// 400 for Arabic body, 700 for Arabic headings
const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-cairo',
})

// ── Params type ───────────────────────────────────────────────────────────────

interface LocaleLayoutProps {
  children: ReactNode
  params: Promise<{ locale: string }>
}

// ── Generate static params for all locales ────────────────────────────────────

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

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
    // Arabic keywords
    'لوكسميث دبي',
    'نسخ مفاتيح دبي',
    'إصلاح أقفال دبي',
    'مفاتيح سيارات دبي',
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

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params

  if (!routing.locales.includes(locale as Locale)) {
    notFound()
  }

  setRequestLocale(locale)

  const messages = await getMessages()
  const isRtl = locale === 'ar'
  const dir = isRtl ? 'rtl' : 'ltr'

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${inter.variable} ${poppins.variable} ${cairo.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="telephone" content={PHONE_DISPLAY} />
        {/* hreflang alternates — en has no prefix with localePrefix:'as-needed' */}
        <link rel="alternate" hrefLang="en" href={SITE_URL} />
        <link rel="alternate" hrefLang="ar" href={`${SITE_URL}/ar`} />
        <link rel="alternate" hrefLang="x-default" href={SITE_URL} />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <a href="#main-content" className="skip-link">
            {isRtl ? 'انتقل إلى المحتوى الرئيسي' : 'Skip to main content'}
          </a>

          <LocalBusinessSchema />

          <Header />

          <main id="main-content" tabIndex={-1} className="outline-none">
            <Suspense>{children}</Suspense>
          </main>

          <Footer />

          <MobileFloatingCTA />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
