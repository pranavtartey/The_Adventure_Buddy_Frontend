/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: '#2093BF',
        contactBorderBg:`#FDFDFF`,
        greycolor:`#6E6E6E`,
      },
    },
  },
  varients: {
    extend: {},
  },
  plugins: [],
};
