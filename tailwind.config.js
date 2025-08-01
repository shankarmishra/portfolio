/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#1a1a1a',
        accent: '#333333',
        'text-primary': '#ffffff',
        'text-secondary': '#a0a0a0',
        'text-accent': '#808080',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '16px',
      },
      boxShadow: {
        card: '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
} 