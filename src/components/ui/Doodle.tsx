import type { CSSProperties } from 'react'

export type DoodleName =
  | 'flower'
  | 'daisy'
  | 'star'
  | 'heart'
  | 'sprig'
  | 'sun'
  | 'swirl'
  | 'sparkle'
  | 'burst'
  | 'cloud'
  | 'tulip'
  | 'leaf'
  | 'dots'
  | 'arrow'
  | 'underline'
  | 'squiggle'
  | 'circle'

type Props = {
  name: DoodleName
  /** Size and colour via Tailwind, e.g. "size-10 text-rosehip". */
  className?: string
  style?: CSSProperties
}

/** A decorative doodle from the sprite. Always hidden from screen readers. */
export function Doodle({ name, className = '', style }: Props) {
  return (
    <svg
      className={`overflow-visible ${className}`}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <use href={`#d-${name}`} />
    </svg>
  )
}

/** A doodle placed absolutely in a margin; never catches clicks, never prints. */
export function MarginDoodle({ className = '', ...rest }: Props) {
  return <Doodle className={`no-print pointer-events-none absolute ${className}`} {...rest} />
}
