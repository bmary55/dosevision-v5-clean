import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0b1a33",
        navyHover: "#1b2a4d",
        lightgray: "#f9fafb",
      },
      borderRadius: { '2xl': '1rem' }
    },
  },
  plugins: [],
};
export default config;
