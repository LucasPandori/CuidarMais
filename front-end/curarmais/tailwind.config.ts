import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      overflow: {
        overlay: "overlay",
      },
      colors: {
        "primary-dark-blue": "#4036ef",	
        "primary-yellow": "#fbb91d",
        "primary-white": "#ffffff",
        "primary-black": "#000000",
        "primary-gray": "#c4c4c4",
        "primary-pink": "#ff6769",
        "secondary-pink": "#ffcaca",
      },
    },
  },
  plugins: [],
} satisfies Config;
