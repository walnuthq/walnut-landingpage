import { Button } from '../../components/button'
import { Container } from '../../components/container'

import { GradientBackground } from '../../components/gradient'
import { Navbar } from '../../components/navbar'
import { Heading, SectionHeading, Subheading } from '../../components/text'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import author from "@/images/blog/J6fWCiVz_400x400.jpg";
import Image from 'next/image'
import type { Metadata } from 'next';
import { generateMetadata } from '@/app/utils/generate-metadata-service';
import { GetStarted } from '@/app/components/get-started'
import { Footer } from '@/components/Footer'
import MainHeader from '@/app/components/MainHeader'

const title = "Announcing Contract Verification on Starknet | Walnut";
const description = "We are excited to introduce Cairo contract verification for Starknet, now live on Walnut and accessible via Walnut APIs.";
export const metadata: Metadata = generateMetadata(title, description, 'https://www.walnut.network/blog/starknet-contract-verification');

export default function Blog() {
  return (
    <main className="overflow-hidden">
    <MainHeader/>
    <Container>
      <SectionHeading className="mt-32">
        Monday, August 12, 2024
      </SectionHeading>
      <Heading as="h1" className="mt-2">
        Announcing Contract Verification on Starknet
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
                        <p className="lead">
                          We are excited to introduce Cairo contract verification for
                          Starknet, now live on Walnut and accessible via Walnut APIs.
                        </p>
                        <p>
                          Any Cairo developer can now easily verify their Cairo smart
                          contracts on Walnut. Once a contract is verified, its source
                          code becomes publicly available, fostering transparency and
                          trust within the community.
                        </p>

                        <p>
                          Initially, contract verification is available for Cairo
                          2.6.3 and 2.6.4 versions. We are actively working on adding
                          support for additional Cairo versions in the coming days and
                          weeks to ensure broad compatibility.
                        </p>

                        <p>
                          Building contract verification marks a significant milestone
                          in our journey to develop Walnut, a comprehensive
                          transaction debugger for Starknet. Verified contracts on
                          Walnut provide developers with access to a full call trace
                          and a step-by-step transaction debugger, greatly enhancing
                          the development and debugging process.
                        </p>

                        <h2>Private vs. Public Contract Verification</h2>

                        <p>
                          Currently, all verified contracts on Walnut are publicly
                          accessible. However, we understand that some teams may
                          prefer to keep their code private while still accessing the
                          Walnut transaction debugger. To accommodate this, we plan to
                          introduce private verification. This feature will allow
                          teams to verify contracts in a secure, private environment,
                          providing access to all debugging tools without publicly
                          exposing their code. If you&apos;re interested in this
                          feature,{" "}
                          <a href="https://t.me/walnuthq" target="_blank">
                            let us know
                          </a>.
                        </p>

                        <p>
                          To learn more about how to verify Cairo contracts with
                          Walnut,{" "}
                          <a href="https://docs.walnut.dev/" target="_blank">
                            head to our documentation
                          </a>.
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
