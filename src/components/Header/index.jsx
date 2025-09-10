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
    { name: "Team", to: "team", type: "scroll" },
    { name: "Connect", to: "connect", type: "scroll" },
    { name: "Blog", to: "/blog", type: "route" }, // separate page
  ];

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  return (
    <header className="bg-black py-4 lg:px-[80px] px-7 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center">
        {/* logo */}
        <div className="text-themegreen font-bold lg:text-4xl text-3xl uppercase">
          my logo
        </div>

        {/* mobile toggle */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoCloseSharp /> : <IoMdMenu />}
        </button>

        {/* desktop menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-10 text-lg text-white">
            {menuLinks.map((link) => (
              <li key={link.name}>
                {link.type === "scroll" ? (
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80} // adjust for header height
                    className={`cursor-pointer ${
                      link.name === "Home"
                        ? "text-themegreen"
                        : "hover:text-themegreen transition-colors"
                    }`}
                  >
                    {link.name}
                  </ScrollLink>
                ) : (
                  <RouterLink
                    to={link.to}
                    className="cursor-pointer hover:text-themegreen transition-colors"
                  >
                    {link.name}
                  </RouterLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* mobile menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black text-white transform
        ${menuOpen ? "translate-x-0" : "translate-x-full"}
        transition-transform duration-300 ease-in-out z-40 flex items-center justify-center`}
      >
        <IoCloseSharp
          className="fixed top-3 right-6 text-3xl cursor-pointer"
          onClick={() => setMenuOpen(false)}
        />
        <ul className="flex flex-col space-y-6 text-2xl text-center">
          {menuLinks.map((link) => (
            <li key={link.name}>
              {link.type === "scroll" ? (
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className={`cursor-pointer ${
                    link.name === "Home"
                      ? "text-themegreen"
                      : "hover:text-themegreen transition-colors"
                  }`}
                >
                  {link.name}
                </ScrollLink>
              ) : (
                <RouterLink
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="cursor-pointer hover:text-themegreen transition-colors"
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
