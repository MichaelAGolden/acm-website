import type { Metadata } from "next";
import { Inter } from "next/font/google";


//import globals.css
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ACM at ACC",
  description: "Riverhacks 2024 is an Major League Hacking, student organized and run hackathon, held this year from April 13th-14th in Austin by the ACC Computer Science Club."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
