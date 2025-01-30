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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-50 to-purple-100/20">

      {/* Enhanced Hero Section */}
      <section className="relative h-[110svh] bg-gradient-to-br from-purple-900 via-purple-800 to-amber-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-soft-light" />
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-6xl z-10 relative">
            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white space-y-8"
            >
              <div className="mb-8 flex items-center gap-4 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 w-fit">
                <Sparkles className="w-6 h-6 text-amber-400" />
                <span className="font-medium">Ranked #1 in Nigeria</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tighter">
                <MotionDiv
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent"
                >
                  {heroSection.title.split(' ').slice(0,3).join(' ')}
                </MotionDiv>
                <span className="text-white block mt-4">
                  {heroSection.title.split(' ').slice(3,6).join(' ')}
                </span>
              </h1>

              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                {heroSection.buttons.map((button, index) => (
                  <MotionButton
                    key={index}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className={`${
                      button.variant === 'primary' 
                        ? 'bg-amber-500 shadow-[0_8px_24px_rgba(245,158,11,0.3)] hover:shadow-[0_12px_32px_rgba(245,158,11,0.4)]'
                        : 'border-2 border-amber-400 bg-transparent backdrop-blur-sm'
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

        {/* Floating Student Avatars */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-6">
          {heroSection.students.map((student, index) => (
            <MotionDiv
              key={index}
              initial={{ y: 0 }}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3 + index, repeat: Infinity }}
              className="w-24 h-24 rounded-full border-4 border-amber-400/80 overflow-hidden shadow-2xl cursor-pointer hover:border-amber-400 transition-all"
            >
              <img src={student} alt="Student" className="w-full h-full object-cover transform hover:scale-110 transition-transform" />
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* Modern Trending Section */}
      <section className="py-24 bg-white/50 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-purple-900 mb-4">
              {trendingSection.title}
            </h2>
            <p className="text-purple-600 text-lg">What's buzzing in our community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trendingSection.trends.map((trend, index) => {
              const IconComponent = iconComponents[trend.icon as keyof typeof iconComponents]
              return (
                <MotionDiv 
                  key={index}
                  whileHover={{ y: -10 }}
                  className="group relative bg-white p-8 rounded-[2.5rem] border border-purple-100 shadow-xl hover:shadow-2xl transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 rounded-[2.5rem] transition-opacity" />
                  <div className="relative z-10">
                    <div className="mb-6 p-4 bg-amber-100 w-fit rounded-2xl">
                      <IconComponent className="w-10 h-10 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-purple-900 mb-3">{trend.title}</h3>
                    <p className="text-purple-600 leading-relaxed">{trend.description}</p>
                    <div className="mt-6 flex items-center gap-2 text-amber-600 font-medium">
                      <span>Learn more</span>
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                </MotionDiv>
              )
            })}
          </div>
        </div>
      </section>

      {/* Dynamic Tech Section */}
      <section className="py-28 bg-purple-900/95 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 relative">
              <div className="absolute -top-20 -left-20 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                  {techFeatures.title.split(' ')[0]}
                </span>
                <br />
                {techFeatures.title.split(' ').slice(1).join(' ')}
              </h2>
              <p className="text-xl text-purple-200/90 leading-relaxed">
                {techFeatures.description}
              </p>
              <MotionButton
                whileHover={{ scale: 1.05 }}
                className="bg-amber-500 text-purple-900 px-8 py-5 rounded-[2rem] text-lg font-semibold flex items-center gap-3"
              >
                <span>Explore Innovation Hub</span>
                <div className="relative">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                  <div className="absolute inset-0 bg-amber-500/30 rounded-full blur" />
                </div>
              </MotionButton>
            </div>

            <div className="grid grid-cols-2 gap-6 relative">
              <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
              {techFeatures.features.map((feature, index) => {
                const IconComponent = iconComponents[feature.icon as keyof typeof iconComponents]
                return (
                  <MotionDiv
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-amber-400/30 transition-all"
                  >
                    <div className="mb-6">
                      <IconComponent className="w-12 h-12 text-amber-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-purple-200/80">{feature.description}</p>
                  </MotionDiv>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-purple-900 mb-4">
              {testimonials.title}
            </h2>
            <p className="text-purple-600 text-lg">Hear from our amazing students</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.quotes.map((testimonial, index) => (
              <MotionDiv
                key={index}
                whileHover={{ y: -10 }}
                className="group relative bg-purple-50 p-8 rounded-[2.5rem] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-md"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-purple-900">{testimonial.name}</h3>
                      <p className="text-purple-600 text-sm">Class of 2025</p>
                    </div>
                  </div>
                  <p className="text-purple-700 leading-relaxed relative">
                    <span className="text-3xl absolute -top-4 -left-2 text-amber-500">“</span>
                    {testimonial.text}
                  </p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Programs Section */}
      <section className="py-28 bg-gradient-to-br from-purple-900 to-amber-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4">{programs.title}</h2>
            <p className="text-purple-200/80 text-lg">Explore our diverse learning paths</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.items.map((program, index) => (
              <MotionDiv
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-amber-400/30 transition-all"
              >
                <div className="text-6xl mb-6">{program.emoji}</div>
                <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                <p className="text-purple-200/80 mb-6">{program.description}</p>
                <div className="flex items-center gap-2 text-amber-400 font-medium">
                  <span>Discover Program</span>
                  <ChevronRight className="w-5 h-5" />
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Remaining sections follow similar enhanced patterns... */}

    </div>
  )
}