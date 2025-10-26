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
        {/* Halo principal bleu – effet terrestre */}
        <div
          className="absolute bottom-[-140px] left-1/2 -translate-x-1/2 w-[180%] h-[520px]
                     bg-[radial-gradient(ellipse_at_center,rgba(0,200,255,0.45)_0%,rgba(0,140,255,0.25)_40%,rgba(0,60,100,0.1)_70%,transparent_90%)]
                     blur-[100px] opacity-80 rounded-full animate-pulse-slow pointer-events-none z-[0]"
        ></div>

        {/* Liseré blanc droit (horizon lumineux simple) */}
        <div
          className="absolute bottom-[0px] left-0 w-full h-[3px]
                     bg-gradient-to-r from-white/70 via-white/90 to-white/70
                     opacity-80 blur-[1px] z-[10]"
        ></div>

        {/* Contenu principal */}
        <div className="relative z-20">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
