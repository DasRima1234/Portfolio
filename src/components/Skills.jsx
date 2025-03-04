import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="w-full min-h-screen flex flex-col justify-center items-center text-center"
    >
      <h2 className="text-5xl font-bold">Skills</h2>
      <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
        Here are some of the technologies and tools I specialize in:
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 text-xl">
        <motion.span
          whileHover={{ scale: 1.2, rotateY: 180 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-gray-800 p-4 rounded-lg hover:bg-purple-400 transition-colors"
        >
          HTML
        </motion.span>
        <motion.span
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-gray-800 p-4 rounded-lg hover:bg-blue-400 transition-colors"
        >
          CSS
        </motion.span>
        <motion.span
          whileHover={{ scale: 1.2, rotateZ: 180 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-gray-800 p-4 rounded-lg hover:bg-orange-500 transition-colors"
        >
          JavaScript
        </motion.span>
        <motion.span
          whileHover={{ scale: 1.2, backgroundColor: "#f59e0b", color: "#000" }}
          className="bg-gray-800 p-4 rounded-lg"
        >
          PHP Laravel
        </motion.span>
        <motion.span
          whileHover={{ scale: 1.2, backgroundColor: "#14b8a6", color: "#000" }}
          className="bg-gray-800 p-4 rounded-lg"
        >
          React
        </motion.span>
        <motion.span
          whileHover={{ scale: 1.2, backgroundColor: "#f43f5e", color: "#000" }}
          className="bg-gray-800 p-4 rounded-lg"
        >
          Tailwind CSS
        </motion.span>
        <motion.span
          whileHover={{ scale: 1.2, backgroundColor: "#b45309", color: "#000" }}
          className="bg-gray-800 p-4 rounded-lg"
        >
          Node.js
        </motion.span>
        <motion.span
          whileHover={{ scale: 1.2, backgroundColor: "#8a2be2", color: "#000" }}
          className="bg-gray-800 p-4 rounded-lg"
        >
          Express.js
        </motion.span>
        <motion.span
          whileHover={{ scale: 1.2, backgroundColor: "#ffd700", color: "#000" }}
          className="bg-gray-800 p-4 rounded-lg"
        >
          MongoDB
        </motion.span>
      </div>
    </motion.section>
  );
};

export default Skills;
