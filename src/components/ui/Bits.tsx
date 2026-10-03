import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { Doodle, type DoodleName } from './Doodle'
import type { Copy } from '../../content'

/** Round hand-drawn number badge (chapter steps). */
export function NumberBadge({ n, className = '' }: { n: number; className?: string }) {
  return (
    <span
      className={`flex size-11 shrink-0 items-center justify-center rounded-blob bg-paper-white font-display text-[22px] font-extrabold border-hand ${className}`}
    >
      <span className="sr-only">Chapter </span>
      {n}
    </span>
  )
}

const chipTints = { white: 'bg-paper-white', yellow: 'bg-tint-yellow', green: 'bg-tint-green' }

/** Sticker chip with a doodle icon. */
export function Chip({
  icon,
  iconClass,
  tint,
  className = '',
  children,
}: {
  icon: DoodleName
  iconClass: string
  tint: keyof typeof chipTints
  className?: string
  children: ReactNode
}) {
  return (
    <li
      className={`flex items-center gap-2 rounded-chip py-2 pr-4 pl-2.5 text-base font-extrabold text-ink border-hand ${chipTints[tint]} ${className}`}
    >
      <Doodle name={icon} className={`size-[22px] ${iconClass}`} />
      {children}
    </li>
  )
}

/** 48×48 hand-drawn icon link with a spoken label. */
export function IconButton({
  label,
  className = '',
  children,
  ...rest
}: { label: string } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      aria-label={label}
      className={`flex size-12 items-center justify-center rounded-hand text-ink transition-[translate] border-hand hover:-translate-y-0.5 motion-reduce:hover:translate-0 ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}

/** Full text on wider screens, the shorter phone wording below 561px. */
export function Responsive({ copy }: { copy: Copy }) {
  if (!copy.short) return <>{copy.text}</>
  return (
    <>
      <span className="max-sm:hidden">{copy.text}</span>
      <span className="sm:hidden">{copy.short}</span>
    </>
  )
}

/** "you & me" wordmark with the heart, linking to the top. */
export function Logo({ className = '', size = 'md' }: { className?: string; size?: 'md' | 'sm' }) {
  return (
    <a
      href="#top"
      aria-label="you and me, back to top"
      className={`inline-flex items-center gap-2.5 text-ink no-underline ${className}`}
    >
      <Doodle
        name="heart"
        className={`text-rosehip ${size === 'md' ? 'size-[42px] max-sm:size-9' : 'size-10'}`}
      />
      <span
        className={`font-display leading-none font-extrabold tracking-[-0.5px] ${size === 'md' ? 'text-[30px] max-sm:text-[25px]' : 'text-[30px]'}`}
      >
        you <span className="text-rosehip-deep">&amp;</span> me
      </span>
    </a>
  )
}
