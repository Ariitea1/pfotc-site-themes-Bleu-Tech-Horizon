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
  ];

  return (
    <main className="min-h-screen bg-[#071021] text-white py-24 px-6">
      <h1 className="text-center text-4xl md:text-5xl font-bold text-cyan-400 mb-12">
        Formations PFOTC
      </h1>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {formations.map((formation) => (
          <div
            key={formation.title}
            className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-md hover:scale-[1.02] transition-transform shadow-lg"
          >
            <div className="text-5xl mb-4">{formation.icon}</div>
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

      <footer className="mt-20 text-sm text-gray-500 text-center">
        © PFOTC — <span className="text-cyan-400">Pacific Hub Tahiti</span>
      </footer>
    </main>
  );
}
