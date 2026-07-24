import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { createClient } from '@/utils/supabase/server'
import { AdminSidebar } from '@/components/admin/AdminSidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admin — Lock Repair Satwa',
  robots: { index: false, follow: false },
}

export default async function AdminLayout({ children }: { children: ReactNode }) {
  let userEmail: string | null = null

  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    userEmail = user?.email ?? null
  } catch {
    // Auth unavailable — pages handle their own redirect to /admin/login
  }

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>
        <div className="flex min-h-screen">
          {userEmail && <AdminSidebar userEmail={userEmail} />}
          <main className={`flex-1 min-w-0 ${userEmail ? 'lg:pl-60' : ''}`}>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
