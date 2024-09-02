import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "1px 0 8px white",
        "inner-md": "inset 4px 2px 5px rgba(0, 0, 0, 0.5)",
      },
      colors: {
        primary: "#1D4ED8",
        secondary: "#9333EA",
        accent: "#F59E0B",
        muted: "#6B7280",
        success: "#10B981",
        danger: "#EF4444",
        warning: "#FBBF24",
        info: "#3B82F6",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
        cursive: ["Dancing Script", "cursive"],
      },
      fontSize: {
        xxs: ".65rem",
        xs: ".75rem",
        sm: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
      },
      backgroundImage: {
        "btn-gradient": "linear-gradient(to bottom left, #614385,  #516395)",
      },
      backgroundClip: {
        text: "text",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".text-glow": {
          textShadow: "0 0 10px rgba(255, 255, 255, 0.7)",
        },
        ".scrollbar-hide": {
          /* Hide scrollbar for Firefox, IE, Edge */
          scrollbarWidth: "none",
          /* Hide scrollbar for Chrome, Safari and Opera */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    },
  ],
};

export default config;
