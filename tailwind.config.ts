import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#172033",
        muted: "#667085",
        line: "#E6EAF2",
        village: {
          blue: "#3366FF",
          violet: "#7C5CFF",
          green: "#18A058",
          mint: "#E9FFF4",
          sky: "#EEF5FF"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(51, 102, 255, 0.12)",
        card: "0 10px 30px rgba(23, 32, 51, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
