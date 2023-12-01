import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    colors: {
      cyan: '#c5fcff',
      cyan200: '#80deea',
      cyan300: '#4dd0e1',
      cyan400: '#26c6da',
      cyan500: '#00bcd4',
      cyan600: '#00acc1',
      cyan700: '#0097a7',
      cyan800: '#00838f',
      cyan900: '#006064',
      black: '#000',
      white: '#fff',
      grey: '#f6f6f6'
    }
  },
  plugins: []
}
export default config
