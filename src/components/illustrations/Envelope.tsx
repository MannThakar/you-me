import { useId } from 'react'

/** A flying love-letter envelope with a heart seal and a stamp (from the design canvas). */
export function Envelope({ className = '' }: { className?: string }) {
  const fid = 'wob' + useId().replace(/[^\w-]/g, '')
  return (
    <svg
      viewBox="0 0 360 280"
      role="img"
      aria-label="A flying love-letter envelope with a heart seal and a stamp"
      className={`block h-auto w-full ${className}`}
    >
      <defs>
        <filter id={fid} x="-4%" y="-4%" width="108%" height="108%">
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="5" />
          <feDisplacementMap
            in="SourceGraphic"
            scale="4.5"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
      <g filter={`url(#${fid})`}>
        <path
          d="M18 200 q20 -10 40 0 M10 230 q24 -12 48 0 M30 170 q16 -8 32 0"
          fill="none"
          stroke="#FFFDF8"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <g transform="rotate(-8 200 150)">
          <rect
            x="80"
            y="70"
            width="240"
            height="160"
            rx="10"
            fill="#FFFDF8"
            stroke="#2A2233"
            strokeWidth="3.5"
          />
          <path
            d="M82 74 L 200 160 L 318 74"
            fill="none"
            stroke="#2A2233"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <path
            d="M82 226 L 172 144 M 318 226 L 228 144"
            fill="none"
            stroke="#2A2233"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <rect
            x="262"
            y="84"
            width="44"
            height="52"
            fill="#F7C548"
            stroke="#2A2233"
            strokeWidth="2.5"
            strokeDasharray="4 3"
          />
          <circle cx="284" cy="110" r="12" fill="#E8517A" />
          <path
            d="M200 182 c -14 -14 -26 -2 -18 10 l 18 16 l 18 -16 c 8 -12 -4 -24 -18 -10z"
            fill="#E8517A"
            stroke="#2A2233"
            strokeWidth="2.5"
          />
        </g>
        <path d="M300 40 c -7 -7 -13 -1 -9 5 l 9 8 l 9 -8 c 4 -6 -2 -12 -9 -5z" fill="#F7C548" />
        <path d="M60 70 c -6 -6 -11 -1 -8 4 l 8 7 l 8 -7 c 3 -5 -2 -10 -8 -4z" fill="#FFFDF8" />
        <path d="M332 220 l3 8 l8 1 l-6 6 l2 8 l-7 -4 l-7 4 l2 -8 l-6 -6 l8 -1z" fill="#FFFDF8" />
      </g>
    </svg>
  )
}
