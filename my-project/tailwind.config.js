/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle,rgb(245, 110, 0),rgb(27, 14, 1),rgb(12, 8, 3))',
      },
    },
  },
  plugins: [],
}