import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Zap,
  Award,
  Lightbulb,
  CheckCircle
} from "lucide-react";
import AllCourse from '../components/AllCourse';
import {  Send, FileText } from 'lucide-react';



const Education = () => {
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      jobRole: '',
      resume: null
    });
   const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const facilities = [
    {
      icon: Users,
      title: 'Experienced & Industry-Expert Faculty',
      description: 'Learn from seasoned professionals with years of real-world experience in design and creative industries.'
    },
    {
      icon: Zap,
      title: 'Practical, Hands-On Training',
      description: 'Master skills through live projects, case studies, and real-world applications in our studios.'
    },
    {
      icon: Award,
      title: 'Modern Labs & Creative Studios',
      description: 'Access state-of-the-art facilities equipped with latest design software and creative tools.'
    },
    {
      icon: Lightbulb,
      title: 'Career Guidance & Placement Support',
      description: 'Dedicated career counseling and placement assistance to launch your professional journey.'
    },
    {
      icon: CheckCircle,
      title: 'Small Batch Sizes for Personal Attention',
      description: 'Personalized mentoring with limited class sizes ensuring individual growth and feedback.'
    },
    {
      icon: Award,
      title: 'Certification After Course Completion',
      description: 'Industry-recognized certificates that validate your skills and boost your career prospects.'
    }
  ];

 const jobOpenings = [
    { id: 1, title: 'Graphic Designer' },
    { id: 2, title: 'Interior Designing' },
    { id: 3, title: 'Fasion Designing' },
    { id: 4, title: 'Animation Designing' },
    { id: 5, title: 'UI/UX Designer' },
    { id: 6, title: 'Photography' },
  ];
  
  const handleInputChange = (e) =>{
    const {name , value} = e.target;
    setFormData((prev =>({ ...prev, [name]: value })));
  }

  const handleResumeChange = (e) =>{
    const file =e.target.files[0];
    setFormData((prev) => ({ ...prev, resume: file || null}));
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setIsSubmitting (true);
    setSubmitSuccess(false);
  }
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 1. Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://static.wixstatic.com/media/a3674d_7d8922f401024585bf1c361cea7c10f6~mv2.png?originWidth=1920&originHeight=1024"
            alt="Margam Institute - Creative Education"
            width={1920}
            height={600}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-[120rem] mx-auto px-8 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight">
              Margam – Providing Quality Education for Creative Careers
            </h1>
            <p className="font-opensans text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12">
              Skill-based and career-oriented education designed to transform your creative passion into a thriving professional journey.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                size="lg"
                className="bg-blue-700 hover:bg-blue-500 text-white px-8 py-6 text-lg rounded-lg"
                onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Courses
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* 2. About Education Mission */}
       <section className="py-24 px-8 lg:px-20 bg-white">
        <div className="max-w-[120rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-6">Why Choose Margam?</h2>
            <p className="font-sans text-lg text-foreground/80 max-w-3xl mx-auto">
              We provide world-class facilities and expert guidance to nurture your creative talent and launch your career.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="font-sans text-2xl text-foreground mb-3">{facility.title}</h3>
                  <p className="font-opensans text-base text-foreground/80">{facility.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    {/* 3. Courses Section */}
        <div>
          <AllCourse />
        </div>
      {/* 7. CSR / Community Education Initiatives Section */}
      {/* <section className="py-20 px-4 md:px-8 lg:px-16 bg-blue-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-12">Community Initiatives</h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto mb-10">
            Margam Group believes in giving back. Our CSR efforts focus on educational outreach, vocational training, and supporting underprivileged students to ensure a brighter future for all.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-8 rounded-xl shadow-lg bg-white flex flex-col items-center">
              <div className="text-6xl text-green-500 mb-6">🤝</div>
              <h3 className="text-2xl font-bold text-blue-800 mb-3">Partnerships for Progress</h3>
              <p className="text-gray-600">
                Collaborating with NGOs and local governments to expand educational access in remote areas.
              </p>
            </div>
            <div className="p-8 rounded-xl shadow-lg bg-white flex flex-col items-center">
              <div className="text-6xl text-red-500 mb-6">🎁</div>
              <h3 className="text-2xl font-bold text-blue-800 mb-3">Scholarship Programs</h3>
              <p className="text-gray-600">
                Providing financial aid and mentorship to talented students from disadvantaged backgrounds.
              </p>
            </div>
          </div>
        </div>
      </section> */}

        {/* Apply Form Section */}
          <section id="apply-form" className="w-full bg-slate-100 py-20 md:py-32">
           <div className="max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-serif text-primary mb-4">
              Apply Now
            </h2>
            <p className="font-paragraph text-lg text-foreground">
              Submit your application and join the Margam Group team
            </p>
            <div className="w-20 h-1 bg-secondary mx-auto mt-6"></div>
          </motion.div>
      
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white rounded-lg p-8 shadow-lg border border-gray-100"
          >
            <div className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="text-sm font-semibold block mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>
      
              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-semibold block mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary"
                  />
                </div>
      
                <div>
                  <label className="text-sm font-semibold block mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
      
              {/* Job Role - PURE HTML SELECT */}
              <div>
                <label className="text-sm font-semibold block mb-2">
                  Job Role Applying For *
                </label>
                <select
                  name="jobRole"
                  value={formData.jobRole}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg bg-white focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a job role</option>
                  {jobOpenings.map((job) => (
                    <option key={job.id} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                </select>
              </div>
      
              {/* Resume Upload */}
              <div>
                <label className="text-sm font-semibold block mb-2">
                  Upload Resume *
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg file:bg-green-500 file:border-0 file:px-4 file:py-2 file:rounded file:text-sm file:font-semibold"
                />
      
                {formData.resume && (
                  <p className="text-sm text-secondary mt-2 flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    {formData.resume.name}
                  </p>
                )}
              </div>
      
              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold flex justify-center items-center gap-2"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
                {!isSubmitting && <Send className="w-5 h-5" />}
              </motion.button>
      
              {/* Success Message */}
              {submitSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  ✓ Application submitted successfully!
                </div>
              )}
            </div>
          </motion.form>
        </div>
      </section>

      {/* 8. Testimonials - Slider Placeholder */}
      <section className="w-full bg-gradient-to-r from-blue-500 to-green-700 py-20 md:py-32">
        <div className="max-w-[120rem] mx-auto px-8 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground mb-6">
              Ready to Start Your Creative Journey?
            </h2>
            <p className="font-paragraph text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Join Margam Institute and transform your creative passion into a successful career with our industry-leading programs.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                size="lg"
                className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary px-8 py-6 text-lg rounded-lg font-semibold"
              >
                Enroll Now
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Education;