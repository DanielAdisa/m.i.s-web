// components/MegaMenu.tsx
'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Academics', path: '/academics', submenu: ['Programs', 'Admissions', 'Calendar'] },
  { label: 'Student Life', path: '/student-life', submenu: ['Activities', 'Housing', 'Support'] },
  { label: 'Contact', path: '/contact' }
]

export function MegaMenu() {
  return (
    <nav className="glass-nav sticky top-0 z-50 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo with Morphing Animation */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <svg className="w-16 h-16 text-school-purple">
            {/* Custom school logo SVG */}
          </svg>
        </motion.div>

        {/* AI-Powered Search */}
        <div className="flex-1 mx-8">
          <input 
            type="text" 
            className="w-full bg-white/20 rounded-full px-6 py-3 
                     placeholder:text-purple-100 focus:outline-none
                     backdrop-blur-sm border border-white/30"
            placeholder="Ask MARVIS (Maranatha AI Vision)"
          />
        </div>

        {/* Holographic Menu */}
        <div className="flex space-x-6">
          {menuItems.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <Link href={item.path} className="text-white font-medium">
                {item.label}
              </Link>
              <AnimatePresence>
                {item.submenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-full mt-2 w-48 glass p-4 rounded-xl"
                  >
                    {item.submenu.map((sub) => (
                      <Link key={sub} href="#" className="block py-2 hover:text-school-yellow">
                        {sub}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </nav>
  )
}