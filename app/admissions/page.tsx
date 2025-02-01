"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, AlertCircle } from 'lucide-react';
import admissionsData from '@/data/admissions.json';
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import Image from "next/image";
import { GraduationCap, Book, Users, Clock } from "lucide-react";

const AdmissionsPage = () => {
  const { admissionRequirements, admissionForm } = admissionsData.admissions;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({});
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [files, setFiles] = useState<Files>({});
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle section toggle for requirements
  interface FormData {
    [key: string]: string;
  }

  interface FormErrors {
    [key: string]: string | null;
  }

  interface Files {
    [key: string]: File;
  }

  interface AdmissionRequirement {
    level: string;
    ageRange: string;
    requirements: string[];
    documents?: string[];
    notice?: string;
  }

  interface Field {
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    required?: boolean;
    validation?: string;
    errorMessage?: string;
    rows?: number | undefined;
    accept?: string;
  }

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
      admissionRequirements: AdmissionRequirement[];
      admissionForm: AdmissionForm;
    };
  }

  const toggleSection = (index: number) => {
    setActiveSection(activeSection === index ? null : index);
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  // Handle file uploads
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const file = e.target.files?.[0];
    if (file) {
      setFiles(prev => ({ ...prev, [fieldName]: file }));
    }
  };

  // Field validation
  const validateField = (name: string, value: string) => {
    const fieldConfig: Field | undefined = admissionForm.formSections
      .flatMap((section: FormSection) => section.fields)
      .find((field: Field) => field.name === name);

    if (fieldConfig?.validation) {
      const regex = new RegExp(fieldConfig.validation);
      const isValid = regex.test(value);
      
      setFormErrors((prev: FormErrors) => ({
        ...prev,
        [name]: isValid ? null : fieldConfig.errorMessage || null
      }));
    }
  };

  // Form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formPayload = new FormData();
    
    // Append form data
    Object.entries(formData).forEach(([key, value]: [string, unknown]) => {
      formPayload.append(key, value as string);
    });

    // Append files
    Object.entries(files).forEach(([key, file]: [string, unknown]) => {
      formPayload.append(key, file as File);
    });

    try {
      // Replace with actual API endpoint
      const response: Response = await fetch('/api/admissions', {
        method: 'POST',
        body: formPayload,
      });

      if (response.ok) {
        alert('Application submitted successfully!');
        setIsModalOpen(false);
        // Reset form
        setFormData({});
        setFiles({});
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Error submitting application. Please try again.');
    }
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const admissionSteps = [
    {
      icon: Book,
      title: "Submit Application",
      description: "Complete online application form with required documents"
    },
    {
      icon: Users,
      title: "Assessment",
      description: "Academic evaluation and student interview"
    },
    {
      icon: Clock,
      title: "Decision",
      description: "Admission decision within 2 weeks"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-cyan-900/50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-slate-900/70 to-cyan-900/30" />
        <Image
          src="/admissions-hero.jpg"
          alt="Admissions"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-purple-900/20 to-purple-950/90" />

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gold-400 via-amber-200 to-gold-400 bg-clip-text text-transparent drop-shadow-lg">
              Join Our Community
            </h1>
            <p className="text-xl text-purple-100/90 max-w-2xl mx-auto font-light leading-relaxed">
              Begin your journey towards academic excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-panel p-8 rounded-3xl border border-purple-700/30 bg-gradient-to-br from-purple-900/30 to-slate-900/20 backdrop-blur-xl"
        >
          <h2 className="text-3xl font-bold text-gold-300 mb-12 text-center">
            Admission Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-purple-800/20 border border-purple-700/30"
              >
                <step.icon className="w-8 h-8 text-gold-400 mb-4" />
                <h3 className="text-xl font-semibold text-gold-300 mb-2">{step.title}</h3>
                <p className="text-purple-200/90">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Requirements Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gold-400 mb-8 text-center">
          Admission Requirements
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {admissionRequirements.map((level, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-stone-200">
              <button
                onClick={() => toggleSection(index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-stone-50 transition-colors"
              >
                <div>
                  <h3 className="text-xl font-semibold text-stone-900">{level.level}</h3>
                  <p className="text-stone-600 mt-1">Age Range: {level.ageRange}</p>
                </div>
                <ChevronDown className={`w-6 h-6 transform transition-transform ${
                  activeSection === index ? 'rotate-180' : ''
                }`} />
              </button>

              <AnimatePresence>
                {activeSection === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 pt-2 border-t border-stone-200"
                  >
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-stone-900 mb-2">Requirements:</h4>
                        <ul className="list-disc pl-6 space-y-2">
                          {level.requirements.map((req, i) => (
                            <li key={i} className="text-stone-600">{req}</li>
                          ))}
                        </ul>
                      </div>

                      {level.documents?.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-stone-900 mb-2">Documents:</h4>
                          <ul className="list-disc pl-6 space-y-2">
                            {level.documents.map((doc, i) => (
                              <li key={i} className="text-stone-600">{doc}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {level.notice && (
                        <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                          <p className="text-sm text-amber-800">{level.notice}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
          >
            Start Application
          </button>
        </div>
      </section>

      {/* Admission Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-stone-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              ref={modalRef}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6 border-b border-stone-200 flex justify-between items-center">
                <h3 className="text-xl font-bold text-stone-900">
                  {admissionForm.modalTitle}
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-stone-500 hover:text-stone-700"
                  title="Close"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-8">
                {admissionForm.formSections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="space-y-4">
                    <h4 className="font-semibold text-stone-900 text-lg">
                      {section.sectionTitle}
                    </h4>
                    
                    <div className="space-y-5">
                      {section.fields.map((field, fieldIndex) => (
                        <div key={fieldIndex}>
                          <label className="block text-sm font-medium text-stone-700 mb-2">
                            {field.label}
                            {field.required && (
                              <span className="text-rose-500 ml-1">*</span>
                            )}
                          </label>

                          {field.type === 'textarea' ? (
                            <textarea
                              name={field.name}
                              value={formData[field.name] || ''}
                              onChange={handleInputChange}
                              placeholder={field.placeholder}
                              rows={3}
                              className={`w-full px-4 py-2 rounded-lg border ${
                                formErrors[field.name] ? 'border-rose-500' : 'border-stone-200'
                              } focus:ring-2 focus:ring-amber-500 focus:border-transparent`}
                            />
                          ) : field.type === 'file' ? (
                            <div className="relative">
                              <input
                                type="file"
                                name={field.name}
                                onChange={(e) => handleFileUpload(e, field.name)}
                                
                                title={field.label}
                                className="block w-full text-sm text-stone-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-stone-100 file:text-stone-700 hover:file:bg-stone-200"
                              />
                              {files[field.name] && (
                                <span className="text-sm text-stone-500 mt-1 block">
                                  Selected: {files[field.name].name}
                                </span>
                              )}
                            </div>
                          ) : (
                            <input
                              type={field.type}
                              name={field.name}
                              value={formData[field.name] || ''}
                              onChange={handleInputChange}
                              placeholder={field.placeholder}
                              className={`w-full px-4 py-2 rounded-lg border ${
                                formErrors[field.name] ? 'border-rose-500' : 'border-stone-200'
                              } focus:ring-2 focus:ring-amber-500 focus:border-transparent`}
                            />
                          )}

                          {formErrors[field.name] && (
                            <div className="flex items-center gap-2 mt-2 text-rose-600 text-sm">
                              <AlertCircle className="w-4 h-4" />
                              <span>{formErrors[field.name]}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-amber-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
                  >
                    {admissionForm.submitText}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default AdmissionsPage;