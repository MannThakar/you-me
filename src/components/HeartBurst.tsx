import type { CSSProperties } from 'react'
import type { BurstPiece } from '../hooks/useHeartBurst'
import { Doodle, type DoodleName } from './ui/Doodle'

/** A fixed, still cluster for readers who ask for less motion. */
const stillCluster: {
  name: DoodleName
  color: string
  x: number
  y: number
  r: number
  size: number
}[] = [
  { name: 'heart', color: 'text-rosehip', x: -46, y: -36, r: -14, size: 30 },
  { name: 'heart', color: 'text-sunny', x: 44, y: -40, r: 12, size: 26 },
  { name: 'sparkle', color: 'text-butter', x: 0, y: -62, r: 0, size: 22 },
  { name: 'heart', color: 'text-paper-white', x: 70, y: 4, r: 20, size: 20 },
  { name: 'heart', color: 'text-tint-pink', x: -74, y: 2, r: -20, size: 22 },
]

/** Overlay for the "Yes, always" response: flying doodles, or a still cluster. */
export function HeartBurst({
  pieces,
  shown,
  remove,
  reducedMotion,
}: {
  pieces: BurstPiece[]
  shown: number
  remove: (id: number) => void
  reducedMotion: boolean
}) {
  if (reducedMotion) {
    if (!shown) return null
    return (
      <span aria-hidden="true" className="no-print pointer-events-none absolute top-1/2 left-1/2">
        {stillCluster.map((p, i) => (
          <Doodle
            key={i}
            name={p.name}
            className={`absolute ${p.color}`}
            style={{
              width: p.size,
              height: p.size,
              left: p.x,
              top: p.y,
              translate: '-50% -50%',
              rotate: `${p.r}deg`,
            }}
          />
        ))}
      </span>
    )
  }

  return (
    <span
      aria-hidden="true"
      className="no-print pointer-events-none absolute top-1/2 left-1/2 z-10"
    >
      {pieces.map((p) => (
        <span
          key={p.id}
          onAnimationEnd={() => remove(p.id)}
          data-testid="burst-piece"
          className="absolute top-0 left-0 animate-burst"
          style={
            {
              '--dx': `${p.dx}px`,
              '--dy': `${p.dy}px`,
              '--r': `${p.r}deg`,
              '--s': p.s,
            } as CSSProperties
          }
        >
          <Doodle name={p.name} className={p.color} style={{ width: p.size, height: p.size }} />
        </span>
      ))}
    </span>
  )
}
