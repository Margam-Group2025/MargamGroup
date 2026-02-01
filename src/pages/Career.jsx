import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, TrendingUp, Award, ArrowRight, CheckCircle, Send, FileText } from 'lucide-react';

const CareerPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobRole: '',
    resume: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const jobOpenings = [
    {
      id: 1,
      title: 'Accountant / Accountancy',
      icon: Briefcase,
      description: 'Join our finance team and manage financial operations for a growing organization.',
      responsibilities: [
        'Prepare and maintain financial records',
        'Manage accounts payable and receivable',
        'Conduct financial analysis and reporting',
        'Ensure compliance with accounting standards'
      ],
      skills: ['Financial Accounting', 'GST/Tax Knowledge', 'Excel Proficiency', 'Tally/QuickBooks'],
      experience: '2-5 years'
    },
    {
      id: 2,
      title: 'BDO (Business Development Officer)',
      icon: TrendingUp,
      description: 'Drive business growth and expand our market presence across new territories.',
      responsibilities: [
        'Identify and develop new business opportunities',
        'Build and maintain client relationships',
        'Prepare business proposals and presentations',
        'Achieve sales targets and KPIs'
      ],
      skills: ['Sales Strategy', 'Client Management', 'Negotiation', 'Market Analysis'],
      experience: '3-7 years'
    },
    {
      id: 3,
      title: 'CRM Executive',
      icon: Users,
      description: 'Manage customer relationships and optimize our CRM systems for better engagement.',
      responsibilities: [
        'Manage CRM database and customer information',
        'Execute customer retention campaigns',
        'Analyze customer data and generate insights',
        'Coordinate with sales and support teams'
      ],
      skills: ['CRM Software', 'Data Analysis', 'Customer Service', 'Communication'],
      experience: '1-3 years'
    },
    {
      id: 4,
      title: 'Sales Executive',
      icon: Award,
      description: 'Drive revenue growth by building strong client relationships and closing deals.',
      responsibilities: [
        'Generate leads and convert prospects to clients',
        'Maintain and expand existing client base',
        'Prepare sales reports and forecasts',
        'Participate in sales meetings and training'
      ],
      skills: ['Sales Techniques', 'Negotiation', 'Product Knowledge', 'CRM Tools'],
      experience: '2-5 years'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // const handleJobRoleChange = (value) => {
  //   setFormData(prev => ({ ...prev, jobRole: value }));
  // };

  const handleResumeChange = (e) => {
    const file = e.target.files?.[0];
    setFormData(prev => ({ ...prev, resume: file || null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', jobRole: '', resume: null });
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const whyChooseUs = [
    {
      title: 'Professional Growth',
      description: 'Advance your career with continuous learning opportunities and skill development programs.'
    },
    {
      title: 'Supportive Work Culture',
      description: 'Work in a collaborative environment where your ideas are valued and contributions recognized.'
    },
    {
      title: 'Learning & Development',
      description: 'Access training programs, certifications, and mentorship from industry experts.'
    },
    {
      title: 'Long-term Career Stability',
      description: 'Build a sustainable career with a growing organization committed to employee success.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="w-full max-w-[120rem] mx-auto px-4 py-20 md:py-40 bg-slate-100 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="font-heading text-4xl md:text-5xl font-serif text-blue-800 mb-6">
            Build Your Career with Margam Group
          </h1>
          <p className="font-serif text-xl md:text-2xl text-slate-800 max-w-3xl mx-auto mb-10">
            Join a dynamic organization where your professional growth is our priority. Explore exciting opportunities across finance, sales, business development, and customer relationship management.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >

            <button
              size="lg"
              className="bg-blue-800 hover:bg-blue-600 text-white px-6 py-4 text-lg rounded-lg"
              onClick={() => document.getElementById('job-openings')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Job Openings 
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full bg-white py-20 md:py-32">
        <div className="max-w-[100rem] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-serif text-primary mb-4">
              Why Work with <span className='text-blue-700'>Margam Group</span>
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-slate-50 p-8 rounded-lg border-l-4 border-green-500 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="font-paragraph text-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Current Job Openings Section */}
      <section id="job-openings" className="w-full py-10 md:py-32 bg-background">
        <div className="max-w-[100rem] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-serif text-blue-800 mb-4">
              Current Job Openings
            </h2>
            <p className="font-serif text-lg text-foreground max-w-2xl mx-auto">
              Explore exciting career opportunities across our organization
            </p>
            <div className="w-20 h-1 bg-secondary mx-auto mt-6"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {jobOpenings.map((job) => {
              const IconComponent = job.icon;
              return (
                <motion.div
                  key={job.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="bg-gradient-to-br from-blue-100 to-green-50 p-6 flex items-center justify-between">
                    <div>
                      <h3 className="font-heading text-2xl font-semibold text-blue-600">
                        {job.title}
                      </h3>
                      <p className="font-paragraph text-sm text-foreground mt-1">
                        Experience: {job.experience}
                      </p> 
                    </div>
                    <IconComponent className="w-12 h-12 text-secondary flex-shrink-0" />
                  </div>
                  <div className="p-6">
                    <p className="font-paragraph text-foreground mb-4">
                      {job.description}
                    </p>
                    
                    <div className="mb-4">
                      <p className="font-paragraph text-sm font-semibold text-secondary mb-2">Key Responsibilities:</p>
                      <ul className="space-y-1">
                        {job.responsibilities.slice(0, 2).map((resp, idx) => (
                          <li key={idx} className="font-paragraph text-sm text-foreground flex items-start gap-2">
                            <span className="text-secondary mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="font-paragraph text-sm font-semibold text-secondary mb-2">Required Skills:</p>
                      <div className="flex flex-wrap gap-2 ">
                        {job.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-50 text-black text-xs px-3 py-1 rounded-full font-paragraph"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

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


      {/* Call to Action Section */}
      <section className="w-full bg-gradient-to-r from-blue-300 to-green-700 py-16 md:py-24">
        <div className="max-w-[100rem] mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl md:text-5xl font-serif text-primary-foreground mb-6">
              Join Margam Group and Grow Your Career with Us
            </h2>
            <p className="font-paragraph text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              We're looking for talented professionals who are passionate about excellence and ready to make an impact. Apply today and become part of our success story.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
              size="lg"
              className="bg-blue-800 hover:bg-blue-600 text-white px-6 py-4 text-lg rounded-lg"
              onClick={() => document.getElementById('job-openings')?.scrollIntoView({ behavior: 'smooth' })}
            >
                Start Your Application
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
