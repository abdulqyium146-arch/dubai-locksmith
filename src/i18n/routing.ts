import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'ar'] as const,
  defaultLocale: 'en',
  // 'as-needed' means the default locale (en) is served at / with no prefix.
  // The middleware does an internal *rewrite* (not a redirect) so first-time
  // visitors never see a blank screen caused by a double round-trip redirect.
  localePrefix: 'as-needed',
})

export type Locale = (typeof routing.locales)[number]
