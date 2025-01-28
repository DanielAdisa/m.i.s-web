import { MotionDiv } from "@/components/motion/motion";
import { PageShell } from "@/components/PageShell";

// app/(routes)/academics/page.tsx
export default function AcademicsPage() {
    return (
      <PageShell>
        
        <section className="relative h-96 bg-gradient-to-bl from-school-purple to-school-yellow">
          <div className="container mx-auto px-4 h-full flex items-center">
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white max-w-2xl"
            >
              <h1 className="text-5xl font-bold mb-6">Academics</h1>
              <p className="text-xl">Excellence in Education</p>
            </MotionDiv>
          </div>
        </section>
  
        {/* Programs Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
            {['Curriculum', 'Departments', 'Special Programs'].map((program) => (
              <div key={program} className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">{program}</h3>
                <p className="text-gray-600">Content placeholder...</p>
              </div>
            ))}
          </div>
        </section>
      </PageShell>
    )
  }