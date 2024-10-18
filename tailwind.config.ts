import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Includes the `app` directory
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // If using `src` directory
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-dark": "0 4px 10px rgba(0, 0, 0, 0.25)",
        "custom-white": "0 0 12px rgba(255, 255, 255, 0.7)",
      },
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
      },
      keyframes: {
        glitch: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-3px, 3px)" },
          "40%": { transform: "translate(-3px, -3px)" },
          "60%": { transform: "translate(3px, 3px)" },
          "80%": { transform: "translate(3px, -3px)" },
          "100%": { transform: "translate(0)" },
        },
        shift: {
          "0%, 40%, 44%, 58%, 61%, 65%, 69%, 73%, 100%": {
            transform: "skewX(0deg)",
          },
          "41%": { transform: "skewX(10deg)" },
          "42%": { transform: "skewX(-10deg)" },
          "59%": { transform: "skewX(40deg) skewY(10deg)" },
          "60%": { transform: "skewX(-40deg) skewY(-10deg)" },
          "63%": { transform: "skewX(10deg) skewY(-5deg)" },
          "70%": { transform: "skewX(-50deg) skewY(-20deg)" },
          "71%": { transform: "skewX(10deg) skewY(-10deg)" },
        },
      },
      animation: {
        glitch: "glitch 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite",
        shift: "shift 1s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        ".scrollbar-none": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
};

export default config;
