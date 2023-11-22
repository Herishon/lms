/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      // padding: '1rem',
    },
    extend: {
      fontFamily: {
        'open-sans': '"Open Sans", sans-serif',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'lms-atlantis': '#9ACA3C',
        'lms-citrus': '#77AC0E',
        'lms-rangoon-green': '#2D3027',
        'lms-pine-tree': '#24281D',
        'lms-black-squeeze': '#F2F2F1',
        'lms-aqua-haze': '#E1E2E0',
        'lms-gamboge': '#E4A80E',
        'lms-mahogany': '#CA3C3C',
      },
    },
  },
  plugins: [],
}
