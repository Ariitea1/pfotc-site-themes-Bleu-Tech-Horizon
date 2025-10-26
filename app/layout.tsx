import "./globals.css";
import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "PFOTC – Pacific Flight Operations & Training Center",
  description: "Expertise, formation et innovation au service des opérations aériennes.",
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
      {/* 👉 Applique l'image de fond via la classe body-horizon */}
      <body className="body-horizon">
        {/* Enlève les halos/overlays qui masquent l'image */}
        {/* <div className="halo" /> */}
        {/* <div className="aura" /> */}

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
