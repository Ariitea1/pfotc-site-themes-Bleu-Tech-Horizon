import "./globals.css";

export const metadata = {
  title: "PFOTC – Test Horizon Background",
  description: "Vérification du fond d’écran horizon bleu PFOTC.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="text-white min-h-screen bg-[#0b1220]">
        <div
          style={{
            backgroundImage: "url('/background_horizon.png')",
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            height: "100vh",
            width: "100%",
          }}
        ></div>
      </body>
    </html>
  );
}
