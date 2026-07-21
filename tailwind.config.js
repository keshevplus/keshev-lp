/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Arial', 'sans-serif'],
      },
      colors: {
        cream: '#FAF9F5',
        forest: {
          DEFAULT: '#0F3324',
          light: '#154A34',
        },
      },
    },
  },
  plugins: [],
};
