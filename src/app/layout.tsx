import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Roboto_Condensed } from "next/font/google";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ui/ThemeProvider";  


const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

const RobotoConsensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-robot-family",
});

const inter = Inter({
  subsets:['latin'],
  variable:'--font-inter'
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dhiya Eddine Lamamra",
  description: "Étudiant en Génie Logiciel à l'ÉTS",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-mono", jetbrainsMono.variable,RobotoConsensed.variable,inter.variable)}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
