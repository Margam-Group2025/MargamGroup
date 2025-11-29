import React from 'react';

const Education = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 1. Hero Section */}
      <section
        className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-32 px-4 md:px-8 lg:px-16 overflow-hidden"
        style={{ backgroundImage: "url('/public/education.avif')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto text-center z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in-down">
            Empowering Minds for a Brighter Future
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto animate-fade-in-up">
            At Margam Group, we are dedicated to transforming lives through accessible and quality education, fostering innovation and leadership.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-10 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300 animate-bounce-in">
            Explore Our Programs
          </button>
        </div>
      </section>

      {/* 2. About Education Mission */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Our Education Mission</h2>
          <p className="text-gray-700 text-lg text-center max-w-4xl mx-auto mb-16">
            Our mission is to cultivate an environment where learning thrives, providing robust educational frameworks and fostering a culture of continuous intellectual growth and societal contribution.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="text-5xl text-blue-600 mb-6">📚</div> {/* Icon placeholder */}
              <h3 className="text-2xl font-semibold text-blue-800 mb-3">Accessible Learning</h3>
              <p className="text-gray-600">
                Breaking down barriers to education, making quality learning opportunities available to all.
              </p>
            </div>
            <div className="text-center p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="text-5xl text-blue-600 mb-6">💡</div> {/* Icon placeholder */}
              <h3 className="text-2xl font-semibold text-blue-800 mb-3">Innovation & Research</h3>
              <p className="text-gray-600">
                Fostering a spirit of inquiry and supporting groundbreaking research for future advancements.
              </p>
            </div>
            <div className="text-center p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="text-5xl text-blue-600 mb-6">🌱</div> {/* Icon placeholder */}
              <h3 className="text-2xl font-semibold text-blue-800 mb-3">Holistic Development</h3>
              <p className="text-gray-600">
                Nurturing well-rounded individuals with critical thinking, creativity, and ethical values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Programs / Courses Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-blue-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Our Programs & Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Program Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="text-5xl text-blue-600 mb-6">🎓</div>
                <h3 className="text-2xl font-bold text-blue-800 mb-3">Higher Education</h3>
                <p className="text-gray-600 mb-4">
                  Advanced degree programs in various fields, designed for academic excellence and career readiness.
                </p>
                <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">
                  Learn More &rarr;
                </button>
              </div>
            </div>
            {/* Program Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="text-5xl text-blue-600 mb-6">💼</div>
                <h3 className="text-2xl font-bold text-blue-800 mb-3">Professional Certifications</h3>
                <p className="text-gray-600 mb-4">
                  Industry-recognized certifications to enhance skills and boost career prospects.
                </p>
                <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">
                  Learn More &rarr;
                </button>
              </div>
            </div>
            {/* Program Card 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="text-5xl text-blue-600 mb-6">💻</div>
                <h3 className="text-2xl font-bold text-blue-800 mb-3">Online Learning</h3>
                <p className="text-gray-600 mb-4">
                  Flexible and engaging online courses, allowing learning at your own pace from anywhere.
                </p>
                <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">
                  Learn More &rarr;
                </button>
              </div>
            </div>
            {/* Program Card 4 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="text-5xl text-blue-600 mb-6">🔬</div>
                <h3 className="text-2xl font-bold text-blue-800 mb-3">Research Programs</h3>
                <p className="text-gray-600 mb-4">
                  Opportunities for students to engage in cutting-edge research alongside expert faculty.
                </p>
                <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">
                  Learn More &rarr;
                </button>
              </div>
            </div>
            {/* Program Card 5 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="text-5xl text-blue-600 mb-6">🌍</div>
                <h3 className="text-2xl font-bold text-blue-800 mb-3">International Exchange</h3>
                <p className="text-gray-600 mb-4">
                  Global learning experiences through partnerships with leading international institutions.
                </p>
                <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">
                  Learn More &rarr;
                </button>
              </div>
            </div>
            {/* Program Card 6 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="text-5xl text-blue-600 mb-6">🗣️</div>
                <h3 className="text-2xl font-bold text-blue-800 mb-3">Language Courses</h3>
                <p className="text-gray-600 mb-4">
                  Master new languages with our comprehensive courses, from beginner to advanced levels.
                </p>
                <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">
                  Learn More &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Training & Skill Development Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Training & Skill Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="text-center p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-purple-50 to-purple-100">
              <div className="text-4xl text-purple-600 mb-4">📈</div>
              <h3 className="text-xl font-semibold text-purple-800">Leadership Training</h3>
            </div>
            <div className="text-center p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-purple-50 to-purple-100">
              <div className="text-4xl text-purple-600 mb-4">💬</div>
              <h3 className="text-xl font-semibold text-purple-800">Communication Skills</h3>
            </div>
            <div className="text-center p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-purple-50 to-purple-100">
              <div className="text-4xl text-purple-600 mb-4">📊</div>
              <h3 className="text-xl font-semibold text-purple-800">Data Analytics</h3>
            </div>
            <div className="text-center p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-purple-50 to-purple-100">
              <div className="text-4xl text-purple-600 mb-4">🛠️</div>
              <h3 className="text-xl font-semibold text-purple-800">Technical Workshops</h3>
            </div>
          </div>
        </div>
      </section>``

      {/* 7. CSR / Community Education Initiatives Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-blue-100">
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
      </section>

      {/* 8. Testimonials - Slider Placeholder */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-blue-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">What Our Students Say</h2>
          {/* A simple carousel/slider could be implemented here using a library or custom component */}
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-blue-800 p-10 rounded-xl shadow-xl italic text-xl mb-8">
              "Margam Group's education programs have transformed my career path. The faculty support and comprehensive curriculum are truly exceptional."
              <p className="mt-6 font-semibold text-yellow-400">- Priya Sharma, Alumni</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;