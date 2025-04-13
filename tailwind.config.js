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
        'forest': "#336021",
        'rust': '#D98E04',
        'dark': '#202020',
        'light-1': '#eeeeee',
        'gray-1': '#D9D9D9',
        'gray-2': '#565454',
        'forest-hover': "#3e7a25",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      spacing: {
        '18': '72px',
        '100': '450px',
        '700': '700px'
      },
      screens: {
        'xs': '420px'
      }
    },
  },
  plugins: [],
}

