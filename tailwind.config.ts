import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accentcolor: "#E54065",
        backgroundcolor: "#F4F5F9",
        bordercolor: "#CFD2DC",
        textcolor: "#636363",
        filterbuttoncolor: "#E1E4EA",
        readbgcolor: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
export default config;
