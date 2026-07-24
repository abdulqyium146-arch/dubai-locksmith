import { Lock } from 'lucide-react'
import { LoginForm } from '@/components/admin/LoginForm'

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-sm">
        {/* Brand */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900">
            <Lock className="h-7 w-7 text-amber-400" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
          <p className="mt-1 text-sm text-gray-500">Lock Repair Satwa · Booking Dashboard</p>
        </div>

        {/* Login card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <LoginForm />
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          Secure admin access — Lock Repair Satwa
        </p>
      </div>
    </div>
  )
}
