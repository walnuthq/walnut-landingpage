"use client"
import { GitHubIcon } from './intro'
import { useEffect, useState } from 'react'

type BannerProps = {
  variant?: 'static' | 'appear'
}

export default function Banner({ variant = 'appear' }: BannerProps) {
  const [isVisible, setIsVisible] = useState(variant === 'static')

  useEffect(() => {
    // Only set up scroll listener for 'appear' variant
    if (variant !== 'appear') return

    const handleScroll = () => {
      // Show banner when scrolled past ~80vh (approximately past hero section)
      setIsVisible(window.scrollY > window.innerHeight * 0.8)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [variant])

  const transformClass = variant === 'static' 
    ? '' 
    : `transition-transform duration-500 ease-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`

  return (
    <div className={`flex justify-center items-center gap-x-6 bg-BLUE lg:px-6 py-2 sm:py-2.5 px-3 sm:px-3.5 mt-14 fixed left-0 right-0 top-6 md:top-4 z-30 ${transformClass}`}>
      <p className="text-sm compact-banner text-WHITE text-center leading-relaxed">
        <a href="https://github.com/walnuthq/walnut" target='_blank' className="block sm:inline">
          <strong className="font-semibold">Introducing Walnut EVM</strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 size-0.5 fill-current hidden lg:inline">
            <circle r={1} cx={1} cy={1} />
          </svg>
          <span className='block sm:inline mt-1 sm:mt-0'>
            An Open-Source Transaction Debugger and Simulator for Ethereum and its Rollups

          <GitHubIcon className="inline-block ml-2 h-4 w-4 align-middle mb-[1px] text-white" />
          </span>
        </a>
      </p>
    </div>
  )
}