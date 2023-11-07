/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: "576px",
      tablet: "768px",
      desktop: "992px",
      wide: "1200px",
      huge: "1800px"
    },
    extend: {},
  },
  plugins: [],
}

