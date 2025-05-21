'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

export const a = Link

type ImgProps = React.ImgHTMLAttributes<HTMLImageElement> & { 
  withoutBg?: boolean 
}

export const img = function Img({ withoutBg = false, ...props }: ImgProps) {
  const isGif = typeof props.src === 'string' && props.src.toLowerCase().endsWith('.gif')
  const bgColor =  `lg:bg-[url('/changelog-bg.svg')] bg-cover bg-center no-repeat lg:p-12` 

  return (
    <div className={`lg:bg-GREY lg:p-8`}>
      <div 
        className={`relative overflow-hidden [&+*]:mt-8 ${bgColor}`}
      >
        <img
          alt=""
          {...props}
          className={`w-full h-auto ${props.className || ''} lg:shadow-2xl rounded-3xl`}
        />
      </div>
    </div>
  )
}