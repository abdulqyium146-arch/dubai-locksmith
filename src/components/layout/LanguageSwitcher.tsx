'use client'
// ─────────────────────────────────────────────────────────────────────────────
// Language Switcher — desktop + mobile variants
// ─────────────────────────────────────────────────────────────────────────────
import { useTransition } from 'react'
import { useRouter, usePathname } from '@/i18n/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'

interface LanguageSwitcherProps {
  /** compact: icon-only pill (mobile). full: shows language names (desktop) */
  variant?: 'compact' | 'full'
  scrolled?: boolean
}

export function LanguageSwitcher({ variant = 'full', scrolled = false }: LanguageSwitcherProps) {
  const locale = useLocale()
  const t = useTranslations('langSwitcher')
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  function switchLocale(nextLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
  }

  const isAr = locale === 'ar'

  if (variant === 'compact') {
    return (
      <div
        className="flex items-center rounded-full border border-border overflow-hidden text-xs font-semibold"
        role="group"
        aria-label={t('label')}
      >
        <button
          onClick={() => switchLocale('en')}
          disabled={isPending || !isAr}
          aria-pressed={!isAr}
          aria-label={t('switchTo', { lang: 'English' })}
          className={cn(
            'px-2.5 py-1 transition-colors',
            !isAr
              ? 'bg-brand-gold text-brand-navy'
              : 'bg-transparent text-muted-foreground hover:text-foreground',
          )}
        >
          EN
        </button>
        <button
          onClick={() => switchLocale('ar')}
          disabled={isPending || isAr}
          aria-pressed={isAr}
          aria-label={t('switchTo', { lang: 'العربية' })}
          className={cn(
            'px-2.5 py-1 transition-colors font-arabic',
            isAr
              ? 'bg-brand-gold text-brand-navy'
              : 'bg-transparent text-muted-foreground hover:text-foreground',
          )}
        >
          ع
        </button>
      </div>
    )
  }

  return (
    <div
      className="flex items-center rounded-lg border border-border overflow-hidden text-xs font-semibold"
      role="group"
      aria-label={t('label')}
    >
      <button
        onClick={() => switchLocale('en')}
        disabled={isPending || !isAr}
        aria-pressed={!isAr}
        aria-label={t('switchTo', { lang: 'English' })}
        className={cn(
          'px-3 py-1.5 transition-colors',
          !isAr
            ? 'bg-brand-gold text-brand-navy'
            : scrolled
            ? 'bg-transparent text-foreground hover:bg-muted'
            : 'bg-transparent text-white/80 hover:bg-white/10',
        )}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale('ar')}
        disabled={isPending || isAr}
        aria-pressed={isAr}
        aria-label={t('switchTo', { lang: 'العربية' })}
        className={cn(
          'px-3 py-1.5 transition-colors',
          isAr
            ? 'bg-brand-gold text-brand-navy'
            : scrolled
            ? 'bg-transparent text-foreground hover:bg-muted'
            : 'bg-transparent text-white/80 hover:bg-white/10',
        )}
      >
        عر
      </button>
    </div>
  )
}
