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
        Friday, March 7, 2025
      </SectionHeading>
      <Heading as="h1" className="mt-2">
        New Partnership with Optimism: Open-Source Debugger and Simulator for the Superchain
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
                        <p>Optimism and the Superchain are some of the fastest-growing ecosystems in blockchain. 
                          We’re excited to announce a new partnership between Walnut and Optimism to bring open-source 
                          debugging and simulation tools to this fast-moving environment.</p>
                        <p>With teams like Base, Kraken, World, Sony and many others building on Optimism, 
                          the developer ecosystem is growing fast—millions of users, dozens of rollups, and an increasingly complex stack.</p>
                        <p>
                          As the network expands, the need for robust debugging becomes critical. 
                          Today, most options are closed-source, expensive, and not designed for local workflows.
                        </p>
                        <blockquote>
                          <p>Debugging isn’t flashy—but it’s essential. Making it open-source and free knocks out one of the highest-friction, 
                            highest-cost elements of building for new and even veteran developers.</p>
                          <a href="https://x.com/jack_anorak" target='_blank' className='text-BLUE no-underline'>— jackanorak</a>
                        </blockquote>
                        <p>Walnut is stepping in to fix that. We’re building an open-source debugger and simulator for the Superchain—one that any team can run locally, 
                          automate, and customize for their own chains.
                        </p>
                        <p>
                          If you’re building infrastructure or apps on the Superchain and want better devtools—let’s talk.
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
