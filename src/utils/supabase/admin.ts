import { createClient } from '@supabase/supabase-js'

export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
  // Service role key bypasses RLS — only used server-side in admin routes
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  })
}
