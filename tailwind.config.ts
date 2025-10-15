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
        // Your Premium Dark Theme Colors
        navy: '#0f172a', // A deep, rich navy blue
        teal: '#2dd4bf', // A bright, modern teal for headlines
        yellow: '#facc15', // A vibrant yellow for buttons and accents
        'light-slate': '#cbd5e1', // For subtext
        'dark-slate': '#1e293b', // For card backgrounds
      },
    },
  },
  plugins: [],
};
export default config;

