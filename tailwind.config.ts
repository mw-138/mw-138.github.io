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
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "lofi",
      "black",
      // {
      //   mytheme: {
      //     primary: "#E5E5E5",
      //     secondary: "#1E293B",
      //     accent: "#F97316",
      //     neutral: "#0a0905",
      //     "base-100": "#101010",
      //     info: "#0EA5E9",
      //     success: "#22C55E",
      //     warning: "#EAB308",
      //     error: "#EF4444",
      //   },
      // },
    ],
  },
};
export default config;
