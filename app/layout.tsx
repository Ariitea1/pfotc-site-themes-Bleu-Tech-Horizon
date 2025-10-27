import "./globals.css";
import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "PFOTC – Pacific Flight Operations & Training Center",
  description:
    "Expertise, Formation & Innovation au service des opérations aériennes.",
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
      <body
        className="
          relative 
          overflow-x-hidden 
          text-white 
          min-h-screen 
          bg-[#0b1220] 
          bg-[url('/background_horizon.png')] 
          bg-no-repeat 
          bg-cover 
          bg-center 
          bg-fixed 
          bg-bottom
        "
      >
        {/* 🌌 Halo central derrière le bloc titre */}
        <div className="hero-halo"></div>

        {/* Conteneur global du contenu */}
        <div className="relative z-10">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>

        {/* Halo et ligne lumineuse – Horizon animé */}
        <div className="horizon"></div>
        <div className="horizon-line"></div>
      </body>
    </html>
  );
}
