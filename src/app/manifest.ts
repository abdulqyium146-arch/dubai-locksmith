// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Next.js Web App Manifest
// Generates /manifest.webmanifest automatically
//
// TODO (business owner): Supply actual icon files before going live:
//   public/icons/icon-192.png  (192×192 px PNG)
//   public/icons/icon-512.png  (512×512 px PNG)
// ─────────────────────────────────────────────────────────────────────────────
import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Lock Repair Satwa',
    short_name: 'Lock Repair',
    description: 'Professional locksmith in Dubai — open daily 7 AM–11:30 PM',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B1F3A',
    theme_color: '#0B1F3A',
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        // TODO: Replace with real icon file at public/icons/icon-192.png
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        // TODO: Replace with real icon file at public/icons/icon-512.png
      },
    ],
  }
}
