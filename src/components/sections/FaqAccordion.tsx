'use client'
// ─────────────────────────────────────────────────────────────────────────────
// Lock Repair Satwa — FAQ Accordion (Framer Motion animated)
// ─────────────────────────────────────────────────────────────────────────────
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Faq } from '@/types'
import { FaqSchema } from '@/components/schema/FaqSchema'

interface FaqAccordionProps {
  faqs: Faq[]
  /** Optional heading above the accordion */
  heading?: string
  /** Whether to emit FAQPage schema JSON-LD */
  withSchema?: boolean
  className?: string
}

export function FaqAccordion({
  faqs,
  heading,
  withSchema = true,
  className,
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? null : i))

  if (!faqs || faqs.length === 0) return null

  return (
    <section
      aria-label={heading ?? 'Frequently asked questions'}
      className={cn('w-full', className)}
    >
      {/* Inline FAQPage schema */}
      {withSchema && <FaqSchema faqs={faqs} />}

      {/* Optional heading */}
      {heading && (
        <h2 className="mb-8 font-heading text-3xl font-bold tracking-tight text-foreground">
          {heading}
        </h2>
      )}

      <dl className="divide-y divide-border rounded-xl border border-border overflow-hidden">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i
          const answerId = `faq-answer-${i}`
          const questionId = `faq-question-${i}`

          return (
            <div key={i} className="bg-card">
              {/* Question — button */}
              <dt>
                <button
                  id={questionId}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggle(i)}
                  className={cn(
                    'flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition-colors',
                    'hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset',
                    isOpen && 'bg-muted/30',
                  )}
                >
                  <span className="font-semibold text-foreground leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={cn(
                      'mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors',
                      isOpen
                        ? 'bg-brand-gold text-brand-navy'
                        : 'bg-muted text-muted-foreground',
                    )}
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <Minus className="h-3.5 w-3.5" />
                    ) : (
                      <Plus className="h-3.5 w-3.5" />
                    )}
                  </span>
                </button>
              </dt>

              {/* Answer — animated */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.dd
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-border bg-muted/20 px-5 pb-5 pt-4">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.dd>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </dl>
    </section>
  )
}
