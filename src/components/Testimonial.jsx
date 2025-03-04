import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-lg mx-auto mt-10"
      whileHover={{ scale: 1.05 }}
    >
      <p className="text-lg text-gray-300">
        "Amazing developer! Highly recommended."
      </p>
      <p className="text-sm text-orange-500 mt-2">- Happy Client</p>
    </motion.div>
  );
}
