'use client'
import { useTranslations } from 'next-intl'
import { Phone } from 'lucide-react'
import { PHONE_HREF, PHONE_DISPLAY } from '@/lib/constants'

export default function Error({ reset }: { reset: () => void }) {
  const t = useTranslations('common')

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-7xl font-bold text-destructive">!</p>
      <h1 className="mt-4 font-heading text-2xl font-bold text-foreground">{t('errorTitle')}</h1>
      <p className="mt-3 text-muted-foreground max-w-sm">{t('errorDesc')}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={reset}
          className="rounded-lg bg-brand-gold px-6 py-3 font-semibold text-brand-navy hover:bg-brand-gold-dark"
        >
          {t('tryAgain')}
        </button>
        <a
          href={PHONE_HREF}
          className="rounded-lg border border-border px-6 py-3 font-semibold text-foreground hover:bg-muted flex items-center justify-center gap-2"
        >
          <Phone className="h-4 w-4" />
          {PHONE_DISPLAY}
        </a>
      </div>
    </div>
  )
}
