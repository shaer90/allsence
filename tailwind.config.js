/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#E91E8C',
          'pink-light': '#FF6EC7',
          'pink-dark': '#C2185B',
          navy: '#1A237E',
          purple: '#6A1B9A',
          orange: '#E65100',
        }
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(233, 30, 140, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(233, 30, 140, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
