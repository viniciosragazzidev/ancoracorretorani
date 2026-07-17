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

export const metadata: Metadata = {
  title: "Âncora Corretora | Planos de Saúde e Odonto em Nova Iguaçu e RJ",
  description: "Cotação rápida de planos de saúde e odontológicos multimarcas. Compare Amil, Bradesco, SulAmérica, Unimed, Assim, Cemeru e Porto Saúde.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" }
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className="h-full scroll-smooth"
    >
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-full flex flex-col antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.CORRETOP_HUB_URL = "https://corretop.vercel.app/api/webhooks/leads";
              window.CORRETOP_HUB_TOKEN = "crt_live_PCIpgmgdjDhwVn6-Ylt8rK84klwYK9C7-4_uwPdb2KQ";
            `
          }}
        />
        {children}
        <Toaster richColors closeButton position="top-center" />
      </body>
    </html>
  );
}
