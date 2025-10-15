import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A192F',
        teal: '#00A99D',
        yellow: '#FFD100',
        grey: {
          DEFAULT: '#A0AEC0',
          light: '#F7FAFC',
          dark: '#2D3748',
        },
      },
    },
  },
  plugins: [],
};
export default config;
