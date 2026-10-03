import { content } from '../../content'
import { WindowScene } from '../illustrations/WindowScene'
import { ButtonLink } from '../ui/Button'
import { Chip, Responsive } from '../ui/Bits'
import { Doodle, MarginDoodle } from '../ui/Doodle'
import { TornBottom, TornTop } from '../ui/Edges'
import { Tape } from '../ui/Tape'

const c = content.memories

const areas =
  "[grid-template-areas:'text'_'image'_'extras'] " +
  "md:grid-cols-[minmax(0,1.15fr)_minmax(0,.85fr)] md:[grid-template-areas:'image_text'_'image_extras'] md:content-center"

export function Memories() {
  return (
    <section
      id="stories"
      className="print-plain relative overflow-hidden py-[110px] text-paper-white sm:py-[130px] md:pt-[150px] md:pb-[160px]"
    >
      <TornTop />
      <div aria-hidden="true" className="absolute inset-x-0 top-[58px] bottom-[58px] bg-twilight" />
      <TornBottom />
      <MarginDoodle
        name="sun"
        className="top-1.5 -right-[30px] size-[70px] rotate-12 text-sunny sm:size-[90px] md:size-[120px]"
      />
      <MarginDoodle
        name="sprig"
        className="bottom-[30px] -left-[34px] hidden size-[110px] rotate-[10deg] text-leaf md:block"
      />

      <div
        className={`relative mx-auto grid max-w-[1240px] gap-x-[72px] px-5 sm:px-6 md:px-12 ${areas}`}
      >
        <div className="[grid-area:text] md:self-end">
          <p className="mb-2 font-hand text-hand font-bold text-butter">{c.label}</p>
          <h2 className="mb-6 font-display text-h2 font-extrabold tracking-[-0.5px]">
            Home is wherever you are.
          </h2>
          <p className="mb-8 text-[18px] leading-[1.65] text-mist sm:text-[19px]">
            <Responsive copy={c.body} />
          </p>
        </div>

        <div className="relative mb-8 [grid-area:image] max-md:mx-auto max-md:w-full max-md:max-w-[640px] md:mb-0 md:self-center">
          <figure className="relative rotate-[1.6deg] rounded-hand bg-paper-white p-4 shadow-night border-hand max-sm:rotate-[.8deg] max-sm:p-2.5">
            <Tape className="top-[18px] -left-5 -rotate-[40deg]" />
            <Tape color="pink" className="-right-5 bottom-[18px] -rotate-[40deg]" />
            <WindowScene />
          </figure>
          {/* Laptop: notes pinned to the photo corners */}
          <div className="absolute -top-[58px] -right-2.5 hidden items-end gap-1 text-butter md:flex">
            <span className="-rotate-3 font-hand text-[27px] font-bold">{c.notes.tulips}</span>
            <Doodle
              name="arrow"
              className="h-11 w-16 translate-y-[30px] -scale-x-100 rotate-[10deg]"
            />
          </div>
          <div className="absolute -bottom-[66px] -left-4 hidden items-start gap-1.5 text-butter md:flex">
            <Doodle name="arrow" className="h-11 w-16 translate-y-2.5 -rotate-[120deg]" />
            <span className="rotate-2 font-hand text-[27px] font-bold">{c.notes.us}</span>
          </div>
          {/* Tablet + phone: one note under the photo */}
          <p className="mt-6 font-hand text-[24px] leading-tight font-bold text-butter md:hidden">
            ↑ {c.notes.tulips} &amp; {c.notes.us}
          </p>
        </div>

        <div className="[grid-area:extras] md:self-start">
          <ul className="mb-9 flex flex-wrap gap-3">
            <Chip icon="heart" iconClass="text-rosehip" tint="white" className="-rotate-2">
              {c.chips[0]}
            </Chip>
            <Chip icon="sun" iconClass="text-tangerine" tint="yellow" className="rotate-[1.5deg]">
              {c.chips[1]}
            </Chip>
            <Chip icon="sparkle" iconClass="text-lilac" tint="green" className="-rotate-1">
              {c.chips[2]}
            </Chip>
          </ul>
          <ButtonLink href="#stories" variant="sunny" className="max-sm:w-full">
            {c.button}
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
