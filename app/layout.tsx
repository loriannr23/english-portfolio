import type { Metadata } from "next";
import { Archivo, Archivo_Narrow } from "next/font/google";
import { LenisProvider } from "@/components/LenisProvider";
import { MotionInit } from "@/components/MotionInit";
import { SiteNav } from "@/components/SiteNav";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const archivoNarrow = Archivo_Narrow({
  subsets: ["latin"],
  variable: "--font-editorial",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Lorian J. / English Portfolio",
  description:
    "A year-long English portfolio archive by a Swiss ICT student for the 2026-2027 school year."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${archivoNarrow.variable}`}>
      <body>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <LenisProvider>
          <SiteNav />
          <MotionInit />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
