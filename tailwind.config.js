/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest': "#2C5F2D",
        'rust': '#D98E04',
        'dark': '#202020',
        'light-1': '#eeeeee'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      spacing: {
        '18': '72px',
        '100': '450px'
      }
    },
  },
  plugins: [],
}

