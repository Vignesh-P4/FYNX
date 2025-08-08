"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../../../components/Navbar";

export default function About() {
  return (
    <main className="min-h-screen bg-neutral-900 text-gray-800 px-6 py-12 md:px-20 flex flex-col items-center">
      {/* Heading */}
      <Navbar />
      <motion.h1 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-10 text-center mt-12 text-white"
        >
  About the Founder
</motion.h1>


      {/* Founder Card */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-gray-100 rounded-2xl shadow-lg p-6 flex flex-col md:flex-row max-w-5xl w-full"
      >
        {/* Image */}
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <Image
            src="/founder.jpeg" // Replace with actual path to your image in /public
            alt="Vignesh Pobbathi"
            width={250}
            height={250}
            className="rounded-xl grayscale"
          />
        </div>

        {/* Content */}
        <div className="mt-6 md:mt-0 md:ml-10 space-y-4">
          <h2 className="text-2xl font-semibold">Vignesh Pobbathi</h2>
          <p className="text-gray-600">
            I’m the founder of FYNX, an AI Financial Assistant designed to simplify personal finance for everyone.
            As a developer, data analyst, and dreamer, I believe the power of AI should be in the hands of everyday people.
          </p>

          <blockquote className="italic text-gray-500 border-l-4 border-gray-300 pl-4">
            “Innovation happens when technology meets purpose.”
          </blockquote>

          <div className="space-y-2">
            <p><strong>Need:</strong> Most people struggle with tracking finances. FYNX empowers users to get real-time clarity and recommendations using AI.</p>
            <p><strong>Advantages:</strong> Easy to use, personalized insights, automated savings & investment suggestions.</p>
            <p><strong>Worth:</strong> With a modern UI and smart backend, FYNX is not just an app—it’s your financial co-pilot.</p>
          </div>

          {/* Social Links */}
          <div className="pt-4">
            <h3 className="text-lg font-medium">Connect with me:</h3>
            <div className="flex gap-4 mt-2">
              <a href="https://www.linkedin.com/in/vigneshpobbathi" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">
                LinkedIn
              </a>
              <a href="https://github.com/vigneshpobbathi" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-800">
                GitHub
              </a>
              <a href="mailto:vignesh@example.com" className="hover:underline text-red-500">
                Email
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
