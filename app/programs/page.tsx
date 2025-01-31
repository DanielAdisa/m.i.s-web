"use client";

import { useState, useMemo, useDeferredValue } from "react";
import Link from "next/link";
import Image from "next/image";
import { MotionDiv } from "@/components/motion/motion";
import { ChevronRight, Search, Filter, SortAsc, Clock, Users, Star, Heart, Bookmark, Loader } from "lucide-react";
import programsData from "@/data/programs.json";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";

const { featuredPrograms } = programsData;

const categories = ["All", "Technology", "Business", "Design", "Marketing"];

export default function ProgramsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const deferredQuery = useDeferredValue(searchQuery);
  const [loading, setLoading] = useState(false);

  const categoryCounts = useMemo<{ [key: string]: number }>(() => {
    return categories.reduce((acc: { [key: string]: number }, category) => {
      acc[category] = featuredPrograms.filter(p => 
        category === "All" ? true : p.category === category
      ).length;
      return acc;
    }, {});
  }, []);

  const filteredPrograms = useMemo(() => {
    setLoading(true);
    const result = featuredPrograms.filter(program => 
      (selectedCategory === "All" || program.category === selectedCategory) &&
      program.title.toLowerCase().includes(deferredQuery.toLowerCase())
    ).sort((a, b) => {
      if (sortBy === "popular") return (b.studentsEnrolled || 0) - (a.studentsEnrolled || 0);
      if (sortBy === "newest") return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
      return (a.price || 0) - (b.price || 0);
    });
    setTimeout(() => setLoading(false), 300); // Simulate async delay
    return result;
  }, [selectedCategory, deferredQuery, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-slate-900 to-purple-900">
        <Navbar/>
      {/* Enhanced Hero Section */}
      <section className="relative md:py-24 py-28  overflow-hidden bg-[url('/grid.svg')] bg-[size:100px_100px]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-4">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gold-400 via-amber-200 to-gold-400 bg-clip-text text-transparent">
                Explore Our Programs
              </h1>
              <p className="text-xl text-purple-200/90 mb-4">
                Discover world-class courses taught by industry experts
              </p>
            </MotionDiv>

            {/* Enhanced Search */}
            <MotionDiv
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="relative max-w-2xl mx-auto"
>
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-gold-500/20 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
    <div className="relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400 group-focus-within:text-gold-400 transition-colors" />
      <input
        type="text"
        placeholder="Search programs..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-12 pr-10 py-4 rounded-2xl bg-purple-900/50 border border-purple-700/50 text-white placeholder:text-purple-400 focus:border-gold-500/50 focus:ring focus:ring-gold-500/20 focus:outline-none transition-all"
        aria-label="Search programs"
      />
      {searchQuery && (
        <button
          onClick={() => setSearchQuery("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-purple-800/50 text-purple-400 hover:text-gold-400 transition-colors"
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  </div>
</MotionDiv>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container  mx-auto px-4 py-4">
        {/* Enhanced Filters */}
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
  <div className="w-full md:w-auto">
    <div className="flex flex-col gap-4 w-full bg-purple-900/50 p-4 rounded-xl border border-purple-700/50">
      <div className="flex items-center gap-2">
        <Filter className="w-5 h-5 text-purple-400" />
        <span className="text-purple-300 text-sm">Filter by Category</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
              selectedCategory === category
                ? "bg-gold-500 text-white shadow-lg shadow-gold-500/20"
                : "bg-purple-900/50 text-purple-300 hover:bg-purple-800/50"
            }`}
          >
            {category}
            <span className="text-xs opacity-80">({categoryCounts[category]})</span>
          </button>
        ))}
      </div>
    </div>
  </div>

  <div className="w-full md:w-auto">
    <div className="flex items-center gap-2 bg-purple-900/50 p-4 rounded-xl border border-purple-700/50 w-full md:w-auto">
      <SortAsc className="w-5 h-5 text-purple-400 shrink-0" />
      <select
        aria-label="Sort programs by"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="bg-transparent border-none text-purple-300 px-4 py-2 focus:outline-none focus:ring-0 w-full md:w-auto"
      >
        <option value="popular">Most Popular</option>
        <option value="newest">Newest</option>
        <option value="price">Price: Low to High</option>
      </select>
    </div>
  </div>
</div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center py-12">
            <Loader className="w-8 h-8 text-gold-400 animate-spin" />
          </div>
        )}

        {/* Enhanced Programs Grid */}
        <div className="grid pb-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program, index) => (
            <MotionDiv
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-gold-500/5 opacity-0 hover:opacity-100 transition-opacity rounded-2xl" />
              <Link href={`/programs/${program.slug}`} className="block group">
                <div className="h-full bg-purple-900/20 backdrop-blur-xl rounded-2xl border-2 border-purple-700/30 overflow-hidden hover:border-gold-500/30 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-900/20">
                  {/* Program Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 to-transparent z-10" />
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                      <span className="text-2xl">{program.icon}</span>
                      <span className="text-sm text-gold-300 font-medium px-2 py-1 rounded-full bg-purple-900/70 backdrop-blur-sm">
                        {program.category}
                      </span>
                    </div>
                    <button title="Add to favorites" className="absolute top-4 right-4 z-20 p-2 rounded-full bg-purple-900/50 hover:bg-gold-500/20 transition-colors">
                      <Heart className="w-5 h-5 text-purple-300 hover:text-gold-400" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-purple-200/90 mb-4 line-clamp-2">
                      {program.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="h-1 bg-purple-800/50 rounded-full mb-4">
                      <div 
                        className="h-full bg-gold-500 rounded-full transition-all duration-500" 
                        style={{ width: `${Math.random() * 80 + 20}%` }}
                      />
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-purple-300">
                      <div className="flex items-center gap-1 bg-purple-900/50 px-3 py-1 rounded-full">
                        <Clock className="w-4 h-4" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-purple-900/50 px-3 py-1 rounded-full">
                        <Users className="w-4 h-4" />
                        <span>{(program.studentsEnrolled || 0).toLocaleString()}+</span>
                      </div>
                      <div className="flex items-center gap-1 bg-purple-900/50 px-3 py-1 rounded-full">
                        <Star className="w-4 h-4 text-gold-400" />
                        <span>{program.rating || "4.8"}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-gold-400">
                        ₦{(program.price || 499).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gold-400 font-medium bg-gold-500/10 px-4 py-2 rounded-full hover:bg-gold-500/20 transition-colors">
                        <span>Explore</span>
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </MotionDiv>
          ))}
        </div>

        {/* Enhanced Empty State */}
        {!loading && filteredPrograms.length === 0 && (
          <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20 space-y-6"
          >
            <div className="inline-block bg-purple-900/50 p-8 rounded-2xl border border-purple-700/30">
              <Bookmark className="w-16 h-16 text-gold-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-purple-200 mb-2">No programs found</h3>
              <p className="text-purple-300 max-w-md mx-auto">
                Try adjusting your search terms or filters. Need help?{" "}
                <button className="text-gold-400 hover:underline" onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}>
                  Reset filters
                </button>
              </p>
            </div>
          </MotionDiv>
        )}
      </section>
      <Footer/>
    </div>
  );
}