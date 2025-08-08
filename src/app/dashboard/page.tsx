'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Navbar from '../../../components/Navbar';


export default function Dashboard() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear fake session
    router.push('/login');
  };

  const sections = [
    { name: 'Transactions', desc: 'View and manage all your transactions', path: '/transactions' },
    { name: 'Budget', desc: 'Track and adjust your spending goals', path: '/budget' },
    { name: 'Reports', desc: 'Analyze your spending with charts', path: '/reports' },
    { name: 'Settings', desc: 'Update your account details', path: '/settings' },
  ];

  return (
    <main className="min-h-screen bg-neutral-900 text-white px-6 py-12 md:px-20">
      <Navbar />
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-10 text-center"
      >
        Welcome to Your Dashboard
      </motion.h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, i) => (
          <motion.div
            key={section.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => router.push(section.path)}
            className="bg-neutral-800 p-6 rounded-xl shadow-lg hover:bg-neutral-700 transition cursor-pointer"
          >
            <h2 className="text-2xl font-bold mb-2">{section.name}</h2>
            <p className="text-gray-400">{section.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
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
