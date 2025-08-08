"use client";

import { useState, useEffect } from "react";
import { Pause, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function HeroSlide() {
  const [isPaused, setIsPaused] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const video = document.getElementById("heroVideo") as HTMLVideoElement;
    if (isPaused) {
      video.pause();
    } else {
      video.play();
    }
  }, [isPaused]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        id="heroVideo"
        src="/fynx-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-10 max-w-3xl">
        <motion.p
          className="text-lg tracking-wide uppercase mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Introducing
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-bold uppercase leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          FYNX <br /> <span className="text-yellow-400">Financial AI</span>
        </motion.h1>

        <motion.button
          className="mt-8 px-8 py-4 bg-white text-black font-semibold uppercase tracking-wider hover:bg-gray-300 transition"
          whileHover={{ scale: 1.05 }} onClick={()=> router.push('/login')}
        >
          Discover Platform →
        </motion.button>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-10">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-white"></span>
          <span className="w-3 h-3 rounded-full bg-gray-400"></span>
          <span className="w-3 h-3 rounded-full bg-gray-400"></span>
        </div>
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="ml-4 p-2 bg-black/50 rounded-full"
        >
          {isPaused ? (
            <Play className="w-5 h-5 text-white" />
          ) : (
            <Pause className="w-5 h-5 text-white" />
          )}
        </button>
      </div>
    </section>
  );
}
