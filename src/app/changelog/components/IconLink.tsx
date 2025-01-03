import Link from 'next/link'
import clsx from 'clsx'

export function IconLink({
  children,
  className,
  compact = false,
  icon: Icon,
  variant = 'white',
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  compact?: boolean
  variant?: 'white' | 'black'
  icon?: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        'group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium transition-colors hover:text-[#e93281]',
        compact ? 'gap-x-2' : 'gap-x-3',
        variant === 'white'? 'text-white' : 'text-black'
      )}
    >
      <span className="absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100" />
      {Icon && <Icon className="h-4 w-4 flex-none" />}
      <span className={`self-baseline text-white`}>{children}</span>
    </Link>
  )
}
