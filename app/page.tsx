"use client";

export default function ServicesPage() {
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

      {/* --- Contenu --- */}
      <div className="relative z-10 px-6 py-24 text-center">
        <header className="max-w-5xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Nos Services
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Solutions intégrées pour les opérations aériennes, la formation et le conseil stratégique.
          </p>
        </header>

        {/* --- SECTION 1 : Flight Ops --- */}
        <section id="flightops" className="max-w-5xl mx-auto mb-24 text-left scroll-mt-32">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-3 flex items-center gap-2">
            ✈️ <span>Flight Operations Services</span>
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            PFOTC fournit une gamme complète de services de Flight Operations : supervision 24/7,
            flight dispatch, production de loadsheets, gestion des NOTAMs et des plans de vol,
            et accompagnement des exploitants dans leurs opérations quotidiennes.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>OCC & Dispatch en Remote Ops</li>
            <li>Loadsheet & Briefing automatisés</li>
            <li>Suivi de flotte, ETOPS & Performance</li>
            <li>Support réglementaire DAC/EASA</li>
          </ul>
        </section>

        {/* --- SECTION 2 : Training --- */}
        <section id="training" className="max-w-5xl mx-auto mb-24 text-left scroll-mt-32">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-3 flex items-center gap-2">
            🎓 <span>Training & CBTA Modules</span>
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Nos programmes de formation sont conçus selon l’approche CBTA (Competency-Based Training & Assessment),
            conforme aux exigences EASA/ICAO. Ils couvrent les formations initiales et récurrentes des Flight Dispatchers,
            Loadmasters et Agents de trafic.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Formation initiale & récurrente Flight Dispatcher</li>
            <li>Modules Loadmaster & Ramp Coordination</li>
            <li>Formations OMD et conformité réglementaire</li>
            <li>CBTA Instructors & Internal Examiner Pathways</li>
          </ul>
        </section>

        {/* --- SECTION 3 : Consulting --- */}
        <section id="consulting" className="max-w-5xl mx-auto mb-24 text-left scroll-mt-32">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-3 flex items-center gap-2">
            🌐 <span>Consulting & Partnerships</span>
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            PFOTC accompagne les compagnies aériennes, opérateurs et autorités dans le développement, la mise en conformité
            et la gestion de leurs opérations. Nos services couvrent l’analyse documentaire, la mise à jour d’OMD/MEL/ETOPS
            et la préparation réglementaire.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Rédaction & révision des OMD, MEL, ETOPS</li>
            <li>Audit de conformité et procédures DAC</li>
            <li>Préparation d’opérations Ferry & Delivery</li>
            <li>Partenariats opérationnels dans le Pacifique</li>
          </ul>
        </section>

        {/* --- Footer mini --- */}
        <footer className="mt-20 text-sm text-gray-500">
          © PFOTC — <span className="text-cyan-400">Pacific Hub Tahiti</span>
        </footer>
      </div>
    </main>
  );
}
