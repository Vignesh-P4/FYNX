'use client';

import { motion } from 'framer-motion';
import Navbar from '../../../components/Navbar';

export default function TransactionsPage() {
  const transactions = [
    { date: '2025-08-01', description: 'Grocery Store', amount: '-₹120', type: 'expense' },
    { date: '2025-08-03', description: 'Salary', amount: '+₹3,000', type: 'income' },
    { date: '2025-08-04', description: 'Gym Membership', amount: '-₹50', type: 'expense' },
    { date: '2025-08-06', description: 'Freelance Project', amount: '+₹800', type: 'income' },
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
            Transactions
          </h1>

          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Track every move of your money with precision and style.
          </p>
        </motion.div>
      </section>

      {/* Transactions Table */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto bg-gradient-to-b from-neutral-900 to-neutral-800 rounded-xl border border-neutral-700 shadow-lg"
        >
          <table className="w-full text-left min-w-[600px]">
            <thead>
              <tr className="border-b border-neutral-700 text-yellow-400">
                <th className="p-4">Date</th>
                <th className="p-4">Description</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Type</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="border-b border-neutral-800 hover:bg-neutral-900/50 transition"
                >
                  <td className="p-4 text-gray-300">{t.date}</td>
                  <td className="p-4">{t.description}</td>
                  <td
                    className={`p-4 font-bold ${
                      t.type === 'income' ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {t.amount}
                  </td>
                  <td className="p-4 capitalize text-gray-400">{t.type}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center py-16 bg-gradient-to-r from-yellow-500/10 to-yellow-400/10 border-t border-neutral-800"
      >
        <h2 className="text-3xl font-bold mb-4">
          Want deeper insights into your spending?
        </h2>
        <p className="text-gray-400 mb-6">
          Get detailed analytics and optimize your financial journey.
        </p>
        <button className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition">
          View Reports
        </button>
      </motion.div>
    </main>
  );
}
