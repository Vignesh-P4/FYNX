'use client';

import { motion } from 'framer-motion';
import Navbar from '../../../components/Navbar';

export default function SettingsPage() {
  const settingsSections = [
    {
      title: 'Profile Settings',
      description: 'Update your personal information, avatar, and contact details.',
      action: 'Edit Profile',
    },
    {
      title: 'Security',
      description: 'Change your password, enable 2FA, and manage login devices.',
      action: 'Manage Security',
    },
    {
      title: 'Preferences',
      description: 'Set currency, theme, and notification preferences.',
      action: 'Adjust Preferences',
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center pt-20 pb-12"
        >
          <h1
            className="text-5xl md:text-6xl font-extrabold drop-shadow-lg
                       bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600
                       bg-[length:300%_100%] bg-clip-text text-transparent
                       leading-[1.2] pb-2"
          >
            Settings
          </h1>

          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Fine-tune your experience for maximum control and performance.
          </p>
        </motion.div>
      </section>

      {/* Settings Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 pb-20">
        {settingsSections.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 25px rgba(255, 215, 0, 0.6)',
            }}
            className="bg-gradient-to-b from-neutral-900 to-neutral-800 rounded-xl p-6 shadow-lg border border-neutral-700 cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-3 text-yellow-400">{item.title}</h2>
            <p className="text-gray-400 mb-6">{item.description}</p>
            <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition">
              {item.action}
            </button>
          </motion.div>
        ))}
      </section>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center py-16 bg-gradient-to-r from-yellow-500/10 to-yellow-400/10 border-t border-neutral-800"
      >
        <h2 className="text-3xl font-bold mb-4">
          Ready to personalize even more?
        </h2>
        <p className="text-gray-400 mb-6">
          Explore advanced settings to customize your financial dashboard.
        </p>
        <button className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition">
          Explore Advanced
        </button>
      </motion.div>
    </main>
  );
}
