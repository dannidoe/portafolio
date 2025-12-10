import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadatos para el SEO y título del portafolio
export const metadata: Metadata = {
  title: "Portafolio · Daniela Aguilar",
  description: "Portafolio profesional de Ingeniería BIM y diseño MEP en Colombia. Experiencia en redes hidrosanitarias, gas y protección contra incendios.",
  keywords: ["Portafolio", "Ingeniería Civil", "BIM", "MEP", "Redes Hidrosanitarias", "Protección Contra Incendios", "Colombia"],
  authors: [{ name: "Daniela Aguilar", url: "https://danielaf-aguilar.vercel.app" }],
  openGraph: {
    title: "Portafolio · Daniela Aguilar",
    description: "Portafolio profesional de Ingeniería BIM y diseño MEP en Colombia.",
    url: "https://danielaf-aguilar.vercel.app",
    siteName: "Portafolio Daniela Aguilar",
    images: [
      {
        url: "https://danielaf-aguilar.vercel.app/images/og-image.png", // puedes poner tu imagen destacada
        width: 1200,
        height: 630,
        alt: "Portafolio de Daniela Aguilar",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
