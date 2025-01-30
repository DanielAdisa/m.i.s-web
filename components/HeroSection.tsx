import { Calendar, ChevronRight, Microscope, Palette, Sparkles, TabletSmartphone, Trophy } from "lucide-react"
import { MotionButton, MotionDiv } from "./motion/motion"
import homepageData from '@/data/homepage-data.json'



const HeroSection = () => {
    
    const { heroSection } = homepageData

  return (
    <section className="relative h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/student-1.jpg')] bg-cover bg-top bg-no-repeat opacity-20 mix-blend-soft-light" />
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="w-full z-10 relative">
            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white space-y-8 flex flex-col w-full justify-center items-center"
            >
              <div className="mb-4 md:mb-8 flex items-center gap-4 bg-white/5 backdrop-blur-lg rounded-full px-6 py-3 w-fit border border-slate-700/50">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />
                <span className="font-medium text-slate-300 text-sm md:text-base">Ranked #1 in Nigeria</span>
              </div>
              
              <h1 className="text-4xl md:text-3xl lg:text-3xl xl:text-5xl font-bold leading-[1.1] tracking-tighter">
                <MotionDiv
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-gradient-to-r from-cyan-400 text-center to-emerald-400 bg-clip-text text-transparent"
                >
                  {heroSection.title.split(' ').slice(0,3).join(' ')}
                </MotionDiv>
                <span className="text-slate-100 block text-center mt-4 md:mt-6 text-2xl md:text-4xl lg:text-5xl">
                  {heroSection.title.split(' ').slice(3).join(' ')}
                </span>
              </h1>

              <div className="flex flex-col justify-center items-center sm:flex-row gap-3 md:gap-4 mt-8 md:mt-12">
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
  )
}
export default HeroSection