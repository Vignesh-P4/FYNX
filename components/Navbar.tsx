'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';



const navItems = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Transactions', path: '/transactions' },
  { name: 'Budget', path: '/budget' },
  { name: 'Reports', path: '/reports' },
  { name: 'Settings', path: '/settings' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-neutral-800 text-white px-6 py-4 flex items-center justify-between shadow-lg"
    >

      <div className="text-lg font-bold">
        <Link href="/dashboard" className="hover:text-yellow-400 transition">
          FYNX
        </Link>
      </div>


      <ul className="flex gap-6">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={`hover:text-blue-400 transition ${
                pathname === item.path ? 'text-blue-400 font-semibold' : ''
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
