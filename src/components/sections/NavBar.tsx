import { ButtonLink } from '../ui/Button'
import { Logo } from '../ui/Bits'
import { Pin, Tape } from '../ui/Tape'
import { useMenu } from '../../hooks/useMenu'
import { useScrollSpy } from '../../hooks/useScrollSpy'

const navLinks = [
  { href: '#how', label: 'Our story' },
  { href: '#about', label: 'Dear you' },
  { href: '#stories', label: 'Memories' },
  { href: '#start', label: 'A love note' },
]

const sectionIds = navLinks.map((l) => l.href.slice(1))

export function NavBar() {
  const { open, toggle, onKeyDown, onLinkClick, buttonRef, menuRef } = useMenu()
  const active = useScrollSpy(sectionIds)

  return (
    <header className="no-print sticky top-0 z-40 mx-auto max-w-[1240px] px-5 pt-4 sm:px-6 sm:pt-5 md:px-12 md:pt-7">
      <nav
        aria-label="Main"
        onKeyDown={onKeyDown}
        className="relative flex -rotate-[0.5deg] items-center justify-between gap-6 rounded-hand bg-paper-white py-2 pr-2.5 pl-4 shadow-[4px_5px_0_rgb(42_34_51/.12)] border-hand md:py-3 md:pr-3.5 md:pl-6"
      >
        <Tape color="pink" className="-top-2.5 -left-5 -rotate-[28deg] max-sm:w-20" />
        <Logo />

        <ul className="hidden items-center gap-3 md:flex lg:gap-[26px]">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                aria-current={active === l.href.slice(1) ? 'true' : undefined}
                className="inline-flex min-h-12 items-center px-1.5 text-[17px] font-bold text-ink no-underline hover:underline-wavy-rose aria-[current=true]:underline-wavy-rose"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <ButtonLink href="#start" size="sm" className="max-sm:hidden">
            Open my letter
          </ButtonLink>
          <button
            ref={buttonRef}
            type="button"
            onClick={toggle}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className={`flex size-12 items-center justify-center rounded-hand border-hand md:hidden ${open ? 'bg-tint-pink' : 'bg-tint-yellow'}`}
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                <path
                  d="M3 3q7 6 14 14M17 3Q10 9 3 17"
                  fill="none"
                  stroke="#2A2233"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="26" height="20" viewBox="0 0 26 20" aria-hidden="true">
                <path
                  d="M2 3q11-2 22 0M3 10q10 1.5 20-1M2 17q11-1 22 1"
                  fill="none"
                  stroke="#2A2233"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Sticky-note menu (tablet + phone) */}
      <div
        id="site-menu"
        ref={menuRef}
        hidden={!open}
        onKeyDown={onKeyDown}
        className="absolute inset-x-5 top-full mt-2.5 rotate-1 rounded-hand bg-tint-yellow px-[22px] pt-[18px] pb-[22px] shadow-[4px_6px_0_rgb(42_34_51/.14)] border-hand sm:right-6 sm:left-auto sm:w-[340px] md:hidden"
      >
        <Pin className="-top-[11px] left-[46%]" />
        <ul>
          {navLinks.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={onLinkClick}
                aria-current={active === l.href.slice(1) ? 'true' : undefined}
                className={`flex min-h-[52px] items-center font-display text-[26px] font-bold text-ink no-underline hover:underline-wavy-rose aria-[current=true]:underline-wavy-rose ${i < navLinks.length - 1 ? 'border-b-2 border-dashed border-ink/25' : ''}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <ButtonLink href="#start" onClick={onLinkClick} className="mt-4 w-full sm:hidden">
          Open my letter
        </ButtonLink>
      </div>
    </header>
  )
}
