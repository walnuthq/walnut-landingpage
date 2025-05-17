import { Button } from '../../components/button'
import { Container } from '../../components/container'

import { GradientBackground } from '../../components/gradient'
import { Navbar } from '../../components/navbar'
import { Heading, SectionHeading, Subheading } from '../../components/text'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import author from "@/images/blog/J6fWCiVz_400x400.jpg";
import Image from 'next/image'
import TenderlyGasProfiler from "@/images/blog/tenderly-gas-profiler.webp";
import type { Metadata } from 'next';
import { generateMetadata } from '@/app/utils/generate-metadata-service';
import { Footer } from '@/components/Footer'
import { GetStarted } from '@/app/components/get-started'
import MainHeader from '@/app/components/MainHeader'

const title = "Welcome to Walnut blog | Walnut";
const description = "At Walnut we develop tools for blockchain engineers, with a specific focus on Starknet.";
export const metadata: Metadata = generateMetadata(title, description, 'https://www.walnut.network/blog/welcome');

export default function Blog() {
  return (
    <main className="overflow-hidden">
    <MainHeader/>
    <Container>
      <SectionHeading className="mt-32">
        Saturday, December 23, 2023
      </SectionHeading>
      <Heading as="h1" className="mt-2">
        Welcome to Walnut blog
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
              <div className="">
                <div className="max-w-3xl mx-auto">
                  <main>
                    <article className="relative">
                      <div className="mt-12 mb-24 prose">
                        <p className="lead">
                          We are excited to launch this blog as a platform for sharing
                          our experiences, challenges, and advancements in developing
                          tools for blockchain engineers, with a specific focus on
                          Starknet. Our goal is to foster insightful discussions and
                          actively engage with community feedback.
                        </p>
                        <p>Our mission is clear:</p>
                        <blockquote>
                          <p>
                            We aim to empower every Starknet developer to achieve
                            more.
                          </p>
                        </blockquote>
                        <p>
                          Our first product, the Walnut Debugger, is a visual,
                          step-by-step debugger designed for Starknet developers who
                          work with Cairo. Currently in its closed Beta stage, we
                          anticipate launching in Q1 2024. The Walnut Debugger fills a
                          critical gap by being the first debugger built for Cairo. If
                          you&apos;re interested in early access, we&apos;d love to
                          hear from you.
                        </p>
                        <p>
                          While we recognize that a debugger alone is not enough to
                          fulfill our mission for the rapidly expanding Starknet
                          developer community, we see it as a crucial step. With this
                          understanding, let&apos;s delve into other areas and tools
                          we at Walnut are developing, each tailored to address
                          specific challenges Starknet developers face.
                        </p>

                        <ul>
                          <li>
                            <p>
                              <strong>Storage diff visualization.</strong> Developers
                              need better visibility into smart contract storage and
                              how transactions affect it. This tool is particularly
                              useful for optimizing smart contract memory. On
                              Starknet, transaction costs are mostly impacted by
                              storage, therefore the ability to optimize storage is
                              vital.
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>Gas profiling.</strong> Starknet&apos;s
                              execution may be generally cheap, but visibility into
                              gas consumption is still necessary. Poorly written
                              contracts can consume excessive gas, even on Starknet.
                              Gas profilers offer monitoring capabilities and assist
                              in improving the gas footprint.
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>Web 3 actions</strong> enable developers to
                              write custom code that executes in response to
                              predefined on-chain events on Starknet. For instance, a
                              developer could set up a Telegram notification when a
                              loan health factor drops below a certain percentage.
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>
                                Transaction simulator and dApp monitoring tools.
                              </strong>{" "}
                              Simulations allow developers to test transactions and
                              see outcomes without the need to send them on-chain and
                              pay for gas. Monitoring tools based on these simulations
                              provide dApp developers with insights into potential
                              user issues, reducing the need for direct user support
                              interaction.
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>Shared devnets</strong> provide Starknet
                              developer teams with a collaborative environment for
                              writing smart contracts and dApps. Unlike public
                              testnets, shared devnets offer privacy for projects and
                              a gas-free environment.
                            </p>
                          </li>
                        </ul>

                        <p>
                          If any of these areas interest you, or if you&apos;re
                          actively involved in them, we encourage you to reach out and
                          connect with us.
                        </p>

                        <p>
                          Blockchain technology, with Starknet at its forefront, is
                          poised to revolutionize the world. Starknet&apos;s vision,{" "}
                          <a
                            href="https://community.starknet.io/t/starknet-vision/101255"
                            target="_blank"
                          >
                            enabling individuals to freely implement and use any
                            social function they desire
                          </a>
                          , is a testament to the transformative power of blockchain.
                          Developers are key to this change. With tools like the
                          Walnut Debugger and our upcoming developments at Walnut,
                          we&apos;re dedicated to supporting developers who will play
                          a key role in ensuring the success and growth of
                          Starknet&apos;s ecosystem.
                        </p>

                        <p className="mt-12 text-gray-500">
                          * According to a detailed{" "}
                          <a href="https://www.developerreport.com/" target="_blank">
                            report by Electric Capital
                          </a>
                          , Starknet has the fastest-growing number of full-time
                          developers compared to other layer&nbsp;two ecosystems.
                          Among the top 20 ecosystems (measured by full-time
                          developers), Starknet&apos;s number of full-time developers
                          has increased by an incredible 622% in the last two years.
                          This growth is much higher than Osmosis at 194% and Arbitrum
                          at 125%, who are at 2nd and 3rd place respectively.
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
