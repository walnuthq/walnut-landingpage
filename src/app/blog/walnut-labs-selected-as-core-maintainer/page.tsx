import { Button } from '../../../components/button'
import { Container } from '../../../components/container'
import { Heading, SectionHeading, Subheading } from '../../../components/text'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import author from "@/images/blog/J6fWCiVz_400x400.jpg";
import Image from 'next/image'
import type { Metadata } from 'next';
import { generateMetadata } from '@/app/utils/generate-metadata-service';
import { GetStarted } from '@/components/get-started'
import { Footer } from '@/components/footer'
import MainHeader from '@/components/main-header'

const title = "Walnut Labs Selected as Core Maintainer of Madara Documentation — Official Appchain Stack on Starknet";
const description = "We’re excited to announce that Walnut Labs, the team behind Walnut, has been selected as the core maintainer of the official Madara Documentation.";
export const metadata: Metadata = generateMetadata(title, description, 'https://www.walnut.network/blog/starknet-contract-verification');

export default function Blog() {
  return (
    <main className="overflow-hidden">
    <MainHeader/>
    <Container>
      <SectionHeading className="mt-32">
        Tuesday, February 11, 2025
      </SectionHeading>
      <Heading as="h1" className="mt-2">
      Walnut Labs Selected as Core Maintainer of Madara Documentation — Official Appchain Stack on Starknet
      </Heading>
      <div className="mt-16 grid grid-cols-1 gap-8 pb-24 lg:grid-cols-[15rem_1fr] xl:grid-cols-[15rem_1fr_15rem]">
        <div className="flex flex-wrap items-center gap-8 max-lg:justify-between lg:flex-col lg:items-start">
          <div className="flex items-center gap-3">
              <Image
                alt=""
                src={author}
                className="aspect-square size-6 rounded-full object-cover"
              />
            <div className="text-sm/5 text-gray-700">
              @romanmazur
            </div>
          </div>
        </div>
        <div className="text-gray-700">
          <div className="max-w-2xl xl:mx-auto">
            <div>
              <div className="px-4 sm:px-6 md:px-8">
                <div className="max-w-3xl mx-auto">
                  <main>
                    <article className="relative ">
                      <div className="mt-12 mb-24 prose">
                        <p className="lead">We’re excited to announce that Walnut Labs, the team behind Walnut, has been selected as the core maintainer of the official <a href="https://www.starknet.io/sn-stack/" target='_blank' className='text-BLUE no-underline'>Madara Documentation</a>.</p>
                        <h2>What is Madara?</h2>
                        <p>
                          Madara, initially incubated by StarkWare and now developed under the umbrella of <a href="https://moonsonglabs.com/" target='_blank' className='text-BLUE no-underline'>Moonsong Labs</a>, 
                          <a href="https://www.kasar.io/" target='_blank' className='text-BLUE no-underline'>Kasar</a>, and <a href="https://karnot.xyz/" target='_blank' className='text-BLUE no-underline'>Karnot</a>, is the official toolkit for launching custom Starknet appchains via the <a href="https://www.starknet.io/sn-stack/" target='_blank' className='text-BLUE no-underline'>SN Stack</a>.
                        </p>
                        <p>
                          Appchains are isolated blockchains that enable customizability and protections that aren’t available 
                          on public chains. Recently, enterprises such as <a href="https://cointelegraph.com/news/deutsche-bank-layer-2-blockchain-ethereum-zksync" target='_blank' className='text-BLUE no-underline'>Deutsche Bank</a>, Coinbase or Kraken and exchanges such 
                          as Paradex have all shown strong interest in integrating appchains. It’s exciting to see Starknet actively 
                          stepping into this space with its own dedicated appchain stack.
                        </p>

                        <h2>Why This Matters for Walnut</h2>

                        <p>Appchains—whether on Starknet, Arbitrum, Polygon, or others—often have unique demands:</p>
                        <ul>
                          <li>
                            <p>
                            High reliability
                            </p>
                          </li>
                          <li>
                            <p>
                            Fast transaction execution
                            </p>
                          </li>
                          <li>
                            <p>
                            Custom deployment needs
                            </p>
                          </li>
                          <li>
                            <p>
                            Advanced monitoring and observability
                            </p>
                          </li>
                          <li>
                            <p>
                            Privacy needs
                            </p>
                          </li>
                        </ul>

                        <p>
                          At Walnut Labs, we’re already collaborating with teams operating in these environments, 
                          and we’re looking forward to working even more closely with them through this new role—combining our 
                          developer tooling and infrastructure services with the growing appchain ecosystem.
                        </p>
                        <h2>What’s Next</h2>
                        <p>Taking ownership of Madara Docs gives us a unique opportunity to work directly with the StarkWare 
                          team and other Madara contributors. We’re contributing to the future of appchains on Starknet—not just 
                          through documentation, but also by building tools and sharing knowledge that helps teams ship appchains 
                          that are faster, cheaper, more reliable and secure.
                        </p>
                        <p>
                          If you’re building an appchain, we’d love to talk.
                        </p>
                      </div>
                    </article>
                  </main>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <Button variant="outline" href="/blog">
                <ChevronLeftIcon className="size-4" />
                Back to blog
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
    <GetStarted/>
    <Footer />
  </main>
  );
}
