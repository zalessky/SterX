import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "СТО ROLF Энгельс — Профессиональный автосервис",
  description: "Официальный партнер ROLF Oil. Качественное техническое обслуживание и ремонт автомобилей в Энгельсе.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`${montserrat.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
