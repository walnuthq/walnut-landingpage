import { XMarkIcon } from '@heroicons/react/20/solid'

export default function Banner() {
  return (
    <div className="flex justify-center items-center gap-x-6 bg-BLUE lg:px-6 py-1 sm:py-2.5 sm:px-3.5 ">
      <p className="text-sm/6 text-WHITE">
        <a href="https://cairovm.codes/" target='_blank'>
          <strong className="font-semibold">Introducing cairovm.codes</strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2  size-0.5 fill-current hidden lg:inline">
            <circle r={1} cx={1} cy={1} />
          </svg>
          <span className='hidden lg:inline'>A playground to explore the CairoVM
          </span>
          <span aria-hidden="true" className='ml-2'>&rarr;</span>
        </a>
      </p>
    </div>
  )
}
