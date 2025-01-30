"use client";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Footer } from '@/components/navigation/Footer';
import { Navbar } from '@/components/navigation/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import TestimonialSection from '@/components/TestimonialSection';
import ProgramSection from '@/components/ProgramSection';
import EventsSection from '@/components/EventsSection';
import ImageCarouselSection from '@/components/ImageCarouselSection';


export default function Home() {

  return (
    <div className="flex flex-col bg-gradient-to-tl from-violet-600 via-indigo-600 to-purple-600">

      {/* Header */}
      <section id="NavBar" className="">
          <Navbar />
      </section>

      {/* Hero Section */}
      <section id="Hero" className="">
          <HeroSection />
      </section>

      {/* Stats Section */}
      <section id="Stats" className="">
          <StatsSection />
      </section>

      {/* Testimonials Section */}
      <section id="Testimonials" className="">
          <TestimonialSection />
      </section>

      {/* Programs Section */}
      <section id="Programs" className="">
          <ProgramSection />
      </section>

      {/* Events Section */}
      <section id="EventsSection" className="">
          <EventsSection />
      </section>

      {/* Image Carousel Section */}
      <section id="ImageCarousel" className="">
          <ImageCarouselSection />
      </section>

      {/* Footer */}
      <section id="NavBar" className="">
          <Footer />
      </section>

    </div>
  )
}