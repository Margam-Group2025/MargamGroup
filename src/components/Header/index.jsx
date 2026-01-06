import React, { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false); // MOBILE dropdown

  const menuLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/aboutus" },
    {
      name: "Business",
      submenu: [
        { name: "Real Estate", to: "/realestate" },
        { name: "Agriculture", to: "/agriculture" },
        { name: "Education", to: "/education" }
      ]
    },
    { name: "Connect", to: "/contactus" },
    { name: "Career", to: "/career" },
    { name: "Blog", to: "/blog" }
  ];

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  return (
    <header className="bg-blue-800 py-4 lg:px-[80px] px-7 fixed top-0 left-0 w-full z-50 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center transition-all duration-300">
          <img
            src="/logo.avif"
            alt="Logo"
            className={`object-contain transition-all duration-300
              ${menuOpen ? "h-10 w-10" : "h-12 w-auto"}
              md:h-12`}
          />
        </div>

        {/* Mobile toggle */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoCloseSharp /> : <IoMdMenu />}
        </button>

        {/* Desktop menu */}
        <nav className="hidden md:block">
      <ul className="flex space-x-10 text-lg text-white">
       {menuLinks.map((link) => (
        <li key={link.name} className="relative group">

        {/* Normal links */}
        {!link.submenu ? (
          <RouterLink
            to={link.to}
            className="font-medium hover:text-gray-300 transition"
          >
            {link.name}
          </RouterLink>
        ) : (
          <>
            {/* MAIN Business Text */}
            <button className="flex items-center gap-1 font-medium hover:text-gray-300 transition">
              {link.name}
              <ChevronDown
                size={18}
                className="transition group-hover:rotate-180"
              />
            </button>

            {/* SUBMENU */}
            <ul
              className="absolute left-0 top-full mt-2 w-38 bg-blue-800 text-white 
                         shadow-lg rounded-md opacity-0  
                         group-hover:opacity-100 group-hover:visible 
                         transition-all duration-200"
            >
              {link.submenu.map((sub) => (
                <li key={sub.name}>
                  <RouterLink
                    to={sub.to}
                    className="block px-4 py-2 hover:bg-gray-800"
                  >
                    {sub.name}
                  </RouterLink>
                </li>
              ))}
            </ul>
          </>
        )}
      </li>
    ))}
  </ul>
</nav>

      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white text-black transform
        ${menuOpen ? "translate-x-0" : "translate-x-full"}
        transition-transform duration-300 ease-in-out z-50 shadow-xl flex flex-col`}
      >
        {/* LOGO + CLOSE */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="logo" className="h-16 w-24 object-contain" />
          </div>

          <IoCloseSharp
            className="text-3xl cursor-pointer hover:text-red-600 transition"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        {/* MOBILE MENU LINKS */}
        <ul className="mt-6 flex flex-col space-y-6 text-lg px-6">
          {menuLinks.map((link) => (
            <li key={link.name}>
              {/* BUSINESS DROPDOWN FOR MOBILE */}
              {link.submenu ? (
                <>
                  <button
                    onClick={() => setBusinessOpen(!businessOpen)}
                    className="w-full flex justify-between items-center text-left font-medium"
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      className={`transition ${businessOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <ul
                    className={`mt-2 ml-3 border-l pl-4 space-y-3 text-base transition-all 
                    ${businessOpen ? "block" : "hidden"}`}
                  >
                    {link.submenu.map((sub) => (
                      <li key={sub.name}>
                        <RouterLink
                          to={sub.to}
                          onClick={() => setMenuOpen(false)}
                          className="block hover:text-blue-700"
                        >
                          {sub.name}
                        </RouterLink>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <RouterLink
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="font-medium hover:text-blue-700 transition"
                >
                  {link.name}
                </RouterLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
