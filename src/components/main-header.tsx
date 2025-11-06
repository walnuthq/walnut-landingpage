"use client"
import Banner from "./banner";
import Image from 'next/image'
import Link from 'next/link'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import clsx from 'clsx'
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid'

import logoWalnut from '@/images/logos/walnut_black.svg'
import { Container } from '@/components/container'
import {  motion } from 'framer-motion'
import extertnalLink from "@/images/external-link.svg"
import { useEffect } from 'react'

const links = [
  { href: 'https://docs.walnut.dev', label: 'Docs' },
  { href: '/blog', label: 'Blog' },
  { href: '/starknet', label: 'Starknet' },
  { href: '/changelog', label: 'Changelog' },
  { href: '/contact', label: 'Contact' },
]

function MobileNav() {
  return (
    <DisclosurePanel
      transition
      className="lg:hidden bg-GREY h-screen backdrop-blur fixed inset-0 z-50 px-6 origin-top duration-300 ease-out data-[closed]:-translate-y-full data-[closed]:opacity-0"
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-end pt-4 pb-8">
          <DisclosureButton className="flex size-12 items-center justify-center rounded-lg focus:outline-none focus:ring-0">
            <XMarkIcon className="size-6 ml-7" />
          </DisclosureButton>
        </div>
        <div className="flex flex-col gap-6 flex-1">
          {links.map(({ href, label }, linkIndex) => (
            <motion.div
              initial={{ opacity: 0, rotateX: -90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{
                duration: 0.15,
                ease: 'easeInOut',
                rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
              }}
              key={href}
            >
              <Link 
                href={href} 
                className="text-xl font-medium flex gap-2 justify-center"
              >
                {label}
                {label === 'Docs' && (
                  <Image 
                    src={extertnalLink} 
                    className='w-4 h-4 mt-1' 
                    alt=''
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center h-full items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Image 
              src={logoWalnut} 
              alt="Walnut logo" 
              className="h-8 w-auto " 
            />
          </motion.div>
        </div>
      </div>
    </DisclosurePanel>
  )
}

function MobileNavButton({ open } : { open: boolean }) {
  return (
    <DisclosureButton 
      className="flex size-12 items-center justify-end self-center rounded-lg lg:hidden focus:outline-none focus:ring-0" 
      aria-label={open ? "Close main menu" : "Open main menu"}
    >
        <Bars2Icon className="size-6" />
    </DisclosureButton>
  );
}

function HeaderContent({ condensed, open }: { condensed?: boolean, open: boolean }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  return (
    <header className={clsx('py-4', condensed && 'border-b border-slate-200')}>
      <Container>
        <nav className="relative z-50 flex justify-between items-center">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Image src={logoWalnut} alt="Walnut logo" unoptimized  className="h-10 w-auto white" />
            </Link>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:flex md:gap-x-6">
              <Link className="rounded-lg px-2 py-1 text-sm text-GREY-2 hover:bg-slate-100 hover:text-BLACK flex gap-2" target='_blank' href="https://docs.walnut.dev">Docs<Image src={extertnalLink} className='w-3 h-3' alt=''/></Link>
              <Link className="inline-block rounded-lg px-2 py-1 text-sm text-GREY-2 hover:bg-slate-100 hover:text-BLACK" href="/blog">Blog</Link>
              <Link className="inline-block rounded-lg px-2 py-1 text-sm text-GREY-2 hover:bg-slate-100 hover:text-BLACK" href="/starknet">Starknet</Link>
              <Link className="inline-block rounded-lg px-2 py-1 text-sm text-GREY-2 hover:bg-slate-100 hover:text-BLACK" href="/changelog">Changelog</Link>
              <Link className="inline-block rounded-lg px-2 py-1 text-sm text-GREY-2 hover:bg-slate-100 hover:text-BLACK" href="/contact">Contact</Link>
            </div>
            <div className="-mr-1 md:hidden !px-0">
              <MobileNavButton open={open}/>
            </div>
          </div>
        </nav>
        <MobileNav/>
      </Container>
    </header>
  )
}

export function Header({ condensed }: { condensed?: boolean}) {
  return (
    <Disclosure as="header" className="">
      {({ open }) => (
        <HeaderContent condensed={condensed} open={open} />
      )}
    </Disclosure>
  )
}




export default function MainHeader() {
    return <>
        <div className='z-40 backdrop-blur bg-GREY fixed left-0 right-0'>
            <Header condensed />
        </div>
    </>
}
