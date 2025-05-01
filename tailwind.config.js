/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e0fdff',
          100: '#bcf8ff',
          200: '#85f0ff',
          300: '#4de5ff',
          400: '#1cd6ff',
          500: '#00beef',
          600: '#0095c6',
          700: '#006f9e',
          800: '#005576',
          900: '#003a4f',
          950: '#00233b',
        },
        secondary: {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#bae0fd',
          300: '#7dcafb',
          400: '#38adf7',
          500: '#0e8feb',
          600: '#0072cb',
          700: '#0059a5',
          800: '#064d88',
          900: '#0a4070',
          950: '#062a4e',
        },
        accent: {
          50: '#fef2ff',
          100: '#fde6ff',
          200: '#fbcdfe',
          300: '#f9a6fc',
          400: '#f571fa',
          500: '#e935ef',
          600: '#d220ce',
          700: '#ae16a9',
          800: '#8e1589',
          900: '#751570',
          950: '#4a0347',
        },
        success: {
          50: '#eefff5',
          100: '#d7ffea',
          200: '#b2ffd6',
          300: '#79ffb5',
          400: '#3efa8e',
          500: '#19e574',
          600: '#04bf59',
          700: '#04974a',
          800: '#09773e',
          900: '#0a6236',
          950: '#003820',
        },
        warning: {
          50: '#fffbea',
          100: '#fff5c5',
          200: '#ffea85',
          300: '#ffd946',
          400: '#ffc51b',
          500: '#faa702',
          600: '#dd7d00',
          700: '#b35702',
          800: '#934208',
          900: '#7a380c',
          950: '#461a00',
        },
        error: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
          950: '#4c0519',
        },
        dark: {
          100: '#1a1a2e',
          200: '#16213e',
          300: '#0f172a',
          400: '#0d1425',
          500: '#0b101f',
          600: '#080c18',
          700: '#050812',
          800: '#03050b',
          900: '#010204',
          950: '#000000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'], // Or keep Orbitron if needed
      },
      
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        glow: {
          '0%': {
            boxShadow: '0 0 5px rgba(0, 190, 239, 0.5), 0 0 10px rgba(0, 190, 239, 0.3)'
          },
          '100%': {
            boxShadow: '0 0 10px rgba(0, 190, 239, 0.8), 0 0 20px rgba(0, 190, 239, 0.5), 0 0 30px rgba(0, 190, 239, 0.3)'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        neon: '0 0 5px rgba(0, 190, 239, 0.5), 0 0 10px rgba(0, 190, 239, 0.3)',
        'neon-hover': '0 0 10px rgba(0, 190, 239, 0.8), 0 0 20px rgba(0, 190, 239, 0.5), 0 0 30px rgba(0, 190, 239, 0.3)',
        'neon-purple': '0 0 5px rgba(233, 53, 239, 0.5), 0 0 10px rgba(233, 53, 239, 0.3)',
        'neon-green': '0 0 5px rgba(25, 229, 116, 0.5), 0 0 10px rgba(25, 229, 116, 0.3)',
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(to bottom right, rgba(16, 23, 42, 0.9), rgba(11, 16, 31, 0.95))',
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};