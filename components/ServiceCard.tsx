"use client";

import Link from "next/link";
import { PlaneTakeoff } from "lucide-react";

export default function CardService() {
  return (
    <Link
      href="/services#flightops"
      className="group relative block rounded-2xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 hover:ring-cyan-400/40 transition overflow-hidden"
    >
      {/* GLOW DÉCORATIF */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 rounded-2xl"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,180,255,.08), rgba(0,180,255,0))",
        }}
      />

      {/* CONTENU */}
      <div className="relative z-10 p-8 flex flex-col items-center text-center">
        <PlaneTakeoff className="w-8 h-8 mb-4 text-cyan-400" />
        <h3 className="text-lg font-semibold text-white">
          Flight Operations Services
        </h3>
        <p className="mt-2 text-sm text-gray-300">
          OCC, Dispatch, Loadsheet – supervision 24/7 et solutions remote.
        </p>
      </div>
    </Link>
  );
}
