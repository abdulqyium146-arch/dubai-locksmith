'use client'

import { useEffect, useState, useTransition } from 'react'
import { Phone, MessageCircle, Trash2, Search, Bell } from 'lucide-react'
import { createClient } from '@/utils/supabase/client'
import {
  updateBookingStatus,
  deleteBooking,
  type Booking,
  type BookingStatus,
} from '@/app/admin/bookings/actions'

const STATUS_LABELS: Record<BookingStatus, string> = {
  pending: 'Pending',
  confirmed: 'Confirmed',
  completed: 'Completed',
  cancelled: 'Cancelled',
}

const STATUS_STYLES: Record<BookingStatus, string> = {
  pending: 'bg-amber-100 text-amber-700 ring-amber-200',
  confirmed: 'bg-blue-100 text-blue-700 ring-blue-200',
  completed: 'bg-green-100 text-green-700 ring-green-200',
  cancelled: 'bg-red-100 text-red-700 ring-red-200',
}

const FILTER_TABS: { value: BookingStatus | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'pending', label: 'Pending' },
  { value: 'confirmed', label: 'Confirmed' },
  { value: 'completed', label: 'Completed' },
  { value: 'cancelled', label: 'Cancelled' },
]

function formatDate(iso: string) {
  return new Date(iso).toLocaleString('en-AE', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })
}

function formatPhone(phone: string) {
  // Normalise for WhatsApp link
  return phone.replace(/[\s\-()]/g, '')
}

interface Props {
  initialBookings: Booking[]
}

export function BookingsTable({ initialBookings }: Props) {
  const [bookings, setBookings] = useState<Booking[]>(initialBookings)
  const [filter, setFilter] = useState<BookingStatus | 'all'>('all')
  const [search, setSearch] = useState('')
  const [newCount, setNewCount] = useState(0)
  const [, startTransition] = useTransition()

  // ── Supabase Realtime — live updates ──────────────────────────────────────
  useEffect(() => {
    const supabase = createClient()

    const channel = supabase
      .channel('bookings-realtime')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'bookings' },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setBookings((prev) => [payload.new as Booking, ...prev])
            setNewCount((c) => c + 1)
          } else if (payload.eventType === 'UPDATE') {
            setBookings((prev) =>
              prev.map((b) => (b.id === payload.new.id ? (payload.new as Booking) : b))
            )
          } else if (payload.eventType === 'DELETE') {
            setBookings((prev) => prev.filter((b) => b.id !== (payload.old as Booking).id))
          }
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  // ── Optimistic status update ──────────────────────────────────────────────
  function handleStatusChange(booking: Booking, newStatus: BookingStatus) {
    const prev = booking.status
    setBookings((bs) => bs.map((b) => (b.id === booking.id ? { ...b, status: newStatus } : b)))

    startTransition(async () => {
      try {
        await updateBookingStatus(booking.id, newStatus)
      } catch {
        // Revert on error
        setBookings((bs) => bs.map((b) => (b.id === booking.id ? { ...b, status: prev } : b)))
      }
    })
  }

  // ── Optimistic delete ─────────────────────────────────────────────────────
  function handleDelete(id: string) {
    if (!confirm('Delete this booking? This cannot be undone.')) return
    setBookings((bs) => bs.filter((b) => b.id !== id))
    startTransition(async () => {
      await deleteBooking(id)
    })
  }

  // ── Filter + search ───────────────────────────────────────────────────────
  const visible = bookings.filter((b) => {
    const matchStatus = filter === 'all' || b.status === filter
    const q = search.toLowerCase()
    const matchSearch =
      !q ||
      b.name.toLowerCase().includes(q) ||
      b.phone.includes(q) ||
      b.service_type.toLowerCase().includes(q) ||
      b.area.toLowerCase().includes(q)
    return matchStatus && matchSearch
  })

  const counts = bookings.reduce(
    (acc, b) => {
      acc[b.status] = (acc[b.status] ?? 0) + 1
      return acc
    },
    {} as Record<BookingStatus, number>
  )

  return (
    <div>
      {/* New booking toast */}
      {newCount > 0 && (
        <div className="mb-4 flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
          <Bell className="h-4 w-4 text-amber-600 shrink-0" />
          <p className="text-sm font-semibold text-amber-700">
            {newCount} new booking{newCount > 1 ? 's' : ''} received
          </p>
          <button
            onClick={() => setNewCount(0)}
            className="ml-auto text-xs text-amber-600 hover:text-amber-800 font-medium"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Toolbar */}
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Search */}
        <div className="relative max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="search"
            placeholder="Search name, phone, service…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20"
          />
        </div>

        <p className="text-sm text-gray-400 shrink-0">
          {visible.length} of {bookings.length} bookings
        </p>
      </div>

      {/* Filter tabs */}
      <div className="mb-4 flex flex-wrap gap-2">
        {FILTER_TABS.map(({ value, label }) => {
          const count = value === 'all' ? bookings.length : (counts[value as BookingStatus] ?? 0)
          return (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                filter === value
                  ? 'bg-slate-900 text-white'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900'
              }`}
            >
              {label}
              <span
                className={`rounded-full px-1.5 py-0.5 text-xs font-bold ${
                  filter === value ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                }`}
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        {visible.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-gray-400 text-sm">
              {search || filter !== 'all' ? 'No bookings match your filters.' : 'No bookings yet.'}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50 text-left">
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">Date</th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">Customer</th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">Service</th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">Area</th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">Notes</th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">Status</th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {visible.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50/50 transition-colors">
                    {/* Date */}
                    <td className="px-4 py-4 whitespace-nowrap">
                      <p className="text-xs text-gray-500">{formatDate(booking.created_at)}</p>
                    </td>

                    {/* Customer */}
                    <td className="px-4 py-4">
                      <p className="font-semibold text-gray-900">{booking.name}</p>
                      <a
                        href={`tel:${booking.phone}`}
                        className="text-xs text-gray-500 hover:text-amber-600 transition-colors"
                      >
                        {booking.phone}
                      </a>
                      {booking.preferred_time && (
                        <p className="text-xs text-gray-400 mt-0.5">⏰ {booking.preferred_time}</p>
                      )}
                    </td>

                    {/* Service */}
                    <td className="px-4 py-4">
                      <p className="text-gray-800 font-medium leading-tight">{booking.service_type}</p>
                    </td>

                    {/* Area */}
                    <td className="px-4 py-4 whitespace-nowrap">
                      <p className="text-gray-700">{booking.area}</p>
                    </td>

                    {/* Notes */}
                    <td className="px-4 py-4 max-w-[200px]">
                      {booking.description ? (
                        <p className="text-xs text-gray-500 line-clamp-2">{booking.description}</p>
                      ) : (
                        <span className="text-xs text-gray-300">—</span>
                      )}
                    </td>

                    {/* Status */}
                    <td className="px-4 py-4 whitespace-nowrap">
                      <select
                        value={booking.status}
                        onChange={(e) =>
                          handleStatusChange(booking, e.target.value as BookingStatus)
                        }
                        className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 focus:outline-none cursor-pointer ${
                          STATUS_STYLES[booking.status]
                        }`}
                        aria-label={`Change status for booking from ${booking.name}`}
                      >
                        {(Object.keys(STATUS_LABELS) as BookingStatus[]).map((s) => (
                          <option key={s} value={s}>
                            {STATUS_LABELS[s]}
                          </option>
                        ))}
                      </select>
                    </td>

                    {/* Actions */}
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <a
                          href={`tel:${booking.phone}`}
                          className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                          title={`Call ${booking.name}`}
                          aria-label={`Call ${booking.name}`}
                        >
                          <Phone className="h-3.5 w-3.5" />
                        </a>
                        <a
                          href={`https://wa.me/${formatPhone(booking.phone)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
                          title={`WhatsApp ${booking.name}`}
                          aria-label={`WhatsApp ${booking.name}`}
                        >
                          <MessageCircle className="h-3.5 w-3.5" />
                        </a>
                        <button
                          onClick={() => handleDelete(booking.id)}
                          className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
                          title="Delete booking"
                          aria-label={`Delete booking from ${booking.name}`}
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
