import { Footer } from '@/components/Footer'
import { Banner } from '@/components/Banner';
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { BeforeAfter } from '@/components/BeforeAfter'
import { Features } from '@/components/Features'
import { Testimonial } from '@/components/Testimonial'
import { RequestAccess } from '@/components/RequestAccess'

export default function Home() {
  return (
    <>
      <Banner />
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
