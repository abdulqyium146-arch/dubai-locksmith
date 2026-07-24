import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { isAdminAuthenticated } from '@/lib/admin-auth'
import { AdminSidebar } from '@/components/admin/AdminSidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admin — Lock Repair Satwa',
  robots: { index: false, follow: false },
}

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const authenticated = await isAdminAuthenticated()

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>
        <div className="flex min-h-screen">
          {authenticated && <AdminSidebar />}
          <main className={`flex-1 min-w-0 ${authenticated ? 'lg:pl-60' : ''}`}>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
