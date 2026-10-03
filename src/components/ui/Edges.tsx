/** Torn-paper top edge of the twilight band. */
export function TornTop() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      className="absolute top-0 left-0 block h-[60px] w-full text-twilight"
    >
      <path
        d="M0 60V34l40-10 50 8 46-14 60 10 44-6 58 12 52-16 48 8 62-6 40 12 58-14 46 10 54-8 50 12 60-12 42 6 56-10 48 12 52-8 60 10 46-14 58 8 44 10 52-12 50 6 56-8 24 6V60z"
        fill="currentColor"
      />
    </svg>
  )
}

/** Torn-paper bottom edge of the twilight band. */
export function TornBottom() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      className="absolute bottom-0 left-0 block h-[60px] w-full text-twilight"
    >
      <path
        d="M0 0v28l48 10 54-12 44 8 60-10 50 14 46-8 58 10 40-12 62 8 52-6 44 12 60-14 48 6 56 10 42-8 58 6 50-12 46 14 60-10 52 8 44-6 58 10 50-14 46 8 60 6 52-10 4 0V0z"
        fill="currentColor"
      />
    </svg>
  )
}

/** Wavy inked top edge of the cream footer sheet. */
export function WavyTop() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 40"
      preserveAspectRatio="none"
      className="absolute -top-[38px] left-0 block h-10 w-full"
    >
      <path
        d="M0 40V22C120 6 220 30 360 18S600 2 740 18s260 18 400 2 220-4 300 10V40z"
        fill="#F3EBDD"
      />
      <path
        d="M0 22C120 6 220 30 360 18S600 2 740 18s260 18 400 2 220-4 300 10"
        fill="none"
        stroke="#2A2233"
        strokeWidth="2.5"
      />
    </svg>
  )
}
