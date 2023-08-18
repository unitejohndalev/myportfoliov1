import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    colors: {
      primary: "#222831",
      secondary: "#393E46",
      tertiary: "#00ADB5",
      quaternary: "#EEE",
      textColor: "#393474",
    },
  },
  plugins: [],
};
export default config;
