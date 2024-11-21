import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AyenaCode | Développeur Front-end React",
  description:
    "Développeur front-end React spécialisé dans la création d'applications web performantes et optimisées pour une meilleure expérience utilisateur",
  keywords: ["développeur react", "front-end", "nextjs", "portfolio"],
  authors: [{ name: "AyenaCode" }],
  openGraph: {
    title: "AyenaCode | Développeur Front-end React",
    description:
      "Développeur front-end React spécialisé dans la création d'applications web performantes",
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "font-sans", // Ceci appliquera la police Geist Sans par défaut
          "antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
