import type { ReactNode } from 'react'
import { content } from '../../content'
import { IconButton, Logo, Responsive } from '../ui/Bits'
import { Doodle, MarginDoodle } from '../ui/Doodle'
import { WavyTop } from '../ui/Edges'

const L = content.links

const explore = [
  { href: '#how', label: 'Our story' },
  { href: '#about', label: 'Dear you' },
  { href: '#stories', label: 'Memories' },
  { href: '#start', label: 'Open my letter' },
]

/** Empty links are dropped, never shown broken (spec FR-5). */
const ourThings = [
  { href: L.playlist, label: 'Our playlist' },
  { href: L.photoAlbum, label: 'Photo album' },
  { href: L.insideJokes, label: 'Inside jokes' },
].filter((l) => l.href.trim() !== '')

const iconStroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.2 }

const findMe = [
  {
    href: L.instagram,
    label: 'Instagram',
    tint: 'bg-tint-pink',
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" {...iconStroke} />
        <circle cx="12" cy="12" r="4" {...iconStroke} />
        <circle cx="17.3" cy="6.7" r="1.3" fill="currentColor" />
      </>
    ),
  },
  {
    href: L.pinterest,
    label: 'Pinterest',
    tint: 'bg-tint-yellow',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" {...iconStroke} />
        <path
          d="M11 8.5c3-1 5.5.5 5 3s-3.5 3-5 2M11 8.5L9 20"
          {...iconStroke}
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    href: L.email ? `mailto:${L.email.replace(/^mailto:/, '')}` : '',
    label: 'Email',
    tint: 'bg-tint-blue',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2.5" {...iconStroke} />
        <path d="M4 7l8 6 8-6" {...iconStroke} strokeLinejoin="round" />
      </>
    ),
  },
].filter((l) => l.href.trim() !== '')

const external = (href: string) =>
  href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {}

function ColumnTitle({ color, children }: { color: string; children: ReactNode }) {
  return (
    <h2 className={`mb-2.5 font-hand text-[26px] leading-tight font-bold ${color}`}>{children}</h2>
  )
}

const linkClass =
  'flex min-h-12 items-center py-1.5 font-bold text-ink no-underline hover:underline-wavy-rose sm:min-h-0 sm:py-1.5'

export function Footer() {
  return (
    <footer id="footer" className="relative mt-10 bg-cream pt-16 pb-8 md:pt-[84px] md:pb-[34px]">
      <WavyTop />
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-x-6 gap-y-8 px-5 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)] sm:gap-10 sm:px-6 md:grid-cols-[minmax(0,1.6fr)_repeat(3,minmax(0,1fr))] md:px-12">
        <div className="col-span-2 sm:col-span-1">
          <Logo size="sm" />
          <p className="mt-4 max-w-[32ch] text-base leading-[1.6] text-ink-soft">
            <Responsive copy={content.footer.blurb} />
          </p>
        </div>

        <nav aria-label="Footer">
          <ColumnTitle color="text-rosehip-deep">explore</ColumnTitle>
          <ul>
            {explore.map((l) => (
              <li key={l.href + l.label}>
                <a href={l.href} className={linkClass}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {ourThings.length > 0 && (
          <div>
            <ColumnTitle color="text-leaf">our things</ColumnTitle>
            <ul>
              {ourThings.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={linkClass} {...external(l.href)}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {findMe.length > 0 && (
          <div className="no-print col-span-2 sm:col-span-1">
            <ColumnTitle color="text-sky">find me</ColumnTitle>
            <ul className="mt-1 flex gap-3">
              {findMe.map((l) => (
                <li key={l.label}>
                  <IconButton
                    href={l.href}
                    label={l.label}
                    className={l.tint}
                    {...external(l.href)}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                      {l.icon}
                    </svg>
                  </IconButton>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mx-auto mt-10 max-w-[1240px] px-5 sm:px-6 md:mt-14 md:px-12">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t-2 border-dashed border-ink/30 pt-4">
          <span className="text-[15px] text-ink-soft">
            © {content.year} you &amp; me. Every doodle drawn by hand.
          </span>
          <span className="flex items-center gap-1.5 font-hand text-[23px] font-bold">
            {content.footer.city}
            <Doodle name="heart" className="size-5 text-rosehip" />
          </span>
        </div>
      </div>
      <MarginDoodle
        name="flower"
        className="top-10 right-[6%] hidden size-11 text-rosehip md:block"
      />
      <MarginDoodle
        name="star"
        className="top-[100px] right-[12%] hidden size-7 text-sunny lg:block"
      />
    </footer>
  )
}
