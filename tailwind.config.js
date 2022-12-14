const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      screens: {
        '3xl': '100rem',
        lgx2: '150rem',
      },
      colors: {
        primary: {
          100: '#E6F6FE',
          200: '#C0EAFC',
          300: 'rgba(255, 150, 48, 0.2)',
          400: '#4F6F39',
          500: '#4F6F39',
          600: '#58a35b',
          700: '#026592',
          800: '#014C6E',
          900: '#013349',
        },
        secondary: {
          100: '#014c6e',
        },
        opacityColor: {
          100: '#f9f9f9cc',
          200: '#ebffeceb',
          300: '#ededed9c',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
      },
      lineHeight: {
        hero: '4.5rem',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  variants: {},
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/typography')],
});
