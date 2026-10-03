import type { CSSProperties, ReactNode } from 'react'
import { Tape, Pin } from './Tape'
import { Doodle } from './Doodle'

export type Tint = 'pink' | 'yellow' | 'green' | 'blue' | 'lilac'
export type Fastener = 'tape' | 'pin' | 'washi' | 'star'

const tints: Record<Tint, string> = {
  pink: 'bg-tint-pink',
  yellow: 'bg-tint-yellow',
  green: 'bg-tint-green',
  blue: 'bg-tint-blue',
  lilac: 'bg-tint-lilac',
}

type Props = {
  tint: Tint
  fastener: Fastener
  /** Degrees; halved automatically on phones. */
  tilt?: number
  /** Vertical offset in px on wider screens; dropped on phones. */
  offset?: number
  as?: 'li' | 'div'
  className?: string
  children: ReactNode
}

/**
 * One paper-card recipe (border, padding, shadow) that varies only in tint,
 * fastener, tilt and offset — see the Components board.
 */
export function PaperCard({
  tint,
  fastener,
  tilt = 0,
  offset = 0,
  as: Tag = 'div',
  className = '',
  children,
}: Props) {
  const shape = fastener === 'pin' ? 'rounded-sticky' : 'rounded-hand'
  return (
    <Tag
      className={`relative tilt shadow-paper border-hand ${shape} ${tints[tint]} ${className}`}
      style={{ '--tilt': `${tilt}deg`, '--offset': `${offset}px` } as CSSProperties}
    >
      {fastener === 'tape' && <Tape className="-top-3.5 left-[34%] -rotate-3" />}
      {fastener === 'pin' && <Pin className="-top-3 left-1/2" />}
      {fastener === 'washi' && <Tape color="blue" className="top-1.5 -right-6 rotate-[38deg]" />}
      {fastener === 'star' && (
        <Doodle
          name="star"
          className="no-print absolute -top-[22px] -right-[18px] size-[50px] rotate-[16deg] text-tangerine max-sm:-right-2"
        />
      )}
      {children}
    </Tag>
  )
}
