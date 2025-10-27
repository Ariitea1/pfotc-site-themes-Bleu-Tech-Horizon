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
      <body
        className="
          relative 
          overflow-x-hidden 
          text-white 
          min-h-screen 
          bg-[#0b1220] 
          font-inter
        "
      >
        {/* === FOND D'ÉCRAN HORIZON BLEU (image fixe) === */}
        <div
          className="fixed inset-0 -z-20"
          style={{
            backgroundImage: "url('/background_horizon.png')",
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        ></div>

        {/* === EFFETS LUMINEUX (halo + ligne d’horizon) === */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="horizon"></div>
          <div className="horizon-line"></div>
        </div>

        {/* === CONTENU DU SITE === */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
