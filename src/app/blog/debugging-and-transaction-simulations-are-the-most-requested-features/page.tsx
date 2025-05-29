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
import image1 from '@/images/blog/need-for-debugging-tools-1.png'
import image2 from '@/images/blog/need-for-debugging-tools-2.png'
import { Screenshot } from '@/components/screenshot';

const title = "Walnut Labs Selected as Core Maintainer of Madara Documentation — Official Appchain Stack on Starknet";
const description = "We’re excited to announce that Walnut Labs, the team behind Walnut, has been selected as the core maintainer of the official Madara Documentation.";
export const metadata: Metadata = generateMetadata(title, description, 'https://www.walnut.network/blog/starknet-contract-verification');

export default function Blog() {
  return (
    <main className="overflow-hidden">
    <MainHeader/>
    <Container>
      <SectionHeading className="mt-32">
        Friday, May 2, 2025
      </SectionHeading>
      <Heading as="h1" className="mt-2">
        Debugging and Transaction Simulations Are the Most Requested Features by Blockchain Developers
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
                        <p className="lead">Starknet is an ecosystem that made a bold decision: it launched with its own custom language—Cairo. 
                          That means, among other things, it had to build everything from scratch. Cairo devs couldn’t rely on any of the existing 
                          blockchain tooling available for Solidity, Ethereum, or other blockchain ecosystems.
                        </p>
                        <p>Indexers, nodes, testing frameworks—every piece of developer infrastructure had to be built separately by the Starknet ecosystem or its community.</p>
                        <p>
                          In August 2024, the Starknet Foundation conducted an <a href="https://www.starknet.io/blog/cairo-gets-high-marks-from-starknet-devs-heres-why/" target='_blank' className='text-BLUE no-underline'>in-depth survey targeting</a> its developer 
                          community to assess the current state of development and identify areas for improvement. 
                          The survey garnered responses from 92 Cairo developers, with a significant portion (61%) having 3–5 years of coding experience.
                        </p>
                        <p>When asked about the tools they most desired, 36.8% of developers prioritized the development of an 
                          online debugger and profiler for Starknet, surpassing other tools like a Cairo package registry and documentation generators.
                          This emphasis on debugging tools indicates a pressing need for better developer support in the ecosystem.
                        </p>
                        <div className={`lg:bg-GREY lg:p-2`}>
                          <div 
                            className={`relative overflow-hidden [&+*]:mt-8 lg:bg-[url('/changelog-bg.svg')] bg-cover bg-center no-repeat lg:p-4`}
                          >
                            <Image src={image1} alt="" className='lg:shadow-2xl rounded-3xl w-full h-auto'/>
                          </div>
                        </div>
                        <p>The survey also delved into security tooling preferences. In that category, transaction debugging emerged as the top priority, 
                          with 32.4% of respondents selecting it over other options such as formal verification, 
                          static analysis, and code coverage tools. This consistent demand across different tooling categories underscores 
                          the critical role of debugging in the development process.
                        </p>
                        <div className={`lg:bg-GREY lg:p-2`}>
                          <div 
                            className={`relative overflow-hidden [&+*]:mt-8 lg:bg-[url('/changelog-bg.svg')] bg-cover bg-center no-repeat lg:p-4`}
                          >
                            <Image src={image2} alt="" className='lg:shadow-2xl rounded-3xl w-full h-auto'/>
                          </div>
                        </div>
                        <p>These insights from the Starknet developer survey highlight a clear and pressing demand for robust debugging and 
                          simulation tools within the ecosystem.</p>
                        
                          <blockquote>
                          <p>In traditional software, monitoring and debugging have historically been the cornerstone of development. 
                            It’s no different for blockchain or smart contract devs.</p>
                        </blockquote>
                        <p>
                        What’s happening in Starknet isn’t unique. Every rollup and chain—Optimism, Arbitrum, Miden, Fuel, zkSync, 
                        you name them—faces the same barrier. Without great tooling, devs struggle to build.
                        </p>
                        <p>
                        That’s why we’re working with ecosystems like Starknet, Arbitrum and Optimism and many more to bring modern debugging and simulation tools to their communities. 
                        It closes the loop faster, surfaces bugs earlier, and gives teams the confidence to move fast.
                        </p>
                        <p>If you’re building a new chain or rollup and want to raise the bar for your dev experience, we’d love to talk. We’ve done it before—and we can help you do it too.</p>
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
