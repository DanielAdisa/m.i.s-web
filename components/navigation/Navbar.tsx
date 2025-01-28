'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const links = [
    { name: 'About', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Contact', href: '/contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 shadow-sm border-b border-slate-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <motion.div 
            whileHover={{ rotate: 360 }}
            className="w-9 h-9 bg-gradient-to-br from-school-purple to-school-blue rounded-full flex items-center justify-center"
          >
            <div className="w-6 h-6 bg-school-yellow rounded-full" />
          </motion.div>
          <span className="text-xl font-bold bg-gradient-to-r from-school-purple to-black bg-clip-text text-transparent">
            Maranatha High
          </span>
        </Link>

        {/* Desktop Search */}
        <div className="flex-1 mx-8 hidden md:block">
          <div className="relative max-w-xl">
            <input 
              type="text" 
              className="w-full bg-white rounded-full px-6 py-2.5 
                       placeholder:text-slate-400 focus:outline-none
                       ring-1 ring-slate-200 focus:ring-2 focus:ring-school-purple
                       pr-12 transition-all"
              placeholder="Ask MARVIS (Our AI Assistant)"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 bg-school-purple text-white px-3 py-1 rounded-full text-sm">
              AI
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-slate-600 hover:text-school-purple transition-colors
                       font-medium px-3 py-1.5 rounded-lg hover:bg-purple-50"
            >
              {link.name}
            </Link>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-school-purple to-school-blue text-white 
                     px-5 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow"
          >
            Student Portal
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-600 p-2 rounded-lg hover:bg-slate-100"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-school-purple via-school-blue to-indigo-600
                   flex flex-col items-center justify-center p-6 space-y-8"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white p-2 rounded-full hover:bg-white/10"
            title="Close menu"
          >
            <X size={28} />
          </button>

          {/* Mobile Search */}
          <div className="w-full max-w-md relative">
            <input 
              type="text" 
              className="w-full bg-white/20 backdrop-blur-sm rounded-full px-6 py-3.5 
                       placeholder:text-white/70 focus:outline-none text-white
                       border-2 border-white/30 focus:border-white/50 transition-all"
              placeholder="Search with MARVIS..."
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 px-4 py-1.5 
                          rounded-full text-white text-sm">
              AI Search
            </div>
          </div>

          {/* Mobile Links */}
          <nav className="flex flex-col items-center space-y-5 w-full">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white text-2xl font-medium px-5 py-2 rounded-xl
                         hover:bg-white/10 transition-all hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="mt-4 bg-white text-school-purple px-8 py-3 rounded-full 
                             font-semibold hover:bg-slate-100 transition-colors">
              Student Portal
            </button>
          </nav>
        </motion.div>
      )}
    </motion.nav>
  )
}