import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GoDry | Plataforma de transporte compartido",
  description: "GoDry conecta conductores y pasajeros con rutas similares, ofreciendo una solución digital para transporte eficiente y seguro.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  keywords: "transporte compartido, conductores, pasajeros, rutas similares, GoDry",
  robots: "index, follow",
  openGraph: {
    title: "GoDry | Plataforma de transporte compartido",
    description: "Conecta conductores y pasajeros con rutas similares. ¡Únete a GoDry!",
    type: "website",
    url: "https://web.godry.app",
    images: [
      {
        url: "/public/img/1.png",
        alt: "Logo de GoDry",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
