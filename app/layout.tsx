import type { Metadata } from "next";
import { Lora, Titillium_Web } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  variable: "--font-titillium",
  display: "swap",
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tesori dei Faraoni – Scuderie del Quirinale",
  description:
    "Un viaggio straordinario nel cuore dell'antica civiltà egizia. 130 capolavori provenienti dai più importanti musei dell'Egitto alle Scuderie del Quirinale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${lora.variable} ${titilliumWeb.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
