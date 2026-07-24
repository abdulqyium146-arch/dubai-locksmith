import { redirect } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, Phone, MessageCircle } from 'lucide-react'
import { isAdminAuthenticated } from '@/lib/admin-auth'
import { createAdminClient } from '@/utils/supabase/admin'
import { StatsCards } from '@/components/admin/StatsCards'
import type { Booking } from '@/app/admin/bookings/actions'

export default async function AdminDashboard() {
  if (!(await isAdminAuthenticated())) redirect('/admin/login')

  const supabase = createAdminClient()

  const { data: all } = await supabase
    .from('bookings')
    .select('id, status, created_at')
    .order('created_at', { ascending: false })

  const bookings = all ?? []
  const todayStr = new Date().toDateString()

  const total = bookings.length
  const pending = bookings.filter((b) => b.status === 'pending').length
  const today = bookings.filter((b) => new Date(b.created_at).toDateString() === todayStr).length
  const completed = bookings.filter((b) => b.status === 'completed').length

  const { data: recent } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(6)

  const recentBookings = (recent ?? []) as Booking[]

  function statusBadge(status: string) {
    const map: Record<string, string> = {
      pending: 'bg-amber-100 text-amber-700',
      confirmed: 'bg-blue-100 text-blue-700',
      completed: 'bg-green-100 text-green-700',
      cancelled: 'bg-red-100 text-red-700',
    }
    return map[status] ?? 'bg-gray-100 text-gray-600'
  }

  return (
    <div className="p-6 sm:p-8 pt-14 lg:pt-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">Lock Repair Satwa · Booking Management</p>
      </div>

      <StatsCards total={total} pending={pending} today={today} completed={completed} />

      <div className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">Recent Bookings</h2>
          <Link
            href="/admin/bookings"
            className="flex items-center gap-1 text-sm font-semibold text-amber-600 hover:text-amber-700"
          >
            View all
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {recentBookings.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-200 bg-white p-12 text-center">
            <p className="text-gray-400 text-sm">No bookings yet. Share your booking page to start receiving requests.</p>
            <Link
              href="/en/booking"
              target="_blank"
              className="mt-3 inline-block text-sm font-semibold text-amber-600 hover:underline"
            >
              View booking page →
            </Link>
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50 text-left">
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">Customer</th>
                  <th className="hidden px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:table-cell">Service</th>
                  <th className="hidden px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 md:table-cell">Area</th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">Status</th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {recentBookings.map((b) => (
                  <tr key={b.id} className="hover:bg-gray-50/50">
                    <td className="px-4 py-3">
                      <p className="font-semibold text-gray-900">{b.name}</p>
                      <p className="text-xs text-gray-500">{b.phone}</p>
                    </td>
                    <td className="hidden px-4 py-3 text-gray-700 sm:table-cell">{b.service_type}</td>
                    <td className="hidden px-4 py-3 text-gray-600 md:table-cell">{b.area}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${statusBadge(b.status)}`}>
                        {b.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        <a
                          href={`tel:${b.phone}`}
                          className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"
                          aria-label={`Call ${b.name}`}
                        >
                          <Phone className="h-3 w-3" />
                        </a>
                        <a
                          href={`https://wa.me/${b.phone.replace(/[\s\-()]/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-7 w-7 items-center justify-center rounded-lg bg-green-50 text-green-600 hover:bg-green-100"
                          aria-label={`WhatsApp ${b.name}`}
                        >
                          <MessageCircle className="h-3 w-3" />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <h2 className="text-base font-bold text-gray-900 mb-4">Quick Links</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/en/booking"
            target="_blank"
            className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:border-amber-300 hover:text-amber-700 transition-colors"
          >
            → Customer Booking Page
          </Link>
          <Link
            href="/admin/bookings"
            className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:border-amber-300 hover:text-amber-700 transition-colors"
          >
            → All Bookings
          </Link>
          <Link
            href="/en/services"
            target="_blank"
            className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:border-amber-300 hover:text-amber-700 transition-colors"
          >
            → Services Page
          </Link>
        </div>
      </div>
    </div>
  )
}
