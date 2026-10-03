import { content } from '../../content'
import { useReducedMotion } from '../../hooks/useMediaQuery'
import { Envelope } from '../illustrations/Envelope'
import { HeartBurst } from '../HeartBurst'
import { useHeartBurst } from '../../hooks/useHeartBurst'
import { ArrowIcon, Button } from '../ui/Button'
import { Doodle, MarginDoodle } from '../ui/Doodle'
import { Tape } from '../ui/Tape'

const c = content.closing

const areas =
  "[grid-template-areas:'envelope'_'text'] sm:[grid-template-areas:'text'_'envelope'] " +
  "md:grid-cols-[minmax(0,1.25fr)_minmax(0,.75fr)] md:[grid-template-areas:'text_envelope']"

export function Closing() {
  const burst = useHeartBurst()
  const reducedMotion = useReducedMotion()

  return (
    <section
      id="start"
      className="relative pt-2 pb-[84px] sm:pt-4 sm:pb-[120px] md:pt-5 md:pb-[140px]"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 md:px-12">
        <div
          className={`print-plain relative grid -rotate-[0.8deg] items-center gap-10 rounded-hand bg-rosehip-deep px-6 py-11 text-paper-white shadow-[8px_10px_0_var(--color-ink)] border-hand max-sm:-rotate-[.4deg] sm:px-12 sm:py-14 md:pt-[72px] md:pr-[72px] md:pb-[72px] md:pl-20 ${areas}`}
        >
          <Tape className="-top-1.5 -left-6 -rotate-[35deg]" />
          <Tape color="green" className="-right-6 -bottom-1 -rotate-[35deg]" />

          <div className="relative [grid-area:text]">
            <p className="mb-2 font-hand text-hand font-bold text-butter">{c.label}</p>
            <h2 className="mb-5 font-display text-[clamp(2.5rem,1.7rem+2.8vw,4.75rem)] leading-[0.98] font-extrabold tracking-[-1px]">
              Will you keep
              <br className="max-sm:hidden" /> doodling with me?
            </h2>
            <p className="mb-[34px] max-w-[38ch] text-[18px] leading-[1.6] text-blush sm:text-[20px]">
              {c.body}
            </p>
            <div className="flex flex-wrap items-center gap-5 max-sm:flex-col max-sm:items-stretch">
              <span className="relative inline-flex max-sm:flex">
                <Button
                  variant="sunny"
                  onClick={burst.fire}
                  aria-describedby="yes-thanks"
                  className="max-sm:w-full"
                >
                  {c.button}
                  <Doodle name="heart" className="size-5 text-rosehip-deep" />
                  <span className="max-sm:hidden">
                    <ArrowIcon />
                  </span>
                </Button>
                <HeartBurst
                  pieces={burst.pieces}
                  shown={burst.shown}
                  remove={burst.remove}
                  reducedMotion={reducedMotion}
                />
              </span>
              <span className="font-hand text-[25px] leading-tight font-bold text-butter">
                {c.ps}
              </span>
            </div>
            <p
              id="yes-thanks"
              aria-live="polite"
              className="mt-5 min-h-[1.2em] font-hand text-[30px] leading-tight font-bold text-butter"
            >
              {burst.shown > 0 && (
                <span
                  key={burst.shown}
                  className="inline-flex -rotate-3 items-center gap-2 motion-safe:animate-pop-in"
                >
                  {c.thanks}
                  <Doodle name="heart" className="size-7 text-sunny" />
                </span>
              )}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[360px] [grid-area:envelope] max-sm:max-w-[220px] max-sm:justify-self-end">
            <Envelope />
            <MarginDoodle name="sparkle" className="-top-5 left-[10%] size-10 text-sunny" />
            <MarginDoodle name="star" className="right-[4%] -bottom-2.5 size-[34px] text-butter" />
          </div>
        </div>
      </div>
      <MarginDoodle
        name="tulip"
        className="-top-[26px] right-[2%] hidden size-[70px] -rotate-[20deg] text-leaf md:block"
      />
      <MarginDoodle
        name="flower"
        className="bottom-[70px] left-[2%] hidden size-[50px] rotate-[20deg] text-lilac md:block"
      />
    </section>
  )
}
