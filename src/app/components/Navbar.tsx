// components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50">
      {/* Left: Menu Button */}
      <button className="p-2">
        <Menu className="w-6 h-6 text-white" />
      </button>

      {/* Center: Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link href="/">
          <Image
            src="/fynx-logo1.png"
            alt="FYNX Logo"
            width={50}
            height={50}
            priority
          />
        </Link>
      </div>

      {/* Right: About Link */}
      <div className="p-2">
        <Link href="/about" className="text-white hover:underline">
          About
        </Link>
      </div>
    </nav>
  );
}
