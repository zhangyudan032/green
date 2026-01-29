/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wolf-gray': '#4A5568',
        'wolf-dark': '#2D3748',
        'forest-green': '#2F855A',
        'sky-blue': '#63B3ED',
      }
    },
  },
  plugins: [],
}
