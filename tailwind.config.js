/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'asphalt-red': '#B30000',
        'asphalt-dark': '#0D0D0D',
        'asphalt-light': '#1A1A1A',
      },
      fontFamily: {
        'alex': ['Alex Brush', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(179, 0, 0, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(179, 0, 0, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}

