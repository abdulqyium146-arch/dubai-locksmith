'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/utils/supabase/server'

export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled'

export type Booking = {
  id: string
  name: string
  phone: string
  service_type: string
  area: string
  description: string | null
  preferred_time: string | null
  status: BookingStatus
  created_at: string
}

export async function updateBookingStatus(id: string, status: BookingStatus) {
  const supabase = await createClient()
  const { error } = await supabase.from('bookings').update({ status }).eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/admin')
  revalidatePath('/admin/bookings')
}

export async function deleteBooking(id: string) {
  const supabase = await createClient()
  const { error } = await supabase.from('bookings').delete().eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/admin')
  revalidatePath('/admin/bookings')
}
