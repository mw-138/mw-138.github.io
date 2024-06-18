import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
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
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
      {
        custom: {
          primary: "#E5E5E5",
          secondary: "#1E293B",
          accent: "#F97316",
          neutral: "#0a0905",
          "base-100": "#101010",
          info: "#0EA5E9",
          success: "#22C55E",
          warning: "#EAB308",
          error: "#EF4444",
        },
      },
    ],
  },
};

export default config;
