import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { IconLink } from '@/app/changelog/components/IconLink'
import { GitHubIcon, TelegramIcon, XIcon } from '@/app/changelog/components/Intro'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <Logo className="mx-auto h-10 w-auto" />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <Link className="cursor-pointer inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="https://docs.walnut.dev">Docs</Link>
              <Link className="cursor-pointer inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="/changelog-new">Changelog</Link>
              <Link className="cursor-pointer inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="/blog">Blog</Link>
              <Link className="cursor-pointer inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="mailto:hi@walnut.dev">Contact</Link>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
        <div className='flex gap-x-1'>
          <IconLink isFooter href="https://x.com/walnut_dev" target="_blank" icon={XIcon} variant='black'>
          </IconLink>
          <IconLink isFooter href="https://github.com/walnuthq" target="_blank" icon={GitHubIcon} variant='black'>
            </IconLink>
          <IconLink isFooter href="https://t.me/walnuthq" target="_blank" icon={TelegramIcon} variant='black'>
          </IconLink>
        </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Wido Inc. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
