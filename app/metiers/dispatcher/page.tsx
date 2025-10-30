"use client";
import { useEffect, useState } from "react";

export default function DispatcherPage() {
  const [textIndex, setTextIndex] = useState(0);

  const lines = [
    "Dans l’ombre des opérations, ils calculent, anticipent et coordonnent.",
    "Le Flight Dispatcher (ou Agent d’Opérations Aériennes) est la sentinelle des opérations.",
    "Avant chaque vol, il analyse la météo, les NOTAMs, la configuration avion, le routing et les performances afin d’élaborer un plan de vol sûr, économique et conforme à la réglementation.",
    "Planification des routes, carburant et alternates.",
    "Analyse météo et NOTAM en temps réel.",
    "Suivi de vol et communication équipage/OCC.",
    "Coordination interservices (maintenance, handling, ATC).",
    "Véritable chef d’orchestre des opérations sol/vol, il conjugue expertise technique, rigueur réglementaire et sens de la décision.",
    "Dans le silence des salles OCC, il veille — pour que chaque décollage se fasse en toute sécurité et que chaque équipage dispose des meilleures conditions de vol.",
    "PFOTC forme ces femmes et ces hommes de l’ombre, garants du ciel et du lien entre la terre et le vol.",
  ];

  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    if (textIndex < lines.length) {
      const currentLine = lines[textIndex];
      let charIndex = 0;

      const interval = setInterval(() => {
        if (charIndex < currentLine.length) {
          setCurrentText(currentLine.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(interval);
          setDisplayedLines((prev) => [...prev, currentLine]);
          setCurrentText("");
          setTimeout(() => setTextIndex(textIndex + 1), 600); // délai entre les lignes
        }
      }, 25); // vitesse de frappe
      return () => clearInterval(interval);
    }
  }, [textIndex]);

  return (
    <main className="relative overflow-hidden bg-[#071021] text-white min-h-screen">
      {/* === IMAGE DE FOND === */}
      <section className="relative w-full h-[100vh] overflow-hidden flex items-center justify-center text-center px-8">
        <img
          src="/images/fd_occ_pfctc.png"
          alt="Flight Dispatcher OCC"
          className="absolute inset-0 w-full h-full object-cover brightness-95 z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071021]/60 via-[#071021]/30 to-[#071021]/70 z-10" />

        {/* === TEXTE AVEC EFFET TYPING === */}
        <div className="relative z-20 max-w-4xl mx-auto text-blue-100 font-light leading-relaxed text-left space-y-4 backdrop-blur-sm p-6 rounded-lg bg-black/20 border border-white/10">
          {displayedLines.map((line, i) => (
            <p key={i} className="animate-fade-in">
              {line}
            </p>
          ))}

          {textIndex < lines.length && (
            <p className="inline-block">
              {currentText}
              <span className="cursor">▌</span>
            </p>
          )}
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="relative z-10 mt-20 text-sm text-gray-500 text-center pb-10">
        © PFOTC — <span className="text-cyan-400">Pacific Hub Tahiti</span>
      </footer>

      {/* === STYLES === */}
      <style jsx>{`
        .cursor {
          display: inline-block;
          margin-left: 3px;
          width: 8px;
          animation: blink 1s infinite;
          color: #00ffff;
        }

        @keyframes blink {
          0%, 50%, 100% {
            opacity: 1;
          }
          25%, 75% {
            opacity: 0;
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
