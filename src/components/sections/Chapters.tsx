import type { ReactNode } from 'react'
import { content } from '../../content'
import { NumberBadge, Responsive } from '../ui/Bits'
import { MarginDoodle } from '../ui/Doodle'
import { PaperCard, type Fastener, type Tint } from '../ui/PaperCard'

const c = content.chapters

const S = { stroke: '#2A2233', strokeWidth: 2.5, strokeLinejoin: 'round' as const }

const icons: ReactNode[] = [
  // speech bubble with a heart
  <>
    <path
      d="M8 12h48a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H26l-12 10 2-10H8a4 4 0 0 1-4-4V16a4 4 0 0 1 4-4z"
      fill="#FFFDF8"
      {...S}
    />
    <path d="M32 37c-8-6-11-10-9-14 2-3 7-3 9 1 2-4 7-4 9-1 2 4-1 8-9 14z" fill="#E8517A" />
  </>,
  // coffee cup
  <>
    <path d="M12 30h32v10a14 14 0 0 1-14 14h-4a14 14 0 0 1-14-14z" fill="#F7C548" {...S} />
    <path d="M44 34h4a6 6 0 0 1 0 12h-5" fill="none" stroke="#2A2233" strokeWidth="2.5" />
    <path d="M28 24c-6-4-8-7-6-10 2-2 5-2 6 1 1-3 4-3 6-1 2 3 0 6-6 10z" fill="#E8517A" />
    <path
      d="M18 22q-3-5 0-9M38 22q3-5 0-9"
      fill="none"
      stroke="#2A2233"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </>,
  // big heart with sparkle
  <>
    <path
      d="M32 56C12 43 4 32 8 22c4-9 16-10 24 0 8-10 20-9 24 0 4 10-4 21-24 34z"
      fill="#E8517A"
      {...S}
    />
    <path d="M17 24q2-6 8-6" fill="none" stroke="#FFFDF8" strokeWidth="3" strokeLinecap="round" />
    <path
      d="M54 4c.6 5 2.4 6.8 7 7.4-4.6.6-6.4 2.4-7 7.4-.6-5-2.4-6.8-7-7.4 4.6-.6 6.4-2.4 7-7.4z"
      fill="#F7C548"
    />
  </>,
  // little house
  <>
    <path d="M14 28v26h36V28L32 12z" fill="#FFFDF8" {...S} />
    <path d="M8 30L32 9l24 21" fill="none" {...S} strokeLinecap="round" />
    <rect x="27" y="38" width="10" height="16" fill="#3567C9" stroke="#2A2233" strokeWidth="2" />
    <path d="M32 33c-4-3-6-5-4-7 1-2 3-1 4 1 1-2 3-3 4-1 2 2 0 4-4 7z" fill="#E8517A" />
  </>,
]

// Neighbours never share a tint or fastener (spec §4.4).
const looks: { tint: Tint; fastener: Fastener; tilt: number; offset: number }[] = [
  { tint: 'pink', fastener: 'tape', tilt: -2, offset: 0 },
  { tint: 'yellow', fastener: 'pin', tilt: 1.6, offset: 30 },
  { tint: 'green', fastener: 'washi', tilt: -1, offset: 6 },
  { tint: 'blue', fastener: 'star', tilt: 2, offset: 40 },
]

export function Chapters() {
  return (
    <section
      id="how"
      className="relative pt-2 pb-[72px] sm:pt-4 sm:pb-[100px] md:pt-5 md:pb-[130px]"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 md:px-12">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 sm:mb-14 md:mb-16">
          <div>
            <p className="mb-1.5 font-hand text-hand font-bold text-rosehip-deep">{c.label}</p>
            <h2 className="font-display text-[clamp(2.25rem,1.6rem+2.1vw,3.875rem)] leading-[1.02] font-extrabold tracking-[-0.5px]">
              Four little chapters
              <br className="max-sm:hidden" /> of you &amp; me
            </h2>
          </div>
          <p className="max-w-[34ch] text-lg leading-[1.6] text-ink-soft">
            <Responsive copy={c.intro} />
          </p>
        </div>

        <ol className="grid grid-cols-1 items-start gap-[26px] sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-7">
          {c.items.map((item, i) => (
            <PaperCard
              key={item.title}
              as="li"
              {...looks[i]}
              className="px-[22px] pt-6 pb-6 max-sm:flex max-sm:items-start max-sm:gap-4 sm:px-[26px] sm:pt-[30px] sm:pb-8"
            >
              <div className="mb-[18px] flex items-start justify-between max-sm:mb-0">
                <svg
                  width="68"
                  height="68"
                  viewBox="0 0 64 64"
                  aria-hidden="true"
                  className="max-sm:hidden"
                >
                  {icons[i]}
                </svg>
                <NumberBadge n={i + 1} />
              </div>
              <div>
                <h3 className="mb-2.5 font-display text-h3 font-bold">{item.title}</h3>
                <p className="text-[17px] leading-[1.6]">
                  {item.date && (
                    <>
                      <b>{item.date}</b> ·{' '}
                    </>
                  )}
                  {item.text}
                </p>
              </div>
            </PaperCard>
          ))}
        </ol>
      </div>
      <MarginDoodle
        name="leaf"
        className="top-[30px] right-[3%] hidden size-16 rotate-[20deg] text-leaf md:block"
      />
      <MarginDoodle
        name="sparkle"
        className="top-[120px] left-[3%] hidden size-[30px] text-sunny lg:block"
      />
    </section>
  )
}
