import React, { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuLinks = [
    { name: "Home", to: "home", type: "scroll" },
    { name: "About", to: "about", type: "scroll" },
    { name: "Business", to: "business", type: "scroll" },
    { name: "Connect", to: "connect", type: "scroll" },
    { name: "Blog", to: "/blog", type: "route" },
  ];

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  return (
    <header className="bg-white py-4 lg:px-[80px] px-7 fixed top-0 left-0 w-full z-50 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center transition-all duration-300">
          <img
            src="/logo.png"
            alt="Logo"
            className={`object-contain transition-all duration-300
              ${menuOpen ? "h-10 w-10" : "h-12 w-auto"}
              md:h-12`}
          />
        </div>

        {/* Mobile toggle */}
        <button
          className="text-black text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoCloseSharp /> : <IoMdMenu />}
        </button>

        {/* Desktop menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-10 text-lg text-black">
            {menuLinks.map((link) => (
              <li key={link.name}>
                {link.type === "scroll" ? (
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className={`cursor-pointer font-medium ${
                      link.name === "Home"
                        ? "text-blue-700"
                        : "hover:text-blue-700 transition-colors"
                    }`}
                  >
                    {link.name}
                  </ScrollLink>
                ) : (
                  <RouterLink
                    to={link.to}
                    className="cursor-pointer font-medium hover:text-blue-700 transition-colors"
                  >
                    {link.name}
                  </RouterLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-black transform
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-300 ease-in-out z-40 flex flex-col shadow-lg`}
      >
        <IoCloseSharp
          className="absolute top-4 right-4 text-3xl cursor-pointer"
          onClick={() => setMenuOpen(false)}
        />
        <ul className="mt-16 flex flex-col space-y-6 text-xl px-6">
          {menuLinks.map((link) => (
            <li key={link.name}>
              {link.type === "scroll" ? (
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className={`block cursor-pointer font-medium ${
                    link.name === "Home"
                      ? "text-blue-700"
                      : "hover:text-blue-700 transition-colors"
                  }`}
                >
                  {link.name}
                </ScrollLink>
              ) : (
                <RouterLink
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="block cursor-pointer font-medium hover:text-blue-700 transition-colors"
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
