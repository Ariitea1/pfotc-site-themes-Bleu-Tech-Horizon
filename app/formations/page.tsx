"use client";

import Link from "next/link";

export default function FormationsPage() {
  const formations = [
    {
      icon: "✈️",
      title: "Flight Dispatcher",
      hours: "40–80 h",
      description: [
        "Planification & NOTAM",
        "Météo, perf & ETOPS",
        "Surveillance vol & OCC",
      ],
      linkMetier: "/metiers/dispatcher",
      inscription: "/inscription?formation=dispatcher",
      programme: "/formations/dispatcher",
    },
    {
      icon: "🧳",
      title: "Loadsheet & Masses",
      hours: "24–40 h",
      description: [
        "Trim sheet avancé",
        "ATR72 – cas pratiques",
        "Conformité & audits",
      ],
      linkMetier: "/metiers/agent-trafic",
      inscription: "/inscription?formation=loadsheet",
      programme: "/formations/loadsheet",
    },
    {
      icon: "🛰️",
      title: "OCC & Supervision",
      hours: "30–60 h",
      description: [
        "Coordination des opérations",
        "Gestion des aléas",
        "Leadership & décision",
      ],
      linkMetier: "/metiers/coordinateur",
      inscription: "/inscription?formation=occ",
      programme: "/formations/occ",
    },
    {
      icon: "🛫",
      title: "Agent Trafic",
      hours: "24–40 h",
      description: [
        "Traitement au sol",
        "Manutention et coordination",
        "Documents de vol et sécurité",
      ],
      linkMetier: "/metiers/agent-trafic",
      inscription: "/inscription?formation=agent-trafic",
      programme: "/formations/agent-trafic",
    },
    {
      icon: "👩‍✈️",
      title: "Cabin Crew (PNC)",
      hours: "60–100 h",
      description: [
        "Sûreté & évacuation",
        "Secours et gestion de cabine",
        "Service et relation passager",
      ],
      linkMetier: "/metiers/pnc",
      inscription: "/inscription?formation=pnc",
      programme: "/formations/pnc",
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#071021] text-white overflow-hidden">
      {/* Halo PFOTC */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 400px at 50% 60%, rgba(0,160,255,0.25), transparent 70%), linear-gradient(#0b1629, #071021 40%)",
        }}
      />

      {/* Liseré lumineux */}
      <div
        aria-hidden
        className="absolute left-0 right-0"
        style={{
          top: "55%",
          height: "2px",
          boxShadow: "0 0 16px rgba(0,180,255,0.6)",
          background: "rgba(0,180,255,0.35)",
        }}
      />

      <div className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <h1 className="text-center text-4xl md:text-5xl font-bold text-cyan-400 mb-12 drop-shadow-lg">
          Formations PFOTC
        </h1>

        {/* Grille des cartes */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {formations.map((formation) => (
            <div
              key={formation.title}
              className="group relative bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-md shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.03] transition-all duration-500"
            >
              <div className="text-5xl mb-4 transition-transform duration-500 group-hover:scale-110">
                {formation.icon}
              </div>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
                {formation.title}
              </h2>
              <p className="text-gray-400 text-sm mb-4">{formation.hours}</p>
              <ul className="text-gray-300 mb-6 space-y-1 list-disc list-inside">
                {formation.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="flex flex-col gap-2">
                <Link
                  href={formation.linkMetier}
                  className="text-cyan-400 hover:underline"
                >
                  Métier associé →
                </Link>
                <Link
                  href={formation.programme}
                  className="text-blue-300 hover:underline"
                >
                  Programme détaillé →
                </Link>
                <Link
                  href={formation.inscription}
                  className="mt-2 inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-xl text-center transition-colors"
                >
                  S’inscrire
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-20 text-sm text-gray-500 text-center">
          © PFOTC — <span className="text-cyan-400">Pacific Hub Tahiti</span>
        </footer>
      </div>
    </main>
  );
}
