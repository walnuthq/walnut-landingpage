'use client'

import Image from 'next/image'

import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { NavLink } from '@/components/NavLink'
import { Link as ReactScrollLink } from 'react-scroll';
import logoWalnut from '@/images/logos/walnut.svg'

function MobileNavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Popover.Button as={ReactScrollLink}
    className="block w-full p-2"  
    to={href}     
    spy={true}
    smooth={true}
    offset={50}
    duration={500} >
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="features">Features</MobileNavLink>
            <MobileNavLink href="request-access">Request access</MobileNavLink>
            <Popover.Button as={Link} className="block w-full p-2" href="/blog">Blog</Popover.Button>
            <Popover.Button as={Link} className="block w-full p-2" href="/changelog">Changelog</Popover.Button>
            <MobileNavLink href="careers">Careers</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <Popover.Button as={Link} className="block w-full p-2" href="mailto:hi@walnut.dev">Contact</Popover.Button>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header({ condensed }: { condensed?: boolean}) {
  return (
    <header className={clsx('py-4 sticky', condensed && 'border-b border-slate-200')}>
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Image src={logoWalnut} alt="Walnut logo" unoptimized  className="h-10 w-auto bg-white white" />
            </Link>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="features">Features</NavLink>
              <Link className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="/blog">Blog</Link>
              <Link className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="/changelog">Changelog</Link>
              <Link className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="mailto:hi@walnut.dev">Contact</Link>
              <NavLink href="careers">Careers</NavLink>
            </div>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
