"use client";

import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section className="relative bg-transparent py-16 px-6">
      <div className="relative z-10 max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        <ServiceCard
          title="Flight Operations Services"
          bullets={[
            "OCC, Dispatch, Loadsheet",
            "Supervision 24/7",
            "Solutions remote sur mesure",
          ]}
        />

        <ServiceCard
          title="Training & CBTA Modules"
          bullets={[
            "Formation initiale & récurrente",
            "CBTA conforme EASA/ICAO",
            "Modules certifiants personnalisés",
          ]}
        />

        <ServiceCard
          title="Consulting & Partnerships"
          bullets={[
            "OMD, MEL/ETOPS, DAC, Ferry",
            "Support réglementaire & conformité",
            "Expertise opérationnelle reconnue",
          ]}
        />

      </div>
    </section>
  );
}
