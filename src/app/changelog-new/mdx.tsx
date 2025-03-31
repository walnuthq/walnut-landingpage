'use client'

import { useEffect, useRef, useState } from 'react'
import Image, { type ImageProps, type StaticImageData } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'



export const a = Link

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string }

export const img = function Img({withoutBg = false, ...props }: ImagePropsWithOptionalAlt & { withoutBg?: boolean }) {
  const isGif = typeof props.src === 'object' && 'src' in props.src && (props.src as StaticImageData).src.toLowerCase().endsWith('.gif')
  const bgColor = !withoutBg && isGif ? `bg-[#212B47] p-4 rounded-xl` : ''

  return (
    <div className={`${bgColor}`}>
      <div 
        className={`relative overflow-hidden rounded-xl [&+*]:mt-8 ${isGif && 'shadow-2xl drop-shadow-2xl'}`}
      >
        <Image
          alt=""
          sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 45vw, (min-width: 640px) 32rem, 95vw"
          {...props}
        />
      </div>
    </div>
  )
}
