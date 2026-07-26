import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "YescaBox | Inteligencia Financiera sin Esfuerzo",
  description:
    "La primera plataforma de gestión financiera diseñada para emprendedores que odian el papeleo. Inteligencia artificial que trabaja para ti.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body
        className={`${plusJakartaSans.className} bg-background text-on-background overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container`}
      >
        {children}
      </body>
    </html>
  );
}
