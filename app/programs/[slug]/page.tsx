import { notFound } from "next/navigation";
import programsData from "@/data/programs.json";
import Image from "next/image";
import { use } from 'react';
import { MotionDiv } from "@/components/motion/motion";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { ArrowBigRightIcon, Mail, User, MessageSquare, Calendar, Clock, Target } from "lucide-react";

const ProgramPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { featuredPrograms } = programsData;
  const unwrappedParams = use(params);
  const program = featuredPrograms.find((p) => p.slug === unwrappedParams.slug);

  if (!program) notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-cyan-900/50">
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="relative h-[70vh] overflow-hidden group">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-slate-900/70 to-cyan-900/30" />
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          priority
          sizes="(max-width: 768px) 100vw, 80vw"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-purple-900/20 to-purple-950/90" />
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            {/* Program Badge */}
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-800/30 border border-purple-700/50 backdrop-blur-sm hover:bg-purple-700/40 transition-colors">
              <span className="text-2xl animate-pulse">{program.icon}</span>
              <span className="text-sm text-gold-300 font-medium">{program.duration} Program</span>
            </div>

            {/* Title & Description */}
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gold-400 via-amber-200 to-gold-400 bg-clip-text text-transparent drop-shadow-lg">
              {program.title}
            </h1>
            <p className="text-xl text-purple-100/90 max-w-2xl mx-auto font-light leading-relaxed">
              {program.description}
            </p>

            {/* Quick Stats */}
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-purple-200/80">
                <Calendar className="w-5 h-5 text-gold-400" />
                <span>{program.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-purple-200/80">
                <Clock className="w-5 h-5 text-gold-400" />
                <span>{program.courses.length} Courses</span>
              </div>
              <div className="flex items-center gap-2 text-purple-200/80">
                <Target className="w-5 h-5 text-gold-400" />
                <span>{program.instructors.length} Expert Instructors</span>
              </div>
            </div>
          </MotionDiv>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-950 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </section>

      {/* Enhanced Program Details */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Interactive Curriculum */}
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="glass-panel p-8 rounded-3xl border border-purple-700/30 bg-gradient-to-br from-purple-900/30 to-slate-900/20 backdrop-blur-xl hover:border-purple-600/50 transition-colors group">
                <h2 className="text-3xl font-bold text-gold-300 mb-8 group-hover:text-gold-400 transition-colors">
                  Curriculum Journey
                </h2>
                <ul className="space-y-4">
                  {program.courses.map((course, index) => (
                    <MotionDiv
                      key={course}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-purple-800/10 transition-all group/item cursor-help relative"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="absolute inset-0 border border-purple-700/30 rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity pointer-events-none" />
                      <div className="flex-1">
                        <h3 className="text-lg text-purple-100 font-medium flex items-center gap-2">
                          <span className="text-gold-400 font-mono text-sm bg-purple-900/50 px-2 py-1 rounded">
                            0{index + 1}
                          </span>
                          {course}
                        </h3>
                      </div>
                      <ArrowBigRightIcon className="text-gold-400 opacity-30 group-hover/item:opacity-100 transition-opacity transform group-hover/item:translate-x-1" />
                    </MotionDiv>
                  ))}
                </ul>
              </div>
            </MotionDiv>

            {/* Requirements with Progress Indicator */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-panel p-8 rounded-3xl border border-cyan-600/30 bg-gradient-to-br from-slate-900/30 to-cyan-900/20 backdrop-blur-xl hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-cyan-300">Admission Requirements</h2>
                  <span className="text-sm text-cyan-400/80 px-2 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/20 whitespace-nowrap">
  {program.admissionRequirements.length} key steps
</span>
                </div>
                <div className="space-y-4">
                  {program.admissionRequirements.map((req, index) => (
                    <div
                      key={req}
                      className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-cyan-900/10 to-transparent hover:from-cyan-800/20 transition-colors group"
                    >
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-bold shrink-0 group-hover:bg-cyan-500/30 transition-colors">
                        {index + 1}
                      </div>
                      <p className="text-purple-100/90 leading-relaxed">{req}</p>
                    </div>
                  ))}
                </div>
              </div>
            </MotionDiv>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Instructors with Hover Cards */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-panel p-8 rounded-3xl border border-purple-700/30 bg-gradient-to-br from-purple-900/30 to-slate-900/20 backdrop-blur-xl hover:border-purple-600/50 transition-colors">
                <h2 className="text-3xl font-bold text-gold-300 mb-8">Expert Instructors</h2>
                <div className="space-y-6">
                  {program.instructors.map((instructor) => (
                    <div 
                      key={instructor.name}
                      className="flex items-center gap-4 p-4 rounded-xl bg-purple-800/20 border border-purple-700/30 hover:border-gold-500/30 transition-all relative group hover:bg-purple-800/30"
                    >
                      <div className="relative shrink-0">
                        <Image
                          src={instructor.image}
                          alt={instructor.name}
                          width={80}
                          height={80}
                          className="rounded-full w-16 border-2 border-gold-400 hover:border-cyan-400 transition-colors group-hover:scale-105 duration-300"
                        />
                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-cyan-400 rounded-full border-2 border-slate-900 animate-pulse" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-gold-400 flex items-center gap-2">
                          {instructor.name}
                          <span className="text-xs text-cyan-400 font-normal bg-cyan-950/30 px-2 py-0.5 rounded-full">
                            @{instructor.name.replace(/\s+/g, '').toLowerCase()}
                          </span>
                        </h3>
                        <p className="text-purple-200 text-sm line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                          {instructor.bio}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </MotionDiv>

            {/* Enhanced Contact Form */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-panel p-8 rounded-3xl border border-purple-700/30 bg-gradient-to-br from-purple-900/30 to-slate-900/20 backdrop-blur-xl hover:border-purple-600/50 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-gold-400" />
                  Request Information
                </h3>
                <form className="space-y-6">
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-300 group-focus-within:text-gold-400 transition-colors" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-purple-800/30 border border-purple-700/50 text-white placeholder:text-purple-300 focus:border-gold-500/50 focus:outline-none transition-all group-hover:bg-purple-800/40"
                    />
                  </div>
                  
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-300 group-focus-within:text-gold-400 transition-colors" />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-purple-800/30 border border-purple-700/50 text-white placeholder:text-purple-300 focus:border-gold-500/50 focus:outline-none transition-all group-hover:bg-purple-800/40"
                    />
                  </div>

                  <div className="relative group">
                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-purple-300 group-focus-within:text-gold-400 transition-colors" />
                    <textarea
                      placeholder="Your Message"
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-purple-800/30 border border-purple-700/50 text-white placeholder:text-purple-300 focus:border-gold-500/50 focus:outline-none transition-all h-32 group-hover:bg-purple-800/40 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-gold-600 hover:to-gold-700 transition-all shadow-lg shadow-gold-500/20 hover:shadow-gold-500/30 group"
                  >
                    <ArrowBigRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Submit Request
                  </button>
                </form>
              </div>
            </MotionDiv>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ProgramPage;