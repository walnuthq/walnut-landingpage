import Link from 'next/link'

import { IconLink } from '@/app/changelog/components/IconLink'
import { GitHubIcon, TelegramIcon, XIcon } from '@/app/changelog/components/Intro'


export function Footer() {
  return (
    <footer className="bg-GREY">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-[4rem] sm:py-24 lg:px-8">
        <nav aria-label="Footer" className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6">
          <Link className="text-GREY-2 hover:text-BLUE" target='_blank' href="https://docs.walnut.dev">Docs</Link>
          <Link className="text-GREY-2 hover:text-BLUE" href="/blog">Blog</Link>
          <Link className="text-GREY-2 hover:text-BLUE" href="/changelog-new">Changelog</Link>
          <Link className="text-GREY-2 hover:text-BLUE" href="/contact">Contact</Link>
        </nav>
        <div className="mt-16 flex justify-center gap-x-10">
        <IconLink isFooter href="https://x.com/walnut_dev" target="_blank" icon={XIcon} variant='black'>
          </IconLink>
          <IconLink isFooter href="https://github.com/walnuthq" target="_blank" icon={GitHubIcon} variant='black'>
            </IconLink>
          <IconLink isFooter href="https://t.me/walnuthq" target="_blank" icon={TelegramIcon} variant='black'>
          </IconLink>
        </div>
        <p className="mt-10 text-center text-sm/6 text-GREY-2">Copyright &copy; {new Date().getFullYear()} Wido Inc. All rights
        reserved.</p>
      </div>
    </footer>
  )
}
