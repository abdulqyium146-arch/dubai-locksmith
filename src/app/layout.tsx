import type { ReactNode } from 'react'
import './globals.css'

// Minimal root layout — locale routes override html/body via [locale]/layout.tsx
// Admin routes override via admin/layout.tsx
// This wrapper ensures Next.js always has a valid document shell.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children
}
