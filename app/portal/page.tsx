"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Eye, EyeOff, User, GraduationCap, School, Shield, Users, AlertCircle } from 'lucide-react';
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import Image from "next/image";
import Link from "next/link";

const PortalPage = () => {
  const [activeTab, setActiveTab] = useState('student');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    remember: false
  });

  const userTypes = [
    { 
      id: 'student', 
      label: 'Student', 
      icon: GraduationCap,
      placeholder: 'student.id@maranatha.edu'
    },
    { 
      id: 'parent', 
      label: 'Parent', 
      icon: Users,
      placeholder: 'parent.portal@maranatha.edu'
    },
    { 
      id: 'teacher', 
      label: 'Teacher', 
      icon: School,
      placeholder: 'staff.id@maranatha.edu'
    },
    { 
      id: 'admin', 
      label: 'Admin', 
      icon: Shield,
      placeholder: 'admin@maranatha.edu'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Add your authentication logic here
      console.log('Login attempt:', { ...credentials, userType: activeTab });
      
      // Redirect based on user type
      // router.push(`/${activeTab}/dashboard`);
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-cyan-900/50">
      <Navbar />
      {/* Hero Section */}
<section className="relative h-[50vh] overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-slate-900/70 to-cyan-900/30" />
<Image
  src="/portal-hero.jpg"
  alt="Portal Access"
  fill
  className="object-cover transition-transform duration-1000 group-hover:scale-105"
  priority
/>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-purple-900/20 to-purple-950/90" />

<div className="relative z-10 h-full flex items-center justify-center px-4">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center max-w-4xl"
  >
    <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gold-400 via-amber-200 to-gold-400 bg-clip-text text-transparent drop-shadow-lg">
      Campus Portal
    </h1>
    <p className="text-xl text-purple-100/90 max-w-2xl mx-auto font-light leading-relaxed">
      Secure access to academic resources and community services
    </p>
  </motion.div>
</div>
</section>

      <main className="relative min-h-screen flex items-center justify-center py-20">
        
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-slate-900/70 to-cyan-900/30" />
          <Image
            src="/portal-hero.jpg"
            alt="Campus Portal"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-purple-900/20 to-purple-950/90" />
        </div>

        {/* Login Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl mx-4"
        >
          {/* Title */}
          <div className="text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gold-400 via-amber-200 to-gold-400 bg-clip-text text-transparent drop-shadow-lg"
            >
              Campus Portal
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-purple-100/90"
            >
              Access your academic resources securely
            </motion.p>
          </div>

          {/* Login Form */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="glass-panel p-8 rounded-3xl border border-purple-700/30 bg-gradient-to-br from-purple-900/30 to-slate-900/20 backdrop-blur-xl"
          >
            {/* User Type Selector */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              {userTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => setActiveTab(type.id)}
                    className={`p-4 flex flex-col items-center rounded-xl transition-all ${
                      activeTab === type.id
                        ? 'bg-purple-800/40 border border-purple-700/50'
                        : 'bg-purple-900/20 hover:bg-purple-800/30'
                    }`}
                  >
                    <Icon className={`w-6 h-6 mb-2 ${
                      activeTab === type.id ? 'text-gold-400' : 'text-purple-300'
                    }`} />
                    <span className={`text-sm ${
                      activeTab === type.id ? 'text-gold-300' : 'text-purple-200'
                    }`}>{type.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 bg-rose-500/20 border border-rose-500/30 rounded-lg flex items-center gap-3 text-rose-200"
                >
                  <AlertCircle className="w-5 h-5 text-rose-400" />
                  <p>{error}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gold-300 mb-2">Email / Username</label>
                <div className="relative">
                  <User className="w-5 h-5 text-gold-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={credentials.email}
                    onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-purple-900/20 border border-purple-700/30 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent text-purple-100"
                    placeholder={userTypes.find(t => t.id === activeTab)?.placeholder}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gold-300 mb-2">Password</label>
                <div className="relative">
                  <Lock className="w-5 h-5 text-gold-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    className="w-full pl-10 pr-12 py-3 bg-purple-900/20 border border-purple-700/30 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent text-purple-100"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-300 hover:text-purple-100"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={credentials.remember}
                    onChange={(e) => setCredentials({ ...credentials, remember: e.target.checked })}
                    className="rounded border-purple-300 text-gold-400 focus:ring-gold-400"
                  />
                  <span className="text-purple-200">Remember me</span>
                </label>
                <Link 
                  href="/forgot-password" 
                  className="text-gold-400 hover:text-gold-300 text-sm hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-gold-400 hover:bg-gold-500 text-purple-900 py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center ${
                  isLoading ? 'opacity-80 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  <svg className="animate-spin h-5 w-5 text-purple-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  'Sign In to Portal'
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-purple-300">
                Need help? Contact{' '}
                <a 
                  href="mailto:support@maranatha.edu" 
                  className="text-gold-400 hover:text-gold-300 hover:underline"
                >
                  portal support
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default PortalPage;