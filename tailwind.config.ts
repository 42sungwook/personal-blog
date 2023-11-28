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
      cyan500: '#003d40'
    }
  },
  plugins: []
}
export default config
