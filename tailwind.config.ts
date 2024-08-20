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
      },
      colors: {
        primary: "#1D4ED8", // Custom primary color
        secondary: "#9333EA", // Custom secondary color
        accent: "#F59E0B", // Custom accent color
        muted: "#6B7280", // Custom muted color
        success: "#10B981", // Custom success color
        danger: "#EF4444", // Custom danger color
        warning: "#FBBF24", // Custom warning color
        info: "#3B82F6", // Custom info color
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"], // Default font for general text
        heading: ["Poppins", "sans-serif"], // Font for headings
        cursive: ["Dancing Script", "cursive"], // Cursive font for specific text
      },
      fontSize: {
        xxs: ".65rem", // 12px

        xs: ".75rem", // 12px
        sm: ".875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
        "6xl": "4rem", // 64px
      },
      backgroundImage: {
        "btn-gradient": "linear-gradient(to bottom left, #00C9FF, #92FE9D)",
      },
      backgroundClip: {
        text: "text",
      },
      textFillColor: {
        transparent: "transparent",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["responsive", "hover"],
      backgroundClip: ["responsive", "hover"],
      textFillColor: ["responsive", "hover"],
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".text-gradient": {
          background: "linear-gradient(to bottom left, #00C9FF, #92FE9D)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        ".text-glow": {
          textShadow: "0 0 10px rgba(255, 255, 255, 0.7)", // Glow effect
        },
      });
    },
  ],
};

export default config;
