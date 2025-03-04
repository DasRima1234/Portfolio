import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaCheckCircle, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import myAvatar from "../assets/img/image.png";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="text-center py-15 relative flex flex-col items-center justify-center">
      <motion.img
        src={myAvatar} 
        alt="Avatar"
        className="w-60 h-60 rounded-full shadow-lg mb-6 border-4 border-gray-700 mb-6 hover:border-orange-500 transition duration-300"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="flex items-center space-x-2">
        <h1 className="text-5xl font-bold">Rima Das</h1>
        {/* <FaCheckCircle className="text-blue-500 text-2xl" /> */}
      </div>
      {/* <h2 className="text-xl text-gray-400 font-medium mt-2">Web Developer | UI/UX Designer</h2> */}
      <h2 className="text-xl text-orange-400 uppercase tracking-wide">
        <Typewriter
          words={["Web Developer.", "UI/UX Designer.", "Freelancer."]}
          loop={Infinity}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
        />{" "}
      </h2>
      {/* Short Description */}
      <p className="text-lg text-gray-400 mt-2 max-w-2xl mx-auto">
        Building modern, responsive, and user-friendly applications for businesses and individuals.
      </p>
      
      {/* Social Media Icons */}
      <div className="flex space-x-4 mt-4">
        <a href="https://www.linkedin.com/in/rima-das-3a1041215/"  target="_blank" className="text-blue-400 hover:text-white transition"><FaLinkedin size={24} /></a>
        <a href="https://github.com/DasRima1234" target="_blank" className="text-white-400 hover:text-white transition"><FaGithub size={24} /></a>
        <a href="https://www.instagram.com/the_blaise_girl?igsh=MzlkNDIwc2ZjeG80" target="_blank" className="text-pink-400 hover:text-white transition"><FaInstagram size={24} /></a>
      </div>
      
      {/* Contact Button */}
      <a
        href="#contact"
        className="mt-6 inline-flex items-center space-x-2 bg-yellow-400 px-6 py-3 text-lg font-semibold rounded-full hover:bg-yellow-500 transition shadow-lg"
      >
        <span>Contact</span>
      </a>
      {/* <h1 className="text-5xl font-bold text-white">Rima Das</h1>

      <h2 className="text-5xl uppercase tracking-wide">
        <Typewriter
          words={["Web Developer.", "UI/UX Designer.", "Freelancer."]}
          loop={Infinity}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
        />{" "}
      </h2>
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-bold text-gray-800 opacity-10 uppercase">
        Developer
      </p>
      <a
        href="#contact"
        className="mt-8 inline-block bg-orange-500 px-8 py-4 text-xl font-semibold rounded-lg hover:bg-orange-600 transition shadow-lg"
      >
        Contact Me
      </a> */}
      {/* <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span className="text-sm">Scroll Down</span>
        <FaArrowDown size={20} className="mt-2 animate-bounce" />
      </motion.div> */}
    </section>
  );
};

export default Hero;
