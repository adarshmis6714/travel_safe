import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F4C81",
          50: "#EAF1F8",
          100: "#CFE0EE",
          200: "#9FC1DD",
          300: "#6FA2CC",
          400: "#3F83BB",
          500: "#0F4C81",
          600: "#0D4372",
          700: "#0A375D",
          800: "#082A48",
          900: "#051D33",
          950: "#03121F",
        },
        secondary: {
          DEFAULT: "#00B4D8",
          50: "#E5FAFE",
          100: "#CCF4FD",
          200: "#99E9FB",
          300: "#66DEF9",
          400: "#33D3F7",
          500: "#00B4D8",
          600: "#0090AD",
          700: "#006C82",
          800: "#004856",
          900: "#00242B",
        },
        accent: {
          DEFAULT: "#FFB703",
          50: "#FFF8E6",
          100: "#FFEDBF",
          200: "#FFDD80",
          300: "#FFCC40",
          400: "#FFB703",
          500: "#E6A400",
          600: "#B38000",
          700: "#805C00",
          800: "#4D3700",
          900: "#1A1300",
        },
        ink: {
          DEFAULT: "#0B1F33",
          light: "#F7FAFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(180deg, rgba(5,29,51,0.15) 0%, rgba(5,29,51,0.55) 55%, rgba(5,29,51,0.92) 100%)",
        "compass-radial":
          "radial-gradient(circle at 50% 50%, rgba(0,180,216,0.18) 0%, rgba(0,180,216,0) 70%)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(5, 29, 51, 0.18)",
        card: "0 10px 30px -12px rgba(5, 29, 51, 0.25)",
        "card-hover": "0 20px 40px -12px rgba(5, 29, 51, 0.35)",
      },
      borderRadius: {
        xl2: "1.25rem",
        "3xl": "1.75rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "ping-slow": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(1.4)", opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "fade-up": "fade-up 0.7s ease forwards",
        "ping-slow": "ping-slow 2.4s cubic-bezier(0,0,0.2,1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
