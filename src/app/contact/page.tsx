import { Container } from '../../components/container_'
import { GetStarted } from '../../components/get-started'
import type { Metadata } from 'next'
import Image from 'next/image'
import { generateMetadata } from '@/app/utils/generate-metadata-service';
import MainHeader from '../../components/main-header'
import { Footer } from '@/components/footer_'
import contact_pattern from "@/images/contact/contact-pattern.svg"
import contact_logo_x from "@/images/contact/contact-logo-x.svg"
import contact_logo_email from "@/images/contact/contact-logo-email.svg"
import contact_logo_tg from "@/images/contact/contact-logo-tg.svg"
import { Heading } from '../../components/text';


export const runtime = 'edge';

const title = "Walnut blog";
const description = "At Walnut we develop tools for blockchain engineers, with a specific focus on Starknet.";
export const metadata: Metadata = generateMetadata(title, description, 'https://www.walnut.network/blog/blog');


export default async function Contact() {
  return (
    <main className="overflow-hidden relative">
      <MainHeader/>
      <Container className="min-h-screen ">
        <div className="relative isolate lg:bg-WHITE w-full flex items-center min-h-screen  pt-[4.5rem]">
          <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative hidden lg:block">
              <div className="w-full">
                <Image 
                  alt='contact image' 
                  src={contact_pattern} 
                  className='w-full' 
                  priority
                />
              </div>
            </div>
            <div className="relative flex lg:justify-end lg:static ">
              <div className="max-w-xl lg:max-w-lg">
                <Heading as="h2" className="text-3xl/[1.2] font-medium tracking-tight text-BLACK sm:text-5xl">
                  Get in touch
                </Heading>
                <p className="mt-6 text-lg/8 text-GREY-2">
                  Whether you have a question, a project in mind, or just want to say hi, we&apos;d love to hear from you.
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

