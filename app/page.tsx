"use client";

import { MotionDiv, MotionButton } from '@/components/motion/motion'
import { ChevronRight, Trophy, Palette, Microscope, TabletSmartphone, Calendar, Sparkles } from 'lucide-react'
import homepageData from '@/data/homepage-data.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const iconComponents = {
  Trophy: Trophy,
  Basketball: Microscope,
  Palette: Palette,
  Microscope: Microscope,
  TabletSmartphone: TabletSmartphone,
  Calendar: Calendar,
  Sparkles: Sparkles
}

export default function Home() {
  const { heroSection, trendingSection, techFeatures, testimonials, programs, socialMediaWall, stats, events } = homepageData

  // Mobile-first carousel configuration
  const carouselBreakpoints = {
    320: { // Mobile
      slidesPerView: 1,
      spaceBetween: 16
    },
    640: { // Tablet
      slidesPerView: 2,
      spaceBetween: 24
    },
    1024: { // Desktop
      slidesPerView: 4,
      spaceBetween: 32
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-900">

      {/* Hero Section */}
      <section className="relative h-[110svh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/cosmic-texture.png')] opacity-20 mix-blend-soft-light" />
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-6xl z-10 relative">
            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white space-y-8"
            >
              <div className="mb-4 md:mb-8 flex items-center gap-4 bg-white/5 backdrop-blur-lg rounded-full px-6 py-3 w-fit border border-slate-700/50">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />
                <span className="font-medium text-slate-300 text-sm md:text-base">Ranked #1 in Nigeria</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tighter">
                <MotionDiv
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent"
                >
                  {heroSection.title.split(' ').slice(0,3).join(' ')}
                </MotionDiv>
                <span className="text-slate-100 block mt-4 md:mt-6 text-2xl md:text-4xl lg:text-5xl">
                  {heroSection.title.split(' ').slice(3).join(' ')}
                </span>
              </h1>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-8 md:mt-12">
                {heroSection.buttons.map((button, index) => (
                  <MotionButton
                    key={index}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className={`${
                      button.variant === 'primary' 
                        ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 shadow-[0_8px_24px_rgba(34,211,238,0.2)]'
                        : 'border-2 border-slate-600 bg-slate-800/30 backdrop-blur-lg'
                    } px-6 py-4 md:px-8 md:py-5 rounded-[1.5rem] md:rounded-[2rem] text-base md:text-lg font-semibold transition-all`}
                  >
                    <span className="tracking-wide">{button.text}</span>
                    <ChevronRight className="ml-2 md:ml-3 inline-block transition-transform group-hover:translate-x-1 w-4 h-4 md:w-5 md:h-5" />
                  </MotionButton>
                ))}
              </div>
            </MotionDiv>
          </div>
        </div>

        {/* Floating Student Avatars */}
        <div className="absolute bottom-4 md:bottom-8 left-0 right-0 flex justify-center gap-4 md:gap-6">
          {heroSection.students.map((student, index) => (
            <MotionDiv
              key={index}
              initial={{ y: 0 }}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3 + index, repeat: Infinity }}
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-2 md:border-[3px] border-slate-600/50 overflow-hidden shadow-lg md:shadow-xl cursor-pointer hover:border-cyan-400 transition-all"
            >
              <img 
                src={student} 
                alt="Student" 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform"
                loading="lazy"
              />
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-slate-800/30 backdrop-blur-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4">
              {stats.title}
              <span className="ml-2 md:ml-4 text-2xl md:text-3xl bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                ✨
              </span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base">Metrics that define our excellence</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative">
            {stats.items.map((stat, index) => (
              <MotionDiv
                key={index}
                whileHover={{ y: -5, scale: 1.03 }}
                className="group relative bg-slate-700/50 backdrop-blur-lg p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-600/50 hover:border-cyan-400/30 transition-all"
              >
                <div className="mb-4 md:mb-6 flex items-center justify-center">
                  <div className="text-4xl md:text-5xl p-3 md:p-4 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 rounded-xl md:rounded-2xl">
                    {stat.emoji}
                  </div>
                </div>
                <div className="text-center space-y-1 md:space-y-2">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <p className="text-slate-300 text-sm md:text-base font-medium">{stat.label}</p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-24 bg-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4">
              {programs.title}
              <span className="ml-2 md:ml-4 text-2xl md:text-3xl text-emerald-400">✦</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base">Future-focused learning paths</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {programs.items.map((program, index) => (
              <MotionDiv
                key={index}
                whileHover={{ y: -5 }}
                className="group relative bg-slate-800/50 backdrop-blur-lg p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-700/50 hover:border-cyan-400/30 transition-all"
              >
                <div className="text-5xl md:text-6xl mb-4 md:mb-6 text-emerald-400/80">{program.emoji}</div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-2 md:mb-3">{program.title}</h3>
                <p className="text-slate-400 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">{program.description}</p>
                <div className="flex items-center gap-2 text-cyan-400 font-medium text-sm md:text-base">
                  <span>Explore Program</span>
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 mt-0.5" />
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4">
              {testimonials.title}
              <span className="ml-2 md:ml-4 text-2xl md:text-3xl text-cyan-400">❝</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base">Voices from our community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {testimonials.quotes.map((testimonial, index) => (
              <MotionDiv
                key={index}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-slate-800/50 backdrop-blur-lg p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-700/50 hover:border-emerald-400/30 transition-all"
              >
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl object-cover border-2 border-slate-600/50 shadow-md"
                  />
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-100">{testimonial.name}</h3>
                    <p className="text-slate-400 text-xs md:text-sm">Class of 2025</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed relative pl-4 md:pl-6">
                  <span className="text-2xl md:text-3xl absolute -top-2 left-0 text-emerald-400/80">“</span>
                  {testimonial.text}
                </p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 md:py-24 bg-slate-900/50 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4">
              {events.title}
              <span className="ml-2 md:ml-4 text-2xl md:text-3xl text-cyan-400">🗓️</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base">Mark your calendars</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Upcoming Events */}
            <div className="bg-slate-800/50 backdrop-blur-lg p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-700/50">
              <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-4 md:mb-6">Upcoming Events</h3>
              <div className="space-y-3 md:space-y-4">
                {events.upcomingEvents.map((event, index) => (
                  <MotionDiv
                    key={index}
                    whileHover={{ x: 5 }}
                    className="p-3 md:p-4 bg-slate-700/30 rounded-lg md:rounded-xl flex items-center gap-3 md:gap-4 border border-slate-600/50 hover:border-cyan-400/30 transition-all"
                  >
                    <div className="bg-cyan-400/10 p-2 md:p-3 rounded-md">
                      <Calendar className="w-6 h-6 md:w-7 md:h-7 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-medium text-slate-100">{event.title}</h4>
                      <p className="text-slate-400 text-sm md:text-base">{event.date} | {event.location}</p>
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </div>

            {/* Important Dates */}
            <div className="bg-slate-800/50 backdrop-blur-lg p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-700/50">
              <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-4 md:mb-6">Key Dates</h3>
              <div className="space-y-3 md:space-y-4">
                {events.importantDates.map((date, index) => (
                  <div 
                    key={index}
                    className="p-3 md:p-4 bg-slate-700/30 rounded-lg md:rounded-xl border border-slate-600/50 hover:border-emerald-400/30 transition-all"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 text-sm md:text-base">{date.event}</span>
                      <span className="text-emerald-400 font-medium text-sm md:text-base">{date.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Image Carousel Section */}
            <section className="py-16 md:py-24 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Campus Moments
            </h2>
            <p className="text-slate-400 text-sm md:text-base">Life beyond the classroom</p>
          </div>

          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                nextEl: '.carousel-next',
                prevEl: '.carousel-prev'
              }}
              pagination={{ 
                clickable: true,
                bulletClass: 'swiper-pagination-bullet !bg-slate-600 !opacity-50',
                bulletActiveClass: '!bg-cyan-400 !opacity-100'
              }}
              breakpoints={carouselBreakpoints}
              className="!overflow-visible"
            >
              {socialMediaWall.posts.map((post, index) => (
                <SwiperSlide key={index}>
                  <MotionDiv
                    whileHover={{ scale: 1.03 }}
                    className="group relative aspect-square rounded-xl md:rounded-2xl overflow-hidden bg-slate-700"
                  >
                    <img
                      src={post}
                      alt="Campus life"
                      className="w-full h-full object-cover transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 flex items-end p-3 md:p-4 transition-opacity">
                      <div className="flex items-center gap-2 text-slate-100">
                        <span className="text-lg">👤</span>
                        <span className="text-xs md:text-sm font-medium">@maranatha_student</span>
                      </div>
                    </div>
                  </MotionDiv>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Arrows */}
            <div className="carousel-prev absolute top-1/2 -left-3 md:-left-4 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-slate-800/50 p-1 md:p-2 hover:bg-slate-700/50 transition-colors">
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 rotate-180 text-white" />
            </div>
            <div className="carousel-next absolute top-1/2 -right-3 md:-right-4 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-slate-800/50 p-1 md:p-2 hover:bg-slate-700/50 transition-colors">
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}