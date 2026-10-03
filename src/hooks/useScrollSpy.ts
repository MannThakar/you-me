import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently in view, so the nav can mark it.
 * A section counts as "current" once it crosses a line ~35% down the viewport.
 */
export function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState<string | null>(null)
  const key = ids.join(',')

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    const visible = new Map<string, boolean>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) visible.set(e.target.id, e.isIntersecting)
        // The first id in page order that is crossing the line wins.
        setActive(key.split(',').find((id) => visible.get(id)) ?? null)
      },
      { rootMargin: '-35% 0px -60% 0px' },
    )
    for (const id of key.split(',')) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [key])

  return active
}
