/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
      },
      colors: {
        brandBlack: "#1a1a1a",
        brandRed: "#8B0000",
        brandGray: "#3a3a3a",
      },
      dropShadow: {
        glow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
      },
    },
  },
  plugins: [],
}
