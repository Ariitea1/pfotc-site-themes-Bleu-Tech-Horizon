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
      <body className="relative overflow-x-hidden bg-[#0b1220] text-white">
        {/* 🌌 Halo bleu principal (effet terrestre diffus) */}
        <div
          className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[180%] h-[600px]
                     bg-[radial-gradient(ellipse_at_center,rgba(0,200,255,0.45)_0%,rgba(0,120,255,0.25)_40%,rgba(0,40,80,0.1)_70%,transparent_90%)]
                     blur-[120px] opacity-80 rounded-full pointer-events-none z-[0]"
        ></div>

        {/* ⚪ Liseré lumineux net – effet horizon */}
        <div
          className="absolute bottom-[-5px] left-0 w-full h-[4px]
                     bg-gradient-to-r from-transparent via-white to-transparent
                     opacity-70 blur-[2px] z-[2]"
        ></div>

        {/* Contenu principal */}
        <div className="relative z-10">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
