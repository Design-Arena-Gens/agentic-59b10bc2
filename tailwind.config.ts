import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3faf3',
          100: '#daf2d8',
          200: '#b5e5b2',
          300: '#8ed889',
          400: '#66cb5f',
          500: '#46b644',
          600: '#349035',
          700: '#256827',
          800: '#16411a',
          900: '#091a0b'
        }
      },
      fontFamily: {
        display: ['"Poppins"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif']
      },
      boxShadow: {
        soft: '0 15px 45px rgba(0, 0, 0, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
