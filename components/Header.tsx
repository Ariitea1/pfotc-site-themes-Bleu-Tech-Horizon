"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-20 w-full bg-[#0a0f1f] text-white shadow-md">
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
            href="/"
            className="hover:text-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
          >
            Accueil
          </Link>
          <Link
            href="/formations"
            className="hover:text-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
          >
            Formations
          </Link>
          <Link
            href="/services"
            className="hover:text-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
          >
            Services
          </Link>
          <Link
            href="/metiers"
            className="hover:text-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
          >
            Métiers
          </Link>
          <Link
            href="/contact"
            className="hover:text-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
