// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — Button Primitive
// ─────────────────────────────────────────────────────────────────────────────
import * as React from 'react'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  // Base styles — shared across all variants
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg',
    'font-semibold transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'active:scale-[0.98]',
  ],
  {
    variants: {
      variant: {
        // Gold — primary brand action
        primary:
          'bg-brand-gold text-brand-navy hover:bg-brand-gold-dark shadow-gold hover:shadow-gold-lg',
        // Navy — secondary action
        secondary:
          'bg-brand-navy text-white hover:bg-brand-navy-light dark:bg-brand-navy-light dark:hover:bg-brand-navy',
        // Ghost — low-emphasis
        ghost:
          'bg-transparent text-foreground hover:bg-muted hover:text-foreground',
        // Outline — bordered
        outline:
          'border border-brand-gold bg-transparent text-brand-gold hover:bg-brand-gold hover:text-brand-navy',
        // Destructive
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        // WhatsApp green
        whatsapp:
          'bg-[#25D366] text-white hover:bg-[#1ebe5d] shadow-sm',
        // Link style
        link: 'text-brand-gold underline-offset-4 hover:underline p-0 h-auto',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
        xl: 'h-16 px-10 text-xl',
        icon: 'h-10 w-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render as a child element (e.g., wrap a Link) */
  asChild?: boolean
  /** Show a loading spinner and disable interaction */
  loading?: boolean
  /** Icon placed before the label */
  leftIcon?: React.ReactNode
  /** Icon placed after the label */
  rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    if (asChild) {
      return (
        <Slot
          ref={ref}
          className={cn(buttonVariants({ variant, size, className }))}
          aria-busy={loading}
          {...props}
        >
          <Slottable>
            {children}
          </Slottable>
        </Slot>
      )
    }

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          leftIcon
        )}
        {children}
        {!loading && rightIcon}
      </button>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
