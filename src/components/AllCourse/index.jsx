import React from 'react'
import { motion } from 'framer-motion';


const AllCourse = () => {
    const isLoading = false; 

 const defaultCourses = [
    {
      id: '1',
      title: 'Fashion Designing',
      description: 'Master the art of fashion design with industry trends, pattern making, and garment construction techniques.',
      image: 'https://static.wixstatic.com/media/a3674d_303f2817535547608c655aff25353d37~mv2.png?originWidth=448&originHeight=256',
      duration: '4 Years',
      eligibility: '10+2',
      credits: '168',
      program: 'Bachelors'
    },
    {
      id: '2',
      title: 'Interior Designing',
      description: 'Learn to create stunning interior spaces with design principles, spatial planning, and modern aesthetics.',
      image: 'https://static.wixstatic.com/media/a3674d_c94f9926b13a4026a612abe596e8c2b8~mv2.png?originWidth=448&originHeight=256',
      duration: '1 Years',
      eligibility: 'Graduate',
      credits: '40',
      program: 'Masters'
    },
    {
      id: '3',
      title: 'Graphic Designing',
      description: 'Develop expertise in visual communication, branding, and digital design using industry-standard tools.',
      image: 'https://static.wixstatic.com/media/a3674d_f79d8aaa001f4dbf8e847476496167c7~mv2.png?originWidth=448&originHeight=256',
      duration: '1 Years',
      eligibility: '12th',
      credits: '40',
      program: 'Masters'
    },
    {
      id: '4',
      title: 'UI/UX Designing',
      description: 'Create user-centric digital experiences with modern design principles and interactive prototyping.',
      image: 'https://static.wixstatic.com/media/a3674d_b68c83a997ad4af0922219689655fb35~mv2.png?originWidth=448&originHeight=256',
      duration: '1 Years',
      eligibility: '12th',
      credits: '46',
      program: 'Diploma'
    },
    {
      id: '5',
      title: 'Animation Design',
      description: 'Bring stories to life with motion graphics, 3D animation, and visual effects techniques.',
      image: 'https://static.wixstatic.com/media/a3674d_aff97128a73149ffb65911bcc08f9b52~mv2.png?originWidth=448&originHeight=256',
      duration: '4 Years',
      eligibility: '10+2',
      credits: '168',
      program: 'Bachelors'
    },
    {
      id: '6',
      title: 'Photography',
      description: 'Master photography fundamentals, composition, lighting, and post-processing for professional results.',
      image: 'https://static.wixstatic.com/media/a3674d_a303cf66fe264234b1e53c40f6686099~mv2.png?originWidth=448&originHeight=256',
      duration: '1 Years',
      eligibility: 'Graduate',
      credits: '50',
      program: 'Masters'
    }
  ];

  return (
    <section id="courses" className="py-24 px-8 lg:px-20 bg-background">
        <div className="max-w-[120rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-6">Our Creative Courses</h2>
            <p className="font-opensans text-lg text-foreground/80 max-w-3xl mx-auto">
              Comprehensive programs designed to develop your skills in the most sought-after creative disciplines.
            </p>
          </motion.div>

          {isLoading ? (
            <div className="text-center py-12">
              <p className="font-paragraph text-base text-foreground/60">Loading courses...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {defaultCourses.map((course, index) => (
                <motion.div
                  key={course._id || course.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={course.courseImage || course.image || 'https://static.wixstatic.com/media/a3674d_38652210a11f4910a6a82fe17db0ec41~mv2.png?originWidth=448&originHeight=256'}
                      alt={course.courseName || course.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-heading text-2xl text-foreground mb-6">
                      {course.courseName || course.title}
                    </h3>
                    <p className="font-paragraph text-base text-foreground/80 mb-6 line-clamp-3">
                      {course.description}
                    </p>

                    {/* Course Details Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-t border-b border-foreground/10">
                      {/* Duration */}
                      <motion.div
                        whileHover={{ backgroundColor: 'rgba(0, 74, 153, 0.05)' }}
                        className="p-3 rounded-lg transition-colors duration-200"
                      >
                        <p className="font-paragraph text-xs font-semibold text-foreground/60 uppercase tracking-wide mb-1">
                          Duration
                        </p>
                        <p className="font-paragraph text-sm font-medium text-foreground">
                          {course.duration || 'N/A'}
                        </p>
                      </motion.div>

                      {/* Eligibility */}
                      <motion.div
                        whileHover={{ backgroundColor: 'rgba(0, 74, 153, 0.05)' }}
                        className="p-3 rounded-lg transition-colors duration-200"
                      >
                        <p className="font-paragraph text-xs font-semibold text-foreground/60 uppercase tracking-wide mb-1">
                          Eligibility
                        </p>
                        <p className="font-paragraph text-sm font-medium text-foreground">
                          {course.eligibility || 'N/A'}
                        </p>
                      </motion.div>

                      {/* Credits */}
                      <motion.div
                        whileHover={{ backgroundColor: 'rgba(0, 74, 153, 0.05)' }}
                        className="p-3 rounded-lg transition-colors duration-200"
                      >
                        <p className="font-paragraph text-xs font-semibold text-foreground/60 uppercase tracking-wide mb-1">
                          Credits
                        </p>
                        <p className="font-paragraph text-sm font-medium text-foreground">
                          {course.credits || 'N/A'}
                        </p>
                      </motion.div>

                      {/* Program */}
                      <motion.div
                        whileHover={{ backgroundColor: 'rgba(0, 74, 153, 0.05)' }}
                        className="p-3 rounded-lg transition-colors duration-200"
                      >
                        <p className="font-paragraph text-xs font-semibold text-foreground/60 uppercase tracking-wide mb-1">
                          Program
                        </p>
                        <p className="font-paragraph text-sm font-medium text-foreground">
                          {course.program || 'N/A'}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
  )
}

export default AllCourse