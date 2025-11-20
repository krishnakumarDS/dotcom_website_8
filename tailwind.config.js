/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dci-blue': '#007BFF',
        'dci-light-blue': '#ADD8E6',
        'dci-dark-blue': '#00308F',
        'dci-gray': '#F5F5F5',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}