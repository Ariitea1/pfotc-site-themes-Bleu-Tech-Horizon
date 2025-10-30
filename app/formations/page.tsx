"use client";

export default function DispatcherPage() {
  return (
    <main className="relative overflow-hidden bg-[#071021] text-white min-h-screen">
      {/* === HERO IMMERSIF PFOTC === */}
      <section className="relative w-full h-[85vh] overflow-hidden">
        {/* ✅ Image OCC en lien absolu (affichage garanti) */}
        <img
          src="https://pfotc-site-themes-bleu-tech-horizon-njec3t9ed-ariiteas-projects.vercel.app/images/fd_occ_pfctc.png"
          alt="Flight Dispatcher OCC"
          className="absolute inset-0 w-full h-full object-cover brightness-95"
        />

        {/* Dégradé horizon PFOTC */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-cyan-800/20 to-purple-900/40" />

        {/* Halo lumineux */}
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />
      </section>

      {/* --- Effet horizon lumineux (liseré PFOTC) --- */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(1200px 300px at 50% 65%, rgba(0,160,255,.25), rgba(0,160,255,0) 60%), linear-gradient(#0d1a2b, #071021 35%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 right-0 z-0"
        style={{
          top: "56%",
          height: "2px",
          boxShadow: "0 0 18px rgba(0,180,255,.7)",
          background: "rgba(0,180,255,.35)",
        }}
      />

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

        <p className="text-gray-300 mb-6 leading-relaxed">
          En coordination permanente avec les équipages et le Centre de Contrôle des Opérations (CCO),
          il assure la continuité des opérations, anticipe les aléas et garantit la cohérence de chaque
          mission aérienne.
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
