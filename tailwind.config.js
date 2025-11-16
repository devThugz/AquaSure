export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ocean: {
          deep: '#012840',
          navy: '#012840',
          blue: '#0099A8',
          teal: '#00C4B3',
          aqua: '#00E6E6',
          seafoam: '#66FFF9',
          light: '#4BE8D9',
        },
        aqua: {
          50: '#E6FCFC',
          100: '#CCF9F9',
          200: '#99F3F3',
          300: '#66EDEE',
          400: '#33E7E8',
          500: '#00E6E6',
          600: '#00B8B8',
          700: '#008A8A',
          800: '#005C5C',
          900: '#002E2E',
        },
        teal: {
          50: '#E6F6F7',
          100: '#CCECEF',
          200: '#99DADF',
          300: '#66C7CF',
          400: '#33B5BF',
          500: '#0099A8',
          600: '#007A86',
          700: '#005C65',
          800: '#003D43',
          900: '#001F22',
        },
        soft: {
          white: '#F4FAFB',
          black: '#1A1A1A',
          gray: 'rgba(0, 0, 0, 0.15)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(0, 230, 230, 0.3)',
        'glow': '0 0 20px rgba(0, 230, 230, 0.4)',
        'glow-lg': '0 0 30px rgba(0, 230, 230, 0.5)',
        'glow-xl': '0 0 40px rgba(0, 230, 230, 0.6)',
        'card': '0 2px 10px rgba(0, 0, 0, 0.15)',
        'card-dark': '0 2px 10px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(90deg, #00E6E6, #00A8C6)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ripple': 'ripple 3s linear infinite',
        'wave': 'wave 15s linear infinite',
        'wave-reverse': 'wave-reverse 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        ripple: {
          '0%': { transform: 'scale(0.8)', opacity: 1 },
          '100%': { transform: 'scale(2.4)', opacity: 0 },
        },
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'wave-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}