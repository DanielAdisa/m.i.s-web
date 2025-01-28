import { MotionDiv, MotionButton } from '@/components/motion/motion'
import { Footer } from '@/components/navigation/Footer'
import { Navbar } from '@/components/navigation/Navbar'
import { ChevronRight, BookOpen, GraduationCap, Globe, Users } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[95vh] bg-gradient-to-br from-school-purple to-school-yellow">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl z-10">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white"
            >
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                Empowering <span className="text-school-yellow">Future-Ready</span><br />
                Learners Through Innovation
              </h1>
              <MotionButton
                whileHover={{ scale: 1.05 }}
                className="bg-white text-school-purple px-8 py-4 rounded-full text-lg font-semibold"
                aria-label="Explore Our Programs"
              >
                Explore Our Programs
                <ChevronRight className="ml-2 inline-block" />
              </MotionButton>
            </MotionDiv>
          </div>
        </div>
        <div className="absolute inset-0 bg-white/10 backdrop-blur-lg" />
      </section>

      {/* Quick Links Grid */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-6">
          {[
            { icon: BookOpen, title: 'Academics', color: 'text-school-purple' },
            { icon: GraduationCap, title: 'Admissions', color: 'text-school-yellow' },
            { icon: Globe, title: 'Global Programs', color: 'text-school-purple' },
            { icon: Users, title: 'Student Life', color: 'text-school-yellow' }
          ].map((item, index) => (
            <MotionDiv
              key={index}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-2xl text-center hover:shadow-xl"
              aria-label={item.title}
            >
              <item.icon className={`w-12 h-12 mx-auto mb-4 ${item.color}`} />
              <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* Announcement Banner */}
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-school-purple text-white py-12"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-3xl font-bold">2025 Admissions Now Open</h2>
          <MotionButton
            whileHover={{ scale: 1.05 }}
            className="bg-school-yellow text-school-purple px-8 py-3 rounded-full font-semibold"
            aria-label="Apply Now"
          >
            Apply Now
          </MotionButton>
        </div>
      </MotionDiv>

      {/* Featured Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/campus.jpg"
              alt="Campus"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-school-purple/20 backdrop-blur-sm" />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Discover Our <span className="text-school-purple">Innovative</span> Campus
            </h2>
            <p className="text-gray-600 mb-8">
              Experience learning environments designed to inspire creativity 
              and collaboration through cutting-edge technology and sustainable design.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '10k+', label: 'Square Meters' },
                { value: '50+', label: 'Smart Classrooms' },
                { value: '5', label: 'Science Hubs' },
                { value: '∞', label: 'Possibilities' }
              ].map((stat, index) => (
                <div key={index} className="glass p-6 rounded-xl">
                  <div className="text-school-purple text-2xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
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