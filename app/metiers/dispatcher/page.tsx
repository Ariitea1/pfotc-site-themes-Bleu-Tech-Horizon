{/* === HERO IMMERSIF PFOTC === */}
<section className="relative w-full h-[85vh] overflow-hidden">
  <Image
    src="images/fd_occ_pfctc.png" // ✅ chemin corrigé (sans slash)
    alt="Flight Dispatcher OCC"
    fill
    className="object-cover brightness-95"
    priority
  />

  {/* Dégradé horizon PFOTC */}
  <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-cyan-800/40 to-purple-900/60" />

  {/* Halo lumineux */}
  <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />

  {/* Texte principal sur l’image */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
    <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 transition-all duration-700">
      Flight Dispatcher
    </h1>

    <p className="mt-6 text-lg md:text-xl max-w-2xl text-blue-100 transition-opacity duration-700 delay-200">
      Au cœur du centre des opérations – l’intelligence du vol sous l’horizon du Pacifique.
    </p>
  </div>
</section>
