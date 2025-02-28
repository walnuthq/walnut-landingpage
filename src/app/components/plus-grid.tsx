import { clsx } from 'clsx'

export function PlusGrid({
  className = '',
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return <div className={className}>{children}</div>
}

export function PlusGridRow({
  className = '',
  children,
  isFooter=false
}: {
  className?: string
  children: React.ReactNode
  isFooter?: boolean
}) {
  return (
    <div
      className={clsx(
        className,
        'group/row relative isolate pt-[calc(theme(spacing.2)+1px)] last:pb-[calc(theme(spacing.2)+1px)]',
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2"
      >
        {isFooter && 
        <div className="absolute inset-x-0 top-0 border-t border-white/5"></div>}
        <div className={`absolute inset-x-0 top-2 border-t ${isFooter? 'border-white/5' : 'border-black/5'}`}></div>
        <div className={`absolute inset-x-0 bottom-0 hidden border-b ${isFooter? 'border-white/5' : 'border-black/5'} group-last/row:block`}></div>
        <div className={`absolute inset-x-0 bottom-2 hidden border-b ${isFooter? 'border-white/5' : 'border-black/5'} group-last/row:block`}></div>
      </div>
      {children}
    </div>
  )
}



export function PlusGridItem({
  className = '',
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={clsx(className, 'group/item relative')}>
      {children}
    </div>
  )
}


