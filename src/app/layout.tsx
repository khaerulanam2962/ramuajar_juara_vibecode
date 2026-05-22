import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "./components/Toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RamuAjar AI — Rancang Bahan Ajar dengan Mudah",
  description: "RamuAjar AI membantu guru, trainer, dan mentor meramu draf singkat menjadi paket dokumen pembelajaran lengkap (Modul, Panduan, LKPD, Kuis, Rubrik) secara otomatis dengan validasi pedagogis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-inter)]">
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
