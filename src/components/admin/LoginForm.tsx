'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { AlertTriangle, Loader2, Lock } from 'lucide-react'
import { loginAction } from '@/app/admin/login/actions'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-400 px-4 py-3 text-sm font-bold text-slate-900 hover:bg-amber-300 active:bg-amber-500 disabled:opacity-60 transition-colors"
    >
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Signing in…
        </>
      ) : (
        <>
          <Lock className="h-4 w-4" />
          Enter Dashboard
        </>
      )}
    </button>
  )
}

export function LoginForm() {
  const [state, formAction] = useFormState(loginAction, null)

  return (
    <form action={formAction} className="space-y-5" noValidate>
      <div className="space-y-1.5">
        <label htmlFor="admin-password" className="block text-sm font-semibold text-gray-700">
          Admin Password
        </label>
        <input
          id="admin-password"
          name="password"
          type="password"
          required
          autoFocus
          autoComplete="current-password"
          placeholder="Enter password"
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-colors"
        />
      </div>

      {state?.error && (
        <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3">
          <AlertTriangle className="h-4 w-4 shrink-0 text-red-500" />
          <p className="text-sm text-red-700">{state.error}</p>
        </div>
      )}

      <SubmitButton />
    </form>
  )
}
