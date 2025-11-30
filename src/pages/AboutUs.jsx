import React from 'react';
import ValuesSection from '../components/ValuesSection';
import { Link } from 'react-router-dom';
const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Section 1 - Company Intro */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-800 mb-6">About Our Company</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Margam Group is a diversified business conglomerate with a strong presence in various sectors including Agriculture, Education, and Real Estate. We are committed to fostering growth, innovation, and sustainable practices to create lasting value for our stakeholders and the community.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="/public/about.jpg"
              alt="Company Intro"
              className="rounded-lg shadow-lg w-full md:w-3/4 lg:w-2/3 object-cover h-64 md:h-80"
            />
          </div>
        </div>
      </section>

      {/* Section 2 - Vision & Mission */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Vision Card */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-3xl font-bold text-blue-800 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be a leading global enterprise, recognized for our innovative solutions, ethical practices, and significant contributions to societal development across all our ventures.
            </p>
          </div>
          {/* Mission Card */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-3xl font-bold text-blue-800 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To consistently deliver superior quality products and services, empower communities through education and sustainable agriculture, and build robust real estate solutions that enhance living standards.
            </p>
          </div>
        </div>
      </section>
      {/* Value section */}
      <div>
        <ValuesSection />
      </div>

       <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brick & Bar Card */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transform hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
            <img
              src="/public/realestate.jpg"
              alt="Brick & Bar"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Realestate</h3>
              <p className="text-gray-700 text-sm mb-4">
                Developing modern and sustainable infrastructure, from residential to commercial, shaping urban landscapes with excellence.
              </p>
              <Link to="/realestate">
              <button className="text-blue-800 hover:text-blue-600 font-semibold transition-colors duration-300">
                Read More &rarr;
              </button>
              </Link>
            </div>
          </div>
          {/* Agriculture Card */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transform hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
            <img
              src="/public/agro.avif"
              alt="Agriculture"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Agriculture</h3>
              <p className="text-gray-700 text-sm mb-4">
                Pioneering sustainable farming practices and agro-tech innovations to ensure food security and enhance rural livelihoods.
              </p>
              <Link to="/agriculture">
              <button className="text-blue-800 hover:text-blue-600 font-semibold transition-colors duration-300">
                Read More &rarr;
              </button>
              </Link>
            </div>
          </div>

          {/* Education Card */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transform hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
            <img
              src="/public/education.avif"
              alt="Education"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Education</h3>
              <p className="text-gray-700 text-sm mb-4">
                Providing accessible and quality education, empowering the next generation with knowledge and skills for a brighter future.
              </p>
              <Link to="/education">
              <button className="text-blue-800 hover:text-blue-600 font-semibold transition-colors duration-300">
                Read More &rarr;
              </button>
              </Link>
            </div>
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
