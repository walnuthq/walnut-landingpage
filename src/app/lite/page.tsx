

import Hero from "@/components/lite/HeroLite";
import LargeTestimonial from "@/components/lite/large-testimonial";
import FeaturesPlanet from "@/components/lite/features-planet";
import Features from "@/components/features-home";
import CallToAction  from "@/components/lite/CallToAction";
import Faqs from "@/components/lite/faqs";
import LogoClouds from "@/components/lite/LogoClouds";
// import TestimonialsCarousel from "@/components/testimonials-carousel";
// import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoClouds/>
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
