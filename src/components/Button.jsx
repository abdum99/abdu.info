import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-900 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-black dark:hover:bg-zinc-950 dark:active:bg-black dark:active:text-zinc-100/70 dark:border dark:border-white/10',
  secondary:
    'bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-black dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-50 dark:active:bg-black dark:active:text-zinc-50/70',
}

export function Button({ variant = 'primary', className, href, ...props }) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
