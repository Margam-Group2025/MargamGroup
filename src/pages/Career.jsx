import React from 'react';
import { Link } from 'react-router-dom';

const Career = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-green-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4">Join Our Team</h1>
          <p className="text-xl mb-8">
            Be a part of a dynamic and growing company. Explore exciting career opportunities with us.
          </p>
          <Link to="/contactus" className="bg-white text-green-700 hover:bg-gray-200 px-6 py-3 rounded-full text-lg font-semibold transition duration-300">
            Contact Us
          </Link>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Current Openings</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Job Card 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Software Engineer</h3>
              <p className="text-gray-600 mb-4">
                We are looking for a talented Software Engineer to join our innovative development team.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Experience with React, Node.js</li>
                <li>Strong problem-solving skills</li>
                <li>Bachelor's degree in Computer Science</li>
              </ul>
              <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                Apply Now
              </button>
            </div>

            {/* Job Card 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Marketing Specialist</h3>
              <p className="text-gray-600 mb-4">
                Seeking a creative Marketing Specialist to enhance our brand presence and engage with customers.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Proven experience in digital marketing</li>
                <li>Excellent communication skills</li>
                <li>Ability to work independently</li>
              </ul>
              <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                Apply Now
              </button>
            </div>

            {/* Job Card 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Project Manager</h3>
              <p className="text-gray-600 mb-4">
                A skilled Project Manager to oversee our projects from conception to completion.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>PMP certification a plus</li>
                <li>Strong leadership abilities</li>
                <li>5+ years of project management experience</li>
              </ul>
              <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="bg-green-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Work With Us?</h2>
          <p className="text-lg text-gray-700 mb-8">
            At Margam Group, we foster a collaborative environment where innovation thrives. We believe in empowering our employees and providing opportunities for growth and development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold text-green-700 mb-2">Growth Opportunities</h3>
              <p className="text-gray-600">
                We invest in our employees' professional development and offer clear career paths.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold text-green-700 mb-2">Innovative Culture</h3>
              <p className="text-gray-600">
                Work on cutting-edge projects and contribute to meaningful solutions.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold text-green-700 mb-2">Collaborative Team</h3>
              <p className="text-gray-600">
                Join a supportive team that values teamwork and mutual respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Make an Impact?</h2>
          <p className="text-xl mb-8">
            If you're passionate, driven, and ready for a challenge, we want to hear from you!
          </p>
          <Link to="/contact" className="bg-green-600 text-white hover:bg-green-700 px-8 py-4 rounded-full text-lg font-semibold transition duration-300">
            View All Openings
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Career;
