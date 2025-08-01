// File: app/page.tsx (Dark/Light Theme + Subscribe with Confirmation)

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import {
  Bot,
  LayoutDashboard,
  Sparkles,
  Target
} from 'lucide-react';
import Lottie from 'lottie-react';
import iconAnimation from '../../public/icon-animation.json';
import rocketLaunch from '../../public/rocket-launch.json';
import { useTheme } from 'next-themes';
import { toast, Toaster } from 'react-hot-toast';

export default function Home() {
  const [email, setEmail] = useState('');
  const { theme, setTheme } = useTheme();

  // Handle email subscribe
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (res.ok) {
        toast.success('✅ You have been subscribed successfully!');
        setEmail('');
      } else {
        toast.error('⚠️ Subscription failed. Please try again.');
      }
    } catch (error) {
      toast.error('❌ Network error. Please try again later.');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f1116] via-[#1b1f27] to-[#0f1116] text-white flex flex-col items-center justify-center px-6 transition-colors duration-300">
      <Toaster position="top-right" />

      {/* Theme Toggle */}
      <div className="absolute top-5 right-5">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="bg-[#181c23] border border-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-[#222b3a] transition"
        >
          Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>
      </div>

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl py-28"
      >
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          <span className="flex items-center justify-center gap-2">
            <div className="w-10 h-10 md:w-12 md:h-12">
              <Lottie animationData={rocketLaunch} loop={true} />
            </div>
            <span className="text-[#59d3be] drop-shadow-md text-4xl md:text-7xl animate-pulse">FYNX</span>
          </span>
          <span className="block text-slate-200 mt-4 text-3xl">Coming Soon!</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
          Your intelligent, secure, and personalized AI-powered financial assistant.
        </p>

        {/* Lottie Animation */}
        <div className="max-w-[220px] mx-auto mt-10">
          <Lottie animationData={iconAnimation} loop={true} />
        </div>

        {/* Email Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-5 py-3 w-full sm:w-80 rounded-xl bg-[#181c23] text-white placeholder-slate-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#59d3be]"
          />
          <button
            type="submit"
            className="bg-[#59d3be] hover:bg-[#46c1aa] px-6 py-3 rounded-xl font-semibold text-gray-900 text-base flex items-center justify-center gap-2 transition"
          >
            <EnvelopeIcon className="h-5 w-5" /> Notify Me
          </button>
        </form>
      </motion.section>

      {/* TESTIMONIALS */}
      {/* <section className="mt-24 max-w-4xl text-center">
        <h2 className="text-3xl font-semibold text-slate-200 mb-10">Trusted by Early Users</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[{
            name: 'Aditi R.',
            text: 'FYNX showed me where I was losing money every month. Game changer!',
          }, {
            name: 'Karan M.',
            text: 'The AI suggestions were surprisingly accurate and helpful.',
          }].map((t, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 shadow-sm"
            >
              <p className="text-slate-300 italic mb-2">“{t.text}”</p>
              <h4 className="text-[#59d3be] font-bold">— {t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* FEATURES SECTION */}
      <section className="mt-24 w-full max-w-5xl">
        <h2 className="text-3xl font-semibold text-center text-slate-200 mb-10">Why Choose FYNX?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: <Bot className="w-9 h-9 text-[#59d3be]" />, title: 'AI Chat for Budget Help' },
            { icon: <LayoutDashboard className="w-9 h-9 text-[#59d3be]" />, title: 'Visual Dashboards' },
            { icon: <Sparkles className="w-9 h-9 text-[#59d3be]" />, title: 'Spending Predictions' },
            { icon: <Target className="w-9 h-9 text-[#59d3be]" />, title: 'Goal-Based Planning' },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-gradient-to-br from-slate-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#59d3be]/30 transition"
            >
              <div className="mb-3">{feature.icon}</div>
              <h3 className="text-xl font-bold text-slate-100 mb-1">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      {/* FOOTER */}
<footer className="mt-24 py-8 w-full text-center text-sm text-gray-500 border-t border-gray-800">
  <div className="flex flex-col items-center gap-4">
    <p>FYNX © 2025 • Built with 💙 by VIGNESH POBBATHI</p>
    
    {/* Social Media Icons */}
    <div className="flex gap-5 text-gray-400">
      <a href="https://www.linkedin.com/company/fynxdev
" target="_blank" rel="noopener noreferrer" className="hover:text-[#59d3be] transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.76 0-5 2.24-5 
            5v14c0 2.76 2.24 5 5 5h14c2.76 
            0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 
            19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 
            1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 
            1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 
            0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 
            1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 
            4.59v5.59z"/>
        </svg>
      </a>

      {/* <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-[#59d3be] transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.56c-.89.39-1.85.65-2.85.77 
            1.02-.61 1.8-1.57 2.17-2.72-.95.56-2 
            .97-3.12 1.19-.9-.96-2.18-1.56-3.6-1.56-2.72 
            0-4.93 2.21-4.93 4.93 0 .39.04.77.13 
            1.13-4.1-.21-7.73-2.17-10.16-5.15-.43.74-.68 
            1.6-.68 2.52 0 1.74.89 3.27 2.25 
            4.17-.83-.03-1.6-.25-2.28-.63v.06c0 
            2.43 1.73 4.46 4.02 4.92-.42.11-.86.17-1.31.17-.32 
            0-.63-.03-.93-.09.63 1.97 2.46 3.4 4.63 
            3.45-1.7 1.33-3.84 2.12-6.16 2.12-.4 
            0-.79-.02-1.17-.07 2.2 1.41 4.82 2.24 
            7.63 2.24 9.15 0 14.15-7.58 
            14.15-14.15 0-.21 0-.43-.02-.64.97-.7 
            1.8-1.57 2.46-2.56z"/>
        </svg>
      </a> */}

      <a href="https://www.instagram.com/vignesh_pobbathi_/" target="_blank" rel="noopener noreferrer" className="hover:text-[#59d3be] transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.75 2h8.5C19.55 2 21 3.45 21 
            5.75v12.5c0 2.3-1.45 3.75-3.75 
            3.75h-8.5C5.45 22 4 20.55 4 
            18.25V5.75C4 3.45 5.45 2 7.75 
            2zm0-2C3.47 0 0 3.47 0 7.75v8.5C0 
            20.53 3.47 24 7.75 24h8.5C20.53 24 
            24 20.53 24 16.25v-8.5C24 3.47 20.53 
            0 16.25 0h-8.5zM12 7c2.76 0 5 2.24 
            5 5s-2.24 5-5 5-5-2.24-5-5 
            2.24-5 5-5zm0-2C8.14 5 5 8.14 
            5 12s3.14 7 7 7 7-3.14 
            7-7-3.14-7-7-7zm5.5-3c-.83 
            0-1.5.67-1.5 1.5S16.67 5 17.5 
            5 19 4.33 19 3.5 18.33 2 17.5 2z"/>
        </svg>
      </a>
    </div>
  </div>
</footer>

    </main>
  );
} 
