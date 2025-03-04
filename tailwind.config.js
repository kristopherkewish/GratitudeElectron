/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT';

export default withMT({
  content: ['./src/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'slate-800': 'rgb(30 41 59)',
        'slate-900': 'rgb(15 23 42)',
        'gratitudeGreen1': '#CCD5AE',
        'gratitudeGreen2': '#E9EDC9',
        'gratitudeWhite': '#FEFAE0',
        'gratitudeBeige': '#FAEDCD',
        'gratitudeBrown': '#8E6C4B'
      }
    }
  },
  variants: {
    extend: {},
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui']
    }
  },
  plugins: []
});
