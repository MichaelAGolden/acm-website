import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './components/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {

        border: "hsl(var(--border))",
        "border-border\/20": "hsl(var(--border), 0.2)",
        "border-border\/40": "hsl(var(--border), 0.4)",
        "border-border\/60": "hsl(var(--border), 0.6)",

        foreground: "hsl(var(--foreground))",
        "text-foreground": "hsl(var(--foreground))",
        "text-foreground\/60": "hsl(var(--foreground), 0.6)",
        "text-foreground\/80": "hsl(var(--foreground), 0.8)",

        background: "hsl(var(--background))",
        "text-background": "hsl(var(--background))",
        "text-background\/20": "hsl(var(--background), 0.2)",
        "text-background\/60": "hsl(var(--background), 0.6)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config