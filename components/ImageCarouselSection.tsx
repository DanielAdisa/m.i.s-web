import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { MotionDiv } from "./motion/motion"
import homepageData from '@/data/homepage-data.json'
import { ChevronRight, Instagram } from 'lucide-react'

const ImageCarouselSection = () => {
    const { socialMediaWall } = homepageData

    const carouselBreakpoints = {
        320: { slidesPerView: 1.2, spaceBetween: 16 },
        640: { slidesPerView: 2.2, spaceBetween: 24 },
        1024: { slidesPerView: 3.5, spaceBetween: 32 }
    }

    return (
        <section className="min-h-screen py-20 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900  relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/dots-pattern.svg')] opacity-20" />
            
            <div className="container mx-auto px-4">
                <div className="mb-12 md:mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Instagram className="w-6 h-6 text-yellow-400" />
                        <span className="text-blue-200 text-sm font-medium tracking-wide">
                            @maranatha_High
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
                        Student Life
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400 block md:inline"> Through Our Lens</span>
                    </h2>
                    <p className="text-blue-200 text-center max-w-2xl mx-auto text-lg">
                        Catch the spirit of Maranatha High - where every day is an adventure!
                    </p>
                </div>

                <div className="relative px-4">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation={{
                            nextEl: '.carousel-next',
                            prevEl: '.carousel-prev'
                        }}
                        pagination={{ 
                            clickable: true,
                            bulletClass: 'swiper-pagination-bullet !bg-blue-600 !opacity-50',
                            bulletActiveClass: '!bg-yellow-400 !opacity-100'
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        breakpoints={carouselBreakpoints}
                        className="!overflow-visible"
                    >
                        {socialMediaWall.posts.map((post, index) => (
                            <SwiperSlide key={index}>
                                <MotionDiv
                                    whileHover={{ y: -10 }}
                                    className="group relative aspect-[4/5] rounded-xl md:rounded-2xl overflow-hidden bg-blue-900 border-2 border-blue-700/20"
                                >
                                    <img
                                        src={post}
                                        alt="High school activity"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-4">
                                            <div className="flex items-center gap-3 backdrop-blur-sm bg-blue-900/30 p-3 rounded-lg">
                                                <div className="w-9 h-9 rounded-full border-2 border-yellow-400 overflow-hidden">
                                                    <img 
                                                        src="/student-mascot.jpg" 
                                                        alt="Student contributor" 
                                                        className="w-full h-full object-cover" 
                                                    />
                                                </div>
                                                <div>
                                                    <p className="text-yellow-400 font-medium text-sm">
                                                        @gvhs_student{index + 1}
                                                    </p>
                                                    <p className="text-blue-200 text-xs">
                                                        {['Game Day! 🏈', 'Science Fair 🔬', 'Drama Club 🎭', 'Prom Night 💃'][index % 4]}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </MotionDiv>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button type="button" aria-label="Previous slide" className="carousel-prev absolute top-1/2 -left-4 z-10 -translate-y-1/2 transform p-3 rounded-full bg-white/20 backdrop-blur-lg hover:bg-white/30 transition-all group">
                        <ChevronRight className="w-7 h-7 rotate-180 text-yellow-400 group-hover:scale-125 transition-transform" />
                    </button>
                    <button type="button" aria-label="Next slide" className="carousel-next absolute top-1/2 -right-4 z-10 -translate-y-1/2 transform p-3 rounded-full bg-white/20 backdrop-blur-lg hover:bg-white/30 transition-all group">
                        <ChevronRight className="w-7 h-7 text-yellow-400 group-hover:scale-125 transition-transform" />
                    </button>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-900/80 to-transparent" />
        </section>
    )
}

export default ImageCarouselSection