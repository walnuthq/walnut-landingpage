import { Container } from '../components/container'
import { GetStarted } from '../components/get-started'
import type { Metadata } from 'next'
import Image from 'next/image'
import { generateMetadata } from '@/app/utils/generate-metadata-service';
import MainHeader from '../components/MainHeader'
import { Footer } from '@/components/Footer'
import contact_pattern from "@/images/contact/contact-pattern.svg"
import contact_logo_x from "@/images/contact/contact-logo-x.svg"
import contact_logo_email from "@/images/contact/contact-logo-email.svg"
import contact_logo_tg from "@/images/contact/contact-logo-tg.svg"
import { Heading } from '../components/text';


export const runtime = 'edge';

const title = "Walnut blog";
const description = "At Walnut we develop tools for blockchain engineers, with a specific focus on Starknet.";
export const metadata: Metadata = generateMetadata(title, description, 'https://www.walnut.network/blog/blog');


export default async function Contact() {
  return (
    <main className="overflow-hidden relative">
      <MainHeader/>
      <Container className="mt-16 static ">
        <div className="relative isolate lg:bg-WHITE">
        <div className="mx-auto flex justify-end max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden lg:w-1/2 hidden lg:block">
                <Image alt='bg' src={contact_pattern} className='w-full h-full'/>
              </div>
              <Heading as="h2" className="text-3xl/[1.2] font-medium tracking-tight text-BLACK sm:text-5xl">
                Get in touch
              </Heading>
              <p className="mt-6 text-lg/8 text-GREY-2">
                Whether you have a questiona project in mind or just want to say hi, we&apos;d love to hear from you.
              </p>
              <dl className="mt-10 space-y-4 text-base/7 text-GREY-2">
                <div className="flex items-center gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <Image alt='email_logo' src={contact_logo_email} className='w-6 opacity-50'/>
                  </dt>
                  <dd>
                  <a href="mailto:hi@walnut.dev" className="hover:text-BLACK" target='_blank'>
                      hi@walnut.dev
                    </a>
                  </dd>
                </div>
                <div className="flex items-center gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telegram</span>
                    <Image alt='tg_logo' src={contact_logo_tg} className='w-6 opacity-50'/>
                  </dt>
                  <dd>
                    <a href="https://t.me/walnuthq" className="hover:text-BLACK" target='_blank'>
                      walnuthq
                    </a>
                  </dd>
                </div>
                <div className="flex items-center gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">X</span>
                    <Image alt='x_logo' src={contact_logo_x} className='w-6 opacity-50'/>
                  </dt>
                  <dd>
                    <a href="https://x.com/walnut_dev" className="hover:text-BLACK" target='_blank'>
                      @walnut_dev
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        </div>
      </Container>
      <GetStarted />
      <Footer/>
    </main>
  )
}

