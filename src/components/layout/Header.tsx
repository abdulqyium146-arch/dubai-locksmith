'use client'
// ─────────────────────────────────────────────────────────────────────────────
// Car Key Service DXB — Sticky Header
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, ChevronDown, X, Menu, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  BUSINESS_NAME,
  PHONE_DISPLAY,
  PHONE_HREF,
} from '@/lib/constants'
import { services } from '@/data/services'
import { locations } from '@/data/locations'

// ── Service & Location sub-menus (top items only) ────────────────────────────

const SERVICE_LINKS = services.slice(0, 8).map((s) => ({
  label: s.title,
  href: `/services/${s.slug}`,
  icon: s.icon,
}))

const LOCATION_LINKS = locations.slice(0, 9).map((l) => ({
  label: l.name,
  href: `/locations/${l.slug}`,
}))

// ── Dropdown Menu ─────────────────────────────────────────────────────────────

interface DropdownProps {
  label: string
  href: string
  items: Array<{ label: string; href: string; icon?: string }>
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
}

function NavDropdown({ label, href, items, isOpen, onToggle, onClose }: DropdownProps) {
  const pathname = usePathname()
  const isActive = pathname.startsWith(href)
  const ref = useRef<HTMLDivElement>(null)

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose()
      }
    }
    if (isOpen) document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [isOpen, onClose])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={cn(
          'flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors',
          'hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          isActive ? 'text-brand-gold' : 'text-foreground',
        )}
      >
        {label}
        <ChevronDown
          className={cn('h-3.5 w-3.5 transition-transform duration-200', isOpen && 'rotate-180')}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          className={cn(
            'absolute left-0 top-full z-50 mt-2 w-64 rounded-xl border border-border bg-popover p-2 shadow-navy',
            'animate-fade-in',
          )}
        >
          {/* "View all" link */}
          <Link
            href={href}
            role="menuitem"
            onClick={onClose}
            className="mb-1 flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-brand-gold hover:bg-brand-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            View all {label}
            <ChevronDown className="h-3.5 w-3.5 -rotate-90" aria-hidden="true" />
          </Link>

          <div className="my-1 h-px bg-border" role="separator" />

          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              onClick={onClose}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-muted hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.icon && (
                <span aria-hidden="true" className="text-base leading-none">
                  {item.icon}
                </span>
              )}
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Main Header ───────────────────────────────────────────────────────────────

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  // Detect scroll for backdrop blur
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on navigation
  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const toggleDropdown = (key: string) =>
    setOpenDropdown((prev) => (prev === key ? null : key))

  const closeDropdown = () => setOpenDropdown(null)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/95 shadow-sm backdrop-blur-md'
          : 'bg-brand-navy',
      )}
      style={{ height: 'var(--header-height)' }}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* ── Logo ──────────────────────────────────────────────────────────── */}
        <Link
          href="/"
          className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
          aria-label={`${BUSINESS_NAME} — Home`}
        >
          {/* SVG Logo mark */}
          <div
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gold"
          >
            <svg
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
            >
              <circle cx="13" cy="13" r="8" stroke="#0B1F3A" strokeWidth="2.5" />
              <circle cx="13" cy="13" r="3" fill="#0B1F3A" />
              <path
                d="M19 19l12 12"
                stroke="#0B1F3A"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M26 26l-2 4M28 28l4-2"
                stroke="#0B1F3A"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Business name */}
          <div className="flex flex-col leading-tight">
            <span
              className={cn(
                'font-heading text-base font-bold tracking-tight transition-colors',
                scrolled ? 'text-foreground' : 'text-white',
              )}
            >
              Car Key Service
            </span>
            <span className="font-heading text-xs font-semibold text-brand-gold">
              DXB
            </span>
          </div>
        </Link>

        {/* ── Desktop Navigation ────────────────────────────────────────────── */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          <NavDropdown
            label="Services"
            href="/services"
            items={SERVICE_LINKS}
            isOpen={openDropdown === 'services'}
            onToggle={() => toggleDropdown('services')}
            onClose={closeDropdown}
          />

          <NavDropdown
            label="Locations"
            href="/locations"
            items={LOCATION_LINKS}
            isOpen={openDropdown === 'locations'}
            onToggle={() => toggleDropdown('locations')}
            onClose={closeDropdown}
          />

          {['About', 'Contact'].map((item) => {
            const href = `/${item.toLowerCase()}`
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  'hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  isActive
                    ? 'text-brand-gold'
                    : scrolled
                    ? 'text-foreground'
                    : 'text-white/90',
                )}
              >
                {item}
              </Link>
            )
          })}
        </nav>

        {/* ── Right-side actions ────────────────────────────────────────────── */}
        <div className="flex items-center gap-3">
          {/* 24/7 indicator — always visible */}
          <div
            className={cn(
              'hidden items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold sm:flex',
              scrolled
                ? 'border-brand-gold/30 bg-brand-gold/10 text-brand-gold'
                : 'border-brand-gold/40 bg-brand-gold/15 text-brand-gold',
            )}
            aria-label="Open 24 hours, 7 days a week"
          >
            <Clock className="h-3 w-3" aria-hidden="true" />
            Open 24/7
          </div>

          {/* Click-to-call — always visible on desktop */}
          <a
            href={PHONE_HREF}
            className={cn(
              'hidden items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors lg:flex',
              'bg-brand-gold text-brand-navy hover:bg-brand-gold-dark',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
            )}
            aria-label={`Call us: ${PHONE_DISPLAY}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>

          {/* Mobile hamburger */}
          <button
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((p) => !p)}
            className={cn(
              'rounded-md p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden',
              scrolled
                ? 'text-foreground hover:bg-muted'
                : 'text-white hover:bg-white/10',
            )}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ──────────────────────────────────────────────────────── */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-label="Mobile navigation menu"
          aria-modal="true"
          className="fixed inset-0 top-[72px] z-40 overflow-y-auto bg-background lg:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto max-w-7xl divide-y divide-border px-4 pb-8 pt-4"
          >
            {/* CTA row */}
            <div className="flex flex-col gap-3 pb-6">
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 rounded-lg bg-brand-gold px-6 py-3.5 font-semibold text-brand-navy"
              >
                <Phone className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
              <div className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="h-3.5 w-3.5 text-brand-gold" />
                Available 24/7 — Emergency Service
              </div>
            </div>

            {/* Nav links */}
            <div className="py-4 space-y-1">
              <Link
                href="/"
                className="block rounded-lg px-4 py-3 font-medium text-foreground hover:bg-muted hover:text-brand-gold"
              >
                Home
              </Link>

              {/* Services section */}
              <div>
                <Link
                  href="/services"
                  className="block rounded-lg px-4 py-3 font-semibold text-brand-gold hover:bg-brand-gold/10"
                >
                  All Services
                </Link>
                <div className="ml-4 mt-1 space-y-1">
                  {SERVICE_LINKS.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-muted-foreground hover:text-brand-gold hover:bg-muted"
                    >
                      <span aria-hidden="true">{s.icon}</span>
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Locations section */}
              <div>
                <Link
                  href="/locations"
                  className="block rounded-lg px-4 py-3 font-semibold text-brand-gold hover:bg-brand-gold/10"
                >
                  All Locations
                </Link>
                <div className="ml-4 mt-1 grid grid-cols-2 gap-1">
                  {LOCATION_LINKS.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-brand-gold hover:bg-muted"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/about"
                className="block rounded-lg px-4 py-3 font-medium text-foreground hover:bg-muted hover:text-brand-gold"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block rounded-lg px-4 py-3 font-medium text-foreground hover:bg-muted hover:text-brand-gold"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
