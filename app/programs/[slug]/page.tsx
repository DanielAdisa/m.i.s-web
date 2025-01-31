import { notFound } from "next/navigation";
import { featuredPrograms } from "@/data/programs";
import Image from "next/image";
import { MotionDiv } from "@/components/motion/motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { ArrowBigRightIcon } from "lucide-react";

export async function generateStaticParams() {
  return featuredPrograms.map((program) => ({
    slug: program.slug,
  }));
}

export default function ProgramPage({ params }: { params: { slug: string } }) {
  const program = featuredPrograms.find((p) => p.slug === params.slug);

  if (!program) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-cyan-900/50">
        <Navbar />
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-slate-900/70 to-cyan-900/30" />
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover"
          priority
          style={{ transform: 'scale(1.01)' }} // Fix image bleed
        />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-purple-900/20 to-purple-950/90" />
        
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-800/30 border border-purple-700/50 backdrop-blur-sm">
              <span className="text-2xl">{program.icon}</span>
              <span className="text-sm text-gold-300 font-medium">{program.duration} Program</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gold-400 via-amber-200 to-gold-400 bg-clip-text text-transparent">
              {program.title}
            </h1>
            <p className="text-xl text-purple-100/90 max-w-2xl mx-auto font-light">
              {program.description}
            </p>
          </MotionDiv>
        </div>
      </div>

      {/* Program Details */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Courses Card */}
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="glass-panel p-8 rounded-3xl border border-purple-700/30 bg-gradient-to-br from-purple-900/30 to-slate-900/20 backdrop-blur-xl">
                <h2 className="text-3xl font-bold text-gold-300 mb-6">Curriculum Highlights</h2>
                <ul className="space-y-4">
                  {program.courses.map((course, index) => (
                    <MotionDiv
                      key={course}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-purple-800/10 transition-all group"
                    >
                      <div className="flex-1">
                        <h3 className="text-lg text-purple-100 font-medium">{course}</h3>
                      </div>
                      <ArrowBigRightIcon className="text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </MotionDiv>
                  ))}
                </ul>
              </div>
            </MotionDiv>

            {/* Requirements Card */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-panel p-8 rounded-3xl border border-cyan-600/30 bg-gradient-to-br from-slate-900/30 to-cyan-900/20 backdrop-blur-xl">
                <h2 className="text-2xl font-bold text-cyan-300 mb-6">Admission Requirements</h2>
                <div className="grid gap-3">
                  {program.admissionRequirements.map((req, index) => (
                    <div
                      key={req}
                      className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-cyan-900/10 to-transparent"
                    >
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-bold">
                        {index + 1}
                      </div>
                      <p className="text-purple-100/90">{req}</p>
                    </div>
                  ))}
                </div>
              </div>
            </MotionDiv>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Instructors Card */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-panel p-8 rounded-3xl border border-purple-700/30 bg-gradient-to-br from-purple-900/30 to-slate-900/20 backdrop-blur-xl">
                <h2 className="text-3xl font-bold text-gold-300 mb-8">Expert Faculty</h2>
                <div className="grid gap-6">
                  {program.instructors.map((instructor) => (
                    <div
                      key={instructor.name}
                      className="group relative overflow-hidden rounded-xl bg-purple-800/10 hover:bg-purple-800/20 transition-all"
                    >
                      <div className="flex items-center gap-6 p-6">
                        <div className="relative">
                          <Image
                            src={instructor.image}
                            alt={instructor.name}
                            width={80}
                            height={80}
                            className="rounded-full border-2 border-gold-400/50 group-hover:border-gold-400 transition-all"
                          />
                          <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-gold-400/30 transition-all" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gold-300">{instructor.name}</h3>
                          <p className="text-sm text-purple-200/80 mt-1">{instructor.bio}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </MotionDiv>

            {/* Contact Form */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-panel p-8 rounded-3xl border border-purple-700/30 bg-gradient-to-br from-purple-900/30 to-slate-900/20 backdrop-blur-xl">
                <h2 className="text-3xl font-bold text-gold-300 mb-8">Start Your Journey</h2>
                <form className="space-y-6">
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="form-input w-full px-4 py-3 rounded-xl bg-purple-800/20 border border-purple-700/50 placeholder:text-purple-400/60 text-purple-100 focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="form-input w-full px-4 py-3 rounded-xl bg-purple-800/20 border border-purple-700/50 placeholder:text-purple-400/60 text-purple-100 focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                    />
                    <textarea
                      placeholder="Your Message"
                      className="form-input w-full px-4 py-3 rounded-xl bg-purple-800/20 border border-purple-700/50 placeholder:text-purple-400/60 text-purple-100 focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all h-32"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 text-purple-950 font-semibold hover:from-gold-600 hover:to-amber-700 transition-all transform hover:scale-[1.02] shadow-lg shadow-gold-500/20 hover:shadow-gold-500/30"
                  >
                    <span>Submit Application</span>
                    <span className="text-[10px]"><ArrowBigRightIcon className="text-sm" /></span>
                  </button>
                </form>
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}