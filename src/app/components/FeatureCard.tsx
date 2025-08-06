"use client";

import { motion } from "framer-motion";

export default function FeatureCard({ title }: { title: string }) {
  return (
    <motion.div
      className="bg-gray-900 p-6 rounded-xl shadow-lg"
      whileHover={{ scale: 1.03 }}
    >
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, deleniti.
      </p>
    </motion.div>
  );
}
