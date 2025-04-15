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
        <div className="flex flex-col items-center border-t border-slate-400/10 py-4 sm:flex-row-reverse sm:justify-between">
        <div className='flex gap-x-1'>
          <IconLink isFooter href="https://x.com/walnut_dev" target="_blank" icon={XIcon} variant='black'>
          </IconLink>
          <IconLink isFooter href="https://github.com/walnuthq" target="_blank" icon={GitHubIcon} variant='black'>
            </IconLink>
          <IconLink isFooter href="https://t.me/walnuthq" target="_blank" icon={TelegramIcon} variant='black'>
          </IconLink>
        </div>
          <p className="mt-6  text-[0.75rem] text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Wido Inc. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
