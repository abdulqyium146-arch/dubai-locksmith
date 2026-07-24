// ─────────────────────────────────────────────────────────────────────────────
// Middleware: auth guard for /admin/* + next-intl for everything else
//
// Problem: localePrefix:'always' in next-intl redirects /admin/* → /en/admin/*
// Fix:  1. Strip locale prefix from admin routes first
//       2. Check /admin first — before next-intl ever runs
//       3. Null-safe Supabase (gracefully handles missing env vars)
// ─────────────────────────────────────────────────────────────────────────────
import { NextResponse, type NextRequest } from 'next/server'
import createIntlMiddleware from 'next-intl/middleware'
import { createServerClient } from '@supabase/ssr'
import { routing } from './i18n/routing'

const handleIntl = createIntlMiddleware(routing)

// All supported locales — used to strip accidental locale prefix on admin routes
const LOCALES: string[] = [...routing.locales]

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // ── 1. Strip locale prefix if someone hit /en/admin/* or /ar/admin/* ──────
  //    next-intl redirected them there; bring them back to /admin/*
  for (const locale of LOCALES) {
    if (pathname.startsWith(`/${locale}/admin`)) {
      const clean = pathname.slice(locale.length + 1) // e.g. /en/admin/login → /admin/login
      const url = request.nextUrl.clone()
      url.pathname = clean
      return NextResponse.redirect(url)
    }
  }

  // ── 2. Admin routes — auth guard ──────────────────────────────────────────
  if (pathname.startsWith('/admin')) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

    // If env vars are absent (e.g. not set in Vercel), guard still works:
    // anyone hitting a non-login admin page gets bounced to login.
    if (!supabaseUrl || !supabaseKey) {
      if (pathname !== '/admin/login') {
        const url = request.nextUrl.clone()
        url.pathname = '/admin/login'
        return NextResponse.redirect(url)
      }
      return NextResponse.next()
    }

    // Build a mutable response so Supabase can refresh session cookies
    let res = NextResponse.next({ request })

    const supabase = createServerClient(supabaseUrl, supabaseKey, {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (toSet) => {
          toSet.forEach(({ name, value }) => request.cookies.set(name, value))
          res = NextResponse.next({ request })
          toSet.forEach(({ name, value, options }) =>
            res.cookies.set(name, value, options)
          )
        },
      },
    })

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user && pathname !== '/admin/login') {
        const url = request.nextUrl.clone()
        url.pathname = '/admin/login'
        return NextResponse.redirect(url)
      }
      if (user && pathname === '/admin/login') {
        const url = request.nextUrl.clone()
        url.pathname = '/admin'
        return NextResponse.redirect(url)
      }
    } catch {
      // Auth check failed — redirect to login rather than crashing
      if (pathname !== '/admin/login') {
        const url = request.nextUrl.clone()
        url.pathname = '/admin/login'
        return NextResponse.redirect(url)
      }
    }

    return res
  }

  // ── 3. Everything else — next-intl locale routing ────────────────────────
  return handleIntl(request)
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', '/'],
}
