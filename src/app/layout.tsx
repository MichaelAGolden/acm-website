import type { Metadata } from "next";
import { Inter } from "next/font/google";

//import globals.css
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ACC Riverhacks 2024",
  description: "Riverhacks 2024 is an Major League Hacking, student organized and run hackathon, held this year from April 13th-14th in Austin by the ACC Computer Science Club."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
