import React from "react";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <nav className="container mx-auto py-6 flex justify-center items-center px-6">
      <ul className="flex space-x-8 text-lg">
        <button
          onClick={toggleDarkMode}
          className="text-gray-400 hover:text-white"
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
        <li>
          <a href="#about" className="text-white hover:text-orange-500">
            About Me
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="hover:text-orange-500 scroll-smooth"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("skills").scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            Skills
          </a>
        </li>
        <li>
          <a href="#portfolio" className="hover:text-orange-500">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-orange-500">
            Services
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-orange-500">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
