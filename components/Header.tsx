"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0b1220]/95 backdrop-blur-sm border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        
        {/* LOGO PFOTC */}
        <Link href="/" className="flex items-center gap-3 group relative">
          {/* Halo bleu doux */}
          <div
            className={`absolute -inset-6 rounded-full bg-cyan-400/10 blur-2xl transition-all duration-1000 ${
              loaded ? "opacity-80" : "opacity-0 scale-75"
            }`}
          />

          {/* LOGO */}
          <div
            className={`relative z-10 transition-all duration-1000 ease-out ${
              loaded
                ? "opacity-100 scale-100 drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                : "opacity-0 scale-75"
            }`}
          >
            <Image
              src="/pfotc-logo-simple.png" // ✅ logo carré version bleue foncée
              alt="PFOTC Logo"
              width={50}
              height={50}
              priority
              className="rounded-md"
            />
          </div>

          {/* Texte PFOTC + sous-titre */}
          <div className="flex flex-col leading-tight">
            <span className="text-white font-semibold text-lg tracking-tight">
              PFOTC
            </span>
            <span className="text-slate-300 text-sm">
              Pacific Flight Operations & Training Center
            </span>
            <span className="text-cyan-400 text-xs mt-0.5">
              Integrated Flight Operations
            </span>
          </div>
        </Link>

        {/* NAVIGATION */}
        <nav
          className={`hidden md:flex gap-8 text-slate-300 text-sm transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <Link href="/" className="hover:text-white transition-colors">
            Accueil
          </Link>
          <Link href="/formations" className="hover:text-white transition-colors">
            Formations
          </Link>
          <Link href="/services" className="hover:text-white transition-colors">
            Services
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
