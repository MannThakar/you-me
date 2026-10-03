import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { useMediaQuery } from './useMediaQuery'

/**
 * State for the tablet/phone sticky-note menu (spec FR-3):
 * opens from the menu button; closes on a link choice, Escape, a tap outside,
 * or when the window grows to laptop width. Locks page scroll while open.
 */
export function useMenu() {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const isLaptop = useMediaQuery('(min-width: 901px)')

  const close = useCallback((returnFocus = true) => {
    setOpen(false)
    if (returnFocus) buttonRef.current?.focus()
  }, [])

  const toggle = useCallback(() => setOpen((o) => !o), [])

  // Scroll lock + outside tap, only while open.
  useEffect(() => {
    if (!open) return
    document.documentElement.classList.add('menu-open')
    const onPointerDown = (e: PointerEvent) => {
      const t = e.target as Node
      if (menuRef.current?.contains(t) || buttonRef.current?.contains(t)) return
      setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.documentElement.classList.remove('menu-open')
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])

  // Growing past the menu breakpoint closes it.
  if (open && isLaptop) setOpen(false)

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        e.preventDefault()
        close()
      }
    },
    [open, close],
  )

  /** Choosing a link: close, then let the native #hash jump happen. */
  const onLinkClick = useCallback(() => close(false), [close])

  return { open, toggle, close, onKeyDown, onLinkClick, buttonRef, menuRef }
}
