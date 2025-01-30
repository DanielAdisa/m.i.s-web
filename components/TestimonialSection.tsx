import { MotionDiv } from "./motion/motion"
import homepageData from '@/data/homepage-data.json'

const TestimonialSection = () => {

    const { testimonials } = homepageData

  return (
    <section id="testimonial" className="h-screen snap-start bg-slate-950">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="w-full">
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
        </div>
      </section>
  )
}
export default TestimonialSection