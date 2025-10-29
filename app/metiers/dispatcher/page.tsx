"use client";

export default function DispatcherPage() {
  return (
    <main className="relative overflow-hidden bg-[#071021] text-white min-h-screen">
      {/* Effet horizon */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(1200px 300px at 50% 65%, rgba(0,160,255,.25), rgba(0,160,255,0) 60%), linear-gradient(#0d1a2b, #071021 35%)",
        }}
      />

      <div className="relative z-10 px-6 py-24 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">
          Flight Dispatcher
        </h1>
        <p className="text-gray-300 mb-8 leading-relaxed">
          Le Flight Dispatcher, ou Agent d’Opérations, est le cœur du contrôle
          des opérations aériennes. Il prépare les vols, analyse les conditions
          météo et techniques, planifie le carburant et suit les vols en temps réel.
        </p>

        <h2 className="text-2xl font-semibold text-white mb-3">Missions principales</h2>
        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-8">
          <li>Préparer les plans de vol et calculs carburant</li>
          <li>Analyser la météo, les NOTAMs et les performances avion</li>
          <li>Assurer le suivi des vols et la coordination OCC</li>
          <li>Assister le commandant de bord avant et pendant le vol</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mb-3">Formation PFOTC</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          La formation Flight Dispatcher PFOTC repose sur les standards
          internationaux (ICAO, EASA) et l’approche CBTA.
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-8">
          <li>OMC / OMA / Réglementation internationale</li>
          <li>Planification et suivi de vol</li>
          <li>Performance, masse et centrage</li>
          <li>Communication opérationnelle & Human Factors</li>
        </ul>

        <p className="text-gray-400 text-sm italic">
          Durée : 6 à 10 semaines — Lieu : Tahiti, Pacific Hub PFOTC
        </p>

        <footer className="mt-20 text-sm text-gray-500 text-center">
          © PFOTC — <span className="text-cyan-400">Pacific Hub Tahiti</span>
        </footer>
      </div>
    </main>
  );
}
