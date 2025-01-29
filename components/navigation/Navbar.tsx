'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Search, Bell, User, BookOpen } from 'lucide-react'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false)

  const links = [
    { name: 'About', href: '/about', badge: null },
    { name: 'Academics', href: '/academics', badge: 'New' },
    { name: 'Admissions', href: '/admissions', badge: null },
    { name: 'Campus Life', href: '/campus', badge: 'Live' }
  ]

  const pathname = usePathname() || ''; // For active state tracking
  const [header, setHeader] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollHeader = () => {
    if (!isMobileMenuOpen) {
      setHeader(window.scrollY >= window.innerHeight * 0.1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader);
    return () => {
      window.removeEventListener('scroll', scrollHeader);
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-slate-200/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 z-50">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 360 }}
              transition={{ duration: 0.7 }}
              className="w-10 h-10 bg-gradient-to-tl from-violet-600 via-indigo-600 to-purple-600 
                        rounded-xl flex items-center justify-center shadow-lg"
            >
              <BookOpen className="w-6 h-6 text-white" />
            </motion.div>
            <span className={`text-xl font-bold bg-clip-text text-transparent 
                          bg-gradient-to-r from-violet-600 to-indigo-600`}>
              Maranatha
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ y: -2 }}
                className="relative"
              >
                <Link
                  href={link.href}
                  className={`font-medium transition-colors ${
                    scrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-white/90'
                  }`}
                >
                  {link.name}
                  {link.badge && (
                    <span className="absolute -top-3 -right-6 px-2 py-0.5 text-xs font-semibold 
                                 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full">
                      {link.badge}
                    </span>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            {/* Search */}
            <div className="relative group">
              <Search className={`w-5 h-5 ${scrolled ? 'text-gray-600' : 'text-white'} 
                              cursor-pointer transition-colors`} />
              <motion.div
                initial={false}
                animate={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-600 origin-left"
              />
            </div>

            {/* Notifications */}
            <div className="relative">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Bell 
                  className={`w-5 h-5 ${scrolled ? 'text-gray-600' : 'text-white'} cursor-pointer`}
                  onClick={() => setShowNotifications(!showNotifications)}
                />
              </motion.div>
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full 
                           text-white text-xs flex items-center justify-center">
                3
              </span>
            </div>

            {/* Portal Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 
                       text-white px-5 py-2.5 rounded-full font-medium shadow-lg 
                       hover:shadow-indigo-500/25 transition-shadow"
            >
              <User className="w-4 h-4" />
              <span>Portal</span>
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-50"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed w-full h-screen inset-0 z-40 bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-600
                     flex flex-col items-center justify-center p-8 overflow-hidden"
          >
            <div className="w-full max-w-md space-y-8">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-white/60" />
                <input 
                  type="text" 
                  placeholder="Search anything..."
                  className="w-full bg-white/10 text-white placeholder:text-white/60 
                           rounded-full pl-12 pr-6 py-3 focus:outline-none focus:ring-2 
                           focus:ring-white/50 border border-white/20"
                />
              </div>

              {/* Mobile Navigation */}
              <div className="space-y-6">
                {links.map((link) => (
                  <motion.div
                    key={link.name}
                    whileHover={{ x: 10 }}
                    className="relative"
                  >
                    <Link
                      href={link.href}
                      className="block text-white/90 hover:text-white text-2xl font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                      {link.badge && (
                        <span className="ml-3 px-2 py-0.5 text-sm bg-white/20 rounded-full">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Actions */}
              <div className="pt-8 flex flex-col gap-4">
                <button className="w-full bg-white/10 border border-white/20 text-white 
                                rounded-full px-8 py-3 hover:bg-white/20 transition-colors">
                  View Notifications (3)
                </button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-indigo-600 rounded-full px-8 py-3 
                           font-semibold shadow-lg"
                >
                  Open Student Portal
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
