import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wafoulashes",
  icons: {
    icon: "/favicon.ico",
  },
  description: "Réservez vos prestations beauté en ligne : extensions de cils, soins sourcils, blanchiment dentaire avec Wafoulashes en Île-de-France.",
  keywords: "wafoulashes, cils, sourcils, blanchiment dentaire, beauté, réservation, esthétique, browlift, airbrush, paris, ile-de-france, idf, rehaussement, retouche, strass",
  authors: [{ name: "Wafoulashes", url: "https://wafoulashes.fr" }],
  openGraph: {
    title: "Wafoulashes",
    description: "Réservez vos prestations beauté en ligne : cils, sourcils et blanchiment dentaire.",
    url: "https://wafoulashes.fr",
    siteName: "Wafoulashes",
    images: [
      {
        url: "https://www.wafoulashes.fr/img/cils.jpg",
        width: 1200,
        height: 630,
        alt: "Wafoulashes - beauté à prix doux",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet" />
      </head>
      <body
        className={"font-inter"}
      >
        {children}
      </body>
    </html>
  );
}
