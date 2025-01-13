import { BentoCard } from './components/bento-card'
import BlogSection from './components/blog-section'
import { Button } from './components/button'
import { Container } from './components/container'
import { Footer } from './components/footer'
import { Gradient } from './components/gradient'
import { Link } from './components/link'
import { LinkedAvatars } from './components/linked-avatars'
import { LogoCloud } from './components/logo-cloud'
import { LogoCluster } from './components/logo-cluster'
import { LogoTimeline } from './components/logo-timeline'
import { Navbar } from './components/navbar'
import { Screenshot } from './components/screenshot'
import  Testimonials  from './components/testimonials'
import { Heading, Subheading } from './components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import app_sreenshot from '../../public/screenshots/app.png'
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
              href="/blog/cairovm-codes-debug-learn-cairo"
              className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-[hover]:bg-fuchsia-950/30"
            >
              Introducing cairovm.codes: a playground to explore the CairoVM.
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1 className="font-display text-balance text-3xl/[1.2] font-medium tracking-tight text-gray-950 sm:text-7xl/[0.8] md:text-7xl/[0.8]">
            Debug Transactions on Starknet
          </h1>
          <p className="mt-8 max-w-lg text-xl/5 font-medium text-gray-950/75 sm:text-2xl/8">
            Cairo Developers use Walnut to discover and fix bugs in their Smart Contracts.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="https://app.walnut.dev" target="_blank" rel="noopener noreferrer">Try Walnut for Free</Button>
            <Button variant="secondary" href="https://docs.walnut.dev" target="_blank" rel="noopener noreferrer">
              Open Docs
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
        <Heading as="h2" className="sm:max-w-4xl md:max-w-4xl text-3xl/[1.2]">
        Debug and Simulate Cairo Transactions with Ease.
        </Heading>
        <Screenshot
          width={1216}
          height={768}
          src={app_sreenshot}
          className="mt-16 h-[10rem] sm:h-auto sm:w-full"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Features</Subheading>
      <Heading as="h3" className="mt-2 sm:max-w-3xl md:max-w-3xl text-3xl/[1.2]">
      Understand Every Detail of Your Starknet Transactions.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Insight"
          title="Debugger with Memory Details"
          description="Inspect variable states at every step of transaction execution."
          graphic={
            <div className="h-80 bg-[url(/screenshots/debugger-with-memory.png)] bg-[size:611px_553px] bg-[left_28px_top_22px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Analysis"
          title="Live Error Monitoring"
          description="Stay ahead of issues with real-time error detection and alerts."
          graphic={
            <div className="absolute inset-0 md:bg-[url(/screenshots/errors-table.png)] bg-[url(/screenshots/errors-table-mob.png)] bg-[size:543px_290px] md:bg-[size:654px_317px] bg-[left_34px_top_0px] md:bg-[left_34px_top_-24px]  bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Experiment"
          title="Transaction Simulator"
          description="Simulate and perfect transactions before deploying on-chain."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/simulation.png)] bg-[size:471px_347px] bg-[left_0px_top_10px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Multi-chain"
          title="Support for Appchains"
          description="Debug and monitor transactions effortlessly across Starknet appchains."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Cost Optimisation"
          title="Gas Profiler"
          description="Save on gas with detailed insights into transaction costs."
          graphic={
              <div
                  className="absolute inset-0 bg-[url(/screenshots/gas4.png)] bg-no-repeat bg-center"
                  style={{backgroundSize: "160px"}}
              />
          }
          fade={['bottom']}
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
        <Heading as="h3" dark className="mt-2 sm:max-w-3xl Md:max-w-3xl text-3xl/[1.2]">
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
              <div className="h-80 bg-[url(/screenshots/opscan_screen.png)] bg-cover bg-[left_0px_top_0px] bg-no-repeat" />
            }
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
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 pt-32">
          <FeatureSection />
          <BentoSection />
          <Testimonials />
        </div>
        <DarkBentoSection />
        <BlogSection/>
      </main>
      
      <Footer />
    </div>
  )
}
