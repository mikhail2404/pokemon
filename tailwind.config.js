/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#0F172A",
        gray: "#334155"
      },
      height: {
        "10v": "10vh",
        "90v": "90vh"
      }
    },
  },
  plugins: [],
}
