"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0b1220]/95 backdrop-blur-sm border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        
        {/* LOGO + TITRE */}
        <Link href="/" className="flex items-center gap-3 group relative">
          {/* halo discret derrière l’icône */}
          <div
            className={`absolute -inset-4 rounded-full bg-cyan-400/10 blur-xl transition-all duration-700 ${
              loaded ? "opacity-80" : "opacity-0 scale-95"
            }`}
            aria-hidden="true"
          />
          <div
            className={`relative z-10 transition-all duration-700 ${
              loaded
                ? "opacity-100 scale-100 drop-shadow-[0_0_18px_rgba(0,200,255,0.35)]"
                : "opacity-0 scale-90"
            }`}
          >
            {/* ✅ bon fichier : favicon_bleu_nuit.png */}
            <Image
              src="/favicon_bleu_nuit.png"
              alt="PFOTC"
              width={52}
              height={52}
              priority
            />
          </div>

          {/* Texte PFOTC + sous-titres */}
          <div className="flex flex-col leading-tight">
            <span className="text-white font-semibold text-lg tracking-tight">
              PFOTC
            </span>
            <span className="text-slate-300 text-sm">
              Pacific Flight Operations & Training Center
            </span>
            <span className="text-cyan-400 text-xs font-medium mt-[2px]">
              Integrated Flight Operations
            </span>
          </div>
        </Link>

        {/* NAV */}
        <nav
          className={`hidden md:flex gap-8 text-slate-300 text-sm transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
          <Link href="/formations" className="hover:text-white transition-colors">Formations</Link>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
