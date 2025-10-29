"use client";

export default function Hero() {
  return (
    <section className="max-w-5xl text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
        Pacific Flight Operations <br />
        <span className="text-gradient">& Training Center</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-300 mb-10">
        Expertise, Formation & Innovation au service des opérations aériennes.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="/formations" className="btn-pfotc">
          Découvrir les formations
        </a>
        <a href="/services" className="btn-pfotc">
          Voir les services
        </a>
      </div>
    </section>
  );
}
