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
import arbitrum1 from '@/images/blog/arbitrum-blog-1.png'
import { Screenshot } from '@/components/screenshot';
import BlogScreenshot from '../components/BlogScreenshot';

const title = "Walnut Labs Selected as Core Maintainer of Madara Documentation — Official Appchain Stack on Starknet";
const description = "We’re excited to announce that Walnut Labs, the team behind Walnut, has been selected as the core maintainer of the official Madara Documentation.";
export const metadata: Metadata = generateMetadata(title, description, 'https://www.walnut.network/blog/starknet-contract-verification');

export default function Blog() {
  return (
    <main className="overflow-hidden">
    <MainHeader/>
    <Container>
      <SectionHeading className="mt-32">
        Monday, April 28, 2025
      </SectionHeading>
      <Heading as="h1" className="mt-2">
        New Partnership with Arbitrum: Advancing Debugging for the Solidity MultiVM
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
                        <p className="lead">Walnut Labs is partnering with Offchain Labs—the team behind 
                          Arbitrum—to improve the debugging experience across the Arbitrum stack. 
                          This effort is part of our broader mission to bring modern debugging and monitoring 
                          tools to emerging rollup ecosystems.</p>
                        <p>Debugging smart contracts is hard—especially with custom VMs and execution models. We’ve seen 
                          this firsthand across the chains we support. Without good tooling, developers face slower iteration, 
                          higher risk of bugs, and friction when building complex apps. Many blockchain projects introduce 
                          their own VMs or languages that aren’t compatible with web2 tooling. Some, like Starknet, Miden, or 
                          Fuel, use entirely custom architectures. Others—like Arbitrum’s MultiVM, zkSync, Scroll, or Gravity—build on 
                          the foundations of the EVM.</p>
                        <h2>Why Focus on MultiVM?</h2>
                        <p>
                          Most existing debugging tools are commercial and gated, which slows down experimentation and limits growth. 
                          Offchain Labs saw the need for more open and accessible options.
                        </p>
                        <p>Arbitrum’s MultiVM (previously called EVM+) adds a second virtual machine alongside the EVM, allowing developers to write 
                          smart contracts in both Solidity and languages that 
                          compile to WebAssembly (WASM), such as Rust or C. This approach enables faster, more memory-efficient execution while 
                          maintaining full compatibility with the Ethereum development model.
                        </p>
                        <BlogScreenshot src={arbitrum1} />
                        <p>While this flexibility unlocks significant development potential, it also introduces new complexity to the debugging 
                          process. To address this, Walnut Labs is building an open-source, CLI-based debugger tailored for the MultiVM environment.
                           Open-source makes it ideal for chains that need custom tooling and deep integration. Over the next year, our team will focus 
                           on supporting both Solidity and Rust contracts running on Arbitrum Orbit chains, giving developers deeper visibility into their 
                           execution paths and transaction behavior.
                        </p>
                        <p>We’re excited to help make development on Arbitrum easier—and to support the next wave of builders on Orbit.</p>
                        <h2>🔧 What’s Next</h2>
                        <p>Over the coming months, we’ll be rolling out early versions of the MultiVM debugger for Arbitrum, starting with support for Solidity 
                          and Rust contracts on Orbit chains. Our goal is to make debugging seamless across both VMs—so developers can focus on building, not digging through logs.</p>
                        <p>If you’re building on Arbitrum, experimenting with MultiVM, or working on your own rollup and need help with debugging or monitoring, 
                          reach out. Walnut Labs works closely with teams to deliver custom devtools and observability infrastructure tailored to new VMs, languages, 
                          or runtime environments.</p>
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
