import { MotionDiv } from "@/components/motion/motion";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import Image from "next/image";
import { BookOpen, Trophy, Users, Globe, GraduationCap, School, Star, Target, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import aboutData from "@/data/about.json";

const AboutPage = () => {
  const { 
    hero,
    coreValues,
    mission,
    milestones,
    leadership,
    academicOverview,
    globalPartners,
    testimonials,
    accreditations,
    ctaSection
  } = aboutData.aboutData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-cyan-900/50 overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-slate-900/70 to-cyan-900/30" />
        <Image
          src={hero.image}
          alt="School Campus"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-purple-900/20 to-purple-950/90" />

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gold-400 via-amber-200 to-gold-400 bg-clip-text text-transparent drop-shadow-lg">
              {hero.title}
            </h1>
            <p className="text-xl text-purple-100/90 max-w-2xl mx-auto font-light leading-relaxed">
              {hero.subtitle}
            </p>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {hero.stats.map((stat, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-4 rounded-xl bg-purple-800/30 backdrop-blur-sm"
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gold-300">{stat.value}</div>
                  <div className="text-sm text-purple-200">{stat.label}</div>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-4 py-16">
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-panel p-8 rounded-3xl"
        >
          <h2 className="text-3xl font-bold text-gold-300 mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value) => (
              <MotionDiv
                key={value.id}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-purple-800/20 border border-purple-700/30"
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gold-300 mb-2">{value.title}</h3>
                <p className="text-purple-200/90 mb-3">{value.description}</p>
                <div className="flex flex-wrap gap-2">
                  {value.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>
      </section>

      {/* Mission & Philosophy */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          <MotionDiv
            className="glass-panel p-8 rounded-3xl"
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Target className="w-8 h-8 text-gold-400" />
              <h2 className="text-3xl font-bold text-gold-300">Our Mission</h2>
            </div>
            <blockquote className="text-2xl font-light text-purple-100/90 italic border-l-4 border-gold-400 pl-6 py-4">
              "{mission.statement}"
            </blockquote>
            
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">Vision</h3>
                <p className="text-purple-200">{mission.vision}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-emerald-300 mb-2">Educational Philosophy</h3>
                <p className="text-purple-200">{mission.philosophy}</p>
              </div>
            </div>
          </MotionDiv>

          {/* Academic Overview */}
          <MotionDiv
            className="glass-panel p-8 rounded-3xl"
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <GraduationCap className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-bold text-cyan-300">Academic Excellence</h2>
            </div>

            <div className="space-y-8">
              {academicOverview.programs.map(program => (
                <div key={program.level} className="p-6 rounded-xl bg-purple-800/20">
                  <h3 className="text-xl font-semibold text-gold-300 mb-2">{program.level}</h3>
                  <p className="text-purple-200 mb-3">{program.curriculum}</p>
                  <div className="flex flex-wrap gap-2">
                    {program.features.map(feature => (
                      <span key={feature} className="px-2 py-1 text-sm rounded-full bg-emerald-500/10 text-emerald-300">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-2 gap-4">
                {Object.entries(academicOverview.stats).map(([key, value]) => (
                  <div key={key} className="p-4 rounded-xl bg-purple-800/20">
                    <div className="text-2xl font-bold text-gold-300">
                      {typeof value === 'object' ? Object.values(value)[0] : value}
                    </div>
                    <div className="text-sm text-purple-300 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="container mx-auto px-4 py-16">
        <MotionDiv
          className="glass-panel p-8 rounded-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <Users className="w-8 h-8 text-emerald-400" />
            <h2 className="text-3xl font-bold text-emerald-300">Leadership Team</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map(member => (
              <MotionDiv
                key={member.id}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-purple-800/20 border border-purple-700/30"
              >
                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gold-300">{member.name}</h3>
                <p className="text-purple-300 text-sm mb-2">{member.role}</p>
                <p className="text-purple-200/80 text-sm mb-4">{member.bio}</p>
                
                <div className="space-y-2">
                  {member.credentials?.map(cred => (
                    <div key={cred} className="flex items-center gap-2 text-sm text-cyan-300">
                      <Star className="w-4 h-4" />
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>

                {member.social && (
                  <div className="mt-4 flex gap-3">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-purple-300 hover:text-cyan-400">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={`https://twitter.com/${member.social.twitter}`} className="text-purple-300 hover:text-cyan-400">
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                )}
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>
      </section>

      {/* Global Partners & Accreditations */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <MotionDiv
            className="glass-panel p-8 rounded-3xl"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
          >
            <h2 className="text-2xl font-bold text-gold-300 mb-6">Global Partnerships</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {globalPartners.map(partner => (
                <div key={partner.name} className="p-4 rounded-xl bg-purple-800/20 flex items-center gap-4">
                  <div className="relative w-16 h-16">
                    <Image
                      src={partner.logo}
                      alt={"Balls"}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gold-200">{partner.name}</h3>
                    <p className="text-sm text-purple-300">{partner.type}</p>
                    <p className="text-xs text-purple-400">Since {partner.since}</p>
                  </div>
                </div>
              ))}
            </div>
          </MotionDiv>

          <MotionDiv
            className="glass-panel p-8 rounded-3xl"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
          >
            <h2 className="text-2xl font-bold text-gold-300 mb-6">Accreditations</h2>
            <div className="flex flex-wrap gap-4">
              {accreditations.map(accreditation => (
                <div key={accreditation.body} className="p-4 rounded-xl bg-purple-800/20 flex items-center gap-4">
                  <div className="relative w-16 h-16">
                    <Image
                      src={accreditation.logo}
                      alt={"BallErs"}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gold-200">{accreditation.body}</h3>
                    <p className="text-xs text-purple-400">Accredited since {accreditation.since}</p>
                  </div>
                </div>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <MotionDiv
          className="glass-panel p-8 rounded-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-3xl font-bold text-gold-300 mb-8">Community Voices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map(testimonial => (
              <div key={testimonial.author} className="p-6 rounded-xl bg-purple-800/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gold-200">{testimonial.author}</h3>
                    <p className="text-sm text-purple-300">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-purple-200 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </MotionDiv>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-16">
        <MotionDiv
          className="glass-panel p-12 rounded-3xl text-center"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
        >
          <h2 className="text-4xl font-bold text-gold-300 mb-4">{ctaSection.title}</h2>
          <div className="flex justify-center gap-4 mb-8">
            {ctaSection.actions.map(action => (
              <button
                key={action.title}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-amber-600 rounded-xl font-semibold hover:from-amber-600 hover:to-gold-600 transition-all"
              >
                <span className="text-xl">{action.icon}</span>
                {action.title}
              </button>
            ))}
          </div>
          
          <div className="space-y-2 text-purple-200">
            <p>Admissions: {ctaSection.contact.admissionsEmail}</p>
            <p>Emergency: {ctaSection.contact.emergencyPhone}</p>
            <div className="flex justify-center gap-4 mt-4">
              <a href={ctaSection.contact.socialMedia.facebook} className="hover:text-cyan-400">
                <Facebook className="w-6 h-6" />
              </a>
              <a href={ctaSection.contact.socialMedia.instagram} className="hover:text-cyan-400">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </MotionDiv>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;