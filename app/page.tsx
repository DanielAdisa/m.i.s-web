import { MotionDiv, MotionButton } from '@/components/motion/motion'
import { ChevronRight, Trophy, Palette, Microscope, TabletSmartphone, Calendar, Sparkles } from 'lucide-react'
import homepageData from '@/data/homepage-data.json'

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

  return (
    <div className="min-h-screen flex flex-col bg-slate-900">

      {/* Hero Section - Cosmic Design */}
      <section className="relative h-[110svh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/cosmic-texture.png')] opacity-20 mix-blend-soft-light" />
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-6xl z-10 relative">
            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white space-y-8"
            >
              <div className="mb-8 flex items-center gap-4 bg-white/5 backdrop-blur-lg rounded-full px-6 py-3 w-fit border border-slate-700/50">
                <Sparkles className="w-6 h-6 text-cyan-400" />
                <span className="font-medium text-slate-300">Ranked #1 in Nigeria</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tighter">
                <MotionDiv
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent"
                >
                  {heroSection.title.split(' ').slice(0,3).join(' ')}
                </MotionDiv>
                <span className="text-slate-100 block mt-6">
                  {heroSection.title.split(' ').slice(3).join(' ')}
                </span>
              </h1>

              <div className="flex flex-col sm:flex-row gap-4 mt-16">
                {heroSection.buttons.map((button, index) => (
                  <MotionButton
                    key={index}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className={`${
                      button.variant === 'primary' 
                        ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 shadow-[0_8px_24px_rgba(34,211,238,0.2)]'
                        : 'border-2 border-slate-600 bg-slate-800/30 backdrop-blur-lg'
                    } px-8 py-5 rounded-[2rem] text-lg font-semibold transition-all`}
                  >
                    <span className="tracking-wide">{button.text}</span>
                    <ChevronRight className="ml-3 inline-block transition-transform group-hover:translate-x-1" />
                  </MotionButton>
                ))}
              </div>
            </MotionDiv>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-6">
          {heroSection.students.map((student, index) => (
            <MotionDiv
              key={index}
              initial={{ y: 0 }}
              animate={{ y: [0, -25, 0] }}
              transition={{ duration: 4 + index, repeat: Infinity }}
              className="w-24 h-24 rounded-full border-2 border-slate-600/50 overflow-hidden shadow-2xl cursor-pointer hover:border-cyan-400 transition-all"
            >
              <img src={student} alt="Student" className="w-full h-full object-cover transform hover:scale-110 transition-transform" />
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* Dynamic Stats Section */}
      <section className="py-28 bg-slate-800/30 backdrop-blur-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-4">
              {stats.title}
              <span className="ml-4 text-3xl bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                ✨
              </span>
            </h2>
            <p className="text-slate-400 text-lg">Metrics that define our excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="absolute -top-32 left-1/2 w-[800px] h-[800px] bg-radial-gradient(from 60% 50% at 50% 50%, rgba(34,211,238,0.1) 0%, transparent 70%)" />
            
            {stats.items.map((stat, index) => (
              <MotionDiv
                key={index}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative bg-slate-700/50 backdrop-blur-lg p-8 rounded-3xl border border-slate-600/50 hover:border-cyan-400/30 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity" />
                <div className="relative z-10">
                  <div className="mb-6 flex items-center justify-center">
                    <div className="text-5xl p-4 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 rounded-2xl">
                      {stat.emoji}
                    </div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <p className="text-slate-300 text-lg font-medium">{stat.label}</p>
                  </div>
                </div>
                
                {/* Hover particle effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `float ${3 + i % 4}s infinite`
                      }}
                    />
                  ))}
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section - Holographic Design */}
      <section className="py-28 bg-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-4">
              {programs.title}
              <span className="ml-4 text-3xl text-emerald-400">✦</span>
            </h2>
            <p className="text-slate-400 text-lg">Future-focused learning paths</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="absolute -top-48 -right-48 w-[700px] h-[700px] bg-radial-gradient(from 60% 50% at 50% 50%, rgba(16,185,129,0.1) 0%, transparent 70%)" />
            
            {programs.items.map((program, index) => (
              <MotionDiv
                key={index}
                whileHover={{ y: -10 }}
                className="group relative bg-slate-800/50 backdrop-blur-lg p-8 rounded-3xl border border-slate-700/50 hover:border-cyan-400/30 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity" />
                <div className="relative z-10">
                  <div className="text-6xl mb-6 text-emerald-400/80">{program.emoji}</div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-3">{program.title}</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">{program.description}</p>
                  <div className="flex items-center gap-2 text-cyan-400 font-medium">
                    <span>Explore Program</span>
                    <ChevronRight className="w-5 h-5 mt-1" />
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Testimonials */}
      <section className="py-28 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-4">
              {testimonials.title}
              <span className="ml-4 text-3xl text-cyan-400">❝</span>
            </h2>
            <p className="text-slate-400 text-lg">Voices from our community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.quotes.map((testimonial, index) => (
              <MotionDiv
                key={index}
                whileHover={{ scale: 1.03 }}
                className="group relative bg-slate-800/50 backdrop-blur-lg p-8 rounded-3xl border border-slate-700/50 hover:border-emerald-400/30 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-2xl object-cover border-2 border-slate-600/50 shadow-md"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-slate-100">{testimonial.name}</h3>
                      <p className="text-slate-400 text-sm">Class of 2025</p>
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed relative pl-6">
                    <span className="text-3xl absolute -top-4 left-0 text-emerald-400/80">“</span>
                    {testimonial.text}
                  </p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Events Calendar */}
      <section className="py-28 bg-slate-900/50 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-4">
              {events.title}
              <span className="ml-4 text-3xl text-cyan-400">🗓️</span>
            </h2>
            <p className="text-slate-400 text-lg">Mark your calendars</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-3xl border border-slate-700/50">
              <h3 className="text-2xl font-bold text-slate-100 mb-6">Upcoming Events</h3>
              <div className="space-y-4">
                {events.upcomingEvents.map((event, index) => (
                  <MotionDiv
                    key={index}
                    whileHover={{ x: 10 }}
                    className="p-4 bg-slate-700/30 rounded-xl flex items-center gap-4 border border-slate-600/50 hover:border-cyan-400/30 transition-all"
                  >
                    <div className="bg-cyan-400/10 p-3 rounded-lg">
                      <Calendar className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-100">{event.title}</h4>
                      <p className="text-slate-400">{event.date} | {event.location}</p>
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-3xl border border-slate-700/50">
              <h3 className="text-2xl font-bold text-slate-100 mb-6">Key Dates</h3>
              <div className="space-y-4">
                {events.importantDates.map((date, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-slate-700/30 rounded-xl border border-slate-600/50 hover:border-emerald-400/30 transition-all"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">{date.event}</span>
                      <span className="text-emerald-400 font-medium">{date.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}