"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-[#0a0f1f] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO + TEXTE */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Image
              src="/favicon_bleu_nuit.png"
              alt="PFOTC Logo"
              width={44}
              height={44}
              className="drop-shadow-[0_0_6px_rgba(0,180,255,0.4)]"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-white text-lg">PFOTC</span>
            <span className="text-sm text-gray-300">
              Pacific Flight Operations & Training Center
            </span>
            <span className="text-xs text-cyan-400">
              Integrated Flight Operations
            </span>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className="flex space-x-8 text-sm font-medium">
          <Link
            href="#"
            className="hover:text-cyan-400 transition-colors duration-200"
          >
            Accueil
          </Link>
          <Link
            href="#"
            className="hover:text-cyan-400 transition-colors duration-200"
          >
            Formations
          </Link>
          <Link
            href="#"
            className="hover:text-cyan-400 transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            href="#"
            className="hover:text-cyan-400 transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
