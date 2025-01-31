import { Calendar, ChevronRight, Microscope, Palette, Sparkles, TabletSmartphone, Trophy } from "lucide-react"
import { MotionButton, MotionDiv } from "./motion/motion"
import homepageData from '@/data/homepage-data.json'

const HeroSection = () => {
    const { heroSection } = homepageData

    const stats = [
        { icon: Trophy, value: "98%", label: "Success Rate" },
        { icon: Microscope, value: "35+", label: "Science Labs" },
        { icon: Palette, value: "20+", label: "Art Programs" },
        { icon: Calendar, value: "50+", label: "Yearly Events" },
        { icon: TabletSmartphone, value: "1:1", label: "Tech Program" },
    ]

    return (
        <section className="relative h-screen  overflow-hidden">
            {/* Enhanced Background */}
            <div className="absolute inset-0 bg-[url('/student-1.jpg')] bg-cover bg-center bg-no-repeat opacity-20 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-800/60 to-slate-900/90" />

            <div className="container mx-auto px-4 h-full flex items-center">
                <div className="w-full z-10 relative">
                    <MotionDiv
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white space-y-8 flex flex-col w-full justify-center items-center"
                    >
                        {/* Ranking Badge */}
                        <MotionDiv
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="mb-4 md:mb-8 flex items-center gap-3 bg-white/5 backdrop-blur-lg rounded-full px-5 py-2.5 w-fit border border-slate-700/50 hover:bg-white/10 transition-colors"
                        >
                            <Sparkles className="w-5 h-5 text-cyan-400" />
                            <span className="font-medium text-slate-300 text-sm md:text-base">Ranked #1 in Nigeria</span>
                        </MotionDiv>

                        {/* Main Heading */}
                        <h1 className="text-center max-w-4xl mx-auto">
                            <MotionDiv
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-[1.15] bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent px-4"
                            >
                                {heroSection.title.split(' ').slice(0,3).join(' ')}
                            </MotionDiv>
                            <span className="text-slate-100 block mt-4 text-2xl md:text-3xl lg:text-4xl font-semibold px-4">
                                {heroSection.title.split(' ').slice(3).join(' ')}
                            </span>
                        </h1>

                        {/* Quick Stats - Mobile Carousel */}
                        <div className="md:hidden w-full overflow-x-auto pb-4 px-4">
                            <div className="flex gap-4 w-max mx-auto py-2">
                                {stats.map((stat, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-slate-700/50 min-w-[140px]">
                                        <stat.icon className="w-6 h-6 text-cyan-400 mb-2" />
                                        <div className="text-cyan-400 font-bold text-xl">{stat.value}</div>
                                        <div className="text-slate-300 text-sm">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md sm:max-w-none justify-center px-4">
                            {heroSection.buttons.map((button, index) => (
                                <MotionButton
                                    key={index}
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`${
                                        button.variant === 'primary' 
                                            ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 shadow-lg hover:shadow-cyan-500/30'
                                            : 'border-2 border-slate-600 bg-slate-800/30 backdrop-blur-lg hover:bg-slate-800/50'
                                    } w-full sm:w-auto px-6 py-4 rounded-[1.25rem] text-base font-semibold transition-all flex items-center justify-center gap-2`}
                                >
                                    <span className="tracking-wide">{button.text}</span>
                                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                                </MotionButton>
                            ))}
                        </div>

                        {/* Quick Stats - Desktop Grid */}
                        <div className="hidden md:grid grid-cols-5 gap-6 w-full max-w-4xl mt-8 px-4">
                            {stats.map((stat, index) => (
                                <div key={index} className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-slate-700/50 hover:bg-white/10 transition-colors">
                                    <stat.icon className="w-7 h-7 text-cyan-400 mb-3" />
                                    <div className="text-cyan-400 font-bold text-2xl">{stat.value}</div>
                                    <div className="text-slate-300 text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </MotionDiv>
                </div>
            </div>

            {/* Floating Student Avatars */}
            <div className="absolute bottom-4 md:bottom-8 left-0 right-0 flex justify-center gap-3 md:gap-4 px-4">
                {heroSection.students.map((student, index) => (
                    <MotionDiv
                        key={index}
                        initial={{ y: 0 }}
                        animate={{ y: [0, -15, 0] }}
                        transition={{ 
                            duration: 3 + index, 
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border-2 border-slate-600/50 overflow-hidden shadow-lg hover:border-cyan-400 transition-all hover:z-10 hover:scale-110"
                    >
                        <img 
                            src={student} 
                            alt="Student" 
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </MotionDiv>
                ))}
            </div>

        </section>
    )
}

export default HeroSection