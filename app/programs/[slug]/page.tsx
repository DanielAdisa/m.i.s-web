import { notFound } from "next/navigation";
import programsData from "@/data/programs.json";
import Image from "next/image";
import { use } from 'react';
import { MotionDiv } from "@/components/motion/motion";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { ArrowBigRightIcon, Mail, User, MessageSquare, Calendar, Clock, Target, Star, GraduationCap, BookOpen, DollarSign, Award, Layers, Activity, Sliders } from "lucide-react";

const ProgramPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { featuredPrograms } = programsData;
  const unwrappedParams = use(params);
  const program = featuredPrograms.find((p) => p.slug === unwrappedParams.slug);

  if (!program) notFound();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-900 to-cyan-900/50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden group">
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

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-800/30 border border-purple-700/50 backdrop-blur-sm hover:bg-purple-700/40 transition-colors">
              <span className="text-2xl animate-pulse">{program.icon}</span>
              <span className="text-sm text-gold-300 font-medium">{program.category}</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gold-400 via-amber-200 to-gold-400 bg-clip-text text-transparent drop-shadow-lg">
              {program.title}
            </h1>
            <p className="text-xl text-purple-100/90 max-w-2xl mx-auto font-light leading-relaxed">
              {program.description}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-purple-200/80">
                <Star className="w-5 h-5 text-gold-400" />
                <span>{program.rating} Rating</span>
              </div>
              <div className="flex items-center gap-2 text-purple-200/80">
                <GraduationCap className="w-5 h-5 text-gold-400" />
                <span>{program.studentsEnrolled.toLocaleString()} Enrolled</span>
              </div>
              <div className="flex items-center gap-2 text-purple-200/80">
                <DollarSign className="w-5 h-5 text-gold-400" />
                <span>{formatPrice(program.price)}</span>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Program Highlights */}
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-panel md:p-6 p-3 rounded-3xl border border-purple-700/30 bg-gradient-to-br from-purple-900/30 to-slate-900/20 backdrop-blur-xl">
                <div className="grid md:grid-cols-2 gap-3 md:gap-6">
                  <div className="flex items-center gap-3 p-4 bg-purple-800/20 rounded-xl">
                    <Award className="w-6 h-6 text-gold-400" />
                    <div>
                      <p className="text-sm text-purple-300">Certification</p>
                      <p className="font-medium text-gold-200">{program.certification}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-purple-800/20 rounded-xl">
                    <Activity className="w-6 h-6 text-cyan-400" />
                    <div>
                      <p className="text-sm text-purple-300">Level</p>
                      <p className="font-medium text-cyan-300">{program.level}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-purple-800/20 rounded-xl">
                    <BookOpen className="w-6 h-6 text-amber-400" />
                    <div>
                      <p className="text-sm text-purple-300">Language</p>
                      <p className="font-medium text-amber-300">{program.language}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-purple-800/20 rounded-xl">
                    <Calendar className="w-6 h-6 text-emerald-400" />
                    <div>
                      <p className="text-sm text-purple-300">Start Date</p>
                      <p className="font-medium text-emerald-300">
                        {new Date(program.startDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </MotionDiv>

            {/* Curriculum */}
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-panel p-8 rounded-3xl border border-purple-700/30 bg-gradient-to-br from-purple-900/30 to-slate-900/20 backdrop-blur-xl">
                <h2 className="text-3xl font-bold text-gold-300 mb-8">Curriculum Structure</h2>
                <div className="space-y-4">
                  {program.courses.map((course, index) => (
                    <div
                      key={course}
                      className="flex items-center gap-4 p-4 rounded-xl bg-purple-800/10 border border-purple-700/30 hover:border-gold-500/30 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center">
                        <span className="text-gold-400 text-sm font-bold">{index + 1}</span>
                      </div>
                      <h3 className="text-lg text-purple-100 flex-1">{course}</h3>
                      <span className="text-sm text-purple-300">{program.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
            </MotionDiv>

            {/* Skills & Tags */}
            <div className="grid gap-6 md:grid-cols-2">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="glass-panel p-6 rounded-2xl border border-purple-700/30 bg-gradient-to-br from-purple-900/30 to-slate-900/20 backdrop-blur-xl">
                  <h3 className="text-xl font-semibold text-gold-300 mb-4">Skills You'll Gain</h3>
                  <div className="flex flex-wrap gap-2">
                    {program.skillsLearned.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="glass-panel p-6 rounded-2xl border border-purple-700/30 bg-gradient-to-br from-purple-900/30 to-slate-900/20 backdrop-blur-xl">
                  <h3 className="text-xl font-semibold text-gold-300 mb-4">Program Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {program.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </MotionDiv>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Admission Details */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-panel p-8 rounded-3xl border border-purple-700/30 bg-gradient-to-br from-purple-900/30 to-slate-900/20 backdrop-blur-xl">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gold-300 mb-4">Admission Requirements</h3>
                    <ul className="space-y-3">
                      {program.admissionRequirements.map((req) => (
                        <li
                          key={req}
                          className="flex items-start gap-3 text-purple-200"
                        >
                          <div className="w-2 h-2 mt-2 rounded-full bg-gold-400" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gold-300 mb-4">Prerequisites</h3>
                    <div className="flex flex-wrap gap-2">
                      {program.prerequisites.map((preq) => (
                        <span
                          key={preq}
                          className="px-3 py-1 text-sm rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                        >
                          {preq}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </MotionDiv>

            {/* Instructors */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-panel p-8 rounded-3xl border border-purple-700/30 bg-gradient-to-br from-purple-900/30 to-slate-900/20 backdrop-blur-xl">
                <h2 className="text-3xl font-bold text-gold-300 mb-8">Meet Your Mentors</h2>
                <div className="space-y-6">
                  {program.instructors.map((instructor) => (
                    <div
                      key={instructor.name}
                      className="flex items-center gap-4 p-4 rounded-xl bg-purple-800/20 border border-purple-700/30"
                    >
                      <Image
                        src={instructor.image}
                        alt={instructor.name}
                        width={64}
                        height={64}
                        className="rounded-full border-2 border-gold-400"
                      />
                      <div>
                        <h3 className="font-semibold text-gold-400">{instructor.name}</h3>
                        <p className="text-sm text-purple-300">{instructor.bio}</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {instructor.expertise.map((exp) => (
                            <span
                              key={exp}
                              className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-300"
                            >
                              {exp}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </MotionDiv>

            {/* Contact CTA */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-panel p-8 rounded-3xl border border-purple-700/30 bg-gradient-to-br from-purple-900/30 to-slate-900/20 backdrop-blur-xl">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gold-300 mb-2">Ready to Start?</h3>
                  <p className="text-purple-300 mb-6">Transform your future with one click</p>
                  <button className="w-full py-3 bg-gradient-to-r from-gold-500 to-amber-600 rounded-xl font-semibold text-white hover:from-amber-600 hover:to-gold-600 transition-all">
                    Enroll Now
                  </button>
                </div>
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