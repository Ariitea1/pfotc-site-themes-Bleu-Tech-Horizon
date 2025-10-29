"use client";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center text-center px-6 py-20 md:py-32 relative z-10">
      {/* ======================= HERO SECTION ======================= */}
      <section className="max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Pacific Flight Operations <br />
          <span className="text-gradient">& Training Center</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10">
          Expertise, Formation & Innovation au service des opérations aériennes.
        </p>

        {/* === Boutons harmonisés PFOTC === */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/formations" className="btn-pfotc">
            Découvrir les formations
          </a>
          <a href="/services" className="btn-pfotc">
            Voir les services
          </a>
        </div>
      </section>

      {/* ======================= SERVICES SECTION ======================= */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-6xl w-full">
        {/* === CARD 1 === */}
        <div className="card-pfotc p-6">
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl mb-3">✈️</div>
            <h3 className="font-semibold text-lg mb-2 text-white">
              Flight Operations Services
            </h3>
            <p className="text-slate-300 text-sm">
              OCC, Dispatch, Loadsheet – supervision 24/7 et solutions remote.
            </p>
          </div>
        </div>

        {/* === CARD 2 === */}
        <div className="card-pfotc p-6">
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl mb-3">🎓</div>
            <h3 className="font-semibold text-lg mb-2 text-white">
              Training & CBTA Modules
            </h3>
            <p className="text-slate-300 text-sm">
              Initial, recurrent, CBTA – conformité EASA/ICAO.
            </p>
          </div>
        </div>

        {/* === CARD 3 === */}
        <div className="card-pfotc p-6">
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="font-semibold text-lg mb-2 text-white">
              Consulting & Partnerships
            </h3>
            <p className="text-slate-300 text-sm">
              OMD, MEL/ETOPS, DAC, Ferry – expertise opérationnelle.
            </p>
          </div>
        </div>
      </section>

      {/* ======================= FOOTER MINI-LINE ======================= */}
      <footer className="mt-20 text-sm text-gray-500">
        © PFOTC — Powered by{" "}
        <span className="text-gradient">Ariitea Frogier</span>
      </footer>
    </main>
  );
}
