"use client";

export default function ConsultingPage() {
  return (
    <main className="relative overflow-hidden bg-[#071021] text-white min-h-screen">
      {/* --- Effet d’horizon lumineux --- */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(1000px 250px at 50% 65%, rgba(0,160,255,.25), rgba(0,160,255,0) 60%), linear-gradient(#0d1a2b, #071021 35%)",
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
      <div className="relative z-10 px-6 py-24 text-center">
        <header className="max-w-5xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Consulting & Partnerships
          </h1>
          <p className="text-lg text-gray-300">
            Expertise opérationnelle, conformité réglementaire et accompagnement stratégique pour les exploitants du Pacifique.
          </p>
        </header>

        {/* --- Contenu texte --- */}
        <div className="max-w-5xl mx-auto text-left space-y-6">
          <p className="text-gray-300 leading-relaxed">
            PFOTC accompagne les compagnies aériennes, opérateurs et autorités dans le développement et la mise en conformité
            de leurs opérations. Nos experts interviennent sur la documentation opérationnelle, les audits, la formation et
            la gestion réglementaire, en lien avec les autorités compétentes.
          </p>

          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Rédaction & révision des OMD, MEL, ETOPS</li>
            <li>Audit de conformité et procédures DAC</li>
            <li>Préparation d’opérations Ferry & Delivery</li>
            <li>Partenariats opérationnels dans le Pacifique</li>
          </ul>

          <p className="text-gray-300 leading-relaxed">
            Notre approche se fonde sur la proximité, la rigueur et la connaissance approfondie des environnements insulaires
            et transocéaniques. Chaque mission est adaptée aux besoins spécifiques de nos partenaires.
          </p>
        </div>

        {/* --- Footer mini --- */}
        <footer className="mt-20 text-sm text-gray-500">
          © PFOTC — <span className="text-cyan-400">Pacific Hub Tahiti</span>
        </footer>
      </div>
    </main>
  );
}
