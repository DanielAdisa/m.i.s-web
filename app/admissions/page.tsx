"use client";

import { useState } from "react";
import { MotionDiv } from "@/components/motion/motion";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import Image from "next/image";
import { Globe, GraduationCap, Users, BookOpen, Trophy, Star, ChevronRight } from "lucide-react";
import admissionsData from "@/data/admissions.json";

const AdmissionsPage = () => {
  const { admissionRequirements, admissionForm } = admissionsData.admissions;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({});
  const [errors, setErrors] = useState<Errors>({});

  interface FormData {
    [key: string]: any;
  }

  interface Errors {
    [key: string]: string;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData: FormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    setFormData((prevFormData: FormData) => ({ ...prevFormData, [name]: files ? files[0] : null }));
  };

  interface Field {
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    rows?: number;
    accept?: string;
    required?: boolean;
    validation?: string;
    errorMessage?: string;
  }

  const validateField = (field: Field, value: any): string | null => {
    if (field.required && !value) {
      return field.errorMessage || "This field is required";
    }
    if (field.validation && !new RegExp(field.validation).test(value)) {
      return field.errorMessage || "Invalid value";
    }
    return null;
  };

  interface FormSection {
    sectionTitle: string;
    fields: Field[];
  }

  interface AdmissionForm {
    modalTitle: string;
    formSections: FormSection[];
    submitText: string;
  }

  interface AdmissionsData {
    admissions: {
      admissionRequirements: any[];
      admissionForm: AdmissionForm;
    };
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: Errors = {};
    admissionForm.formSections.forEach((section: FormSection) => {
      section.fields.forEach((field: Field) => {
        const error = validateField(field, formData[field.name]);
        if (error) {
          newErrors[field.name] = error;
        }
      });
    });
    if (Object.keys(newErrors).length === 0) {
      // Handle form submission
      console.log("Form submitted", formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/30 to-transparent" />
        <Image
          src="/campus-hero.jpg"
          alt="Maranatha Campus"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 768px) 100vw, 80vw"
        />
        
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-4xl space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-100 font-serif leading-tight">
              Educating Tomorrow's<br className="hidden md:block" /> Global Leaders
            </h1>
            <p className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto font-light">
              Where Tradition Meets Innovation in Global Education
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 font-serif">
            Admission Requirements
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Detailed requirements for each level of entry
          </p>
        </div>
        
        <div className="space-y-8">
          {admissionRequirements.map((requirement, index) => (
            <MotionDiv
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-stone-200"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold text-stone-900 mb-4">{requirement.level}</h3>
              <p className="text-stone-600 mb-4">Age Range: {requirement.ageRange}</p>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-stone-900">Requirements:</h4>
                <ul className="list-disc list-inside text-stone-600">
                  {requirement.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2 mt-4">
                <h4 className="text-lg font-semibold text-stone-900">Documents:</h4>
                <ul className="list-disc list-inside text-stone-600">
                  {requirement.documents.map((doc, i) => (
                    <li key={i}>{doc}</li>
                  ))}
                </ul>
              </div>
              <p className="text-stone-600 mt-4"><strong>Note:</strong> {requirement.notice}</p>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* Admission Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
            <h2 className="text-2xl font-bold mb-4">{admissionForm.modalTitle}</h2>
            <form onSubmit={handleSubmit}>
              {admissionForm.formSections.map((section, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">{section.sectionTitle}</h3>
                  <div className="space-y-4">
                    {section.fields.map((field, i) => (
                      <div key={i} className="flex flex-col">
                        <label className="mb-2 font-medium">{field.label}</label>
                        {field.type === "textarea" ? (
                          <textarea
                            name={field.name}
                            placeholder={field.placeholder}
                            rows={4}
                            className="p-2 border rounded"
                            onChange={handleInputChange}
                          />
                        ) : (
                          <input
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            className="p-2 border rounded"
                            onChange={field.type === "file" ? handleFileChange : handleInputChange}
                          />
                        )}
                        {errors[field.name] && (
                          <span className="text-red-500 text-sm">{errors[field.name]}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 rounded"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  {admissionForm.submitText}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Final CTA */}
      <section className="bg-stone-900 text-stone-100 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
              Ready to Join Our Global Community?
            </h2>
            <p className="text-lg text-stone-300 mb-8 max-w-2xl mx-auto">
              Discover how Maranatha International Schools can unlock your child's potential
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                className="px-8 py-4 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600 transition-colors flex items-center gap-2"
                onClick={() => setIsModalOpen(true)}
              >
                <BookOpen className="w-5 h-5" />
                Apply Now
              </button>
              <button className="px-8 py-4 border-2 border-stone-300 text-stone-100 rounded-lg font-semibold hover:border-amber-500 hover:text-amber-500 transition-colors">
                Schedule Campus Tour
              </button>
            </div>
          </MotionDiv>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdmissionsPage;