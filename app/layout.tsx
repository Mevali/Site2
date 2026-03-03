import type { Metadata } from "next";
import { Montserrat, Anton } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
});

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEIRO PRORIV | Курс по нейросетям",
  description: "Освой нейросети и начни зарабатывать на создании контента",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${montserrat.variable} ${anton.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
