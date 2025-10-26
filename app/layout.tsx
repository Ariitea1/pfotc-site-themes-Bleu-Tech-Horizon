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
          className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[160%] h-[500px]
                     bg-[radial-gradient(ellipse_at_center,rgba(0,210,255,0.45)_0%,rgba(0,140,255,0.25)_40%,rgba(255,255,255,0.05)_70%,transparent_90%)]
                     blur-[100px] opacity-90 rounded-full animate-pulse-slow pointer-events-none z-0"
        ></div>

        {/* Liseré blanc diffus visible – effet horizon lumineux */}
        <div
          className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 w-[180%] h-[450px]
                     bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.15)_40%,transparent_85%)]
                     blur-[90px] opacity-50 rounded-full pointer-events-none z-[5]"
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
