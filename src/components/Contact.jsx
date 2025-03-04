import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section 
      id="contact" 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 1 }}
      className="w-full min-h-screen flex flex-col justify-center items-center text-center"
    >
      <h2 className="text-5xl font-bold">Contact Me</h2>
      <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
        Feel free to reach out for collaborations or just a friendly chat.
      </p>
      <form className="mt-8 w-full max-w-lg">
        <input type="text" placeholder="Your Name" className="w-full p-4 mb-4 bg-gray-800 text-white rounded-lg" />
        <input type="email" placeholder="Your Email" className="w-full p-4 mb-4 bg-gray-800 text-white rounded-lg" />
        <textarea placeholder="Your Message" rows="4" className="w-full p-4 mb-4 bg-gray-800 text-white rounded-lg"></textarea>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          className="w-full p-4 bg-orange-500 text-xl font-semibold rounded-lg hover:bg-orange-600 transition"
        >
          Send Message
        </motion.button>
      </form>
    </motion.section>
  );
};

export default Contact;
