/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './core/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      error: '#D32F2F',
      buttonColor: '#AD974F',
      cardBackground: '#bfd3f1',
      teal: {
        50: '#f0fdfa',
        100: '#ccfbf1',
        200: '#99f6e4',
        300: '#6ee7b7',
        400: '#2dd4bf',
        500: '#14b8a6',
        600: '#0d9488',
        700: '#0f766e',
        800: '#115e59',
        900: '#134e4a',
        950: '#042f2e'
      },
      dark: {
        50: '#f0fdfa',
        100: '#ccfbf1',
        200: '#99f6e4',
        300: '#6ee7b7',
        400: '#2dd4bf',
        500: '#14b8a6',
        600: '#0d9488',
        700: '#0f766e',
        800: '#115e59',
        900: '#134e4a',
        950: '#042f2e'
      },
      pegasus:{
        50: '#e8eae3',
        100: '#cacbc5',
        200: '#acaea8',
        300: '#90918c',
        400: '#747571',
        500: '#595a57',
        600: '#40413f',
        700: '#292927',
        800: '#131312',
        900: '#030303'
      },
      gremlin:{
        50: '#ad974f',
        100: '#968344',
        200: '#7f6f38',
        300: '#6a5c2e',
        400: '#554923',
        500: '#413719',
        600: '#2d2610',
        700: '#1b1707',
        800: '#0b0802',
        900: '#010100'
      },
      pineapple: {
        50: '#524f07',
        100: '#615f27',
        200: '#71703f',
        300: '#828156',
        400: '#92926d',
        500: '#a4a385',
        600: '#b5b59c',
        700: '#c7c7b4',
        800: '#dadacd',
        900: '#ecece6'
      },
      turq: {
        50: '#48f7f4',
        100: '#68f8f5',
        200: '#7ff9f6',
        300: '#94faf7',
        400: '#a6fbf9',
        500: '#b7fcfa',
        600: '#c6fdfb',
        700: '#d5fefc',
        800: '#e4fefd',
        900: '#f2fffe'
      },
      turqDark: {
        50: '#48f7f4',
        100: '#3dd7d4',
        200: '#33b7b5',
        300: '#299997',
        400: '#1f7c7a',
        500: '#16605e',
        600: '#0d4544',
        700: '#062c2b',
        800: '#021514',
        900: '#000303'
      },
      mauveDark: {
        50: '#f8dff6',
        100: '#d8c2d6',
        200: '#b8a5b7',
        300: '#9a8a98',
        400: '#7c6f7b',
        500: '#60565f',
        600: '#453d45',
        700: '#2c272c',
        800: '#151215',
        900: '#030203'
      },
      mintDark: {
        50: '#afedb5',
        100: '#98ce9d',
        200: '#81b086',
        300: '#6b936f',
        400: '#567759',
        500: '#415c44',
        600: '#2e4230',
        700: '#1c2a1d',
        800: '#0b140c',
        900: '#010302'
      }
    }
  },
  plugins: [
    'tailwindcss',
    require('@tailwindcss/typography')
  ],
}
