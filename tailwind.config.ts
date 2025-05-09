import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    colors: {
      ...colors,
      primary: colors.yellow,
      secondary: colors.green,
    },
  },
  plugins: [],
} satisfies Config;
