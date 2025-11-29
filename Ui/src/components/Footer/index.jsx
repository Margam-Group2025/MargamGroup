import { useState } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-blue-900 text-gray-200 py-14">
      <div className="w-full px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

        {/* Company Info */}
        <div>
          <button
            onClick={() => toggle("company")}
            className="w-full flex justify-between items-center lg:block lg:cursor-auto lg:mb-4"
          >
            <h2 className="text-xl font-semibold">Our Company</h2>

          </button>

          <div
            className={"mt-4 text-sm leading-6 "}
          >
            A diversified business group excelling in real estate, construction,
            interiors, education, textiles and e-commerce.
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <button
            onClick={() => toggle("links")}
            className="w-full flex justify-between items-center lg:block lg:cursor-auto lg:mb-4"
          >
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <ChevronDown
              className={`lg:hidden transition-transform ${
                openSection === "links" ? "rotate-180" : ""
              }`}
            />
          </button>

          <ul
            className={`space-y-3 text-sm mt-4 
              ${openSection === "links" ? "block" : "hidden lg:block"}
              lg:w-fit lg:mx-auto`}
          >
            <li><Link to="/aboutus" className="hover:text-white">About Us</Link></li>
            <li><Link to="/business" className="hover:text-white">Our Business</Link></li>
            <li><Link to="/contact" className="hover:text-white">Connect Us</Link></li>
            <li><Link to="/career" className="hover:text-white">Careers</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <button
            onClick={() => toggle("services")}
            className="w-full flex justify-between items-center lg:block lg:cursor-auto lg:mb-4"
          >
            <h2 className="text-xl font-semibold">Our Services</h2>
            <ChevronDown
              className={`lg:hidden transition-transform ${
                openSection === "services" ? "rotate-180" : ""
              }`}
            />
          </button>

          <ul
            className={`space-y-3 text-sm mt-4
              ${openSection === "services" ? "block" : "hidden lg:block"}
              lg:w-fit lg:mx-auto`}
          >
            <li><a href="https://nirmalyasaiannex.com/" className="hover:text-white">Real Estate</a></li>
            <li><a href="https://bricknbar.com/" className="hover:text-white">Construction Materials</a></li>
            <li><Link to="/agriculture" className="hover:text-white">Agriculture</Link></li>
            <li><Link to="/education" className="hover:text-white">Education</Link></li>
            <li><a href="https://margamnirman.com/" className="hover:text-white">Construction</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <button
            onClick={() => toggle("contact")}
            className="w-full flex justify-between items-center lg:block lg:cursor-auto lg:mb-4"
          >
            <h2 className="text-xl font-semibold">Contact</h2>
            <ChevronDown
              className={`lg:hidden transition-transform ${
                openSection === "contact" ? "rotate-180" : ""
              }`}
            />
          </button>

          <ul
            className={`space-y-3 text-sm mt-4
              ${openSection === "contact" ? "block" : "hidden lg:block"}
              lg:w-fit lg:mx-auto`}
          >
            <li className="flex items-center gap-2">
              <MapPin size={18} /> Bhubaneswar, India
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> +91 7749950999
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> margamgroup2025@gmail.com
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <button
            onClick={() => toggle("social")}
            className="w-full flex justify-between items-center lg:block lg:cursor-auto lg:mb-4"
          >
            <h2 className="text-xl font-semibold">Follow Us</h2>
            <ChevronDown
              className={`lg:hidden transition-transform ${
                openSection === "social" ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`flex gap-4 mt-4 
              ${openSection === "social" ? "flex" : "hidden lg:flex"}
              lg:justify-center`}
          >
            <a className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
              <Facebook size={20} />
            </a>
            <a className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
              <Twitter size={20} />
            </a>
            <a className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/margamgroup/"
              className="p-2 bg-gray-700 rounded-full hover:bg-gray-600"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">Margam Group</span>. All Rights Reserved.
      </div>
    </footer>
  );
}
