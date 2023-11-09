/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans"],
      },
      colors: {
        'scaffold': '#161616',
        'background': '#1E1E1E',
        'primary': '#EF6351',
        // 'tertiary': '#8C8C8C'
        'border': '#404040'
      }
    },
  },
  plugins: [],
}