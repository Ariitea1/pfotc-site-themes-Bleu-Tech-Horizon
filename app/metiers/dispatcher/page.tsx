"use client";

export default function DispatcherPage() {
  return (
    <main className="relative overflow-hidden bg-[#071021] text-white min-h-screen">
      {/* === HERO OCC === */}
      <section className="relative w-full h-[100vh] overflow-hidden flex items-center justify-center text-center px-8">
        {/* Image de fond nette */}
        <img
          src="/images/fd_occ_pfctc.png" // ✅ ton image finale nette
          alt="Flight Dispatcher OCC"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Légère ombre pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071021]/50 via-[#071021]/40 to-[#071021]/60 z-10" />

        {/* Bloc de texte principal */}
        <div className="relative z-20 max-w-4xl mx-auto bg-black/30 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl">
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
            <strong>Dans l’ombre des opérations, ils calculent, anticipent et coordonnent.</strong><br /><br />
            Le Flight Dispatcher (ou Agent d’Opérations Aériennes) est la{" "}
            <span className="text-cyan-400 font-medium">sentinelle des opérations</span>.
            Avant chaque vol, il analyse la météo, les NOTAMs, la configuration avion,
            le routing et les performances afin d’élaborer un plan de vol sûr, économique
            et conforme à la réglementation.
          </p>

          <ul className="list-disc pl-6 text-blue-200 space-y-2 text-left mt-6 mb-6">
            <li>Planification des routes, carburant et alternates</li>
            <li>Analyse météo et NOTAM en temps réel</li>
            <li>Suivi de vol et communication équipage/OCC</li>
            <li>Coordination interservices (maintenance, handling, ATC)</li>
          </ul>

          <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
            Véritable chef d’orchestre des opérations sol/vol, il conjugue expertise technique, rigueur
            réglementaire et sens de la décision. Dans le silence des salles OCC, il veille — pour que
            chaque décollage se fasse en toute sécurité et que chaque équipage dispose des meilleures
            conditions de vol.
          </p>

          <blockquote className="mt-8 text-cyan-400 text-lg italic border-l-4 border-cyan-400 pl-4">
            PFOTC forme ces femmes et ces hommes de l’ombre, garants du ciel et du lien entre la terre et le vol.
          </blockquote>
        </div>
      </section>

      {/* Footer mini */}
      <footer className="relative z-10 mt-20 text-sm text-gray-500 text-center pb-10">
        © PFOTC — <span className="text-cyan-400">Pacific Hub Tahiti</span>
      </footer>
    </main>
  );
}
