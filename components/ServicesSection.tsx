"use client";

import Link from "next/link";

export default function ServicesSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-6xl w-full">
      {/* === CARD 1 === */}
      <Link
        href="/services#flightops"
        className="card-pfotc p-6 hover:ring-1 hover:ring-cyan-400 transition rounded-2xl bg-white/5 backdrop-blur-md border border-white/10"
      >
        <div className="flex flex-col items-center text-center">
          <div className="text-3xl mb-3">✈️</div>
          <h3 className="font-semibold text-lg mb-2 text-white">
            Flight Operations Services
          </h3>
          <p className="text-slate-300 text-sm">
            OCC, Dispatch, Loadsheet – supervision 24/7 et solutions remote.
          </p>
        </div>
      </Link>

      {/* === CARD 2 === */}
      <Link
        href="/formations#cbta"
        className="card-pfotc p-6 hover:ring-1 hover:ring-cyan-400 transition rounded-2xl bg-white/5 backdrop-blur-md border border-white/10"
      >
        <div className="flex flex-col items-center text-center">
          <div className="text-3xl mb-3">🎓</div>
          <h3 className="font-semibold text-lg mb-2 text-white">
            Training & CBTA Modules
          </h3>
          <p className="text-slate-300 text-sm">
            Initial, recurrent, CBTA – conformité EASA/ICAO.
          </p>
        </div>
      </Link>

      {/* === CARD 3 === */}
      <Link
      href="/consulting"
      className="card-pfotc p-6 hover:ring-1 hover:ring-cyan-400 transition rounded-2xl bg-white/5 backdrop-blur-md border border-white/10"
      >

      >
        <div className="flex flex-col items-center text-center">
          <div className="text-3xl mb-3">🌐</div>
          <h3 className="font-semibold text-lg mb-2 text-white">
            Consulting & Partnerships
          </h3>
          <p className="text-slate-300 text-sm">
            OMD, MEL/ETOPS, DAC, Ferry – expertise opérationnelle.
          </p>
        </div>
      </Link>
    </section>
  );
}
