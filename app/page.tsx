import { MotionDiv, MotionButton } from '@/components/motion/motion'
import { ChevronRight, Trophy, Palette, Microscope, TabletSmartphone, Calendar } from 'lucide-react'
import homepageData from '@/data/homepage-data.json'

// Icon mapping for dynamic icon rendering
const iconComponents = {
  Trophy: Trophy,
  Basketball: Microscope,
  Palette: Palette,
  Microscope: Microscope,
  TabletSmartphone: TabletSmartphone,
  Calendar: Calendar
}

export default function Home() {
  const {
    heroSection,
    trendingSection,
    techFeatures,
    testimonials,
    programs,
    socialMediaWall,
    stats,
    events
  } = homepageData

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-50 to-purple-100/20">

      {/* Hero Section */}
      <section className="relative h-[100svh] bg-gradient-to-br from-purple-900 to-amber-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-15 mix-blend-overlay" />
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-5xl z-10 relative">
            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white space-y-8"
            >
              <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                  {heroSection.title.split(' ')[0]} {heroSection.title.split(' ')[1]}
                </span>
                <br />
                <span className="text-white">
                  {heroSection.title.split(' ')[2]} {heroSection.title.split(' ')[3]}
                </span>
                <br />
                {heroSection.title.split(' ').slice(4).join(' ')}
              </h1>
              <div className="flex gap-4">
                {heroSection.buttons.map((button, index) => (
                  <MotionButton
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className={`${
                      button.variant === 'primary'
                        ? 'bg-amber-500 text-purple-900'
                        : 'border-2 border-amber-400 text-amber-400 bg-transparent'
                    } px-8 py-4 rounded-full text-lg font-bold flex items-center gap-2`}
                  >
                    {button.text}
                    <ChevronRight className="w-5 h-5" />
                  </MotionButton>
                ))}
              </div>
            </MotionDiv>
          </div>
        </div>

        {/* Student Avatars */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4">
          {heroSection.students.map((student, index) => (
            <MotionDiv
              key={index}
              whileHover={{ y: -15 }}
              className="w-20 h-20 rounded-full border-4 border-amber-400 overflow-hidden shadow-lg cursor-pointer"
            >
              <img src={student} alt="Student" className="w-full h-full object-cover" />
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-900">
            {trendingSection.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trendingSection.trends.map((trend, index) => {
              const IconComponent = iconComponents[trend.icon as keyof typeof iconComponents]
              return (
                <MotionDiv key={index} whileHover={{ scale: 1.02 }} className="bg-purple-50 p-6 rounded-3xl">
                  <div className="flex items-center gap-4 mb-4">
                    <IconComponent className="w-12 h-12 text-amber-500" />
                    <h3 className="text-2xl font-bold text-purple-900">{trend.title}</h3>
                  </div>
                  <p className="text-purple-600">{trend.description}</p>
                </MotionDiv>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tech Features Section */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold leading-tight">
                <span className="text-amber-400">{techFeatures.title.split(' ')[0]}</span>
                <br />
                {techFeatures.title.split(' ').slice(1).join(' ')}
              </h2>
              <p className="text-xl text-purple-200">{techFeatures.description}</p>
              <MotionButton
                whileHover={{ scale: 1.05 }}
                className="bg-amber-500 text-purple-900 px-6 py-4 rounded-full font-bold"
              >
                Explore Tech Labs
              </MotionButton>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {techFeatures.features.map((feature, index) => {
                const IconComponent = iconComponents[feature.icon as keyof typeof iconComponents]
                return (
                  <MotionDiv
                    key={index}
                    whileHover={{ y: -10 }}
                    className="bg-white/10 p-6 rounded-2xl"
                  >
                    <IconComponent className="w-16 h-16 mb-4 text-amber-400" />
                    <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-purple-200">{feature.description}</p>
                  </MotionDiv>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-900">
            {testimonials.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.quotes.map((testimonial, index) => (
              <MotionDiv
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-purple-50 p-6 rounded-3xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                  <h3 className="text-2xl font-bold text-purple-900">{testimonial.name}</h3>
                </div>
                <p className="text-purple-600">"{testimonial.text}"</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{programs.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.items.map((program, index) => (
              <MotionDiv
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm text-center"
              >
                <div className="text-4xl mb-4">{program.emoji}</div>
                <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                <p className="text-purple-200">{program.description}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Wall */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-900">
            {socialMediaWall.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialMediaWall.posts.map((post, index) => (
              <MotionDiv
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square rounded-3xl overflow-hidden group"
              >
                <img
                  src={post}
                  alt="Campus Life"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-0 group-hover:opacity-100 flex items-end p-4 transition-all">
                  <div className="flex items-center gap-2 text-white">
                    <span>👤</span>
                    <span className="font-medium">@maranatha_student</span>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">{stats.title}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.items.map((stat, index) => (
              <MotionDiv
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm"
              >
                <div className="text-4xl mb-4">{stat.emoji}</div>
                <div className="text-5xl font-bold text-amber-400 mb-2">{stat.value}</div>
                <div className="text-lg">{stat.label}</div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-900">
            {events.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-purple-50 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-purple-900 mb-6">Upcoming Events</h3>
              <div className="space-y-4">
                {events.upcomingEvents.map((event, index) => (
                  <MotionDiv
                    key={index}
                    whileHover={{ x: 10 }}
                    className="p-4 bg-white rounded-xl flex items-center gap-4"
                  >
                    <div className="bg-amber-100 p-3 rounded-lg">
                      <Calendar className="w-8 h-8 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-purple-900">{event.title}</h4>
                      <p className="text-purple-600">{event.date} | {event.location}</p>
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </div>
            <div className="bg-purple-900 text-white p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Important Dates</h3>
              <div className="space-y-4">
                {events.importantDates.map((date, index) => (
                  <div key={index} className="p-4 bg-white/10 rounded-xl">
                    <div className="flex justify-between items-center">
                      <span>{date.event}</span>
                      <span className="text-amber-400">{date.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}