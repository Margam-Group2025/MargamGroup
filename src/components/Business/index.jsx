import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  return (

    <div className="w-full px-6 py-12">
     <div className="w-full mb-10">
      <h1 className="text-center text-3xl font-bold text-green-600 py-4 rounded-lg ">
        Our Business
      </h1>
       <span className="flex mt-2 text-gray-600 text-sm font-semibold items-center justify-center ">
         We are a dynamic business group, driven by innovation and integrity, delivering sustainable solutions that inspire growth and create lasting value.
        </span>
      </div>
      {/* Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        <button
          onClick={() => {
            setActiveCategory("All");
            setShowAll(false);
          }}
          className={`px-4 py-2 rounded-full border ${
            activeCategory === "All"
              ? "bg-green-600 text-white"
              : "bg-white text-gray-700 border-gray-300 hover:bg-green-100"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveCategory("Real Estate")}
          className={`px-4 py-2 rounded-full border ${
            activeCategory === "Real Estate"
              ? "bg-green-600 text-white"
              : "bg-white text-gray-700 border-gray-300 hover:bg-green-100"
          }`}
        >
          Real Estate
        </button>
        <button
          onClick={() => setActiveCategory("Education")}
          className={`px-4 py-2 rounded-full border ${
            activeCategory === "Education"
              ? "bg-green-600 text-white"
              : "bg-white text-gray-700 border-gray-300 hover:bg-green-100"
          }`}
        >
          Education
        </button>
        <button
          onClick={() => setActiveCategory("Textile")}
          className={`px-4 py-2 rounded-full border ${
            activeCategory === "Textile"
              ? "bg-green-600 text-white"
              : "bg-white text-gray-700 border-gray-300 hover:bg-green-100"
          }`}
        >
          Textile
        </button>
        <button
          onClick={() => setActiveCategory("E-Commerce")}
          className={`px-4 py-2 rounded-full border ${
            activeCategory === "E-Commerce"
              ? "bg-green-600 text-white"
              : "bg-white text-gray-700 border-gray-300 hover:bg-green-100"
          }`}
        >
          E-Commerce
        </button>
        <button
          onClick={() => setActiveCategory("Construction")}
          className={`px-4 py-2 rounded-full border ${
            activeCategory === "Construction"
              ? "bg-green-600 text-white"
              : "bg-white text-gray-700 border-gray-300 hover:bg-green-100"
          }`}
        >
          Construction
        </button>
      </div>

      {/* Category Detail (Only when NOT All) */}
      {activeCategory === "Real Estate" && (
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
          <img
            src="/about.jpg"
            alt="Real Estate"
            className="w-full lg:w-1/2 rounded-xl shadow-md"
          />
          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Luxury Villas</h2>
            <p className="text-gray-600">
              Beautifully designed villas with modern architecture and premium
              facilities. A perfect blend of comfort and luxury.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-green-600 font-medium hover:underline"
            >
              Learn More <ArrowRight size={18} />
            </a>
          </div>
        </div>
      )}

      {activeCategory === "Education" && (
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
          <img
            src="/about.jpg"
            alt="Real Estate"
            className="w-full lg:w-1/2 rounded-xl shadow-md"
          />
          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Luxury Villas</h2>
            <p className="text-gray-600">
              Beautifully designed villas with modern architecture and premium
              facilities. A perfect blend of comfort and luxury.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-green-600 font-medium hover:underline"
            >
              Learn More <ArrowRight size={18} />
            </a>
          </div>
        </div>
      )}

      {activeCategory === "Textile" && (
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
          <img
            src="/about.jpg"
            alt="Real Estate"
            className="w-full lg:w-1/2 rounded-xl shadow-md"
          />
          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Luxury Villas</h2>
            <p className="text-gray-600">
              Beautifully designed villas with modern architecture and premium
              facilities. A perfect blend of comfort and luxury.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-green-600 font-medium hover:underline"
            >
              Learn More <ArrowRight size={18} />
            </a>
          </div>
        </div>
      )}

       {activeCategory === "E-Commerce" && (
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
          <img
            src="/about.jpg"
            alt="Real Estate"
            className="w-full lg:w-1/2 rounded-xl shadow-md"
          />
          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Luxury Villas</h2>
            <p className="text-gray-600">
              Beautifully designed villas with modern architecture and premium
              facilities. A perfect blend of comfort and luxury.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-green-600 font-medium hover:underline"
            >
              Learn More <ArrowRight size={18} />
            </a>
          </div>
        </div>
      )}

      {activeCategory === "Construction" && (
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
          <img
            src="/education.jpg"
            alt="Education"
            className="w-full lg:w-1/2 rounded-xl shadow-md"
          />
          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Online Learning</h2>
            <p className="text-gray-600">
              Innovative e-learning platforms designed for modern students.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-green-600 font-medium hover:underline"
            >
              Learn More <ArrowRight size={18} />
            </a>
          </div>
        </div>
      )}

      {/* Cards Section (Only for ALL) */}
      {activeCategory === "All" && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between">
              <img
                src="/realestate.jpg"
                alt="Real Estate"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">Luxury Villas</h3>
              <p className="text-gray-600 text-sm flex-grow">
                Beautiful villas with modern design.
              </p>
              <a
                href="#"
                className="mt-3 inline-flex items-center gap-2 text-green-600 font-medium hover:underline"
              >
                Explore <ArrowRight size={16} />
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between">
              <img
                src="/education.jpg"
                alt="Education"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">Online Learning</h3>
              <p className="text-gray-600 text-sm flex-grow">
                Innovative e-learning solutions.
              </p>
              <a
                href="#"
                className="mt-3 inline-flex items-center gap-2 text-green-600 font-medium hover:underline"
              >
                Explore <ArrowRight size={16} />
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between">
              <img
                src="/textile.jpg"
                alt="Textile"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">Premium Fabrics</h3>
              <p className="text-gray-600 text-sm flex-grow">
                High-quality textiles crafted with care.
              </p>
              <a
                href="#"
                className="mt-3 inline-flex items-center gap-2 text-green-600 font-medium hover:underline"
              >
                Explore <ArrowRight size={16} />
              </a>
            </div>

            {/* Card 4 */}
            {showAll && (
              <div className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between">
                <img
                  src="/ecommerce.jpg"
                  alt="E-Commerce"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">Smart Shopping</h3>
                <p className="text-gray-600 text-sm flex-grow">
                  One-stop platform for daily needs.
                </p>
                <a
                  href="#"
                  className="mt-3 inline-flex items-center gap-2 text-green-600 font-medium hover:underline"
                >
                  Explore <ArrowRight size={16} />
                </a>
              </div>
            )}

            {/* Card 5 */}
            {showAll && (
              <div className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between">
                <img
                  src="/school.jpg"
                  alt="School"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">Modern Schools</h3>
                <p className="text-gray-600 text-sm flex-grow">
                  Schools with creative learning spaces.
                </p>
                <a
                  href="#"
                  className="mt-3 inline-flex items-center gap-2 text-green-600 font-medium hover:underline"
                >
                  Explore <ArrowRight size={16} />
                </a>
              </div>
            )}

            {/* Card 6 */}
            {showAll && (
              <div className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between">
                <img
                  src="/construction.jpg"
                  alt="Construction"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  Construction Projects
                </h3>
                <p className="text-gray-600 text-sm flex-grow">
                  Reliable and sustainable projects.
                </p>
                <a
                  href="#"
                  className="mt-3 inline-flex items-center gap-2 text-green-600 font-medium hover:underline"
                >
                  Explore <ArrowRight size={16} />
                </a>
              </div>
            )}
          </div>

          {/* View More Button */}
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-black transition"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AboutSection;
