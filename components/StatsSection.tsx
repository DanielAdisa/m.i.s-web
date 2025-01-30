import { MotionDiv } from "./motion/motion"
import homepageData from '@/data/homepage-data.json'

const StatsSection = () => {
    const { stats  } = homepageData

  return (
    
    <section className="h-screen snap-start bg-slate-800/30 backdrop-blur-lg relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="w-full">
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
        </div>
      </section>
  )
}
export default StatsSection