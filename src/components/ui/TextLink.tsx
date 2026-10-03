import type { AnchorHTMLAttributes } from 'react'

/** "Skip to the love letter" style link: bold ink text with a wavy pink underline. */
export function TextLink({ className = '', ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={`inline-flex min-h-12 items-center gap-2 text-lg font-extrabold text-ink underline-wavy-rose hover:text-rosehip-deep hover:decoration-rosehip-deep active:decoration-solid ${className}`}
      {...rest}
    />
  )
}
