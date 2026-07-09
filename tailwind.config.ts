import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: "#5B7561",
          dark: "#3A4D40",
          light: "#8AA391",
          lighter: "#A6BCA9",
        },
        stone: {
          950: "#0c0d0c",
          900: "#15160f",
        },
        card: "#F7F6F3",
        divider: "#E8E6E1",
      },
      fontFamily: {
        serif: ["Newsreader", "Georgia", "serif"],
        sans: ["Public Sans", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.08em",
      },
      scale: {
        103: "1.03",
      },
    },
  },
  plugins: [],
};

export default config;
