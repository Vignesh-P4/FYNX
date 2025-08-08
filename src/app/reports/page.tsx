'use client';

import { motion } from 'framer-motion';
import Navbar from '../../../components/Navbar';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from 'recharts';

export default function ReportsPage() {
  // Pie Chart Data
  const spendingData = [
    { name: 'Housing', value: 4000 },
    { name: 'Food', value: 2500 },
    { name: 'Transportation', value: 1500 },
    { name: 'Entertainment', value: 1000 },
    { name: 'Others', value: 800 },
  ];

  const COLORS = ['#FFD700', '#FFC107', '#FFB300', '#FFA000', '#FF8F00'];

  // Line Chart Data
  const monthlyData = [
    { month: 'Jan', expenses: 3000, income: 5000 },
    { month: 'Feb', expenses: 2800, income: 5200 },
    { month: 'Mar', expenses: 3500, income: 5100 },
    { month: 'Apr', expenses: 3200, income: 5300 },
    { month: 'May', expenses: 4000, income: 5500 },
    { month: 'Jun', expenses: 3700, income: 5600 },
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
            Financial Reports
          </h1>

          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Analyze your financial performance with precision and style.
          </p>
        </motion.div>
      </section>

      {/* Summary Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 pb-12">
        {[
          { title: 'Total Income', amount: '₹31,800', change: '+10%' },
          { title: 'Total Expenses', amount: '₹17,000', change: '+5%' },
          { title: 'Net Savings', amount: '₹14,800', change: '+15%' },
        ].map((item, i) => (
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
              {item.change} from last period
            </p>
          </motion.div>
        ))}
      </section>

      {/* Charts Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6 pb-20">
        {/* Pie Chart */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-neutral-900 to-neutral-800 rounded-xl p-6 shadow-lg border border-neutral-700"
        >
          <h3 className="text-xl font-semibold mb-6 text-yellow-400">Spending Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={spendingData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {spendingData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Line Chart */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-neutral-900 to-neutral-800 rounded-xl p-6 shadow-lg border border-neutral-700"
        >
          <h3 className="text-xl font-semibold mb-6 text-yellow-400">Monthly Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="month" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="income" stroke="#FFD700" strokeWidth={3} />
              <Line type="monotone" dataKey="expenses" stroke="#FF6B6B" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
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
          Need deeper insights?
        </h2>
        <p className="text-gray-400 mb-6">
          Export full reports and take your financial analysis to the next level.
        </p>
        <button className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition">
          Download Reports
        </button>
      </motion.div>
    </main>
  );
}
