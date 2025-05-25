import { clsx } from 'clsx'
import { Mark } from './logo'

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative">
      <div className="absolute inset-x-0 top-1/2 h-0.5 bg-gradient-to-r from-white/15 from-[2px] to-[2px] bg-[length:12px_100%]" />
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-white/5 from-[2px] to-[2px] bg-[length:12px_100%] group-last:hidden" />
      {children}
    </div>
  )
}

function Logo({
  label,
  // src,
  className,
}: {
  label: string
  // src: string
  className: string
}) {
  return (
    <div
      className={clsx(
        className,
        'absolute top-2 whitespace-nowrap px-3 py-1 ',
        'rounded-full bg-gradient-to-t from-gray-800 from-50% to-gray-700 ring-1 ring-inset ring-white/10',
        '[--move-x-from:-100%] [--move-x-to:calc(100%+100cqw)] [animation-iteration-count:infinite] [animation-name:move-x] [animation-play-state:paused] [animation-timing-function:linear] group-hover:[animation-play-state:running]',
      )}
    >
      {/* <img alt="" src={src} className="size-4" /> */}
      <div className='text-sm/6 font-medium text-white'>{label}</div>
      
    </div>
  )
}

export function LogoTimeline() {
  return (
    <div aria-hidden="true" className="relative h-full overflow-hidden rounded-t-lg  bg-[url(/screenshots/Noir_Package_Registry.webp)] bg-cover bg-[center_50%] bg-no-repeat">
      {/* <div className="absolute  inset-0 top-8 z-10 flex items-center justify-center">
        <div
          className="absolute inset-0 backdrop-blur-md"
          style={{
            maskImage: `url('data:image/svg+xml,<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="96" height="96" rx="12" fill="black"/></svg>')`,
            maskPosition: 'center',
            maskRepeat: 'no-repeat',
          }}
        />
        <div className="relative flex size-24 items-center justify-center rounded-xl bg-gradient-to-t from-white/5 to-white/25 shadow outline outline-offset-[-5px] outline-white/5 ring-1 ring-inset ring-white/10">
          <Mark className="h-9 fill-white" />
        </div>
      </div> */}
      <div className="absolute inset-0 grid grid-cols-1 pt-8 [container-type:inline-size]">
        <Row>
          <Logo
            label="aztec"
            className="[animation-delay:-8s] [animation-duration:30s]"
          />
        </Row>
        <Row>
          <Logo
            label="safe-math"
            className="[animation-delay:-25s] [animation-duration:40s]"
          />
        </Row>
        <Row>
        <Logo
            label="value-note"
            className="[animation-delay:-20s] [animation-duration:40s]"
          />
        </Row>
        <Row>
          <Logo
            label="easy-private-state"
            className="[animation-delay:-8s] [animation-duration:30s]"
          />
        </Row>
      </div>
    </div>
  )
}
