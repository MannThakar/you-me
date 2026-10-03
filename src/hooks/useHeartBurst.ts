import { useState } from 'react'
import type { DoodleName } from '../components/ui/Doodle'

export type BurstPiece = {
  id: number
  name: DoodleName
  color: string
  dx: number
  dy: number
  r: number
  s: number
  size: number
}

const kinds: { name: DoodleName; color: string }[] = [
  { name: 'heart', color: 'text-rosehip' },
  { name: 'heart', color: 'text-sunny' },
  { name: 'sparkle', color: 'text-butter' },
  { name: 'heart', color: 'text-paper-white' },
  { name: 'star', color: 'text-sunny' },
  { name: 'heart', color: 'text-tint-pink' },
]

const COUNT = 12
let nextId = 0

function makeBurst(): BurstPiece[] {
  return Array.from({ length: COUNT }, (_, i) => {
    const angle = (i / COUNT) * Math.PI * 2 + Math.random() * 0.5
    const dist = 70 + Math.random() * 90
    return {
      id: nextId++,
      ...kinds[i % kinds.length],
      dx: Math.cos(angle) * dist,
      dy: Math.sin(angle) * dist - 30,
      r: Math.round(Math.random() * 80 - 40),
      s: 0.8 + Math.random() * 0.6,
      size: 22 + Math.round(Math.random() * 16),
    }
  })
}

/**
 * State for the "Yes, always" response (spec FR-4).
 * `fire()` launches a new burst every time; pieces remove themselves when done.
 */
export function useHeartBurst() {
  const [pieces, setPieces] = useState<BurstPiece[]>([])
  const [shown, setShown] = useState(0)

  const fire = () => {
    setPieces((p) => [...p, ...makeBurst()])
    setShown((n) => n + 1)
  }
  const remove = (id: number) => setPieces((p) => p.filter((x) => x.id !== id))

  return { pieces, shown, fire, remove }
}
