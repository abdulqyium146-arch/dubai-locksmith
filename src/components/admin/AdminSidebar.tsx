'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  CalendarDays,
  LogOut,
  Menu,
  X,
  Lock,
} from 'lucide-react'

const NAV = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { href: '/admin/bookings', label: 'Bookings', icon: CalendarDays, exact: false },
]

export function AdminSidebar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  function isActive(href: string, exact: boolean) {
    return exact ? pathname === href : pathname.startsWith(href)
  }

  const NavLinks = () => (
    <nav className="flex-1 px-3 py-4 space-y-0.5">
      {NAV.map(({ href, label, icon: Icon, exact }) => (
        <Link
          key={href}
          href={href}
          onClick={() => setOpen(false)}
          className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
            isActive(href, exact)
              ? 'bg-amber-400/20 text-amber-400'
              : 'text-slate-400 hover:bg-white/5 hover:text-white'
          }`}
        >
          <Icon className="h-4 w-4 shrink-0" />
          {label}
        </Link>
      ))}
    </nav>
  )

  const SidebarInner = () => (
    <div className="flex flex-col h-full">
      {/* Brand */}
      <div className="px-4 py-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400 shrink-0">
            <Lock className="h-5 w-5 text-slate-900" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold text-white leading-none truncate">Lock Repair Satwa</p>
            <p className="text-xs text-amber-400 leading-none mt-1">Admin Dashboard</p>
          </div>
        </div>
      </div>

      <NavLinks />

      {/* Logout */}
      <div className="px-3 py-4 border-t border-white/10">
        <Link
          href="/admin/logout"
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-400 hover:bg-white/5 hover:text-white transition-colors"
        >
          <LogOut className="h-4 w-4 shrink-0" />
          Sign Out
        </Link>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-50 flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white shadow-lg lg:hidden"
        aria-label="Open admin menu"
      >
        <Menu className="h-4 w-4" />
      </button>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-60 bg-slate-900 transition-transform duration-200 ease-in-out lg:hidden ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Admin navigation"
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-white"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
        <SidebarInner />
      </aside>

      {/* Desktop sidebar */}
      <aside
        className="fixed inset-y-0 left-0 hidden w-60 bg-slate-900 lg:flex lg:flex-col"
        aria-label="Admin navigation"
      >
        <SidebarInner />
      </aside>
    </>
  )
}
