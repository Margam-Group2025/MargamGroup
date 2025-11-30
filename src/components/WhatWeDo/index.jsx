import React from "react";
import { Link } from "react-router-dom";

const WhatWeDo = () => {
  return (
    <section className="w-full py-16 bg-white">
      <h2 className="text-4xl font-bold text-center tracking-widest mb-12">
        WHAT WE DO
      </h2>

      <div className="max-w-6xl mx-auto space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Big Real Estate Card */}
          <div className="bg-blue-800 text-white flex flex-col justify-center items-center p-14 h-80">
            <h3 className="text-3xl font-semibold mb-4">REALESTATE</h3>
            <Link to="/realestate">
            <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-800 transition">
              Read More
            </button>
            </Link>
          </div>

          {/* Real Estate Image */}
          <img
            src="/public/realestate.jpg"
            alt="Real Estate"
            className="w-full h-80 object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* EDUCATION */}
          <div className="grid grid-cols-2 gap-0 h-64">
            <div className="bg-blue-800 text-white flex flex-col justify-center items-center p-6">
              <h3 className="text-xl font-semibold mb-4">EDUCATION</h3>
              <Link to="/education">
              <button className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-blue-800 transition">
                Read More
              </button>
              </Link>
            </div>

            <img
              src="/public/education.avif"
              alt="Education"
              className="w-full h-full object-cover"
            />
          </div>

          {/* AGRICULTURE */}
          <div className="grid grid-cols-2 gap-0 h-64">
            <div className="bg-blue-800 text-white flex flex-col justify-center items-center p-6">
              <h3 className="text-xl font-semibold mb-4">AGRICULTURE</h3>
              <Link to="/agriculture">
              <button className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-blue-800 transition">
                Read More
              </button>
              </Link>
            </div>

            <img
              src="/public/agro.avif"
              alt="Agriculture"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;
