// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Badge Primitive
// ─────────────────────────────────────────────────────────────────────────────
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full font-medium transition-colors',
  {
    variants: {
      variant: {
        default:
          'bg-muted text-muted-foreground',
        gold:
          'bg-brand-gold/15 text-brand-gold border border-brand-gold/30',
        navy:
          'bg-brand-navy text-white dark:bg-brand-navy-light',
        emergency:
          'bg-red-500/15 text-red-600 border border-red-500/30 dark:text-red-400',
        success:
          'bg-green-500/15 text-green-700 border border-green-500/30 dark:text-green-400',
        outline:
          'border border-border text-foreground bg-transparent',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-1.5 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /** Optional dot indicator */
  dot?: boolean
}

function Badge({ className, variant, size, dot, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    >
      {dot && (
        <span
          aria-hidden="true"
          className={cn(
            'h-1.5 w-1.5 rounded-full',
            variant === 'emergency' ? 'bg-red-500 animate-pulse' : '',
            variant === 'gold' ? 'bg-brand-gold' : '',
            variant === 'success' ? 'bg-green-500' : '',
            !['emergency', 'gold', 'success'].includes(variant as string)
              ? 'bg-current'
              : '',
          )}
        />
      )}
      {children}
    </span>
  )
}

export { Badge, badgeVariants }
