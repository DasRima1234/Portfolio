import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.section 
      id="services" 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 1 }}
      className="w-full min-h-screen flex flex-col justify-center items-center text-center"
    >
      <h2 className="text-5xl font-bold">Services</h2>
      <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
        Here are some of the services I offer.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-xl">
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-orange-500">Web Development</h3>
          <p className="text-gray-400 mt-2">Custom websites built with modern technologies.</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-orange-500">UI/UX Design</h3>
          <p className="text-gray-400 mt-2">Creating engaging and user-friendly designs.</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-orange-500">SEO Optimization</h3>
          <p className="text-gray-400 mt-2">Improving website ranking on search engines.</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
