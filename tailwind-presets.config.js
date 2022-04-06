module.exports = {
  theme: {
    extend: {
      letterSpacing: {},
      lineHeight: {},
      fontSize: {},
      boxShadow: {},
      typography: {},
      colors: {
        primary: {
          DEFAULT: '#1C4F82',
          700: '#74ABE1',
          500: '#1C4F82',
          300: '#081726'
        },
        'primary-content': {
          DEFAULT: '#B8DBFF',
          700: '#E1F0FF',
          500: '#B8DBFF',
          300: '#48A2FF'
        },
        secondary: {
          DEFAULT: '#7D919B',
          700: '#ABB8BE',
          500: '#7D919B',
          300: '#49585F'
        },
        'secondary-content': {
          DEFAULT: '#002538',
          700: '#005B8A',
          500: '#002538',
          300: '#001B29'
        },
        accent: {
          DEFAULT: '#04BFBF',
          700: '#42FBFB',
          500: '#04BFBF',
          300: '#025151'
        },
        'accent-content': {
          DEFAULT: '#253E59',
          700: '#2E4D6F',
          500: '#253E59',
          300: '#0D161F'
        },
        neutral: {
          DEFAULT: '#23282F',
          50: '#738297',
          700: '#46505E',
          500: '#23282F',
          300: '#0B0D0F'
        },
        'neutral-content': {
          DEFAULT: '#C8D2E0',
          700: '#E2E7EF',
          500: '#C8D2E0',
          300: '#8097B8'
        },
        base: {
          DEFAULT: '#212121',
          700: '#353535',
          500: '#212121',
          300: '#121212'
        },
        'base-content': {
          DEFAULT: '#D4D4D4',
          700: '#EEEEEE',
          500: '#D4D4D4',
          300: '#B0B0B0'
        }
      },
      spacing: {},
      fontFamily: {}
    }
  },
  variants: {
    extend: {}
  },
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=corporate]'],
          accent: '#04BFBF'
        },
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=business]'],
          accent: '#04BFBF'
        }
      }
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('daisyui')
  ]
};
