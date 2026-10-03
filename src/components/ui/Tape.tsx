const colors = {
  yellow: 'bg-sunny/60',
  pink: 'bg-rosehip/45',
  blue: 'bg-sky/35',
  green: 'bg-[#8FD0A0]/70',
} as const

/** A strip of washi tape. Position and rotation come from `className`. */
export function Tape({
  color = 'yellow',
  className = '',
}: {
  color?: keyof typeof colors
  className?: string
}) {
  return (
    <span
      aria-hidden="true"
      className={`absolute z-[3] h-[30px] w-28 clip-tape ${colors[color]} ${className}`}
    />
  )
}

/** A round push-pin. */
export function Pin({
  color = 'sky',
  className = '',
}: {
  color?: 'sky' | 'rosehip'
  className?: string
}) {
  return (
    <span
      aria-hidden="true"
      className={`absolute size-[22px] rounded-full shadow-[2px_3px_0_rgb(42_34_51/.25)] border-hand ${color === 'sky' ? 'bg-sky' : 'bg-rosehip'} ${className}`}
    />
  )
}
