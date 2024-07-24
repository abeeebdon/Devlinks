import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: '#633CFF',
        red: '#FF3939',
        gray: '#737373',
        lgray: '#FAFAFA',
        dgrap: '#333333',
        lpurple: '#EFEBFF',
        phover: '#737373',
        bcolor: '#D9D9D9',
      },
      screens: {
        xs: '568px',
      },
    },
  },
  plugins: [],
}
export default config
