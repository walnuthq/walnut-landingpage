import { BentoCard } from './components/bento-card'
import BlogSection from './components/blog-section'
import { Button } from './components/button'
import { Container } from './components/container'
import { Footer } from './components/footer'
import { Gradient } from './components/gradient'
import { Keyboard } from './components/keyboard'
import { Link } from './components/link'
import { LinkedAvatars } from './components/linked-avatars'
import { LogoCloud } from './components/logo-cloud'
import { LogoCluster } from './components/logo-cluster'
import { LogoTimeline } from './components/logo-timeline'
import { Map } from './components/map'
import { Navbar } from './components/navbar'
import { Screenshot } from './components/screenshot'
import  Testimonials  from './components/testimonials'
import { Heading, Subheading } from './components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Monitoring for Onchain Apps',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="/blog/radiant-raises-100m-series-a-from-tailwind-ventures"
              className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-[hover]:bg-fuchsia-950/30"
            >
              Radiant raises $100M Series A from Tailwind Ventures
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-7xl/[0.8] md:text-8xl/[0.8]">
            Starknet Error Monitoring
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Cairo Developers use Walnut to fix bugs in their Smart Contracts.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="#">Get started</Button>
            <Button variant="secondary" href="/pricing">
              See pricing
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          Transaction Debugger and Simulator for Cairo
        </Heading>
        <Screenshot
          width={1216}
          height={768}
          src="/screenshots/app.png"
          className="mt-16 h-[36rem] sm:h-auto sm:w-full"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Sales</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Know more about your customers than they do.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Insight"
          title="Debugger with Memory details"
          description="Radiant uses social engineering to build a detailed financial picture of your leads. Know their budget, compensation package, social security number, and more."
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-[size:1000px_560px] bg-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Analysis"
          title="Live error monitoring"
          description="With our advanced data mining, you’ll know which companies your leads are talking to and exactly how much they’re being charged."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Speed"
          title="State Diff"
          description="It’s never been faster to cold email your entire contact list using our streamlined keyboard shortcuts."
          graphic={
            <div className="flex size-full pl-10 pt-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Source"
          title="Gas Profiler"
          description="Bypass those inconvenient privacy laws to source leads from the most unexpected places."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Limitless"
          title="TX Simulator"
          description="Radiant helps you sell in locations currently under international embargo."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Blockchain Research and Engineering</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          More from Walnut&nbsp;Labs
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Starknet / Cairo"
            title="Cairo Playground"
            description="A web playground for Cairo developers to explore the CairoVM and experiment with writing Cairo code online."
            graphic={
              <div className="h-80 bg-[url(https://walnut.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCairo%20Playground.b1e65fa5.jpg&w=3840&q=75)] bg-cover bg-[center_10%] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Aztec / Noir"
            title="Noir Package Registry"
            description="An online catalog of Noir libraries where developers can discover, search, and download libraries for their projects."
            graphic={<LogoTimeline />}
            // `!overflow-visible` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 !overflow-visible lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Optimism / Superchain"
            title="Walnut Lite"
            description={
            <div>A fully open-source, local transaction debugger and simulator for the EVM, initially launching on the Superchain. Read more{' '}
              <a 
              className='text-blue-500 hover:underline' 
              href='https://walnut.dev/blog/walnut-receives-grant-from-optimism-foundation-to-improve-debugging-on-the-superchain'>
                in our blog
              </a>.
            </div>}
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Optimism / Superchain"
            title={<div className='flex items-center gap-2'><a href="https://github.com/walnuthq/op-scan"><img className='h-6 w-6' src="/logo_opscan.webp" alt="" /></a><div>OP Scan</div></div>}
            description="A fully open-source, lightweight, local transaction explorer purpose-built for the OP Stack and the Superchain. Runs on a laptop."
            graphic={
              <div className="h-80 bg-[url(/screenshots/opscan_screen.png)] bg-cover bg-[left_10%] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection />
          <BentoSection />
        </div>
        <Testimonials />
        <DarkBentoSection />
        <BlogSection/>
      </main>
      
      <Footer />
    </div>
  )
}
