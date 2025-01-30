import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { MotionDiv } from "./motion/motion"
import homepageData from '@/data/homepage-data.json'
import { ChevronRight } from 'lucide-react'

const ImageCarouselSection = () => {

    const {  socialMediaWall } = homepageData

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
    <section className="h-screen snap-start bg-slate-800">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="w-full">
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
        </div>
      </section>
  )
}
export default ImageCarouselSection