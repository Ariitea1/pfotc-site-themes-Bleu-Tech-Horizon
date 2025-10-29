"use client";

export default function ServicesPage() {
  return (
    <main className="min-h-screen px-6 py-24 bg-[#071021] text-white">
      {/* === En-tête de page === */}
      <header className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nos Services
        </h1>
        <p className="text-gray-300 text-lg">
          Solutions intégrées pour les opérations aériennes, la formation et le conseil stratégique.
        </p>
      </header>

      {/* === SECTION 1 : Flight Operations === */}
      <section id="flightops" className="max-w-6xl mx-auto mb-24 scroll-mt-24">
        <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
          ✈️ Flight Operations Services
        </h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          PFOTC fournit une gamme complète de services de Flight Operations :
          supervision 24/7, flight dispatch, production de loadsheets, gestion des NOTAMs et des plans de vol,
          et accompagnement des exploitants dans leurs opérations quotidiennes.
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>OCC & Dispatch en Remote Ops</li>
          <li>Loadsheet & Briefing automatisés</li>
          <li>Suivi de flotte, ETOPS & Performance</li>
          <li>Support réglementaire DAC/EASA</li>
        </ul>
      </section>

      {/* === SECTION 2 : Training === */}
      <section id="training" className="max-w-6xl mx-auto mb-24 scroll-mt-24">
        <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
          🎓 Training & CBTA Modules
        </h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Nos programmes de formation sont conçus selon l’approche CBTA
          (Competency-Based Training & Assessment), conforme aux exigences EASA/ICAO.
          Ils couvrent les formations initiales et récurrentes des Flight Dispatchers,
          Loadmasters et Agents de trafic.
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>Formation initiale & récurrente Flight Dispatcher</li>
          <li>Modules Loadmaster & Ramp Coordination</li>
          <li>Formations OMD et conformité réglementaire</li>
          <li>CBTA Instructors & Internal Examiner Pathways</li>
        </ul>
      </section>

      {/* === SECTION 3 : Consulting === */}
      <section id="consulting" className="max-w-6xl mx-auto mb-24 scroll-mt-24">
        <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
          🌐 Consulting & Partnerships
        </h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          PFOTC accompagne les compagnies aériennes, opérateurs et autorités
          dans le développement, la mise en conformité et la gestion de leurs opérations.
          Nos services couvrent l’analyse documentaire, la mise à jour d’OMD/MEL/ETOPS
          et la préparation réglementaire.
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>Rédaction & révision des OMD, MEL, ETOPS</li>
          <li>Audit de conformité et procédures DAC</li>
          <li>Préparation d’opérations Ferry & Delivery</li>
          <li>Partenariats opérationnels dans le Pacifique</li>
        </ul>
      </section>

      {/* === FOOTER MINI === */}
      <footer className="mt-20 text-sm text-gray-500 text-center">
        © PFOTC — <span className="text-cyan-400">Pacific Hub Tahiti</span>
      </footer>
    </main>
  );
}
