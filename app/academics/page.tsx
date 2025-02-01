import { MotionDiv } from "@/components/motion/motion";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import Image from "next/image";
import { BookOpen, Trophy, Users, Globe, GraduationCap, School, Star, Target, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import aboutData from "@/data/vision.json";

const AccPage = () => {
  const {
    history,
    mission,
    vision,
    coreValues,
    philosophy,
    leadership,
    academicPrograms,
    accreditations,
    testimonials,
    careers,
  } = aboutData.about;

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 via-stone-800/50 to-stone-900/50" />
        <Image
          src="/student-1.jpg"
          alt="Maranatha Campus"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          priority
          sizes="(max-width: 768px) 100vw, 80vw"
        />
        
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-stone-100 font-serif">
              Our Vision for Excellence
            </h1>
            <p className="text-base md:text-xl text-stone-200 max-w-2xl mx-auto font-light leading-relaxed">
              Shaping global leaders through innovative education
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-stone-800 text-stone-100 p-6 md:p-8 rounded-xl">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <Target className="w-6 h-6 md:w-8 md:h-8 text-amber-500" />
              <h2 className="text-2xl md:text-3xl font-bold font-serif">Our Mission</h2>
            </div>
            <p className="text-lg md:text-xl text-stone-200">{mission.statement}</p>
          </div>

          <div className="bg-stone-800 text-stone-100 p-6 md:p-8 rounded-xl">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <Globe className="w-6 h-6 md:w-8 md:h-8 text-amber-500" />
              <h2 className="text-2xl md:text-3xl font-bold font-serif">Our Vision</h2>
            </div>
            <p className="text-lg md:text-xl text-stone-200">{vision.statement}</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 font-serif">
            Our Core Values
          </h2>
          <p className="text-lg text-stone-600 mt-2">The foundation of our educational philosophy</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {coreValues.values.map((value, index) => (
            <MotionDiv
              key={index}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-white shadow-lg border border-stone-200"
            >
              <div className="text-3xl font-bold text-amber-600 mb-2">{value.letter}</div>
              <h3 className="text-xl font-semibold text-stone-900 mb-2">{value.title}</h3>
              <p className="text-stone-600">{value.description}</p>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* History Timeline */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 font-serif">
            Our History
          </h2>
          <p className="text-lg text-stone-600 mt-2">A legacy of educational excellence</p>
        </div>
        <div className="relative space-y-8">
          {history.content.map((event, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 md:p-8 bg-white rounded-xl shadow-md border border-stone-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold">
                  {event.year}
                </div>
                <h3 className="text-xl font-semibold text-stone-900">{event.title}</h3>
              </div>
              <p className="mt-4 text-stone-600">{event.description}</p>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 font-serif">
            Leadership Team
          </h2>
          <p className="text-lg text-stone-600 mt-2">Guiding Maranatha to excellence</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadership.members.map((member, index) => (
            <div key={index} className="p-6 rounded-xl bg-white shadow-lg border border-stone-200">
              <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4">
                <Image
                  src={`/leadership-${index + 1}.jpg`}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-stone-900">{member.name}</h3>
              <p className="text-stone-600 text-sm mb-2">{member.role}</p>
              <ul className="space-y-1 text-stone-600 text-sm">
                {member.credentials.map((cred, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-500" />
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="bg-stone-800 text-stone-100 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Join Our Community</h2>
          <p className="text-lg text-stone-300 mb-6">
            Discover how Maranatha International Schools can shape your child's future
          </p>
          <button className="px-6 py-3 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600 transition-colors">
            Schedule a Visit
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AccPage;