import { type NextRequest, NextResponse } from 'next/server'
import { clearAdminSession } from '@/lib/admin-auth'

export async function GET(req: NextRequest) {
  await clearAdminSession()
  return NextResponse.redirect(new URL('/admin/login', req.url))
}
