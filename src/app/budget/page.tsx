'use client';

import { motion } from 'framer-motion';
import Navbar from '../../../components/Navbar';

export default function BudgetPage() {
  const budgetData = [
    { title: 'Total Budget', amount: '₹12,500', change: '+8%' },
    { title: 'Expenses', amount: '₹4,200', change: '-3%' },
    { title: 'Savings Goal', amount: '₹3,000', change: '+12%' },
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
  Budget Overview
</h1>


<br />
          <p className="text-gray-400 mt-4 text-lg max-w-2x mx-auto">
            Precision tracking, elite performance. Manage your finances like a
            Lamborghini — sleek, powerful, and unstoppable.
          </p>
        </motion.div>
      </section>

      {/* Budget Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 pb-20">
        {budgetData.map((item, i) => (
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
            <p className="text-4xl font-bold">{item.amount}</p>
            <p
              className={`mt-2 ${
                item.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {item.change} from last month
            </p>
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
          Ready to optimize your spending?
        </h2>
        <p className="text-gray-400 mb-6">
          Set custom goals, monitor your cashflow, and dominate your finances.
        </p>
        <button className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition">
          Get Started
        </button>
      </motion.div>
    </main>
  );
}
