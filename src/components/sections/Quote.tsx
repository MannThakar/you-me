import { content } from '../../content'
import { Doodle, MarginDoodle } from '../ui/Doodle'
import { Pin } from '../ui/Tape'

export function Quote() {
  return (
    <section
      id="quote"
      aria-label="A quote"
      className="relative py-[72px] sm:py-[100px] md:pt-[120px] md:pb-[130px]"
    >
      <div className="mx-auto flex max-w-[1240px] justify-center px-5 sm:px-6 md:px-12">
        <div className="relative w-full max-w-[940px]">
          <div
            aria-hidden="true"
            className="absolute inset-[18px_-22px_-24px_30px] rotate-[3.5deg] rounded-hand bg-tint-lilac border-hand max-sm:inset-[12px_-8px_-14px_14px]"
          />
          <figure className="relative -rotate-[1.5deg] rounded-hand bg-tint-yellow px-6 pt-14 pb-10 shadow-paper-lg border-hand max-sm:-rotate-[.75deg] sm:px-14 sm:pt-[68px] sm:pb-[52px] md:px-20 md:pt-[78px] md:pb-[60px]">
            <Pin color="rosehip" className="-top-3.5 left-1/2 size-[26px]" />
            <svg
              width="64"
              height="50"
              viewBox="0 0 64 50"
              aria-hidden="true"
              className="mb-2 block max-sm:h-9 max-sm:w-12"
            >
              <path
                d="M6 44c-2-14 2-30 18-38l3 5C18 17 16 24 17 30c7 0 10 4 10 8 0 5-4 8-9 8-5 0-10-1-12-2zM36 44c-2-14 2-30 18-38l3 5c-9 6-11 13-10 19 7 0 10 4 10 8 0 5-4 8-9 8-5 0-10-1-12-2z"
                fill="#E8517A"
              />
            </svg>
            <blockquote className="font-hand text-quote font-bold">
              If I could draw only one thing for the rest of my life, I’d draw{' '}
              <span className="relative inline-block text-rosehip-deep">
                us.
                <Doodle
                  name="circle"
                  className="absolute -top-[16%] -left-[40%] h-[132%] w-[180%] text-rosehip"
                />
              </span>
            </blockquote>
            <figcaption className="mt-7 text-[15px] font-extrabold tracking-[2.5px] text-ink-soft uppercase">
              {content.quote.by}
            </figcaption>
          </figure>
          <MarginDoodle
            name="heart"
            className="-top-[34px] -right-[30px] size-[58px] -rotate-12 text-rosehip max-sm:-right-2 max-sm:size-11"
          />
          <MarginDoodle
            name="heart"
            className="-top-[46px] right-[30px] hidden size-10 rotate-[16deg] text-tangerine sm:block"
          />
          <MarginDoodle
            name="daisy"
            className="-bottom-[30px] -left-10 hidden size-[52px] text-sky sm:block"
          />
          <MarginDoodle
            name="sparkle"
            className="top-10 -left-[70px] hidden size-9 text-lilac lg:block"
          />
        </div>
      </div>
    </section>
  )
}
