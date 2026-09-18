import { redirect } from 'next/navigation'
import { isAdminAuthenticated } from '@/lib/admin-auth'
import { createAdminClient } from '@/utils/supabase/admin'
import { BookingsTable } from '@/components/admin/BookingsTable'
import type { Booking } from './actions'

export const dynamic = 'force-dynamic'

export default async function AdminBookingsPage() {
  if (!(await isAdminAuthenticated())) redirect('/admin/login')

  const supabase = createAdminClient()

  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return (
      <div className="p-6 sm:p-8 pt-14 lg:pt-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Bookings</h1>
        <div className="rounded-xl border border-red-200 bg-red-50 p-6">
          <p className="text-sm font-semibold text-red-700">Failed to load bookings</p>
          <p className="text-xs text-red-500 mt-1">{error.message}</p>
          <p className="text-xs text-gray-500 mt-3">
            Make sure <code className="font-mono bg-red-100 px-1 rounded">SUPABASE_SERVICE_ROLE_KEY</code> is set in your .env.local and the <code className="font-mono bg-red-100 px-1 rounded">bookings</code> table exists.
          </p>
        </div>
      </div>
    )
  }

  const bookings = (data ?? []) as Booking[]

  return (
    <div className="p-6 sm:p-8 pt-14 lg:pt-8">
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Bookings</h1>
          <p className="mt-1 text-sm text-gray-500">
            {bookings.length} total · Updates in real-time
          </p>
        </div>
      </div>

      <BookingsTable initialBookings={bookings} />
    </div>
  )
}
