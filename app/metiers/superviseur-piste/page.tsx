"use client";

export default function SuperviseurPistePage() {
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
          Superviseur de Piste
        </h1>

        <p className="text-gray-300 mb-6 leading-relaxed">
          <strong>Sur le tarmac, il orchestre la symphonie du départ.</strong>  
          Le Superviseur de Piste coordonne les équipes au sol — agents de piste, carburant, catering, bagages — 
          pour assurer un départ sûr et ponctuel.  
          Il veille à la sécurité des personnels et des aéronefs dans une zone d’activité intense.
        </p>

        <p className="text-gray-300 mb-6 leading-relaxed">
          Véritable chef d’équipe, il communique en temps réel avec l’Agent de Trafic et le cockpit pour garantir 
          la cohérence des opérations de départ.  
          Sa rigueur et sa réactivité sont les clés d’un tarmac fluide et sécurisé.
        </p>

        <blockquote className="mt-10 text-cyan-400 text-lg italic border-l-4 border-cyan-400 pl-4">
          PFOTC forme ces superviseurs de l’instant, piliers discrets de la sécurité et de la ponctualité des vols.
        </blockquote>

        <footer className="mt-20 text-sm text-gray-500 text-center">
          © PFOTC — <span className="text-cyan-400">Pacific Hub Tahiti</span>
        </footer>
      </div>
    </main>
  );
}
