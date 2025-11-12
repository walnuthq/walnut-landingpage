"use client"
import { GitHubIcon } from './intro'

export default function Banner() {
  return (
    <div className="flex justify-center items-center gap-x-6 bg-BLUE lg:px-6 py-2 sm:py-2.5 px-3 sm:px-3.5 mt-14 fixed left-0 right-0 top-6 md:top-4 z-30">
      <p className="text-sm compact-banner text-WHITE text-center leading-relaxed">
        <a href="https://app.walnut.dev/login" target='_blank' className="block sm:inline">
          <strong className="font-semibold">Try Walnut for Starknet</strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 size-0.5 fill-current hidden lg:inline">
            <circle r={1} cx={1} cy={1} />
          </svg>
          <span className='block sm:inline mt-1 sm:mt-0'>
            A Transaction Debugger for Cairo and the CairoVM.
          </span>
        </a>
      </p>
    </div>
  )
}