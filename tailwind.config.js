/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Voces', 'Aldrich'],
        display: ['Audiowide'],
      },
      colors: {
        black: {
          100: '#ccd3d8',
          200: '#99a7b1',
          300: '#667a89',
          400: '#334e62',
          500: '#00223b',
          600: '#001b2f',
          700: '#001423',
          800: '#000e18',
          900: '#00070c',
        },
        indigo: {
          100: '#cddee8',
          200: '#9abcd1',
          300: '#689bba',
          400: '#3579a3',
          500: '#03588c',
          600: '#024670',
          700: '#023554',
          800: '#012338',
          900: '#01121c',
        },
        teal: {
          100: '#ccf2f7',
          200: '#99e4f0',
          300: '#66d7e8',
          400: '#33c9e1',
          500: '#00bcd9',
          600: '#0096ae',
          700: '#007182',
          800: '#004b57',
          900: '#00262b',
        },
        red: {
          100: '#fed2d6',
          200: '#fca6ac',
          300: '#fb7983',
          400: '#f94d59',
          500: '#f82030',
          600: '#c61a26',
          700: '#95131d',
          800: '#630d13',
          900: '#32060a',
        },
        yellow: {
          100: "#fff1cc",
          200: "#ffe399",
          300: "#ffd567",
          400: "#ffc734",
          500: "#ffb901",
          600: "#cc9401",
          700: "#996f01",
          800: "#664a00",
          900: "#332500"
},
      },
      dropShadow: {
        burn: '0px -10px 5px #EA0331',
      },
      boxShadow: {
        burn: '0px 0px 10px 2px #f82030',
      },
      spacing: {
        '10vw': '10vw'
      }
    },
  },
  plugins: [],
};
