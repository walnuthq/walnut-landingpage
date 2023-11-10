import Image from 'next/image'

import { SignalIcon, ArrowPathIcon, BugAntIcon, PaperAirplaneIcon, FunnelIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const features = [
  {
    name: 'Live Transaction Tracing',
    description:
      'Input your transaction hash and receive in-depth tracing insights, shedding light on the transaction execution.',
    icon: SignalIcon,
  },
  {
    name: 'Transaction monitoring',
    description:
      'Monitor your user\'s transactions, understand their behavior, get insights and resolve failures quickly.',
    icon: PresentationChartLineIcon,
  },
  {
    name: 'Gas Profiler',
    description:
      'Optimize your contracts for cost. Our Gas Profiler tool aids developers in both analyzing and enhancing contracts for the most cost-effective outcomes.',
    icon: FunnelIcon,
  },
  {
    name: 'State Changes Visualization',
    description:
      'Our platform comprehensively annotates each transaction with blockchain state updates and token transfers, streamlining the debugging journey.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced Debugger',
    description:
      'Furnish yourself with a Debugger designed for Starknet. From pinpointing issues to resolving them, we\'ve got your back.',
    icon: BugAntIcon,
  },
  {
    name: 'Transaction Simulator',
    description:
      'The freedom to experiment without any risk. Our Transaction Simulator provides an avenue to engage with and test smart contracts within a secure setting, instilling confidence before a Mainnet execution.',
    icon: PaperAirplaneIcon,
  },
]

export function Features() {
  return (
    <section
      id="features"
      aria-label="Features for debugging on Starknet"
      className="relative overflow-hidden bg-slate-50 pt-20 sm:pt-32"
    >
        <Image
            className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
            src={backgroundImage}
            alt=""
            width={1558}
            height={946}
            unoptimized
        />
        <Container className="relative">
          <div className="mx-auto max-w-7xl">
              <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-pink-600">Build faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Empowering Starknet Development
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                  Our debugger is purpose-built for Cairo challenges, offering precise insights to streamline and inform your coding journey.
              </p>
              </div>
              <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                  {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                      <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-pink-600">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      {feature.name}
                      </dt>
                      <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                  </div>
                  ))}
              </dl>
              </div>
          </div>
        </Container>
    </section>
  )
}
