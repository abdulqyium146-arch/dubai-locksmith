// ─────────────────────────────────────────────────────────────────────────────
// Middleware: bypass next-intl for /admin/* + locale routing for everything else
//
// Admin security is handled at the page/layout level (redirect to /admin/login
// when no session) — not here. Keeping Supabase out of the Edge Runtime
// middleware avoids incompatibilities with the new sb_publishable_ key format.
// ─────────────────────────────────────────────────────────────────────────────
import { NextResponse, type NextRequest } from 'next/server'
import createIntlMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

const handleIntl = createIntlMiddleware(routing)

const LOCALES: string[] = [...routing.locales]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // ── 1. Strip locale prefix from admin routes ──────────────────────────────
  //    localePrefix:'always' would otherwise redirect /admin/* → /en/admin/*
  for (const locale of LOCALES) {
    if (pathname.startsWith(`/${locale}/admin`)) {
      const clean = pathname.slice(locale.length + 1)
      const url = request.nextUrl.clone()
      url.pathname = clean
      return NextResponse.redirect(url)
    }
  }

  // ── 2. Admin routes — bypass next-intl, pass straight through ────────────
  //    Auth redirect (→ /admin/login) is handled by each admin page/layout.
  if (pathname.startsWith('/admin')) {
    return NextResponse.next()
  }

  // ── 3. Everything else — next-intl locale routing ─────────────────────────
  return handleIntl(request)
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', '/'],
}
