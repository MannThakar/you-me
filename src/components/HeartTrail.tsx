import { useEffect, useRef } from 'react'
import { useMediaQuery, useReducedMotion } from '../hooks/useMediaQuery'

const POOL = 6
const MIN_GAP_MS = 160
const MIN_DIST_PX = 28
const COLORS = ['#E8517A', '#F7C548', '#8E62C9', '#C2365F']

/**
 * A tiny trail of fading hearts behind the mouse.
 * Mouse/trackpad only, off for reduced motion, never printed.
 * Moves a fixed pool of elements directly — no React render per mouse move.
 */
export function HeartTrail() {
  const finePointer = useMediaQuery('(pointer: fine)')
  const reducedMotion = useReducedMotion()
  const enabled = finePointer && !reducedMotion
  const poolRef = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    if (!enabled) return
    let next = 0
    let lastTime = 0
    let lastX = -999
    let lastY = -999
    let frame = 0
    let pending: PointerEvent | null = null

    const spawn = () => {
      frame = 0
      const e = pending
      if (!e) return
      const now = performance.now()
      if (
        now - lastTime < MIN_GAP_MS ||
        Math.hypot(e.clientX - lastX, e.clientY - lastY) < MIN_DIST_PX
      )
        return
      lastTime = now
      lastX = e.clientX
      lastY = e.clientY
      const el = poolRef.current[next]
      next = (next + 1) % POOL
      if (!el) return
      el.style.left = `${e.clientX + 6}px`
      el.style.top = `${e.clientY + 14}px`
      el.style.color = COLORS[Math.floor(Math.random() * COLORS.length)]
      el.classList.remove('animate-trail')
      void el.offsetWidth // restart the animation
      el.classList.add('animate-trail')
    }

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      pending = e
      if (!frame) frame = requestAnimationFrame(spawn)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      aria-hidden="true"
      className="no-print pointer-events-none fixed inset-0 z-[70] overflow-hidden"
    >
      {Array.from({ length: POOL }, (_, i) => (
        <span
          key={i}
          ref={(el) => {
            poolRef.current[i] = el
          }}
          className="absolute opacity-0"
        >
          <svg width="14" height="14" viewBox="0 0 40 40">
            <path
              d="M20 35C7 26 2 18 5.5 11.5 9 5 17 6 20 12.5 23 6 31 5 34.5 11.5 38 18 33 26 20 35z"
              fill="currentColor"
            />
          </svg>
        </span>
      ))}
    </div>
  )
}
