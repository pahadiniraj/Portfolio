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
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
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
