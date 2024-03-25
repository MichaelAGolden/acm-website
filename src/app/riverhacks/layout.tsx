import type { Metadata } from "next";
import { Inter } from "next/font/google";


//import globals.css

import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ACC RiverHacks 2024",
    description: "RiverHacks 2024, proudly part of Major League Hacking, is a student-driven hackathon organized by the ACC Computer Science Club and the ACC ACM Student Chapter. Join us on April 13-14 in Austin for a dynamic weekend of innovation, collaboration, and tech excellence."
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
