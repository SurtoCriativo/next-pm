import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-archivo)", "sans-serif"],
        archivo: ["var(--font-archivo)", "sans-serif"],
        gochi: ["var(--font-gochi)", "cursive"],
      },
      colors: {
        // 🎨 Accent Colors
        "accent-b-blue": "#3381FF",
        "accent-purple": "#9D8AFE",
        "accent-pink": "#ED58CC",
        "accent-orange": "#FF9D3B",
        "accent-yellow": "#FABC40",
        "accent-green": "#44CB93",
        "accent-blue": "#55A1F2",

        "accent-b-blue-dark": "#143466",
        "accent-purple-dark": "#281C54",
        "accent-pink-dark": "#5D124C",
        "accent-orange-dark": "#663504",
        "accent-yellow-dark": "#644406",
        "accent-green-dark": "#084C30",
        "accent-blue-dark": "#113760",

        // 📝 Text Colors
        "text-white": "#FFFFFF",
        "text-light": "#9CA3AF",
        "text-dark": "#444D5A",
        "text-darker": "#1B1F24",

        // 🟦 Button Colors
        "button-primary": "#9D8AFE",
        "button-secondary": "#1B1F24",
        "button-hovered": "#FFFFFF",
        "button-disabled": "#E5E7EB",

        // 🪟 Surface Colors
        "surface-lighter": "#F9FAFB",
        "surface-dark": "#1B1F24",
        "surface-darker": "#0E0F12",
        "surface-border": "#374151",

        // 🔤 Background
        "background-darker": "#080B12",
      },
    },
  },
  plugins: [],
};

export default config;
