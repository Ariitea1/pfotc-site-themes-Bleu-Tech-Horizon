"use client";

export default function DispatcherPage() {
  return (
    <main className="relative overflow-hidden bg-[#071021] text-white min-h-screen">
      <section className="relative w-full h-[100vh] overflow-hidden flex items-center justify-center text-center px-8">
        {/* === IMAGE DE FOND === */}
        <img
          src="/images/fd_occ_pfctc.png"
          alt="Flight Dispatcher OCC"
          className="absolute inset-0 w-full h-full object-cover brightness-95 z-0"
        />

        {/* === DÉGRADÉ DE CONTRASTE === */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071021]/60 via-[#071021]/30 to-[#071021]/70 z-10" />

        {/* === TEXTE ANIMÉ LECTURE === */}
        <div className="relative z-20 max-w-5xl mx-auto leading-relaxed text-blue-100 space-y-6 drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">
          <h2
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 
                       bg-clip-text text-transparent tracking-wide animate-line-left"
          >
            Dans l’ombre des opérations, ils calculent, anticipent et coordonnent.
          </h2>

          <p className="text-lg md:text-xl animate-line-left-delay-1">
            Le <span className="text-cyan-400 font-semibold">Flight Dispatcher</span> (ou Agent
            d’Opérations Aériennes) est la{" "}
            <span className="text-cyan-300 font-medium">sentinelle des opérations</span>. Avant
            chaque vol, il analyse la météo, les NOTAMs, la configuration avion, le routing et les
            performances afin d’élaborer un plan de vol sûr, économique et conforme à la
            réglementation.
          </p>

          <ul
            className="text-left mx-auto w-fit text-blue-200 space-y-1 list-disc list-inside text-lg md:text-xl 
                       animate-line-left-delay-2"
          >
            <li>Planification des routes, carburant et alternates</li>
            <li>Analyse météo et NOTAM en temps réel</li>
            <li>Suivi de vol et communication équipage/OCC</li>
            <li>Coordination interservices (maintenance, handling, ATC)</li>
          </ul>

          <p className="text-lg md:text-xl animate-line-left-delay-3">
            Véritable chef d’orchestre des opérations sol/vol, il conjugue expertise technique,
            rigueur réglementaire et sens de la décision. Dans le silence des salles OCC, il veille —
            pour que chaque décollage se fasse en toute sécurité et que chaque équipage dispose des
            meilleures conditions de vol.
          </p>

          <p className="italic text-cyan-300 text-lg mt-6 animate-line-left-delay-4">
            PFOTC forme ces femmes et ces hommes de l’ombre, garants du ciel et du lien entre la
            terre et le vol.
          </p>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="relative z-10 mt-20 text-sm text-gray-500 text-center pb-10">
        © PFOTC — <span className="text-cyan-400">Pacific Hub Tahiti</span>
      </footer>

      {/* === ANIMATIONS CSS === */}
      <style jsx>{`
        @keyframes lineLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-line-left {
          animation: lineLeft 1.3s ease-out forwards;
        }

        .animate-line-left-delay-1 {
          animation: lineLeft 1.3s ease-out forwards;
          animation-delay: 0.5s;
        }

        .animate-line-left-delay-2 {
          animation: lineLeft 1.3s ease-out forwards;
          animation-delay: 0.9s;
        }

        .animate-line-left-delay-3 {
          animation: lineLeft 1.3s ease-out forwards;
          animation-delay: 1.3s;
        }

        .animate-line-left-delay-4 {
          animation: lineLeft 1.3s ease-out forwards;
          animation-delay: 1.7s;
        }
      `}</style>
    </main>
  );
}
