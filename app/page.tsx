import { MotionDiv, MotionButton } from '@/components/motion/motion'
import { Footer } from '@/components/navigation/Footer'
import { Navbar } from '@/components/navigation/Navbar'
import { ChevronRight, BookOpen, GraduationCap, Globe, Users } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-purple-50/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[100svh] bg-gradient-to-br from-indigo-900/95 to-violet-800/95 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light" />
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl z-10 relative">
            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-white space-y-8"
            >
              <div className="overflow-hidden">
                <MotionDiv
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  className="text-lg font-mono text-purple-300 mb-4"
                >
                  Future Education Initiative
                </MotionDiv>
              </div>
              <h1 className="text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-400">Reimagining</span><br />
                Learning Ecosystems for<br />
                Tomorrow's Challenges
              </h1>
              <MotionButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-5 rounded-[2rem] text-lg font-semibold shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-shadow"
                aria-label="Explore Our Programs"
              >
                <span className="tracking-wide">Explore Programs</span>
                <ChevronRight className="ml-3 inline-block transform group-hover:translate-x-1 transition-transform" />
              </MotionButton>
            </MotionDiv>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <MotionDiv
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.1 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: i * 2
              }}
              className="absolute w-48 h-48 bg-gradient-to-r from-amber-400/30 to-purple-300/30 rounded-full blur-xl"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-6 max-w-7xl">
          {[
            { icon: BookOpen, title: 'Academic Vision', color: 'text-purple-600' },
            { icon: GraduationCap, title: 'Admissions Portal', color: 'text-amber-500' },
            { icon: Globe, title: 'Global Network', color: 'text-purple-600' },
            { icon: Users, title: 'Community Hub', color: 'text-amber-500' }
          ].map((item, index) => (
            <MotionDiv
              key={index}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl transition-all"
              aria-label={item.title}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <item.icon className={`w-14 h-14 mx-auto mb-6 p-3 rounded-2xl ${item.color} bg-${item.color.split('-')[1]}-100/30`} />
              <h3 className="text-2xl font-bold text-slate-900 text-center mb-2">{item.title}</h3>
              <p className="text-slate-600 text-center text-lg">Explore our innovative learning methodologies</p>
              <div className="mt-6 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="w-6 h-6 text-purple-600 animate-pulse" />
              </div>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* Dynamic Announcement Banner */}
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="relative py-16 bg-gradient-to-r from-indigo-900 to-violet-800 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <div className="font-mono text-amber-400/80 tracking-wide">NEW OPPORTUNITIES</div>
            <h2 className="text-4xl font-bold text-white">2025 Admissions Now Open</h2>
            <p className="text-slate-200/80">Early decision deadline: January 15th</p>
          </div>
          <MotionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-400 text-indigo-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-amber-400/20 hover:shadow-amber-400/30 flex items-center gap-2"
            aria-label="Apply Now"
          >
            <span>Start Application</span>
            <ChevronRight className="w-5 h-5" />
          </MotionButton>
        </div>
      </MotionDiv>

      {/* Immersive Campus Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center max-w-7xl">
          <div className="relative aspect-[5/3] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl hover:shadow-3xl transition-shadow">
            <img
              src="/campus.jpg"
              alt="Future Campus"
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <div className="text-sm font-mono opacity-80">Campus 2025</div>
              <div className="text-2xl font-bold">Sustainable Innovation Hub</div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-slate-900 leading-tight">
              Designed for the <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-transparent bg-clip-text">Next Generation</span> of Innovators
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Our campus integrates cutting-edge technology with sustainable design, creating collaborative spaces that foster creativity and real-world problem solving.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '15k+', label: 'Learning Zones', metric: 'sqm' },
                { value: 'AI', label: 'Powered Infrastructure', icon: '🤖' },
                { value: '100%', label: 'Renewable Energy', icon: '♻️' },
                { value: '24/7', label: 'Innovation Labs', icon: '⚡' }
              ].map((stat, index) => (
                <div key={index} className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-white/40 transition-all">
                  <div className="flex items-center gap-3">
                    {stat.icon && <span className="text-2xl">{stat.icon}</span>}
                    <div>
                      <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                      <div className="text-slate-600">{stat.label}</div>
                      {stat.metric && <div className="text-sm text-slate-400">{stat.metric}</div>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}