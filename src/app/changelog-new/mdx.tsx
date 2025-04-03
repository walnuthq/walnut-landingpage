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
  const bgColor = !withoutBg && isGif ? `bg-[#212B47] p-4 rounded-xl` : ''

  return (
    <div className={`${bgColor}`}>
      <div 
        className={`relative overflow-hidden rounded-xl [&+*]:mt-8 ${isGif && 'shadow-2xl drop-shadow-2xl'}`}
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