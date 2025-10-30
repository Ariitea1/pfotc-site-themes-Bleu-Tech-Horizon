"use client";

export default function CoordinateurPage() {
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
          Coordinateur des Opérations
        </h1>

        <p className="text-gray-300 mb-6 leading-relaxed">
          <strong>Au cœur du système, il relie les services et synchronise les décisions.</strong>  
          Le Coordinateur des Opérations supervise la gestion quotidienne du réseau et des ressources 
          d’une compagnie aérienne.  
          Il analyse les contraintes, anticipe les aléas et optimise l’efficacité opérationnelle.
        </p>

        <p className="text-gray-300 mb-6 leading-relaxed">
          Interlocuteur direct du CCO, du dispatch et des escales, il veille à la cohérence des décisions 
          entre les départements.  
          Sa vision globale et sa capacité à prioriser font de lui un acteur clé de la performance opérationnelle.
        </p>

        <blockquote className="mt-10 text-cyan-400 text-lg italic border-l-4 border-cyan-400 pl-4">
          PFOTC forme ces coordinateurs du réel, stratèges du quotidien aérien et gardiens de la continuité opérationnelle.
        </blockquote>

        <footer className="mt-20 text-sm text-gray-500 text-center">
          © PFOTC — <span className="text-cyan-400">Pacific Hub Tahiti</span>
        </footer>
      </div>
    </main>
  );
}
