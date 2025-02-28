import { PlusGrid, PlusGridItem, PlusGridRow } from '../components/plus-grid'
import { Button } from './button'
import { Container } from './container'
import { Gradient } from './gradient'
import { Link } from './link'
import { Logo } from './logo'
import { Heading, Subheading } from './text'
import Image from 'next/image'
import logoWalnutWhite from '@/images/logos/walnut_white.svg'
import { IconLink } from '@/app/changelog/components/IconLink'
import { GitHubIcon, TelegramIcon, XIcon } from '@/app/changelog/components/Intro'

function CallToAction() {
  return (
    <div className="relative pb-16 pt-20 text-center sm:py-24">
      <hgroup>
        <Subheading dark>Get started</Subheading>
        <Heading as="h2" dark className="mt-6 text-3xl/[1.2] font-medium tracking-tight text-gray-950 sm:text-5xl">
        Ready to Debug Cairo?
          <br />
          Start for free today.
        </Heading>
      </hgroup>
      <p className="mx-auto mt-6 max-w-xs text-sm/6 text-white">
        Unlock the tools you need to debug, simulate, and optimize your Starknet Smart Contracts.
      </p>
      <div className="mt-6">
          <Button variant="primary" className="w-full sm:w-auto" href="https://app.walnut.dev" target="_blank" rel="noopener noreferrer"
                  aria-label="Get started for Free">Get started for Free</Button>

      </div>
    </div>
  )
}

function SitemapHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm/6 font-medium text-gray-400">{children}</h3>
}

function SitemapLinks({ children }: { children: React.ReactNode }) {
  return <ul className="mt-6 space-y-4 text-sm/6">{children}</ul>
}

function SitemapLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <li>
      <Link
        {...props}
        className="font-medium text-white data-[hover]:text-gray-300/75"
      />
    </li>
  )
}

function Sitemap() {
  return (
    <>
      <div>
        <SitemapHeading>Resources</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="https://docs.walnut.dev/">Documentation</SitemapLink>
          <SitemapLink href="/blog">Blog</SitemapLink>
          <SitemapLink href="/changelog">Changelog</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>Support</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="mailto:hi@walnut.dev">Contact</SitemapLink>
          <SitemapLink href="https://t.me/walnuthq" target='_blank'>Telegram</SitemapLink>
        </SitemapLinks>
      </div>
      {/*<div>*/}
      {/*  <SitemapHeading>Company</SitemapHeading>*/}
      {/*  <SitemapLinks>*/}
      {/*    <SitemapLink href="#">Terms of service</SitemapLink>*/}
      {/*    <SitemapLink href="#">Privacy policy</SitemapLink>*/}
      {/*  </SitemapLinks>*/}
      {/*</div>*/}
    </>
  )
}


function SocialLinks() {
  return (
    <div className='flex gap-x-1'>
      <IconLink isFooter href="https://x.com/walnut_dev" target="_blank" icon={XIcon} variant='white'>
      </IconLink>
      <IconLink isFooter href="https://github.com/walnuthq" target="_blank" icon={GitHubIcon} variant='white'>
        </IconLink>
      <IconLink isFooter href="https://t.me/walnuthq" target="_blank" icon={TelegramIcon} variant='white'>
      </IconLink>
    </div>
  )
}

function Copyright() {
  return (
    <div className="text-sm/6 text-gray-400">
      &copy; {new Date().getFullYear()} Wido Inc.
    </div>
  )
}

export function Footer() {
  return (
    <footer>
      <div className="relative bg-gray-900">
        <div className="absolute inset-2 " />
        <Container>
          <CallToAction/>
          <PlusGrid >
            <PlusGridRow isFooter>
              <div className="grid grid-cols-2 gap-y-10 pb-6 lg:grid-cols-6 lg:gap-8">
                <div className="col-span-2 flex">
                  <PlusGridItem className="pt-6 lg:pb-6">
                  <Link href="/" aria-label="Home">
                    <Image src={logoWalnutWhite} alt="Walnut logo" unoptimized  className="h-10 w-auto white" />
                  </Link>
                  </PlusGridItem>
                </div>
                <div className="col-span-2 grid grid-cols-3 gap-x-8 gap-y-12 lg:col-span-4 lg:grid-cols-3 lg:pt-6">
                  <Sitemap />
                </div>
              </div>
            </PlusGridRow>
            <PlusGridRow isFooter className="flex justify-between">
              <div>
                <PlusGridItem className="py-3">
                  <Copyright />
                </PlusGridItem>
              </div>
              <div className="flex">
                <PlusGridItem className="flex items-center gap-8 py-3">
                  <SocialLinks />
                </PlusGridItem>
              </div>
            </PlusGridRow>
          </PlusGrid>
        </Container>
      </div>
    </footer>
  )
}
