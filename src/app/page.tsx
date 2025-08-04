"use client";

import Navbar from "../../components/Navbar";
import HeroSlide from "../../components/HeroSlide";
import { Linkedin, Instagram } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* HERO SECTION */}
      <Navbar />
      <HeroSlide />

      {/* INFO SECTION */}
      <section
        id="info"
        className="py-20 flex flex-col items-center justify-center text-center px-6"
      >
        <h2 className="text-3xl font-bold uppercase mb-8">
          Connect with FYNX
        </h2>
        <p className="text-gray-400 max-w-xl mb-6">
          Follow us on our social platforms to stay updated on the launch and
          upcoming features.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/company/fynxdev/"
            target="_blank"
            className="p-4 rounded-full bg-gray-900 hover:bg-gray-800 transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            className="p-4 rounded-full bg-gray-900 hover:bg-gray-800 transition"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} — Made with ❤️ by Vignesh Pobbathi
      </footer>
    </main>
  );
}
