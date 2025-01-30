import { Calendar } from "lucide-react"
import { MotionDiv } from "./motion/motion"
import homepageData from '@/data/homepage-data.json'

const EventsSection = () => {

    const {  events } = homepageData

  return (
    <section className="h-screen snap-start bg-slate-900/50 backdrop-blur-lg">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="w-full">
            <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4">
              {events.title}
              <span className="ml-2 md:ml-4 text-2xl md:text-3xl text-cyan-400">🗓️</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base">Mark your calendars</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Upcoming Events */}
            <div className="bg-slate-800/50 backdrop-blur-lg p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-700/50">
              <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-4 md:mb-6">Upcoming Events</h3>
              <div className="space-y-3 md:space-y-4">
                {events.upcomingEvents.map((event, index) => (
                  <MotionDiv
                    key={index}
                    whileHover={{ x: 5 }}
                    className="p-3 md:p-4 bg-slate-700/30 rounded-lg md:rounded-xl flex items-center gap-3 md:gap-4 border border-slate-600/50 hover:border-cyan-400/30 transition-all"
                  >
                    <div className="bg-cyan-400/10 p-2 md:p-3 rounded-md">
                      <Calendar className="w-6 h-6 md:w-7 md:h-7 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-medium text-slate-100">{event.title}</h4>
                      <p className="text-slate-400 text-sm md:text-base">{event.date} | {event.location}</p>
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </div>

            {/* Important Dates */}
            <div className="bg-slate-800/50 backdrop-blur-lg p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-700/50">
              <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-4 md:mb-6">Key Dates</h3>
              <div className="space-y-3 md:space-y-4">
                {events.importantDates.map((date, index) => (
                  <div 
                    key={index}
                    className="p-3 md:p-4 bg-slate-700/30 rounded-lg md:rounded-xl border border-slate-600/50 hover:border-emerald-400/30 transition-all"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 text-sm md:text-base">{date.event}</span>
                      <span className="text-emerald-400 font-medium text-sm md:text-base">{date.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
  )
}
export default EventsSection