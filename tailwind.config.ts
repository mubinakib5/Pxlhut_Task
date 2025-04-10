import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'light-bg': '#ffffff',
        'dark-bg': '#1a1a1a',
      },
      textColor: {
        'light-text': '#000000',
        'dark-text': '#ffffff',
      },
    },
  },
  plugins: [],
}

export default config