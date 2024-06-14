import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary:{
          dark: '#14279b',
          light: "#4aa3df",
          back: 'rgba(9, 9, 9, 0.9)',
          middle: '#484848',
          bordercolor: '#ced4da',
          lighter: '#222222',
          one: '#ffbb2c',
          two: '#5578ff',
          three: '#e80368',
          four: '#e361ff',
          five: '#47aeff',
          six: '#ffa76e',
          seven: '#dbce11',
          eight: '#4233ff',
          nine: '#b2904f',
          ten: '#b20969',
          eleven: '#ff5828',
          twelve: '#29cc61',
        }
      }
    },
  },
  plugins: [],
};
export default config;

