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
      <footer className="mt-24 py-8 w-full text-center text-sm text-gray-500 border-t border-gray-800">
        FYNX © 2025 • Built with 💙 by VIGNESH POBBATHI.
      </footer>
    </main>
  );
} 
