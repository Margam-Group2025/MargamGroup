import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(() => {
         AOS.init({
           duration: 800,
           delay: 200,
           once: false,
         });
       }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50"
     data-aos="fade-down">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold text-gray-800">
          MyLogo{' '}
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="relative group text-green-700 font-medium hover:text-green-700 transition-colors duration-300"
          >
            Home
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/about"
            className="relative group text-gray-700 font-medium hover:text-green-700 transition-colors duration-300"
          >
            About
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
         
         <Link
            to="/business"
            className="relative group text-gray-700 font-medium hover:text-green-700 transition-colors duration-300"
          >
            Business
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/our-team"
            className="relative group text-gray-700 font-medium hover:text-green-700 transition-colors duration-300"
          >
            Our Team
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/connect"
            className="relative group text-gray-700 font-medium hover:text-green-700 transition-colors duration-300"
          >
            Connect Us
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

            <Link
            to="/blog"
            className="relative group text-gray-700 font-medium hover:text-green-700 transition-colors duration-300"
          >
            Blog
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
        >
          {menuOpen ? <IoMdClose/>  : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <Link to="/" className="block text-gray-700 font-medium hover:text-green-800 transition-colors duration-300">Home</Link>
          <Link to="/about" className="block text-gray-700 font-medium hover:text-green-800 transition-colors duration-300">About</Link>
          <Link to="/business" className="block text-gray-700 font-medium hover:text-green-800 transition-colors duration-300">Business</Link>   
          <Link to="/our-team" className="block text-gray-700 font-medium hover:text-green-800 transition-colors duration-300">Our Team</Link>
          <Link to="/contact" className="block text-gray-700 font-medium hover:text-green-800 transition-colors duration-300">Connect Us</Link>
          <Link to="/blog" className="block text-gray-700 font-medium hover:text-green-800 transition-colors duration-300">Blog</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
