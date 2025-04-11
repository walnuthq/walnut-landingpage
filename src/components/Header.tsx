'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Disclosure, DisclosureButton, DisclosurePanel, Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Bars2Icon } from '@heroicons/react/24/solid'

import logoWalnut from '@/images/logos/walnut_black.svg'
import { Container } from '@/app/components/container'
import { motion } from 'framer-motion'


const links = [
  { href: 'https://docs.walnut.dev', label: 'Docs' },
  { href: '/blog', label: 'Blog' },
  { href: '/changelog', label: 'Changelog' },
  { href: '/changelog-new', label: 'Changelog-New' },
  { href: 'mailto:hi@walnut.dev', label: 'Contact' },
]

function MobileNav() {
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
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
            <Link href={href} className="text-base font-medium text-gray-950">
              {label}
            </Link>
          </motion.div>
        ))}
      </div>

    </DisclosurePanel>
  )
}


function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg data-[hover]:bg-black/5 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

export function Header({ condensed }: { condensed?: boolean}) {
  return (
    <Disclosure as="header" className="">
      <header className={clsx('py-4 h-[4.5rem]', condensed && 'border-b border-slate-200')}>
        <Container>
          <nav className="relative z-50 flex justify-between">
            <div className="flex items-center md:gap-x-12">
              <Link href="/" aria-label="Home">
                <Image src={logoWalnut} alt="Walnut logo" unoptimized  className="h-10 w-auto white" />
              </Link>
            </div>
            <div className="flex items-center gap-x-5 md:gap-x-8">
              <div className="hidden md:flex md:gap-x-6">
                <Link className="inline-block rounded-lg px-2 py-1 text-sm text-GREY-2 hover:bg-slate-100 hover:text-BLACK" href="https://docs.walnut.dev">Docs</Link>
                <Link className="inline-block rounded-lg px-2 py-1 text-sm text-GREY-2 hover:bg-slate-100 hover:text-BLACK" href="/blog">Blog</Link>
                <Link className="inline-block rounded-lg px-2 py-1 text-sm text-GREY-2 hover:bg-slate-100 hover:text-BLACK" href="/changelog-new">Changelog</Link>
                <Link className="inline-block rounded-lg px-2 py-1 text-sm text-GREY-2 hover:bg-slate-100 hover:text-BLACK" href="mailto:hi@walnut.dev">Contact</Link>

              </div>
              <div className="-mr-1 md:hidden">
                <MobileNavButton/>
              </div>
            </div>
          </nav>
          <MobileNav/>
        </Container>
      </header>
    </Disclosure>
  )
}
