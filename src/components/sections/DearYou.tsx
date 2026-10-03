import { content } from '../../content'
import { MugsScene } from '../illustrations/MugsScene'
import { Responsive } from '../ui/Bits'
import { Doodle, MarginDoodle } from '../ui/Doodle'

const c = content.dearYou

export function DearYou() {
  return (
    <section
      id="about"
      className="relative pt-2 pb-[72px] sm:pt-4 sm:pb-[100px] md:pt-[30px] md:pb-[120px]"
    >
      <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-5 sm:px-6 md:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] md:gap-[72px] md:px-12">
        {/* Two mugs + sticker */}
        <div className="relative max-md:mx-auto max-md:w-full max-md:max-w-[560px]">
          <MugsScene />
          <div className="absolute -top-[30px] right-1.5 flex size-32 rotate-12 items-center justify-center rounded-blob bg-lilac text-center font-hand text-[23px] leading-none font-bold text-paper-white shadow-sticker border-hand max-sm:-top-6 max-sm:-right-1 max-sm:size-24 max-sm:text-[19px]">
            <p>
              {c.sticker[0]}
              <br />
              {c.sticker[1]}
            </p>
          </div>
          <MarginDoodle
            name="sun"
            className="-bottom-5 left-2.5 hidden size-10 text-sunny sm:block"
          />
        </div>

        {/* Notebook card */}
        <div className="relative rotate-1 rounded-hand bg-lined py-10 pr-6 pl-11 shadow-[6px_8px_0_rgb(42_34_51/.12)] border-hand max-sm:rotate-[.5deg] sm:py-[50px] sm:pr-12 sm:pl-[84px] md:pt-[58px] md:pr-14 md:pb-[54px] md:pl-[92px]">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-[30px] border-l-2 border-rosehip/55 sm:left-[62px]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-2 hidden flex-col justify-around sm:left-5 sm:flex"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block size-[18px] rounded-full bg-paper shadow-[inset_2px_2px_0_rgb(42_34_51/.25)]"
              />
            ))}
          </div>
          <p className="relative mb-2 font-hand text-[28px] leading-tight font-bold text-leaf max-sm:text-[24px]">
            {c.label}
          </p>
          <h2 className="relative mb-[22px] font-display text-[clamp(2.25rem,1.6rem+1.8vw,3.375rem)] leading-[1.04] font-extrabold tracking-[-0.5px]">
            A tiny website for my <span className="bg-highlight">favorite human.</span>
          </h2>
          {c.paragraphs.map((p, i) => (
            <p
              key={i}
              className={`relative text-[18px] leading-[1.65] sm:text-[19px] ${i === c.paragraphs.length - 1 ? 'mb-[26px]' : 'mb-4'}`}
            >
              <Responsive copy={p} />
            </p>
          ))}
          <p className="relative flex -rotate-3 items-center gap-2 font-hand text-[28px] font-bold">
            {c.signOff}
            <Doodle name="heart" className="size-[26px] text-rosehip" />
          </p>
          <MarginDoodle
            name="flower"
            className="-right-[22px] -bottom-[22px] size-[46px] rotate-[18deg] text-sky max-sm:-right-2"
          />
        </div>
      </div>
    </section>
  )
}
