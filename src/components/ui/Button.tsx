import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'sunny'
type Size = 'md' | 'sm'

const base =
  'inline-flex min-h-12 items-center justify-center gap-2.5 rounded-btn border-hand font-body font-extrabold leading-none no-underline shadow-sticker transition-[translate,rotate,box-shadow] duration-150 ease-out ' +
  'hover:-translate-x-px hover:-translate-y-0.5 hover:-rotate-[1.2deg] hover:shadow-sticker-lg ' +
  'active:translate-x-0.5 active:translate-y-[3px] active:rotate-0 active:shadow-sticker-sm ' +
  'motion-reduce:transition-none motion-reduce:hover:rotate-0 motion-reduce:hover:translate-0'

const variants: Record<Variant, string> = {
  primary: 'bg-rosehip-deep text-paper-white hover:text-paper-white',
  sunny: 'bg-sunny text-ink hover:text-ink',
}

const sizes: Record<Size, string> = {
  md: 'min-h-[54px] px-[26px] text-lg',
  sm: 'px-5 text-base',
}

type Common = { variant?: Variant; size?: Size; children: ReactNode; className?: string }

function buttonClasses({
  variant = 'primary',
  size = 'md',
  className = '',
}: Omit<Common, 'children'>) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`
}

export function ButtonLink({
  variant,
  size,
  className,
  children,
  ...rest
}: Common & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={buttonClasses({ variant, size, className })} {...rest}>
      {children}
    </a>
  )
}

export function Button({
  variant,
  size,
  className,
  children,
  type = 'button',
  ...rest
}: Common & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={type} className={buttonClasses({ variant, size, className })} {...rest}>
      {children}
    </button>
  )
}

/** The little hand-drawn arrow used inside buttons. */
export function ArrowIcon() {
  return (
    <svg width="22" height="14" viewBox="0 0 22 14" aria-hidden="true" focusable="false">
      <path
        d="M2 7.5q9-1.5 17-.5M14 2l5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
