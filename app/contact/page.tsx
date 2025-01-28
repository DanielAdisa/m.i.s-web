import { MotionDiv } from "@/components/motion/motion";
import { PageShell } from "@/components/PageShell";

// app/(routes)/contact/page.tsx
export default function ContactPage() {
    return (
      <PageShell>

        
        <section className="relative h-96 bg-gradient-to-l from-school-purple to-school-yellow">
          <div className="container mx-auto px-4 h-full flex items-center">
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white max-w-2xl"
            >
              <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl">We're here to help</p>
            </MotionDiv>
          </div>
        </section>
  
        {/* Contact Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
            {['Location', 'Phone', 'Email'].map((method) => (
              <div key={method} className="glass p-8 rounded-2xl text-center">
                <h3 className="text-xl font-bold mb-2">{method}</h3>
                <p className="text-gray-600">Content placeholder...</p>
              </div>
            ))}
          </div>
        </section>
      </PageShell>
    )
  }