import { useSyncExternalStore } from 'react'

/** Live boolean for a CSS media query. Returns false where matchMedia is missing. */
export function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      if (typeof window.matchMedia !== 'function') return () => {}
      const mql = window.matchMedia(query)
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    },
    () => typeof window.matchMedia === 'function' && window.matchMedia(query).matches,
    () => false,
  )
}

export const useReducedMotion = () => useMediaQuery('(prefers-reduced-motion: reduce)')
