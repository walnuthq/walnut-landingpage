import Link from 'next/link'
import Image from 'next/image'
import { IconLink } from '@/components/icon-link'
import extertnalLink from "@/images/external-link.svg"
import { GitHubIcon, TelegramIcon, XIcon } from './Intro'

export function Footer() {
  return (
    <footer className="bg-GREY">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-[4rem] lg:px-8">
        <nav aria-label="Footer" className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6">
          <Link className="text-GREY-2 hover:text-BLUE flex gap-2" target='_blank' href="https://docs.walnut.dev">Docs <Image src={extertnalLink} className='w-3 h-3' alt=''/></Link>
          <Link className="text-GREY-2 hover:text-BLUE" href="/blog">Blog</Link>
          <Link className="text-GREY-2 hover:text-BLUE" href="/changelog">Changelog</Link>
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
