/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['General Sans', ...fontFamily.sans],
      },
      colors: {
        primary: 'rgb(var(--primary) , <alpha-value>)',
        divider: 'rgb(var(--divider) , <alpha-value>)',
        content: 'rgb(var(--content) , <alpha-value>)',
        'base-100': 'rgb(var(--base-100) , <alpha-value>)',
        'base-200': 'rgb(var(--base-200) , <alpha-value>)',
        'base-gray': 'rgb(var(--base-gray) , <alpha-value>)',
        'primary-hover': 'rgb(var(--primary-hover) , <alpha-value>)',
        'primary-disable': 'rgb(var(--primary-disable) , <alpha-value>)',
      },
      keyframes: {
        spin: {
          to: {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        spin: 'spin 1s linear infinite',
      },      
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
