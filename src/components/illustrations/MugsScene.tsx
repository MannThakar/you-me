import { useId } from 'react'

/** Two mugs side by side whose steam curls into one heart, next to a love letter and a tulip in a vase (from the design canvas). */
export function MugsScene({ className = '' }: { className?: string }) {
  const fid = 'wob' + useId().replace(/[^\w-]/g, '')
  return (
    <svg
      viewBox="0 0 520 400"
      role="img"
      aria-label="Two mugs side by side whose steam curls into one heart, next to a love letter and a tulip in a vase"
      className={`block h-auto w-full ${className}`}
    >
      <defs>
        <filter id={fid} x="-4%" y="-4%" width="108%" height="108%">
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="3" />
          <feDisplacementMap
            in="SourceGraphic"
            scale="4.5"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
      <g filter={`url(#${fid})`}>
        <rect x="6" y="6" width="508" height="388" rx="34" fill="#FCE3EA" />
        <g fill="#F4B6C6">
          <circle cx="60" cy="60" r="5" />
          <circle cx="470" cy="70" r="5" />
          <circle cx="420" cy="140" r="4" />
          <circle cx="90" cy="150" r="4" />
        </g>
        <path
          d="M20 300 Q 260 284 500 300 L 500 362 Q 500 382 480 382 L 40 382 Q 20 382 20 362 Z"
          fill="#E9D6B8"
          stroke="#2A2233"
          strokeWidth="3"
        />
        <path
          d="M60 330 h60 M200 348 h80 M360 334 h70"
          stroke="#C9A97F"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M200 186 Q 184 166 200 150 Q 216 134 204 116"
          fill="none"
          stroke="#2A2233"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M320 186 Q 336 166 320 150 Q 304 134 316 116"
          fill="none"
          stroke="#2A2233"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M260 114C228 94 220 72 234 60c11-9 24-4 26 8 2-12 15-17 26-8 14 12 6 34-26 54z"
          fill="#E8517A"
          stroke="#2A2233"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M242 72 q3 -6 9 -6"
          fill="none"
          stroke="#FFFDF8"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path d="M176 108c-6-4-8-7-6-10 2-2 5-2 6 1 1-3 4-3 6-1 2 3 0 6-6 10z" fill="#E8517A" />
        <path d="M344 100c-5-3-7-6-5-8 1-2 4-2 5 1 1-3 4-3 5-1 2 2 0 5-5 8z" fill="#8E62C9" />
        <path
          d="M152 218 Q 116 220 120 248 Q 124 278 156 272"
          fill="none"
          stroke="#2A2233"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <path
          d="M152 218 Q 116 220 120 248 Q 124 278 156 272"
          fill="none"
          stroke="#E8517A"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M150 200 L 156 290 Q 158 304 172 304 L 228 304 Q 242 304 244 290 L 250 200 Z"
          fill="#E8517A"
          stroke="#2A2233"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <ellipse cx="200" cy="200" rx="50" ry="9" fill="#8A4B2A" stroke="#2A2233" strokeWidth="3" />
        <g fill="#FFFDF8">
          <circle cx="176" cy="236" r="4" />
          <circle cx="204" cy="256" r="4" />
          <circle cx="226" cy="230" r="4" />
          <circle cx="186" cy="280" r="4" />
          <circle cx="226" cy="278" r="4" />
        </g>
        <path
          d="M368 218 Q 404 220 400 248 Q 396 278 364 272"
          fill="none"
          stroke="#2A2233"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <path
          d="M368 218 Q 404 220 400 248 Q 396 278 364 272"
          fill="none"
          stroke="#3567C9"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M270 200 L 276 290 Q 278 304 292 304 L 348 304 Q 362 304 364 290 L 370 200 Z"
          fill="#3567C9"
          stroke="#2A2233"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <ellipse cx="320" cy="200" rx="50" ry="9" fill="#8A4B2A" stroke="#2A2233" strokeWidth="3" />
        <path d="M273 236 h94 M275 262 h90" stroke="#F7C548" strokeWidth="6" />
        <path d="M314 280c-5-3-7-6-5-8 1-2 4-2 5 1 1-3 4-3 5-1 2 2 0 5-5 8z" fill="#FFFDF8" />
        <g transform="rotate(-10 90 290)">
          <rect
            x="44"
            y="262"
            width="96"
            height="60"
            rx="4"
            fill="#FFFDF8"
            stroke="#2A2233"
            strokeWidth="3"
          />
          <path
            d="M46 264 L 92 296 L 138 264"
            fill="none"
            stroke="#2A2233"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M92 300c-6-4-8-7-6-10 2-2 5-2 6 1 1-3 4-3 6-1 2 3 0 6-6 10z"
            fill="#E8517A"
            stroke="#2A2233"
            strokeWidth="1.5"
          />
        </g>
        <path
          d="M436 252 Q 432 210 440 168"
          fill="none"
          stroke="#2E8A57"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <ellipse cx="452" cy="214" rx="16" ry="6" transform="rotate(-40 452 214)" fill="#2E8A57" />
        <path
          d="M422 172 q2 -24 18 -30 q16 6 18 30 q-8 -8 -18 -3 q-10 -5 -18 3z"
          fill="#E8517A"
          stroke="#2A2233"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M420 300 Q 404 272 420 252 L 452 252 Q 468 272 452 300 Z"
          fill="#F7C548"
          stroke="#2A2233"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path d="M418 276 h36" stroke="#F08A3C" strokeWidth="3" />
      </g>
    </svg>
  )
}
