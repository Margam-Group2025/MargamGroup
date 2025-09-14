import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';   
const AboutOwner = () => {
    useEffect(() => {
           AOS.init({
             duration: 800,
             delay: 200,
             once: false,
           });
         }, []);

  return (
    <div className="bg-white py-12 px-4 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="w-full md:w-1/2" data-aos="fade-right">
          <div className="border-l-4 border-indigo-600 pl-4 mb-4">
            <h2 className="text-indigo-600 text-sm uppercase tracking-widest font-semibold">
              About the Founder
            </h2>
          </div>

          <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Brahmanand Nahak
          </h3>
          <h4 className="text-lg text-gray-700 font-semibold mb-4">
            Founder & Director, Margam Group
          </h4>

          <p className="text-gray-600 text-base leading-relaxed mb-3">
            Brahmanand Nahak is an entrepreneur with a vision to create businesses that combine growth with long-term value. As the Founder and Director of Margam Group, he has been instrumental in shaping the company into a diversified enterprise.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            The Margam Group spans multiple sectors, including real estate, construction materials, education, digital business solutions, and upcoming ventures in manufacturing—each reflecting his commitment to innovation and sustainable development.
          </p>
        </div>
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2"  data-aos="fade-left">
          <img 
            src="/owner .jpg" 
            alt="Company Owner" 
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutOwner;
