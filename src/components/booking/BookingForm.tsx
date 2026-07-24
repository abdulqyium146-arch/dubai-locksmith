'use client'

import { useState } from 'react'
import { Phone, MessageCircle, CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { PHONE_HREF, PHONE_DISPLAY, WHATSAPP_HREF } from '@/lib/constants'

const SERVICES = [
  'Key Duplication & Key Cutting',
  'Car Key Replacement',
  'Remote & Smart Key Programming',
  'Transponder Key Programming',
  'Emergency Car Unlock',
  'Lost & Broken Car Key',
  'Flip Key Replacement',
  'Smart Door Lock Installation',
  'Safe Box Opening & Service',
  'Parking Remote Duplication',
  'Car Battery Replacement',
  'Rubber Stamp Making',
  'Door Lock Repair',
  'Lock Change',
  'Home Lockout',
  'Other / Not Sure',
]

const DUBAI_AREAS = [
  'Al Satwa',
  "Al Bada'a",
  'Jumeirah',
  'Business Bay',
  'Downtown Dubai',
  'DIFC',
  'Dubai Marina',
  'JBR',
  'Palm Jumeirah',
  'Al Barsha',
  'Mirdif',
  'Motor City',
  'Dubai Silicon Oasis',
  'International City',
  'Deira',
  'Bur Dubai',
  'Karama',
  'Al Quoz',
  'Al Fahidi',
  'Discovery Gardens',
  'JVC',
  'JLT',
  'Oud Metha',
  'Other',
]

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export function BookingForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('submitting')
    setErrorMsg('')

    const formData = new FormData(e.currentTarget)
    const payload = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      service_type: formData.get('service_type') as string,
      area: formData.get('area') as string,
      description: formData.get('description') as string,
      preferred_time: formData.get('preferred_time') as string,
    }

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) {
        setState('error')
        setErrorMsg(data.error || 'Submission failed. Please try again.')
      } else {
        setState('success')
      }
    } catch {
      setState('error')
      setErrorMsg('Network error. Please check your connection and try again.')
    }
  }

  if (state === 'success') {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-800/40 dark:bg-green-950/20">
        <CheckCircle2 className="mx-auto mb-4 h-14 w-14 text-green-500" aria-hidden="true" />
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
          Booking Request Received!
        </h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          We&apos;ve received your request and will call you back shortly to confirm the details
          and ETA. For urgent jobs, call or WhatsApp us directly.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button size="lg" variant="primary" className="btn-pulse" asChild>
            <a href={PHONE_HREF}>
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call Now — {PHONE_DISPLAY}
            </a>
          </Button>
          <Button size="lg" variant="whatsapp" asChild>
            <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Name + Phone row */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="booking-name" className="block text-sm font-semibold text-foreground">
            Full Name <span className="text-destructive" aria-hidden="true">*</span>
          </label>
          <input
            id="booking-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="e.g. Ahmed Al Mansouri"
            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="booking-phone" className="block text-sm font-semibold text-foreground">
            Phone / WhatsApp <span className="text-destructive" aria-hidden="true">*</span>
          </label>
          <input
            id="booking-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+971 50 123 4567"
            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors"
          />
        </div>
      </div>

      {/* Service + Area row */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="booking-service" className="block text-sm font-semibold text-foreground">
            Service Required <span className="text-destructive" aria-hidden="true">*</span>
          </label>
          <select
            id="booking-service"
            name="service_type"
            required
            defaultValue=""
            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors"
          >
            <option value="" disabled>Select a service…</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="booking-area" className="block text-sm font-semibold text-foreground">
            Your Dubai Area <span className="text-destructive" aria-hidden="true">*</span>
          </label>
          <select
            id="booking-area"
            name="area"
            required
            defaultValue=""
            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors"
          >
            <option value="" disabled>Select your area…</option>
            {DUBAI_AREAS.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-1.5">
        <label htmlFor="booking-description" className="block text-sm font-semibold text-foreground">
          Describe Your Issue
        </label>
        <textarea
          id="booking-description"
          name="description"
          rows={4}
          placeholder="e.g. Lost my car key, 2022 Toyota Camry, need replacement and programming…"
          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors resize-none"
        />
      </div>

      {/* Preferred time */}
      <div className="space-y-1.5">
        <label htmlFor="booking-time" className="block text-sm font-semibold text-foreground">
          Preferred Time / Availability
        </label>
        <input
          id="booking-time"
          name="preferred_time"
          type="text"
          placeholder="e.g. Today afternoon, Tomorrow morning, ASAP…"
          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors"
        />
      </div>

      {/* Error message */}
      {state === 'error' && (
        <div className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/10 p-4">
          <AlertTriangle className="h-5 w-5 shrink-0 text-destructive mt-0.5" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-destructive">Submission failed</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {errorMsg || 'Please try again or call us directly.'}
            </p>
          </div>
        </div>
      )}

      {/* Submit */}
      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <Button
          type="submit"
          size="lg"
          variant="primary"
          className="btn-pulse w-full sm:w-auto"
          disabled={state === 'submitting'}
        >
          {state === 'submitting' ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              Sending Request…
            </>
          ) : (
            'Submit Booking Request'
          )}
        </Button>
        <Button size="lg" variant="whatsapp" className="w-full sm:w-auto" asChild>
          <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Book via WhatsApp
          </a>
        </Button>
      </div>

      <p className="text-xs text-muted-foreground">
        * Required fields. We&apos;ll call you back to confirm the booking and give you an exact ETA.
        For emergencies, call <a href={`tel:${PHONE_HREF}`} className="text-brand-gold hover:underline">{PHONE_DISPLAY}</a> directly.
      </p>
    </form>
  )
}
