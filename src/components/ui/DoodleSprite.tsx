/** The doodle library from the design canvas, rendered once and reused via <Doodle>. */
export function DoodleSprite() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
      <defs>
        <symbol id="d-flower" viewBox="0 0 40 40">
          <g fill="currentColor">
            <ellipse cx="20" cy="10" rx="6.5" ry="9" />
            <ellipse cx="20" cy="10" rx="6.5" ry="9" transform="rotate(72 20 20)" />
            <ellipse cx="20" cy="10" rx="6.5" ry="9" transform="rotate(144 20 20)" />
            <ellipse cx="20" cy="10" rx="6.5" ry="9" transform="rotate(216 20 20)" />
            <ellipse cx="20" cy="10" rx="6.5" ry="9" transform="rotate(288 20 20)" />
          </g>
          <circle cx="20" cy="20" r="5.5" fill="#F7C548" />
          <circle cx="20" cy="20" r="2" fill="#2A2233" />
        </symbol>
        <symbol id="d-daisy" viewBox="0 0 40 40">
          <path
            d="M20 4v8M20 28v8M4 20h8M28 20h8M8.7 8.7l5.6 5.6M25.7 25.7l5.6 5.6M31.3 8.7l-5.6 5.6M14.3 25.7l-5.6 5.6"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <circle cx="20" cy="20" r="5.5" fill="#F7C548" />
        </symbol>
        <symbol id="d-star" viewBox="0 0 40 40">
          <path
            d="M20 3l4.8 10.2 11 1.4-8.2 7.8 2.2 11-9.8-5.6-9.6 5.8 2-11.2-8.2-7.6 11.2-1.4z"
            fill="currentColor"
          />
        </symbol>
        <symbol id="d-heart" viewBox="0 0 40 40">
          <path
            d="M20 35C7 26 2 18 5.5 11.5 9 5 17 6 20 12.5 23 6 31 5 34.5 11.5 38 18 33 26 20 35z"
            fill="currentColor"
          />
          <path
            d="M10.5 13.5q2-4.5 6.5-3.5"
            fill="none"
            stroke="#FFFDF8"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </symbol>
        <symbol id="d-sprig" viewBox="0 0 40 40">
          <path
            d="M6 37Q18 24 35 4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <g fill="currentColor">
            <ellipse cx="10" cy="26" rx="7" ry="3.2" transform="rotate(-70 10 26)" />
            <ellipse cx="18" cy="16" rx="7" ry="3.2" transform="rotate(-70 18 16)" />
            <ellipse cx="19" cy="30" rx="7" ry="3.2" transform="rotate(-10 19 30)" />
            <ellipse cx="27" cy="21" rx="7" ry="3.2" transform="rotate(-10 27 21)" />
            <ellipse cx="31" cy="9" rx="6" ry="3" transform="rotate(-40 31 9)" />
          </g>
        </symbol>
        <symbol id="d-sun" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="8.5" fill="currentColor" />
          <path
            d="M20 2.5v5M20 32.5v5M2.5 20h5M32.5 20h5M7.6 7.6l3.5 3.5M28.9 28.9l3.5 3.5M32.4 7.6l-3.5 3.5M11.1 28.9l-3.5 3.5"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </symbol>
        <symbol id="d-swirl" viewBox="0 0 40 40">
          <path
            d="M4 32C3 16 24 10 25 22c1 9-12 9-10 0 2-10 17-12 21-19"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </symbol>
        <symbol id="d-sparkle" viewBox="0 0 40 40">
          <path
            d="M20 2c1.2 12 6 16.8 18 18-12 1.2-16.8 6-18 18-1.2-12-6-16.8-18-18 12-1.2 16.8-6 18-18z"
            fill="currentColor"
          />
        </symbol>
        <symbol id="d-burst" viewBox="0 0 40 40">
          <path
            d="M7 16l6 6M20 5v10M33 16l-6 6"
            stroke="currentColor"
            strokeWidth="3.6"
            strokeLinecap="round"
          />
        </symbol>
        <symbol id="d-cloud" viewBox="0 0 40 40">
          <path
            d="M9 30c-7 0-7-10 0-10 0-7 8-10 12-5 3-6 13-4 12 3 6 0 7 12 0 12z"
            fill="currentColor"
          />
        </symbol>
        <symbol id="d-tulip" viewBox="0 0 40 40">
          <path d="M20 38V18" stroke="#2E8A57" strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="14" cy="30" rx="6" ry="2.6" transform="rotate(-35 14 30)" fill="#2E8A57" />
          <path d="M11 8q2 12 9 12t9-12q-4 3-6 1-3-6-3-6t-3 6q-2 2-6-1z" fill="currentColor" />
        </symbol>
        <symbol id="d-leaf" viewBox="0 0 40 40">
          <path d="M6 34C6 14 18 6 36 4 34 22 26 34 6 34z" fill="currentColor" />
          <path
            d="M8 32L28 12"
            stroke="#FFFDF8"
            strokeWidth="2"
            strokeLinecap="round"
            opacity=".7"
          />
        </symbol>
        <symbol id="d-dots" viewBox="0 0 40 40">
          <g fill="currentColor">
            <circle cx="8" cy="10" r="3" />
            <circle cx="22" cy="6" r="2.4" />
            <circle cx="32" cy="18" r="3" />
            <circle cx="14" cy="26" r="2.4" />
            <circle cx="28" cy="34" r="3" />
          </g>
        </symbol>
        <symbol id="d-arrow" viewBox="0 0 80 50">
          <path
            d="M4 10C26 2 54 12 66 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M54 36l12 6 3-13"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </symbol>
        <symbol id="d-underline" viewBox="0 0 220 20" preserveAspectRatio="none">
          <path
            d="M4 13C40 4 72 18 110 10s70-6 106 2"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </symbol>
        <symbol id="d-squiggle" viewBox="0 0 80 20">
          <path
            d="M3 10q7-10 14 0t14 0 14 0 14 0 14 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </symbol>
        <symbol id="d-circle" viewBox="0 0 200 80" preserveAspectRatio="none">
          <path
            d="M150 8C90-2 10 10 8 40s80 38 140 32 50-36 10-60"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </symbol>
      </defs>
    </svg>
  )
}
