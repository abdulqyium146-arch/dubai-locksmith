import { createHash } from 'crypto'
import { cookies } from 'next/headers'

const COOKIE = 'admin_session'

function sessionToken() {
  const pw = process.env.ADMIN_PASSWORD ?? 'changeme'
  return createHash('sha256').update(pw + '_lrs_admin_v1').digest('hex')
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const jar = await cookies()
  return jar.get(COOKIE)?.value === sessionToken()
}

export async function setAdminSession(): Promise<void> {
  const jar = await cookies()
  jar.set(COOKIE, sessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 30,
    path: '/admin',
  })
}

export async function clearAdminSession(): Promise<void> {
  const jar = await cookies()
  jar.delete(COOKIE)
}
