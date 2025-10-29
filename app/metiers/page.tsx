"use client";

import Link from "next/link";

export default function MetiersPage() {
  const metiers = [
    {
      icon: "✈️",
      title: "Flight Dispatcher",
      text: "Responsable de la préparation et du suivi des vols : plan de vol, météo, performance et coordination avec les équipages.",
      href: "/metiers/dispatcher",
    },
    {
      icon: "🧳",
      title: "Agent de Trafic",
      text: "Garant du centrage, du chargement et du respect des délais de départ. Cœur de la coordination sol / OCC.",
      href: "/metiers/agent-trafic",
    },
    {
      icon: "🧍‍♂️",
      title: "Agent d’Escale",
      text: "Interface entre la compagnie, les passagers et les équipes au sol : un rôle essentiel dans l’expérience client.",
      href: "/metiers/agent-escale",
    },
    {
      icon: "🚧",
      title: "Superviseur de Piste",
      text: "Chef d’orchestre du turnaround : sécurité, coordination et respect du temps de départ.",
      href: "/metiers/superviseur-piste",
    },
    {
      icon: "📡",
      title: "Coordinateur",
      text: "Lien opérationnel entre piste, équipage et CCO pour une performance de vol optimale (OTD).",
      href: "/metiers/coordinateur",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-[#071021] text-white min-h-screen">
      {/* --- Effet d’horizon lumineux --- */}
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
      <div className="relative z-10 px-6 py-24 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Métiers & Formations
        </h1>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
          Découvrez les métiers clés des opérations aériennes, et les formations
          proposées par PFOTC pour développer vos compétences et rejoindre une
          carrière au cœur du monde aéronautique.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {metiers.map((m) => (
            <Link
              key={m.title}
              href={m.href}
              className="group relative block rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:ring-1 hover:ring-cyan-400 transition p-8"
            >
              <div className="text-4xl mb-4">{m.icon}</div>
              <h2 className="text-xl font-semibold text-cyan-400 mb-3 group-hover:text-white transition">
                {m.title}
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">{m.text}</p>
              <div className="mt-5">
                <span className="text-cyan-400 text-sm group-hover:text-white transition">
                  → Voir la formation
                </span>
              </div>
            </Link>
          ))}
        </div>

        <footer className="mt-20 text-sm text-gray-500">
          © PFOTC — <span className="text-cyan-400">Pacific Hub Tahiti</span>
        </footer>
      </div>
    </main>
  );
}
