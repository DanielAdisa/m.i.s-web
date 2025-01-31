import Link from "next/link";
import { featuredPrograms } from "@/data/programs";
import { MotionDiv } from "./motion/motion";
import { ChevronRight } from "lucide-react";

export default function FeaturedPrograms() {
  return (
    <section className="py-24 bg-gradient-to-b from-purple-950 via-slate-900 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Programs
            <span className="text-gold-400">✦</span>
          </h2>
          <p className="text-purple-200 text-lg">Discover your path to excellence</p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPrograms.map((program, index) => (
            <MotionDiv
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/programs/${program.slug}`}
                className="block group"
              >
                <div className="bg-purple-900/20 backdrop-blur-xl rounded-2xl border border-purple-700/30 overflow-hidden p-8 hover:border-gold-500/30 transition-all duration-300">
                  {/* Icon Container */}
                  <div className="text-5xl mb-6 bg-gradient-to-br from-gold-400/20 to-purple-400/20 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {program.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-purple-200 mb-6 line-clamp-3">
                    {program.description}
                  </p>
                  
                  {/* CTA */}
                  <div className="flex items-center gap-2 text-gold-400 font-medium">
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}