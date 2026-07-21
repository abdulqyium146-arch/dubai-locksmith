import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Lock Repair Satwa',
    short_name: 'Lock Repair',
    description: 'Professional locksmith in Dubai — open daily 24/7',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B1F3A',
    theme_color: '#0B1F3A',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
