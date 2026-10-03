import { useId } from 'react'

/** Two cats cuddling on a window sill under a moonlit night sky, with a heart above them and tulips in a pot (from the design canvas). */
export function WindowScene({ className = '' }: { className?: string }) {
  const fid = 'wob' + useId().replace(/[^\w-]/g, '')
  return (
    <svg
      viewBox="0 0 640 440"
      role="img"
      aria-label="Two cats cuddling on a window sill under a moonlit night sky, with a heart above them and tulips in a pot"
      className={`block h-auto w-full ${className}`}
    >
      <defs>
        <filter id={fid} x="-4%" y="-4%" width="108%" height="108%">
          <feTurbulence type="fractalNoise" baseFrequency="0.028" numOctaves="2" seed="11" />
          <feDisplacementMap
            in="SourceGraphic"
            scale="5"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
      <g filter={`url(#${fid})`}>
        <rect x="6" y="6" width="628" height="428" rx="30" fill="#FCE3EA" />
        <g fill="#F4B6C6">
          <circle cx="60" cy="120" r="5" />
          <circle cx="100" cy="200" r="5" />
          <circle cx="56" cy="290" r="5" />
          <circle cx="580" cy="130" r="5" />
          <circle cx="540" cy="220" r="5" />
          <circle cx="590" cy="300" r="5" />
          <circle cx="120" cy="80" r="5" />
          <circle cx="520" cy="80" r="5" />
        </g>
        <path d="M14 34 Q 320 96 626 34" fill="none" stroke="#2A2233" strokeWidth="2.5" />
        <g fill="#E8517A">
          <path d="M76 74c-12-8-15-14-11-19 3-4 9-3 11 2 2-5 8-6 11-2 4 5 1 11-11 19z" />
          <path d="M298 104c-12-8-15-14-11-19 3-4 9-3 11 2 2-5 8-6 11-2 4 5 1 11-11 19z" />
          <path d="M526 82c-12-8-15-14-11-19 3-4 9-3 11 2 2-5 8-6 11-2 4 5 1 11-11 19z" />
        </g>
        <g fill="#F7C548">
          <path d="M150 92c-12-8-15-14-11-19 3-4 9-3 11 2 2-5 8-6 11-2 4 5 1 11-11 19z" />
          <path d="M450 96c-12-8-15-14-11-19 3-4 9-3 11 2 2-5 8-6 11-2 4 5 1 11-11 19z" />
        </g>
        <g fill="#8E62C9">
          <path d="M224 104c-12-8-15-14-11-19 3-4 9-3 11 2 2-5 8-6 11-2 4 5 1 11-11 19z" />
          <path d="M374 106c-12-8-15-14-11-19 3-4 9-3 11 2 2-5 8-6 11-2 4 5 1 11-11 19z" />
        </g>
        <rect x="170" y="116" width="300" height="214" rx="14" fill="#3567C9" />
        <rect x="186" y="132" width="268" height="182" rx="6" fill="#2B2A5C" />
        <circle cx="404" cy="176" r="24" fill="#F7C548" />
        <circle cx="416" cy="168" r="21" fill="#2B2A5C" />
        <g fill="#FFF1C2">
          <path d="M232 160l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />
          <path d="M280 190l1.5 4.5 4.5 1.5-4.5 1.5-1.5 4.5-1.5-4.5-4.5-1.5 4.5-1.5z" />
          <path d="M360 150l1.5 4.5 4.5 1.5-4.5 1.5-1.5 4.5-1.5-4.5-4.5-1.5 4.5-1.5z" />
          <path d="M420 246l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />
          <circle cx="210" cy="250" r="2.5" />
          <circle cx="350" cy="250" r="2.5" />
          <circle cx="260" cy="150" r="2" />
        </g>
        <path d="M186 290 Q 260 262 320 282 T 454 270 L 454 314 L 186 314 Z" fill="#2E6B4E" />
        <g fill="#FFF1C2">
          <rect x="226" y="276" width="8" height="8" />
          <rect x="388" y="268" width="8" height="8" />
        </g>
        <rect x="314" y="132" width="12" height="182" fill="#3567C9" />
        <rect x="186" y="218" width="268" height="10" fill="#3567C9" />
        <path
          d="M206 152 l18 -14 M206 168 l30 -26 M346 152 l18 -14"
          stroke="#FFFDF8"
          strokeWidth="4"
          strokeLinecap="round"
          opacity=".6"
        />
        <path
          d="M150 108 Q 196 104 210 112 Q 196 180 216 250 Q 200 320 210 336 L 150 336 Z"
          fill="#F7C548"
          stroke="#2A2233"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M490 108 Q 444 104 430 112 Q 444 180 424 250 Q 440 320 430 336 L 490 336 Z"
          fill="#F7C548"
          stroke="#2A2233"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <g fill="#E8517A">
          <circle cx="170" cy="150" r="4" />
          <circle cx="186" cy="200" r="4" />
          <circle cx="170" cy="260" r="4" />
          <circle cx="186" cy="310" r="4" />
          <circle cx="470" cy="150" r="4" />
          <circle cx="454" cy="200" r="4" />
          <circle cx="470" cy="260" r="4" />
          <circle cx="454" cy="310" r="4" />
        </g>
        <rect
          x="130"
          y="326"
          width="380"
          height="24"
          rx="6"
          fill="#E9D6B8"
          stroke="#2A2233"
          strokeWidth="2.5"
        />
        <path
          d="M250 260c-14-9-18-16-13-22 4-5 11-4 13 2 2-6 9-7 13-2 5 6 1 13-13 22z"
          fill="#E8517A"
          stroke="#2A2233"
          strokeWidth="2"
        />
        <path
          d="M174 318 Q 150 314 156 296"
          fill="none"
          stroke="#2A2233"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <ellipse cx="212" cy="308" rx="42" ry="21" fill="#2A2233" />
        <circle cx="236" cy="292" r="20" fill="#2A2233" />
        <polygon points="222,280 224,260 236,274" fill="#2A2233" />
        <polygon points="238,273 250,260 252,282" fill="#2A2233" />
        <path
          d="M226 294 q4 4 8 0 M240 294 q4 4 8 0"
          fill="none"
          stroke="#FFFDF8"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="238" cy="302" r="2.4" fill="#F29AA0" />
        <path
          d="M326 318 Q 352 314 346 294"
          fill="none"
          stroke="#F08A3C"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <ellipse cx="290" cy="308" rx="42" ry="21" fill="#F08A3C" />
        <path
          d="M278 292 q4 8 0 16 M296 290 q4 8 0 18 M312 294 q3 6 0 12"
          fill="none"
          stroke="#C8662A"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="266" cy="292" r="20" fill="#F08A3C" />
        <polygon points="252,282 254,260 266,274" fill="#F08A3C" />
        <polygon points="268,273 280,260 282,282" fill="#F08A3C" />
        <path
          d="M256 294 q4 4 8 0 M270 294 q4 4 8 0"
          fill="none"
          stroke="#2A2233"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="266" cy="302" r="2.4" fill="#E8517A" />
        <path
          d="M376 326 L 368 284 L 420 284 L 412 326 Z"
          fill="#E07A4F"
          stroke="#2A2233"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <rect
          x="364"
          y="278"
          width="60"
          height="10"
          rx="3"
          fill="#E07A4F"
          stroke="#2A2233"
          strokeWidth="2.5"
        />
        <path
          d="M382 278 Q 378 240 374 220 M 394 278 L 396 206 M 406 278 Q 412 244 420 226"
          fill="none"
          stroke="#2E8A57"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path d="M362 222 q2 -18 12 -22 q10 4 12 22 q-6 -6 -12 -2 q-6 -4 -12 2z" fill="#E8517A" />
        <path d="M384 208 q2 -18 12 -22 q10 4 12 22 q-6 -6 -12 -2 q-6 -4 -12 2z" fill="#FFFDF8" />
        <path d="M408 228 q2 -18 12 -22 q10 4 12 22 q-6 -6 -12 -2 q-6 -4 -12 2z" fill="#8E62C9" />
        <path
          d="M14 380 Q 320 360 626 384 L 626 404 Q 626 434 596 434 L 44 434 Q 14 434 14 404 Z"
          fill="#2E8A57"
        />
        <g fill="#F7C548">
          <circle cx="70" cy="392" r="7" />
          <circle cx="250" cy="396" r="7" />
          <circle cx="470" cy="398" r="7" />
        </g>
        <g fill="#FFFDF8">
          <circle cx="150" cy="404" r="6" />
          <circle cx="360" cy="402" r="6" />
          <circle cx="560" cy="400" r="6" />
        </g>
        <g fill="#E8517A">
          <circle cx="110" cy="414" r="5" />
          <circle cx="420" cy="416" r="5" />
          <circle cx="300" cy="418" r="5" />
        </g>
      </g>
    </svg>
  )
}
