"use client";

export default function AgentTraficPage() {
  return (
    <main className="relative overflow-hidden bg-[#071021] text-white min-h-screen">
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

      <div className="relative z-10 px-6 py-24 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">
          Agent de Trafic – Loadsheet & Masses
        </h1>

        <p className="text-gray-300 mb-6 leading-relaxed">
          <strong>À l’interface du sol et du vol, il calcule, équilibre et sécurise.</strong>  
          L’Agent de Trafic élabore le plan de chargement et la feuille de centrage (Loadsheet) 
          en fonction des passagers, du fret et du carburant.  
          Il assure l’équilibre de l’avion pour garantir un vol sûr, conforme et optimisé.
        </p>

        <p className="text-gray-300 mb-6 leading-relaxed">
          En lien constant avec le Flight Dispatcher, les équipes de piste et les équipages, 
          il est le garant du bon déroulement des opérations de préparation au départ.
          Sa précision influence directement la sécurité et les performances de chaque vol.
        </p>

        <blockquote className="mt-10 text-cyan-400 text-lg italic border-l-4 border-cyan-400 pl-4">
          PFOTC forme ces spécialistes du poids et de l’équilibre, artisans invisibles de la sécurité du vol.
        </blockquote>

        <footer className="mt-20 text-sm text-gray-500 text-center">
          © PFOTC — <span className="text-cyan-400">Pacific Hub Tahiti</span>
        </footer>
      </div>
    </main>
  );
}
