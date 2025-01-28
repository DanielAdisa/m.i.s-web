// components/navigation/Footer.tsx
import { MotionDiv, MotionButton } from '@/components/motion/motion'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ChevronRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-indigo-900 to-violet-900 mt-auto border-t border-white/10">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-soft-light" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Contact Info with Motion */}
          <MotionDiv whileHover={{ y: -5 }} className="space-y-6">
            <h3 className="text-2xl font-bold text-amber-400 mb-6">Reach Out</h3>
            <ul className="space-y-5 text-white/80">
              <li className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span>92 Okpu-Umuobo Road<br/>Aba, Abia State</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-amber-400" />
                <a href="tel:08037956920" className="hover:text-amber-300 transition-colors">
                  0803 795 6920
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-amber-400" />
                <a href="mailto:info@maranatha.edu" className="hover:text-amber-300 transition-colors">
                  info@maranatha.edu
                </a>
              </li>
            </ul>
          </MotionDiv>

          {/* Quick Links with Staggered Animation */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-amber-400 mb-6">Quick Access</h3>
            <ul className="grid grid-cols-2 gap-4">
              {['Admissions', 'Academics', 'Campus Life', 'Alumni', 'News', 'Careers'].map((link, i) => (
                <li key={link}>
                  <MotionDiv
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <a href="#" className="group flex items-center gap-2 text-white/80 hover:text-amber-300 transition-colors">
                      <ChevronRight className="w-4 h-4 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link}
                    </a>
                  </MotionDiv>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media with Hover Effects */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-amber-400 mb-6">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' }
              ].map((platform, i) => (
                <MotionButton
                  key={platform.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all"
                  aria-label={platform.label}
                >
                  <platform.icon className="w-6 h-6 text-amber-400" />
                </MotionButton>
              ))}
            </div>
          </div>

          {/* Newsletter with Modern Input */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-amber-400 mb-6">Stay Updated</h3>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Your best email"
                className="w-full bg-white/5 backdrop-blur-sm rounded-xl px-6 py-4 placeholder:text-white/50 focus:ring-2 focus:ring-amber-400 border-none"
              />
              <MotionButton
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-amber-400 to-amber-500 text-indigo-900 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-amber-400/20"
              >
                Subscribe Now
              </MotionButton>
            </form>
          </div>
        </div>

        {/* Copyright with Elegant Typography */}
        <div className="pt-8 text-center">
          <p className="text-white/60 font-light tracking-wide">
            © 2025 Maranatha International Schools<br/>
            <span className="text-sm opacity-70">Empowering Tomorrow's Leaders Today</span>
          </p>
        </div>
      </div>
    </footer>
  )
}