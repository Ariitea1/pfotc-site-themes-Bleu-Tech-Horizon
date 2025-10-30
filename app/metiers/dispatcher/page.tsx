"use client";

export default function DispatcherPage() {
  return (
    <main className="relative overflow-hidden bg-[#071021] text-white min-h-screen">
      {/* === HERO OCC === */}
      <section className="relative w-full h-[85vh] overflow-hidden">
        {/* ✅ Image OCC parfaitement visible */}
        <img
          src="/images/fd_occ_pfctc.png"
          alt="Flight Dispatcher OCC"
          className="absolute inset-0 w-full h-full object-cover brightness-95 z-0"
        />

        {/* Dégradé horizon PFOTC */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-cyan-800/30 to-purple-900/40 z-10" />

        {/* Halo lumineux */}
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-3xl animate-pulse z-10" />

        {/* Contenu texte au-dessus */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 transition-all duration-700">
            Flight Dispatcher
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl text-blue-100">
            Au cœur du centre des opérations – l’intelligence du vol sous l’horizon du Pacifique.
          </p>
        </div>
      </section>

      {/* --- Contenu principal --- */}
      <div className="relative z-10 px-6 py-24 max-w-5xl mx-auto">
        <p className="text-gray-300 mb-6 leading-relaxed">
          <strong>Dans l’ombre des opérations, ils calculent, anticipent et coordonnent.</strong>
          <br />
          Le Flight Dispatcher (ou Agent d’Opérations Aériennes) est la{" "}
          <span className="text-cyan-400 font-medium">sentinelle des opérations</span>.
          Avant chaque vol, il analyse la météo, les NOTAMs, la configuration avion,
          le routing et les performances afin d’élaborer un plan de vol sûr, économique
          et conforme à la réglementation.
        </p>

        <ul className="list-disc pl-6 text-blue-200 space-y-2 mb-6">
          <li>Planification des routes, carburant et alternates</li>
          <li>Analyse météo et NOTAM en temps réel</li>
          <li>Suivi de vol et communication équipage/OCC</li>
          <li>Coordination interservices (maintenance, handling, ATC)</li>
        </ul>

        <p className="text-gray-300 mb-6 leading-relaxed">
          Véritable chef d’orchestre des opérations sol/vol, il conjugue expertise technique, rigueur
          réglementaire et sens de la décision. Dans le silence des salles OCC, il veille — pour que
          chaque décollage se fasse en toute sécurité et que chaque équipage dispose des meilleures
          conditions de vol.
        </p>

        <blockquote className="mt-10 text-cyan-400 text-lg italic border-l-4 border-cyan-400 pl-4">
          PFOTC forme ces femmes et ces hommes de l’ombre, garants du ciel et du lien entre la terre et le vol.
        </blockquote>

        <footer className="mt-20 text-sm text-gray-500 text-center">
          © PFOTC — <span className="text-cyan-400">Pacific Hub Tahiti</span>
        </footer>
      </div>
    </main>
  );
}
