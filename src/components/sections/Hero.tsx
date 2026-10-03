import heroWebp from '../../assets/hero-couple.webp'
import heroJpg from '../../assets/hero-couple.jpg'
import { content } from '../../content'
import { ArrowIcon, ButtonLink } from '../ui/Button'
import { Responsive } from '../ui/Bits'
import { Doodle, MarginDoodle } from '../ui/Doodle'
import { Tape } from '../ui/Tape'
import { TextLink } from '../ui/TextLink'

const c = content.hero

/*
 * Grid areas keep one copy of the markup while following each artboard:
 *  phone   → label, title, image, intro, actions
 *  tablet  → label, title, intro|actions, image
 *  laptop  → text column beside the image
 */
const areas =
  "[grid-template-areas:'label'_'title'_'image'_'intro'_'actions'] " +
  "sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] sm:[grid-template-areas:'label_label'_'title_title'_'intro_actions'_'image_image'] " +
  "md:grid-cols-[minmax(0,.95fr)_minmax(0,1.1fr)] md:[grid-template-areas:'label_image'_'title_image'_'intro_image'_'actions_image'_'aside_image']"

export function Hero() {
  return (
    <section
      id="top"
      className={`relative mx-auto grid max-w-[1240px] content-center gap-x-14 px-5 pt-10 pb-[72px] sm:px-6 sm:pt-14 sm:pb-[100px] md:px-12 md:pt-20 md:pb-[110px] ${areas}`}
    >
      <p className="z-[2] mb-3.5 flex origin-left -rotate-2 items-center gap-2.5 font-hand text-hand font-bold text-rosehip-deep [grid-area:label] md:self-end">
        <Doodle name="sparkle" className="size-[26px] text-tangerine" />
        <Responsive copy={c.label} />
      </p>

      <h1 className="z-[2] font-display text-display font-extrabold tracking-[-1.5px] [grid-area:title]">
        Our love story,
        <br />
        <span className="relative inline-block text-rosehip-deep">
          drawn
          <Doodle
            name="underline"
            className="absolute -bottom-3 -left-[2%] h-5 w-[104%] text-sunny"
          />
        </span>{' '}
        by hand.
      </h1>

      <p className="z-[2] mt-6 max-w-[31ch] text-body-lg text-ink-soft [grid-area:intro] sm:mt-8 md:mt-[34px] md:mb-[38px]">
        {c.intro}
      </p>

      <div className="z-[2] mt-7 flex flex-wrap items-center gap-6 [grid-area:actions] max-sm:flex-col max-sm:items-stretch max-sm:gap-3 max-sm:text-center sm:mt-8 sm:flex-col sm:items-start sm:self-center md:mt-0 md:flex-row md:items-center md:self-start">
        <ButtonLink href="#how">
          Read our story
          <ArrowIcon />
        </ButtonLink>
        <TextLink href="#about" className="max-sm:justify-center">
          Skip to the love letter
        </TextLink>
      </div>

      <div
        aria-hidden="true"
        className="relative hidden items-end gap-1.5 [grid-area:aside] md:mt-[46px] md:ml-[clamp(60px,18vw,230px)] md:flex"
      >
        <p className="-rotate-[4deg] font-hand text-[26px] leading-[1.05] font-medium">
          {c.aside[0]}
          <br />
          {c.aside[1]}
        </p>
        <Doodle
          name="arrow"
          className="h-[52px] w-[84px] -translate-y-7 -rotate-[24deg] text-leaf"
        />
      </div>
      <MarginDoodle
        name="swirl"
        className="top-[150px] left-0 hidden size-[34px] -rotate-[10deg] text-lilac lg:block"
      />

      {/* Taped photo */}
      <div className="relative mx-auto w-full max-w-[680px] self-center [grid-area:image] max-sm:my-10 sm:mt-14 md:mt-0">
        <div
          aria-hidden="true"
          className="absolute inset-[34px_-18px_-22px_30px] rotate-[4deg] rounded-hand bg-sunny border-hand max-sm:inset-[18px_-8px_-12px_18px]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-[-18px_40px_40px_-26px] -rotate-[7deg] rounded-hand bg-tint-green border-hand max-sm:inset-[-10px_24px_24px_-10px]"
        />
        <figure className="relative -rotate-[2.5deg] rounded-hand bg-paper-white px-4 pt-4 pb-2 shadow-paper-lg border-hand max-sm:-rotate-[1.25deg] max-sm:px-2.5 max-sm:pt-2.5">
          <Tape className="-top-4 left-[40%] rotate-[4deg]" />
          <picture>
            <source srcSet={heroWebp} type="image/webp" />
            <img
              src={heroJpg}
              alt={c.imageAlt}
              width={1672}
              height={941}
              fetchPriority="high"
              className="block aspect-[1672/941] h-auto w-full rounded-[22px] bg-paper object-cover max-sm:rounded-[14px]"
            />
          </picture>
          <figcaption className="flex justify-between gap-3 px-1.5 pt-2 pb-0.5 font-hand text-[25px] font-bold max-sm:text-[20px]">
            <span>{c.caption}</span>
            <span className="text-rosehip-deep max-sm:hidden">{c.page}</span>
          </figcaption>
        </figure>
        <MarginDoodle
          name="flower"
          className="-top-[30px] -right-[26px] size-14 rotate-[14deg] text-rosehip max-sm:-right-2 max-sm:size-10"
        />
        <MarginDoodle
          name="heart"
          className="bottom-[60px] -left-11 hidden size-10 -rotate-[14deg] text-rosehip sm:block"
        />
        <MarginDoodle
          name="star"
          className="-right-10 bottom-[120px] hidden size-[34px] rotate-12 text-sky md:block"
        />
        <MarginDoodle
          name="sprig"
          className="top-10 -left-[50px] hidden size-[58px] -rotate-[30deg] text-leaf lg:block"
        />
        <MarginDoodle
          name="burst"
          className="-bottom-[54px] left-[44%] hidden size-9 text-tangerine md:block"
        />
        <MarginDoodle
          name="dots"
          className="-top-12 right-[30%] hidden size-[30px] text-lilac lg:block"
        />
      </div>
    </section>
  )
}
