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
      programme: "/formations/loadsheets",
    },
    {
      icon: "📡",
      title: "OCC Management",
      hours: "24–60 h",
      description: [
        "Process & tools",
        "Gestion aléas",
        "CBTA & reporting",
      ],
      linkMetier: "/metiers/coordinateur",
      inscription: "/inscription?formation=occ",
      programme: "/formations/occ",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-[#071021] text-white min-h-screen">
      {/* --- Effet horizon --- */}
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Formations PFOTC
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Des formations conçues pour développer les compétences clés des
            opérations aériennes dans le Pacifique — alliant rigueur technique,
            approche CBTA et expertise terrain.
          </p>
        </header>

        {/* --- Cartes de formations --- */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {formations.map((f) => (
            <div
              key={f.title}
              className="card-pfotc p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:ring-1 hover:ring-cyan-400 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-2">
                  <span className="text-2xl">{f.icon}</span>
                  <span className="text-sm text-gray-400">{f.hours}</span>
                </div>

                {/* --- Titre cliquable avec "?" --- */}
                <Link
                  href={f.linkMetier}
                  className="inline-flex items-center gap-1 text-lg font-semibold text-white hover:text-cyan-400 transition"
                  title={`Découvrir le métier : ${f.title}`}
                >
                  {f.title}
                  <span className="text-cyan-400 font-bold text-xl leading-none">
                    ?
                  </span>
                </Link>

                <ul className="mt-3 space-y-1 text-sm text-slate-300 list-disc list-inside">
                  {f.description.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={f.inscription}
                  className="px-4 py-2 rounded-xl bg-cyan-500 text-[#0b1220] text-sm font-medium hover:bg-cyan-400 transition"
                >
                  S’inscrire
                </a>
                <a
                  href={f.programme}
                  className="px-4 py-2 rounded-xl border border-white/15 text-sm hover:bg-white/5 transition"
                >
                  Programme
                </a>
              </div>
            </div>
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
