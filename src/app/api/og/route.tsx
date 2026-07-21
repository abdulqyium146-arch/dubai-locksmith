// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Edge Runtime Open Graph Image Generator
// Route: GET /api/og?title=...&description=...
// ─────────────────────────────────────────────────────────────────────────────
import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'

export const runtime = 'edge'

// Image dimensions (standard OG size)
const WIDTH = 1200
const HEIGHT = 630

// Brand colours
const NAVY = '#0B1F3A'
const GOLD = '#C9A84C'
const GOLD_LIGHT = '#E8C96A'
const WHITE = '#FFFFFF'
const MUTED = '#94A3B8'

const DEFAULT_TITLE = 'Lock Repair Satwa | Locksmith in Dubai — Al Bada\'a'
const DEFAULT_DESCRIPTION =
  'Professional locksmith services across Dubai — car key duplication, door lock repair, smart key programming, emergency locksmith and more. Open daily 7 AM–11:30 PM.'
const PHONE = '+971 52 642 6161'
const RATING = '4.7 ★'
const TAGLINE = "Dubai's Professional Locksmith — Satwa & Al Bada'a"

export async function GET(request: NextRequest): Promise<ImageResponse> {
  const { searchParams } = new URL(request.url)

  const title = searchParams.get('title') ?? DEFAULT_TITLE
  const description = searchParams.get('description') ?? DEFAULT_DESCRIPTION

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: WIDTH,
          height: HEIGHT,
          backgroundColor: NAVY,
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${GOLD}22 0%, transparent 70%)`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            left: -80,
            width: 320,
            height: 320,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${GOLD}18 0%, transparent 70%)`,
          }}
        />

        {/* Gold top accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: `linear-gradient(90deg, ${GOLD} 0%, ${GOLD_LIGHT} 50%, ${GOLD} 100%)`,
          }}
        />

        {/* Main content area */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            padding: '56px 72px 48px',
          }}
        >
          {/* Business name + rating row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 32,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
              }}
            >
              {/* Key icon placeholder */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  backgroundColor: GOLD,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 24,
                }}
              >
                🔑
              </div>
              <span
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: WHITE,
                  letterSpacing: '-0.01em',
                }}
              >
                Lock Repair Satwa
              </span>
            </div>

            {/* Google Rating badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                backgroundColor: `${GOLD}22`,
                border: `1px solid ${GOLD}55`,
                borderRadius: 8,
                padding: '8px 16px',
              }}
            >
              <span style={{ fontSize: 18, color: GOLD, fontWeight: 700 }}>
                {RATING}
              </span>
              <span style={{ fontSize: 14, color: MUTED }}>Google Rating</span>
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              height: 1,
              backgroundColor: `${GOLD}33`,
              marginBottom: 40,
            }}
          />

          {/* Page title */}
          <div
            style={{
              fontSize: title.length > 50 ? 38 : 46,
              fontWeight: 800,
              color: WHITE,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: 20,
              maxWidth: 900,
            }}
          >
            {title}
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 20,
              color: MUTED,
              lineHeight: 1.5,
              maxWidth: 840,
              flex: 1,
            }}
          >
            {description.length > 120
              ? description.slice(0, 120) + '…'
              : description}
          </div>

          {/* Footer row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 40,
              paddingTop: 24,
              borderTop: `1px solid ${GOLD}33`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 16, color: GOLD, fontWeight: 600 }}>
                📞 {PHONE}
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                backgroundColor: GOLD,
                borderRadius: 8,
                padding: '10px 20px',
              }}
            >
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: NAVY,
                }}
              >
                Daily 7AM–11:30PM
              </span>
            </div>

            <span style={{ fontSize: 14, color: MUTED }}>
              {TAGLINE}
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: WIDTH,
      height: HEIGHT,
    },
  )
}
