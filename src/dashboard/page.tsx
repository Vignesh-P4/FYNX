'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = () => {
    // ✅ Clear session/token (this is placeholder logic)
    localStorage.removeItem('user'); // adjust this based on your logic
    router.push('/login');
  };

  return (
    <main className="min-h-screen bg-neutral-900 text-white px-6 py-12 md:px-20">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-10 text-center"
      >
        Welcome to Your Dashboard
      </motion.h1>

      <div className="max-w-3xl mx-auto bg-neutral-800 p-8 rounded-xl shadow-md">
        <p className="text-xl mb-6">
          👋 Hello, FYNX User! This is your personal financial command center.
        </p>

        {/* Placeholder for future features */}
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
          <li>Track expenses & earnings</li>
          <li>View personalized insights</li>
          <li>Manage your budget & goals</li>
        </ul>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition"
        >
          Logout
        </button>
      </div>
    </main>
  );
}
