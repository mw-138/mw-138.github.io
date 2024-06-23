import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        netflix: {
          red: "#d81f26",
        },
        "premier-league": {
          purple: "#38003C",
          blue: "#04f5ff",
          pink: "	#e90052",
          green: "#00ff85",
          yellow: "#EAFF04",
        },
        "subscription-tracker": {
          text: {
            50: "#eff5f2",
            100: "#e0ebe5",
            200: "#c0d8cb",
            300: "#a1c4b1",
            400: "#82b097",
            500: "#629d7d",
            600: "#4f7d64",
            700: "#3b5e4b",
            800: "#273f32",
            900: "#141f19",
            950: "#0a100c",
          },
          background: {
            50: "#edf7f2",
            100: "#dbf0e4",
            200: "#b7e1c9",
            300: "#93d2ae",
            400: "#6fc393",
            500: "#4bb479",
            600: "#3c9060",
            700: "#2d6c48",
            800: "#1e4830",
            900: "#0f2418",
            950: "#08120c",
          },
          primary: {
            50: "#ebfaf1",
            100: "#d6f5e2",
            200: "#adebc6",
            300: "#85e0a9",
            400: "#5cd68d",
            500: "#33cc70",
            600: "#29a35a",
            700: "#1f7a43",
            800: "#14522d",
            900: "#0a2916",
            950: "#05140b",
          },
          secondary: {
            50: "#e8fcf0",
            100: "#d2f9e2",
            200: "#a4f4c4",
            300: "#77eea7",
            400: "#49e989",
            500: "#1ce36c",
            600: "#16b656",
            700: "#118841",
            800: "#0b5b2b",
            900: "#062d16",
            950: "#03170b",
          },
          accent: {
            50: "#e6fff0",
            100: "#cdfee1",
            200: "#9afec2",
            300: "#68fda4",
            400: "#35fd85",
            500: "#03fc67",
            600: "#02ca52",
            700: "#02973e",
            800: "#016529",
            900: "#013215",
            950: "#00190a",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
} satisfies Config;

export default config;
