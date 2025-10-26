import "./globals.css";
import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "PFOTC – Pacific Flight Operations & Training Center",
  description:
    "Expertise, formation et innovation au service des opérations aériennes.",
  icons: {
    icon: [
      { url: "/favicon_transparent.png", type: "image/png" },
      { url: "/favicon_bleu_nuit.png", type: "image/png" },
    ],
    shortcut: ["/favicon_transparent.png"],
    apple: ["/favicon_bleu_nuit.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="relative overflow-x-hidden bg-[#071425] text-white">
        {/* Halo bleu diffus */}
        <div
          className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[160%] h-[600px]
                     bg-[radial-gradient(ellipse_at_center,rgba(0,200,255,0.3)_0%,rgba(0,120,255,0.2)_40%,transparent_90%)]
                     blur-[120px] opacity-80 rounded-full pointer-events-none z-[0]"
        ></div>

        {/* 🌌 Courbe d’horizon lumineuse */}
        <div
          className="absolute bottom-[60px] left-0 w-full h-[200px]
                     bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.9)_0%,rgba(80,180,255,0.3)_25%,transparent_70%)]
                     opacity-70 blur-[50px] pointer-events-none z-[1]"
        ></div>

        {/* Liseré blanc net au sommet de la courbe */}
        <div
          className="absolute bottom-[140px] left-0 w-full h-[2px]
                     bg-gradient-to-r from-transparent via-white to-transparent
                     opacity-80 blur-[0.5px] z-[2]"
        ></div>

        {/* Contenu principal */}
        <div className="relative z-[10]">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
