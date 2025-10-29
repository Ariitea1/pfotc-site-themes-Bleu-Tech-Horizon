"use client";

import Link from "next/link";

export default function MetiersPage() {
  const metiers = [
    {
      icon: "✈️",
      title: "Flight Dispatcher",
      desc: "Analyse, planification et suivi des vols au cœur des opérations aériennes.",
      link: "/metiers/dispatcher",
    },
    {
      icon: "🧮",
      title: "Agent de Trafic",
      desc: "Chargé du calcul des masses et centrages, il garantit l’équilibre et la sécurité des vols.",
      link: "/metiers/agent-trafic",
    },
    {
      icon: "🧍‍♂️",
      title: "Agent d’Escale",
      desc: "Interface entre la compagnie et les passagers, il coordonne les opérations au sol avec rigueur et attention.",
      link: "/metiers/agent-escale",
    },
    {
      icon: "🦺",
      title: "Superviseur de Piste",
      desc: "Chef d’orchestre du tarmac, il veille à la sécurité, à la ponctualité et à la coordination des équipes au sol.",
      link: "/metiers/superviseur-piste",
    },
    {
      icon: "🌐",
      title: "Coordinateur des Opérations",
      desc: "Véritable lien entre les services, il supervise la gestion quotidienne du réseau et des ressources.",
      link: "/metiers/coordinateur",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-[#071021] text-white min-h-screen">
      {/* --- Effet horizon lumineux --- */}
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
      <div className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-cyan-400">
            Métiers & Formations
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            PFOTC forme les acteurs clés des opérations aériennes — des métiers exigeants, 
            techniques et passionnants, au service de la sécurité et de la performance des vols.
          </p>
        </header>

        {/* --- Cartes Métiers --- */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {metiers.map((m) => (
            <Link
              href={m.link}
              key={m.title}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:ring-1 hover:ring-cyan-400 transition flex flex-col justify-between text-center"
            >
              <div className="flex flex-col items-center">
                <span className="text-3xl mb-3">{m.icon}</span>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {m.title}
                </h3>
                <p className="text-sm text-slate-300">{m.desc}</p>
              </div>
              <div className="mt-5">
                <span className="text-cyan-400 text-sm font-medium">
                  En savoir plus →
                </span>
              </div>
            </Link>
          ))}
        </section>

        {/* --- Footer mini --- */}
        <footer className="mt-20 text-sm text-gray-500 text-center">
          © PFOTC — <span className="text-cyan-400">Pacific Hub Tahiti</span>
        </footer>
      </div>
    </main>
  );
}
