// components/navigation/Footer.tsx
import { MotionDiv, MotionButton } from '@/components/motion/motion'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ChevronRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-purple-950 via-slate-900 to-cyan-900/50 border-t border-white/5">
      {/* Visual Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/60 to-cyan-900/20" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          {/* Contact Information */}
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gold-400 to-amber-300 bg-clip-text text-transparent">
              Connect With Us
            </h3>
            <div className="glass-panel p-6 rounded-xl border border-purple-700/30 backdrop-blur-lg">
              <ul className="space-y-4 text-purple-100/90">
                <MotionDiv 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 group"
                >
                  <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <span className="group-hover:text-gold-200 transition-colors">
                    92 Okpu-Umuobo Road<br/>
                    Aba, Abia State
                  </span>
                </MotionDiv>
                <MotionDiv 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 group"
                >
                  <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <a href="tel:08037956920" className="group-hover:text-gold-200 transition-colors">
                    0803 795 6920
                  </a>
                </MotionDiv>
                <MotionDiv 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 group"
                >
                  <Mail className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <a href="mailto:info@maranatha.edu" className="group-hover:text-gold-200 transition-colors">
                    maranatha.schools.aba@gmail.com
                  </a>
                </MotionDiv>
              </ul>
            </div>
          </MotionDiv>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">
              Quick Access
            </h3>
            <div className="glass-panel p-6 rounded-xl border border-purple-700/30 backdrop-blur-lg">
              <ul className="grid grid-cols-2 gap-4">
                {['Admissions', 'Academics', 'Campus Life', 'Alumni', 'News', 'Careers'].map((link, i) => (
                  <li key={link}>
                    <MotionDiv
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <a href="#" className="group flex items-center gap-2 text-purple-100/90 hover:text-gold-300 transition-colors">
                        <ChevronRight className="w-4 h-4 text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="text-sm">{link}</span>
                      </a>
                    </MotionDiv>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Connections */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
              Stay Connected
            </h3>
            <div className="glass-panel p-6 rounded-xl border border-purple-700/30 backdrop-blur-lg">
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Facebook, label: 'Facebook' },
                  { icon: Twitter, label: 'Twitter' },
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Linkedin, label: 'LinkedIn' }
                ].map((platform, i) => (
                  <MotionButton
                    key={platform.label}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="p-3 rounded-lg bg-gradient-to-br from-purple-800/20 to-cyan-800/20 border border-purple-700/30 hover:border-gold-400/40 backdrop-blur-sm transition-all"
                    aria-label={platform.label}
                  >
                    <platform.icon className="w-5 h-5 text-gold-400" />
                  </MotionButton>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-gold-300 bg-clip-text text-transparent">
              Get Updates
            </h3>
            <div className="glass-panel p-6 rounded-xl border border-purple-700/30 backdrop-blur-lg">
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Your best email"
                  className="w-full px-4 py-3 rounded-lg bg-purple-800/20 border border-purple-700/50 placeholder:text-purple-400/60 text-purple-100 focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                />
                <MotionButton
                  whileHover={{ scale: 1.05 }}
                  className="w-full bg-gradient-to-r from-gold-500 to-amber-600 text-purple-950 font-semibold py-3 rounded-lg hover:shadow-gold-500/20 transition-all"
                >
                  Subscribe Now
                </MotionButton>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 text-center">
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm font-light text-purple-300/80"
          >
            <p className="mb-2">
              © 2025{' '}
              <span className="bg-gradient-to-r from-gold-400 to-amber-300 bg-clip-text text-transparent font-medium">
                Maranatha International Schools
              </span>
            </p>
            <p className="text-xs text-purple-400/60">
              Empowering Tomorrow's Leaders Through Excellence
            </p>
          </MotionDiv>
        </div>
      </div>
    </footer>
  )
}