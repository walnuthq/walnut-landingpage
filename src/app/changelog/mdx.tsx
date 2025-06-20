'use client'

import Link from 'next/link'

export const a = Link

type ImgProps = React.ImgHTMLAttributes<HTMLImageElement> & { 
  withoutBg?: boolean 
}

export const img = function Img({ withoutBg = false, ...props }: ImgProps) {
  const isGif = typeof props.src === 'string' && props.src.toLowerCase().endsWith('.gif')
  const bgColor =  `lg:bg-[url('/changelog-bg.svg')] bg-cover bg-center no-repeat lg:p-12` 

  return (
    <>
      <div className={`lg:bg-GREY lg:p-8 hidden lg:block`}>
        <div 
          className={`relative overflow-hidden [&+*]:mt-8 ${bgColor}`}
        >
          <img
            alt=""
            {...props}
            className={`w-full h-auto ${props.className || ''} lg:shadow-2xl rounded-xl lg:rounded-3xl`}
          />
        </div>
      </div>
      <img
        alt=""
        {...props}
        className={`
          lg:hidden
          w-full
          h-auto
          rounded-lg
          shadow-[0_0_20px_rgba(0,0,0,0.25)]
          ${props.className || ''}
        `}
      />
    </>

  )
}