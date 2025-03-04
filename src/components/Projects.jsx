import React from "react";
import { motion } from "framer-motion";
import Digilux from "../assets/img/Digilux.png";
import DutchFix from "../assets/img/DutchFix.png";
import CMS from "../assets/img/CMS.png";

const Projects = () => {
  return (
    <motion.section
      id="portfolio"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6 py-16"
    >
      <h2 className="text-5xl font-bold text-white relative inline-block pb-2">
        Portfolio
        <span className="absolute left-1/2 bottom-0 h-1 w-16 bg-gradient-to-r from-orange-500 to-yellow-500 transform -translate-x-1/2 rounded-full"></span>
      </h2>
      <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
        Here are some of my recent projects.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full max-w-6xl">
        {[
          {
            title: "Project 1",
            img: Digilux,
            description:
              "Developed and managed a multivendor e-commerce web application that allows multiple sellers to list and sell their products on a multiple platform or web shops like Amazon, Back market, Shopify, Google, WooCommerce, Bol.com Retailer, Beslist.nl, Mirakl.",
          },
          {
            title: "Project 2",
            img: DutchFix,
            description:
              "Developed and enhanced an e-commerce platform to meet client-specific requirements. Integrated additional functionalities, improved performance, and optimized user experience using Laravel as backend, MySQL for database storage and Vue JS for frontend.",
          },
          {
            title: "Project 3",
            img: CMS,
            description:
              "Developed a CMS blog management software to manage multiple websites in which there are pages, posts, blocks, etc. Using Laravel as backend, Bootstrap as frontend and MySQL for database storage.",
          },
        ].map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:transition-transform border-2 border-transparent hover:border-orange-500"
          >
            <h3 className="text-2xl font-semibold text-orange-400 mt-4">
              {project.title}
            </h3>
            <img
              src={project.img}
              alt={project.title}
              className="w-full rounded-lg shadow-md mt-4"
            />
            <p className="text-gray-300 mt-4 text-sm leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
