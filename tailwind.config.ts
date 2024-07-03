import type { Config } from "tailwindcss";

const config: Config = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['"Kanit"', 'sans-serif'],
        tenor: ['"Tenor Sans"', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        green: "#4EB748"
      }
    },
  },
  plugins: [],
};
export default config;
