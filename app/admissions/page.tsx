import { MotionDiv } from "@/components/motion/motion";
import { PageShell } from "@/components/PageShell";

// app/(routes)/admissions/page.tsx
export default function AdmissionsPage() {
    return (
      <PageShell>

        
        <section className="relative h-96 bg-gradient-to-br from-school-purple to-school-yellow">
          <div className="container mx-auto px-4 h-full flex items-center">
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white max-w-2xl"
            >
              <h1 className="text-5xl font-bold mb-6">Admissions</h1>
              <p className="text-xl">Start Your Journey</p>
            </MotionDiv>
          </div>
        </section>
  
        {/* Process Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="relative pl-8 border-l-2 border-school-purple">
              {['Application', 'Assessment', 'Enrollment'].map((step, index) => (
                <div key={index} className="mb-12 relative">
                  <div className="absolute w-4 h-4 bg-school-yellow rounded-full -left-9 top-2" />
                  <h4 className="text-xl font-bold">{step}</h4>
                  <p className="text-gray-600">Content placeholder...</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </PageShell>
    )
  }