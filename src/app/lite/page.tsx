

import Hero from "@/components/HeroLite";
import LargeTestimonial from "@/components/large-testimonial";
import FeaturesPlanet from "@/components/features-planet";
import Features from "@/components/features-home";
import CallToAction  from "@/components/lite/CallToAction";
import Faqs from "@/components/lite/faqs";
// import TestimonialsCarousel from "@/components/testimonials-carousel";
// import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesPlanet />
      <Features />
      <CallToAction/>
      {/* <Features />
      <TestimonialsCarousel />
      <Cta /> */}
      <LargeTestimonial />
      <Faqs/>
    </>
  );
}
