

export default function Banner() {
  return (
    <div className="flex justify-center items-center gap-x-6 bg-BLUE lg:px-6 py-1 sm:py-2.5 sm:px-3.5 mt-14 absolute left-0 right-0 top-6 md:top-4 z-30">
      <p className="text-sm/6 text-WHITE">
        <a href="https://github.com/walnuthq/walnut" target='_blank'>
          <strong className="font-semibold">Introducing Walnut EVM</strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2  size-0.5 fill-current hidden lg:inline">
            <circle r={1} cx={1} cy={1} />
          </svg>
          <span className='hidden lg:inline'>An Open-Source Transaction Debugger and Simulator for Ethereum and its Rollups
          </span>
          <span aria-hidden="true" className='ml-2'>&rarr;</span>
        </a>
      </p>
    </div>
  )
}
