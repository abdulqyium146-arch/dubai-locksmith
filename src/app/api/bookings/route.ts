import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, email, service_type, area, description, preferred_time } = body

    if (!name || !phone || !service_type || !area) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Service role key bypasses RLS — never expose this to the client
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { error } = await supabase.from('bookings').insert([{
      name: String(name).slice(0, 200),
      phone: String(phone).slice(0, 50),
      email: email ? String(email).slice(0, 200) : null,
      service_type: String(service_type).slice(0, 200),
      area: String(area).slice(0, 100),
      description: description ? String(description).slice(0, 2000) : null,
      preferred_time: preferred_time ? String(preferred_time).slice(0, 200) : null,
      status: 'pending',
    }])

    if (error) {
      console.error('[bookings API]', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
