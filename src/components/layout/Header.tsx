'use client'
// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Sticky Header with Mega-Menus
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { Phone, ChevronDown, X, Menu, Clock, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  BUSINESS_NAME,
  PHONE_DISPLAY,
  PHONE_HREF,
} from '@/lib/constants'
import {
  RESIDENTIAL_SERVICES,
  COMMERCIAL_SERVICES,
  AUTOMOTIVE_SERVICES,
} from '@/data/services'
import {
  LOCK_PRODUCTS,
  ELECTRONIC_LOCK_PRODUCTS,
  SAFE_PRODUCTS,
  COMMERCIAL_HARDWARE_PRODUCTS,
  PRODUCT_CATEGORY_LABELS,
} from '@/data/products'
import { locations } from '@/data/locations'
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher'

// ── Location sub-menu (top items only) ───────────────────────────────────────

const LOCATION_LINKS = locations.slice(0, 9).map((l) => ({
  label: l.name,
  href: `/locations/${l.slug}`,
}))

// ── Products mega-menu data (product labels come from data, kept as-is) ──────

const PRODUCTS_MEGA = [
  {
    categoryKey: 'locks' as const,
    label: PRODUCT_CATEGORY_LABELS['locks'],
    items: LOCK_PRODUCTS.map((p) => ({ label: p.title, href: `/products/${p.slug}`, icon: p.icon })),
  },
  {
    categoryKey: 'electronic-locks' as const,
    label: PRODUCT_CATEGORY_LABELS['electronic-locks'],
    items: ELECTRONIC_LOCK_PRODUCTS.map((p) => ({ label: p.title, href: `/products/${p.slug}`, icon: p.icon })),
  },
  {
    categoryKey: 'safes' as const,
    label: PRODUCT_CATEGORY_LABELS['safes'],
    items: SAFE_PRODUCTS.map((p) => ({ label: p.title, href: `/products/${p.slug}`, icon: p.icon })),
  },
  {
    categoryKey: 'commercial-door-hardware' as const,
    label: PRODUCT_CATEGORY_LABELS['commercial-door-hardware'],
    items: COMMERCIAL_HARDWARE_PRODUCTS.map((p) => ({ label: p.title, href: `/products/${p.slug}`, icon: p.icon })),
  },
]

// ── Simple Dropdown (for Locations) ──────────────────────────────────────────

interface DropdownProps {
  label: string
  href: string
  items: Array<{ label: string; href: string; icon?: string }>
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
  scrolled: boolean
  viewAllLabel: string
}

function NavDropdown({ label, href, items, isOpen, onToggle, onClose, scrolled, viewAllLabel }: DropdownProps) {
  const pathname = usePathname()
  const isActive = pathname.startsWith(href)
  const ref = useRef<HTMLDivElement>(null)

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
          isActive ? 'text-brand-gold' : scrolled ? 'text-foreground' : 'text-white/90',
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
          className="absolute left-0 top-full z-50 mt-2 w-64 rounded-xl border border-border bg-popover p-2 shadow-navy animate-fade-in"
        >
          <Link
            href={href}
            role="menuitem"
            onClick={onClose}
            className="mb-1 flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-brand-gold hover:bg-brand-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {viewAllLabel}
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
              {item.icon && <span aria-hidden="true" className="text-base leading-none">{item.icon}</span>}
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Mega-Menu Dropdown ────────────────────────────────────────────────────────

interface MegaMenuColumn {
  label: string
  items: Array<{ label: string; href: string; icon?: string }>
}

interface MegaMenuProps {
  label: string
  href: string
  columns: MegaMenuColumn[]
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
  scrolled: boolean
  viewAllLabel: string
}

function MegaMenuDropdown({ label, href, columns, isOpen, onToggle, onClose, scrolled, viewAllLabel }: MegaMenuProps) {
  const pathname = usePathname()
  const isActive = pathname.startsWith(href)
  const ref = useRef<HTMLDivElement>(null)

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
          isActive ? 'text-brand-gold' : scrolled ? 'text-foreground' : 'text-white/90',
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
            'absolute left-1/2 -translate-x-1/2 top-full z-50 mt-2 rounded-xl border border-border bg-popover shadow-navy animate-fade-in',
            columns.length >= 4 ? 'w-[820px]' : 'w-[640px]',
          )}
        >
          {/* Top: View All link */}
          <div className="flex items-center justify-between border-b border-border px-5 py-3">
            <Link
              href={href}
              role="menuitem"
              onClick={onClose}
              className="flex items-center gap-1.5 text-sm font-semibold text-brand-gold hover:text-brand-gold-dark focus-visible:outline-none"
            >
              {viewAllLabel}
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          {/* Columns */}
          <div className={cn(
            'grid gap-0 divide-x divide-border p-4',
            columns.length === 3 ? 'grid-cols-3' : 'grid-cols-4',
          )}>
            {columns.map((col) => (
              <div key={col.label} className="px-4 first:pl-0 last:pr-0">
                {/* Column header */}
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-brand-gold border-b border-brand-gold/20 pb-2">
                  {col.label}
                </p>
                {/* Items */}
                <ul className="space-y-0.5">
                  {col.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        role="menuitem"
                        onClick={onClose}
                        className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs text-foreground hover:bg-muted hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors"
                      >
                        {item.icon && (
                          <span aria-hidden="true" className="text-sm leading-none shrink-0">
                            {item.icon}
                          </span>
                        )}
                        <span className="leading-tight">{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// ── Mobile Accordion Section ──────────────────────────────────────────────────

interface MobileAccordionProps {
  href: string
  allLabel: string
  expandLabel: string
  collapseLabel: string
  sections: Array<{ label: string; items: Array<{ label: string; href: string; icon?: string }> }>
  isOpen: boolean
  onToggle: () => void
}

function MobileAccordion({ href, allLabel, expandLabel, collapseLabel, sections, isOpen, onToggle }: MobileAccordionProps) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Link
          href={href}
          className="flex-1 rounded-lg px-4 py-3 font-semibold text-brand-gold hover:bg-brand-gold/10"
        >
          {allLabel}
        </Link>
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          className="rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-brand-gold"
          aria-label={isOpen ? collapseLabel : expandLabel}
        >
          <ChevronDown
            className={cn('h-4 w-4 transition-transform duration-200', isOpen && 'rotate-180')}
            aria-hidden="true"
          />
        </button>
      </div>
      {isOpen && (
        <div className="ml-4 mt-1 space-y-3 pb-2">
          {sections.map((section) => (
            <div key={section.label}>
              <p className="px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand-gold/70">
                {section.label}
              </p>
              <div className="space-y-0.5">
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-muted-foreground hover:text-brand-gold hover:bg-muted"
                  >
                    {item.icon && <span aria-hidden="true">{item.icon}</span>}
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Main Header ───────────────────────────────────────────────────────────────

export function Header() {
  const pathname = usePathname()
  const t = useTranslations('nav')
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  // ── Services mega-menu data (built inside component to access t()) ──────────
  const SERVICES_MEGA = [
    {
      label: t('residentialServices'),
      items: RESIDENTIAL_SERVICES.map((s) => ({ label: s.title, href: `/services/${s.slug}`, icon: s.icon })),
    },
    {
      label: t('commercialServices'),
      items: COMMERCIAL_SERVICES.map((s) => ({ label: s.title, href: `/services/${s.slug}`, icon: s.icon })),
    },
    {
      label: t('automotiveServices'),
      items: AUTOMOTIVE_SERVICES.map((s) => ({ label: s.title, href: `/services/${s.slug}`, icon: s.icon })),
    },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
    setMobileExpanded(null)
  }, [pathname])

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

  const toggleMobileExpanded = (key: string) =>
    setMobileExpanded((prev) => (prev === key ? null : key))

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 will-change-[background-color,box-shadow] transition-[background-color,box-shadow,border-color] duration-300',
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
          aria-label={t('logoHome', { name: BUSINESS_NAME })}
        >
          <div
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gold"
          >
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
              <circle cx="13" cy="13" r="8" stroke="#0B1F3A" strokeWidth="2.5" />
              <circle cx="13" cy="13" r="3" fill="#0B1F3A" />
              <path d="M19 19l12 12" stroke="#0B1F3A" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M26 26l-2 4M28 28l4-2" stroke="#0B1F3A" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex flex-col leading-tight">
            <span
              className={cn(
                'font-heading text-base font-bold tracking-tight transition-colors',
                scrolled ? 'text-foreground' : 'text-white',
              )}
            >
              Lock Repair
            </span>
            <span className="font-heading text-xs font-semibold text-brand-gold">Satwa</span>
          </div>
        </Link>

        {/* ── Desktop Navigation ────────────────────────────────────────────── */}
        <nav aria-label={t('mainNavAriaLabel')} className="hidden items-center gap-1 lg:flex">
          {/* Services Mega-Menu */}
          <MegaMenuDropdown
            label={t('services')}
            href="/services"
            columns={SERVICES_MEGA}
            isOpen={openDropdown === 'services'}
            onToggle={() => toggleDropdown('services')}
            onClose={closeDropdown}
            scrolled={scrolled}
            viewAllLabel={t('viewAll', { label: t('services') })}
          />

          {/* Products Mega-Menu */}
          <MegaMenuDropdown
            label={t('products')}
            href="/products"
            columns={PRODUCTS_MEGA}
            isOpen={openDropdown === 'products'}
            onToggle={() => toggleDropdown('products')}
            onClose={closeDropdown}
            scrolled={scrolled}
            viewAllLabel={t('viewAll', { label: t('products') })}
          />

          {/* Locations Dropdown */}
          <NavDropdown
            label={t('locations')}
            href="/locations"
            items={LOCATION_LINKS}
            isOpen={openDropdown === 'locations'}
            onToggle={() => toggleDropdown('locations')}
            onClose={closeDropdown}
            scrolled={scrolled}
            viewAllLabel={t('viewAll', { label: t('locations') })}
          />

          {/* Book a Service — CTA nav link */}
          <Link
            href="/booking"
            className={cn(
              'rounded-md px-3 py-2 text-sm font-semibold transition-colors',
              'hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
              pathname === '/booking'
                ? 'text-brand-gold'
                : scrolled
                ? 'text-foreground'
                : 'text-white/90',
            )}
          >
            Book a Service
          </Link>

          {/* About & Contact */}
          {(
            [
              { key: 'about', href: '/about' },
              { key: 'contact', href: '/contact' },
            ] as const
          ).map(({ key, href }) => {
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
                {t(key)}
              </Link>
            )
          })}
        </nav>

        {/* ── Right-side actions ────────────────────────────────────────────── */}
        <div className="flex items-center gap-3">
          <div
            className={cn(
              'hidden items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold sm:flex',
              scrolled
                ? 'border-brand-gold/30 bg-brand-gold/10 text-brand-gold'
                : 'border-brand-gold/40 bg-brand-gold/15 text-brand-gold',
            )}
            aria-label={t('open247')}
          >
            <Clock className="h-3 w-3" aria-hidden="true" />
            {t('open247')}
          </div>

          {/* Language Switcher — desktop */}
          <LanguageSwitcher scrolled={scrolled} />

          <a
            href={PHONE_HREF}
            className={cn(
              'hidden items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors lg:flex',
              'bg-brand-gold text-brand-navy hover:bg-brand-gold-dark',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
            )}
            aria-label={t('callUs', { phone: PHONE_DISPLAY })}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>

          <button
            aria-label={mobileOpen ? t('closeMenu') : t('openMenu')}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((p) => !p)}
            className={cn(
              'rounded-md p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden',
              scrolled ? 'text-foreground hover:bg-muted' : 'text-white hover:bg-white/10',
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
          aria-label={t('mobileNavLabel')}
          aria-modal="true"
          className="fixed inset-0 top-[72px] z-40 overflow-y-auto bg-background lg:hidden"
        >
          <nav
            aria-label={t('mobileNavAriaLabel')}
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
              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
                  <Clock className="h-3.5 w-3.5 text-brand-gold" />
                  {t('open247')}
                </div>
                {/* Language Switcher — mobile */}
                <LanguageSwitcher variant="compact" />
              </div>
            </div>

            {/* Nav links */}
            <div className="py-4 space-y-1">
              <Link
                href="/"
                className="block rounded-lg px-4 py-3 font-medium text-foreground hover:bg-muted hover:text-brand-gold"
              >
                {t('home')}
              </Link>

              {/* Services accordion */}
              <MobileAccordion
                href="/services"
                allLabel={t('allServices')}
                expandLabel={t('expandSubmenu', { label: t('services') })}
                collapseLabel={t('collapseSubmenu', { label: t('services') })}
                sections={SERVICES_MEGA}
                isOpen={mobileExpanded === 'services'}
                onToggle={() => toggleMobileExpanded('services')}
              />

              {/* Products accordion */}
              <MobileAccordion
                href="/products"
                allLabel={t('allProducts')}
                expandLabel={t('expandSubmenu', { label: t('products') })}
                collapseLabel={t('collapseSubmenu', { label: t('products') })}
                sections={PRODUCTS_MEGA}
                isOpen={mobileExpanded === 'products'}
                onToggle={() => toggleMobileExpanded('products')}
              />

              {/* Locations section */}
              <div>
                <Link
                  href="/locations"
                  className="block rounded-lg px-4 py-3 font-semibold text-brand-gold hover:bg-brand-gold/10"
                >
                  {t('allLocations')}
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
                href="/booking"
                className="block rounded-lg px-4 py-3 font-semibold text-brand-gold hover:bg-brand-gold/10"
              >
                Book a Service
              </Link>
              <Link
                href="/about"
                className="block rounded-lg px-4 py-3 font-medium text-foreground hover:bg-muted hover:text-brand-gold"
              >
                {t('about')}
              </Link>
              <Link
                href="/contact"
                className="block rounded-lg px-4 py-3 font-medium text-foreground hover:bg-muted hover:text-brand-gold"
              >
                {t('contact')}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
