// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Separator Primitive
// ─────────────────────────────────────────────────────────────────────────────
import * as React from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { cn } from '@/lib/utils'

interface SeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  /** Show a gold accent diamond in the middle of the separator */
  decorative?: boolean
  /** Gold coloured separator */
  gold?: boolean
}

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    {
      className,
      orientation = 'horizontal',
      decorative: _decorative,
      gold = false,
      ...props
    },
    ref,
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative
      orientation={orientation}
      className={cn(
        'shrink-0',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        gold ? 'bg-brand-gold/40' : 'bg-border',
        className,
      )}
      {...props}
    />
  ),
)
Separator.displayName = SeparatorPrimitive.Root.displayName

// ── Gold accent separator with centre diamond ─────────────────────────────────

function GoldDivider({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="h-px flex-1 bg-brand-gold/30" />
      <div
        aria-hidden="true"
        className="h-2 w-2 rotate-45 bg-brand-gold"
      />
      <div className="h-px flex-1 bg-brand-gold/30" />
    </div>
  )
}

export { Separator, GoldDivider }
