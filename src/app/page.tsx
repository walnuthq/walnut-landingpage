import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { BeforeAfter } from '@/components/BeforeAfter'
import { Features } from '@/components/Features'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { Testimonial } from '@/components/Testimonial'
import { RequestAccess } from '@/components/RequestAccess'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BeforeAfter />
        <Features />
        <Testimonial />
        <RequestAccess />
      </main>
      <Footer />
    </>
  )
}
