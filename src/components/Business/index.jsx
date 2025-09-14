import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection = () => {
    useEffect(() => {
       AOS.init({
         duration: 800,
         delay: 200,
         once: false,
       });
     }, []);

  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  return (

    <div className="w-full px-6 py-12">
     <div className="w-full mb-10" data-aos="fade-up">
      <h1 className="text-center text-3xl font-bold text-green-600 py-4 rounded-lg ">
        Our Business
      </h1>
       <span className="flex mt-2 text-gray-600 text-sm font-semibold items-center justify-center ">
         We are a dynamic business group, driven by innovation and integrity, delivering sustainable solutions that inspire growth and create lasting value.
        </span>
      </div>
      {/* Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-8"  data-aos="fade-up">
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
          onClick={() => setActiveCategory("Home & Interiors")}
          className={`px-4 py-2 rounded-full border ${
            activeCategory === "Home & Interiors"
              ? "bg-green-600 text-white"
              : "bg-white text-gray-700 border-gray-300 hover:bg-green-100"
          }`}
        >
         Home & Interiors
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
            src="https://nirmalyasaiannex.com/wp-content/uploads/elementor/thumbs/Night-1-scaled-q9xj3gk0pv1o1gx4t2r4snertghfmgkcifbohk6tnk.jpg"
            alt="Real Estate"
            className="w-[70%] lg:w-1/2 rounded-xl shadow-md"
             data-aos="zoom-in"
          />
          <div className="w-full lg:w-1/2 space-y-4" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-gray-800">Building Dreams, Creating Value</h2>
            <p className="text-gray-600">
             Our real estate division is dedicated to crafting modern, sustainable, and community-focused developments that redefine living and working spaces. 
             We combine visionary planning with world-class design to deliver properties that balance functionality, aesthetics, and long-term value.
            </p>
            <p className="text-gray-600">
              From residential communities to commercial landmarks, our projects are built on trust, transparency, and innovation.
               We strive to provide not just buildings, but environments where people can thrive, invest confidently, and create meaningful lifestyles.
            </p>
            <a
              href="https://nirmalyasaiannex.com/"
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
            src="https://www.ibef.org/assets/images/Education-Training-Industry-2.jpg"
            alt="education"
            className="w-full lg:w-1/2 rounded-xl shadow-md"
            data-aos="zoom-in"
          />
          <div className="w-full lg:w-1/2 space-y-4" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-gray-800">Empowering Minds, Shaping Futures</h2>
            <p className="text-gray-600">
             We believe education is the foundation of progress. Our education initiatives focus on quality learning, innovative methods,
              and empowering students with the skills they need to thrive in a modern world.
            </p>
            <p className="text-gray-600">
             By fostering creativity, critical thinking, and lifelong learning, we aim to nurture future leaders who contribute positively to society and drive sustainable growth.
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
            src="https://www.consultancy.in/illustrations/news/spotlight/2024-08-01-092354123-E-commerce_is_redefining_India_s_fast_growing_fashion_market_spot.jpg"
            alt="Real Estate"
            className="w-full lg:w-1/2 rounded-xl shadow-md"
            data-aos="zoom-in"
          />
          <div className="w-full lg:w-1/2 space-y-4" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-gray-800">Weaving Excellence into Every Thread</h2>
            <p className="text-gray-600">
              Our textile division combines tradition and technology to produce fabrics of exceptional quality. 
              With attention to detail, we create products that meet global standards of style, durability, and comfort.
            </p>
            <p className="text-gray-600">
              From fashion to functional textiles, our range caters to diverse markets. We remain committed to innovation, sustainability,
               and delivering products that enrich lifestyles worldwide.
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

       {activeCategory === "Home & Interiors" && (
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
          <img
            src="https://theunitedindian.com/images/e-commerce-industry-to-shrink-by-6-5-in-2022-5096.jpg"
            alt="Real Estate"
            className="w-full lg:w-1/2 rounded-xl shadow-md"
            data-aos="zoom-in"
          />
          <div className="w-full lg:w-1/2 space-y-4" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-gray-800">Designing Inspired Living</h2>
            <p className="text-gray-600">
              Our interior solutions transform houses into homes and workplaces into inspiring environments. We focus on creativity, functionality, and personalization to craft spaces that reflect individual lifestyles and identities.
            </p>
            <p className="text-gray-600">
              Blending modern design trends with timeless elegance, our interiors elevate comfort and beauty. We deliver spaces that inspire harmony, productivity, 
              and long-lasting satisfaction for families and businesses alike.
            </p>
            <a
              href="https://www.bricknbar.com/"
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
            src="https://www.giatecscientific.com/wp-content/uploads/2019/04/IMG_4021.jpg"
            alt="contruction"
            className="w-full lg:w-1/2 rounded-xl shadow-md"
            data-aos="zoom-in"
          />
          <div className="w-full lg:w-1/2 space-y-4" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-gray-800">Building with Strength and Vision</h2>
           
            <p className="text-gray-600">
              Our construction division stands for reliability, precision, and innovation.
               We take pride in delivering projects that combine structural strength, aesthetic appeal, and long-term sustainability, ensuring each build exceeds expectations.
            </p>
            <p className="text-gray-600">
              With a focus on quality materials and modern techniques, we bring complex ideas to life. Every project reflects our commitment to safety, efficiency, and creating enduring spaces that shape communities.
              Home & Interiors – Designing Inspired Living
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
                src="https://nirmalyasaiannex.com/wp-content/uploads/2023/07/Gate-view-scaled.jpg"
                alt="Real Estate"
                className="w-full h-40 object-cover rounded-lg mb-4"
                data-aos="zoom-in"
              />
              <h3 className="text-lg font-semibold text-gray-800">Real Estate</h3>
              <p className="text-gray-600 text-sm flex-grow" data-aos="fade-left">
                Margam Nirman develops residential and commercial spaces that blend design, sustainability,
                and modern living. With every project, we focus on delivering lasting value, superior quality, and future-ready infrastructure.
              </p>
              <a
                href="https://nirmalyasaiannex.com/"
                className="mt-3 inline-flex items-center gap-2 text-green-600 font-medium hover:underline"
              >
                Explore <ArrowRight size={16} />
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between">
              <img
                src="https://nirmalyasaiannex.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-05-at-11.41.33-768x428.jpeg"
                alt="Construction"
                className="w-full h-40 object-cover rounded-lg mb-4"
                data-aos="zoom-in"
              />
              <h3 className="text-lg font-semibold text-gray-800">Construction Materials</h3>
              <p className="text-gray-600 text-sm flex-grow" data-aos="fade-left">
                BricknBar is Margam Group’s e-commerce venture for construction materials. From blocks, bricks, steel, and cement to finishing materials, we ensure 
                builders and homeowners get reliable supplies at the right price.
              </p>
              <a
                href="https://www.bricknbar.com/"
                className="mt-3 inline-flex items-center gap-2 text-green-600 font-medium hover:underline"
              >
                Explore <ArrowRight size={16} />
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between">
              <img
                src="https://c8.alamy.com/comp/2RKWK2P/construction-materials-and-tools-isolated-on-white-background-3d-illustration-2RKWK2P.jpg"
                alt="E-commerce"
                className="w-full h-40 object-cover rounded-lg mb-4"
                data-aos="zoom-in"
              />
              <h3 className="text-lg font-semibold text-gray-800">Home & Interiors</h3>
              <p className="text-gray-600 text-sm flex-grow" data-aos="fade-left">
                Transforming spaces into personalized, inspiring environments that combine beauty, comfort, and modern
              </p>
              <a
                href="https://www.bricknbar.com/"
                className="mt-3 inline-flex items-center gap-2 text-green-600 font-medium hover:underline"
              >
                Explore <ArrowRight size={16} />
              </a>
            </div>

            {/* Card 4 */}
            {showAll && (
              <div className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between">
                <img
                  src="https://www.thestatesman.com/wp-content/uploads/2021/10/QT-online-education-village.jpg"
                  alt="Education"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                  data-aos="zoom-in"
                />
                <h3 className="text-lg font-semibold text-gray-800">Education</h3>
                <p className="text-gray-600 text-sm flex-grow" data-aos="fade-left">
                 Empowering learners with knowledge, skills, and creativity to build brighter futures and drive meaningful change.
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
                  src="https://blog.expobazaar.com/wp-content/uploads/2022/05/elcarito-lFJJM6hmne4-unsplash-scaled.jpg"
                  alt="textile"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                  data-aos="zoom-in"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  Textile
                </h3>
                <p className="text-gray-600 text-sm flex-grow" data-aos="fade-left">
                  Weaving tradition with innovation to deliver world-class fabrics that embody durability, comfort, and timeless style.
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
