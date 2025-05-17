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
  const bgColor =  `bg-[url('/contact-pattern.svg')] bg-WHITE bg-cover bg-center no-repeat p-4 lg:p-12` 

  return (
    <div className={`${bgColor}`}>
      <div 
        className={`relative overflow-hidden [&+*]:mt-8`}
      >
        <img
          alt=""
          {...props}
          className={`w-full h-auto ${props.className || ''}`}
        />
      </div>
    </div>
  )
}