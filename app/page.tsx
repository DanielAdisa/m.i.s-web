import { MotionDiv, MotionButton } from '@/components/motion/motion'
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/16/solid'
import { ChevronRight, BookOpen, GraduationCap, Globe, Users, Music, Trophy, Star, Calendar, Camera, } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-purple-50/30">

      
      {/* Hero Section */}
      <section className="relative h-[100svh] bg-gradient-to-br from-purple-900/95 to-amber-700/90 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-soft-light" />
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl z-10">
            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-8"
            >
              <div className="overflow-hidden">
                <MotionDiv
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  className="text-lg font-mono text-amber-300 mb-4"
                >
                  Welcome to Maranatha International Schools
                </MotionDiv>
              </div>
              <h1 className="text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">
                  Empowering
                </span>
                <br />
                The Next Generation of
                <br />
                Nigerian Leaders
              </h1>
              <MotionButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-5 rounded-[2rem] text-lg font-semibold shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-shadow"
                aria-label="Explore Our Programs"
              >
                <span className="tracking-wide">Join Our Community</span>
                <ChevronRight className="ml-3 inline-block transform group-hover:translate-x-1" />
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
              animate={{ scale: 1, opacity: 0.15 }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: i * 2
              }}
              className="absolute w-48 h-48 bg-gradient-to-r from-amber-400/30 
                         to-purple-400/30 rounded-full blur-xl"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>
      </section>

      {/* Campus Life Highlights */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-purple-900">#CampusLife</span>
            <span className="text-amber-500"> @Maranatha</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <MotionDiv
                key={i}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square rounded-2xl overflow-hidden group"
              >
                <img
                  src={`/campus-life-${i + 1}.jpg`}
                  alt="Campus Life"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent 
                             opacity-0 group-hover:opacity-100 transition-all duration-300
                             flex items-end p-4">
                  <p className="text-white text-sm">Student life at its best! 🌟</p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Excellence */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-amber-400">Academic</span> Excellence
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Trophy, title: 'National Champions', desc: 'Mathematics Olympiad 2023' },
              { icon: Star, title: '100% Success Rate', desc: 'WAEC/NECO Examinations' },
              { icon: Globe, title: 'International', desc: 'Student Exchange Programs' }
            ].map((item, index) => (
              <MotionDiv
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl text-center"
              >
                <item.icon className="w-12 h-12 mx-auto mb-4 text-amber-400" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-purple-200">{item.desc}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-amber-50/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-purple-900 mb-12">
            Beyond Academics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Music, title: 'Music & Arts', count: '12+ Clubs' },
              { icon: Music, title: 'Sports', count: '8 Teams' },
              { icon: Camera, title: 'Media Club', count: 'Weekly Shows' },
              { icon: Calendar, title: 'Events', count: 'Monthly Activities' }
            ].map((activity, index) => (
              <MotionDiv
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-3xl shadow-lg text-center"
              >
                <activity.icon className="w-10 h-10 mx-auto mb-4 text-amber-500" />
                <h3 className="text-lg font-bold text-purple-900">{activity.title}</h3>
                <p className="text-amber-600 font-medium">{activity.count}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour Teaser */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/campus-aerial.jpg"
            alt="Campus Aerial View"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-purple-900/70" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-white mb-6">
              Experience Maranatha in 3D
            </h2>
            <p className="text-purple-100 text-lg mb-8">
              Take a virtual tour of our world-class facilities and experience the 
              Maranatha difference.
            </p>
            <MotionButton
              whileHover={{ scale: 1.05 }}
              className="bg-amber-500 text-purple-900 px-8 py-4 rounded-full 
                       font-bold text-lg inline-flex items-center gap-2"
            >
              Start Virtual Tour
              <ChevronRight className="w-5 h-5" />
            </MotionButton>
          </div>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-6 max-w-7xl">
          {[
            { icon: BookOpen, title: 'Academic Life', desc: 'World-class curriculum' },
            { icon: GraduationCap, title: 'Apply Now', desc: '2024/2025 Admissions' },
            { icon: Globe, title: 'Student Life', desc: 'Sports & Activities' },
            { icon: Users, title: 'Parents Portal', desc: 'Stay Connected' }
          ].map((item, index) => (
            <MotionDiv
              key={index}
              whileHover={{ y: -8 }}
              className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl 
                         border border-purple-100 hover:border-purple-200 shadow-lg 
                         hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br 
                             from-purple-50 to-transparent opacity-0 
                             group-hover:opacity-100 transition-opacity" />
              <item.icon className="w-14 h-14 mx-auto mb-6 p-3 rounded-2xl 
                                  text-purple-600 bg-purple-100/50" />
              <h3 className="text-2xl font-bold text-purple-900 text-center mb-2">
                {item.title}
              </h3>
              <p className="text-purple-600 text-center">{item.desc}</p>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl text-purple-900 font-bold mb-8 text-center">
            Why Choose Maranatha?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <MotionDiv
              whileHover={{ scale: 1.02 }}
              className="bg-white/90 p-8 rounded-3xl border border-purple-100 hover:border-purple-200
                         shadow-md hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-semibold text-purple-900 mb-2">
                Innovative Curriculum
              </h3>
              <p className="text-purple-600 leading-relaxed">
                We blend cutting-edge technology with traditional principles to help students
                excel academically and personally.
              </p>
            </MotionDiv>
            <MotionDiv
              whileHover={{ scale: 1.02 }}
              className="bg-white/90 p-8 rounded-3xl border border-purple-100 hover:border-purple-200
                         shadow-md hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-semibold text-purple-900 mb-2">
                Global Opportunities
              </h3>
              <p className="text-purple-600 leading-relaxed">
                Collaborations with international institutions broaden students’ horizons.
              </p>
            </MotionDiv>
            <MotionDiv
              whileHover={{ scale: 1.02 }}
              className="bg-white/90 p-8 rounded-3xl border border-purple-100 hover:border-purple-200
                         shadow-md hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-semibold text-purple-900 mb-2">
                Modern Facilities
              </h3>
              <p className="text-purple-600 leading-relaxed">
                State-of-the-art labs, sports complexes, and creative spaces inspire excellence.
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-purple-800 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl font-bold mb-8 text-center">Student Voices</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <MotionDiv
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white/10 rounded-3xl shadow-lg transition-all"
            >
              <blockquote className="italic mb-4">
                "Maranatha helped me discover my passion for tech through hands-on coding
                sessions and friendly competitions."
              </blockquote>
              <p className="font-semibold text-amber-400">— Junior, Class of 2025</p>
            </MotionDiv>
            <MotionDiv
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white/10 rounded-3xl shadow-lg transition-all"
            >
              <blockquote className="italic mb-4">
                "I love how diverse our extracurricular clubs are; there's always something new
                to explore!"
              </blockquote>
              <p className="font-semibold text-amber-400">— Sarah, Class of 2026</p>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-purple-900 mb-4">Stay in the Loop</h2>
          <p className="text-purple-600 mb-6">
            Subscribe to our newsletter to get the latest updates, events, and news.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-purple-200 
                         focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <MotionButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-amber-400 to-amber-500 text-purple-900 
                         px-8 py-3 rounded-full font-bold shadow-md hover:shadow-amber-500/30"
            >
              Subscribe
            </MotionButton>
          </div>
        </div>
      </section>

      {/* Announcement Banner */}
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="relative py-16 bg-gradient-to-r from-purple-900 to-purple-800"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        <div className="container mx-auto px-4 flex flex-col md:flex-row 
                       items-center justify-between gap-8"
        >
          <div className="space-y-2">
            <div className="font-mono text-amber-400 tracking-wide">UPCOMING EVENT</div>
            <h2 className="text-4xl font-bold text-white">Inter-House Sports Competition</h2>
            <p className="text-purple-200">March 15th, 2024</p>
          </div>
          <MotionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-400 text-purple-900 px-8 py-4 rounded-full 
                       font-bold text-lg shadow-lg"
          >
            <span>Register Now</span>
            <ChevronRight className="ml-2 inline-block" />
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

    </div>
  )
}