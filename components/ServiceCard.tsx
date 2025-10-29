"use client";

import Link from "next/link";
import { PlaneTakeoff, GraduationCap, Globe } from "lucide-react";

export default function ServiceCard() {
  const cards = [
    {
      icon: <PlaneTakeoff className="w-8 h-8 text-cyan-400 mb-4" />,
      title: "Flight Operations Services",
      text: "OCC, Dispatch, Loadsheet – supervision 24/7 et solutions remote.",
      href: "/services#flightops",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-cyan-400 mb-4" />,
      title: "Training & CBTA Modules",
      text: "Initial, recurrent, CBTA – conformité EASA/ICAO.",
      href: "/formations#cbta",
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-400 mb-4" />,
      title: "Consulting & Partnerships",
      text: "OMD, MEL/ETOPS, DAC, Ferry – expertise opérationnelle.",
      href: "/services#consulting",
    },
  ];

  return (
    <section className="relative bg-transparent py-16 px-6">
      <div className="relative z-10 max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <Link
            key={index}
            href={card.href}
            className="group relative block rounded-2xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 hover:ring-cyan-400/40 transition overflow-hidden"
          >
            {/* Glow décoratif */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-0 rounded-2xl"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,180,255,.08), rgba(0,180,255,0))",
              }}
            />

            {/* Contenu */}
            <div className="relative z-10 p-8 flex flex-col items-center text-center">
              {card.icon}
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{card.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
