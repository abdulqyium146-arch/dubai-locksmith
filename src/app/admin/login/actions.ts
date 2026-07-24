'use server'

import { redirect } from 'next/navigation'
import { setAdminSession } from '@/lib/admin-auth'

export type LoginState = { error: string } | null

export async function loginAction(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const password = (formData.get('password') as string)?.trim()

  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return { error: 'Incorrect password. Please try again.' }
  }

  await setAdminSession()
  redirect('/admin')
}
