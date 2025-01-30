import { ChevronRight } from "lucide-react"
import { MotionDiv } from "./motion/motion"
import homepageData from '@/data/homepage-data.json'

const ProgramSection = () => {

    const {  programs } = homepageData
    
  return (
    <section className="h-screen snap-start bg-slate-900 relative">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="w-full">
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
        </div>
      </section>
  )
}
export default ProgramSection