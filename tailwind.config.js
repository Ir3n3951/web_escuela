const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'black-esd': '#09090B',
        'blue-esd-700': '#0030E4',
        'blue-esd-primary': '#1F61FF',
        'blue-esd-200': '#95A4FE',
        'blue-esd-50': '#E7E9FF',
        'gray-esd-2': '#BDBDBD',
        'gray-esd-4': '#4F4F4F',
        'white': '#FFFFFF',
        'error': '#DC2828'
      },
      fontSize: {
        base: "1em"
      },
      fontFamily: {
        nohemiSemibold: ['Nohemi-Semibold', 'sans-serif'],
        nohemiMedium: ['Nohemi-Medium', 'sans-serif'],
        nohemiLight: ['Nohemi-Light', 'sans-serif'],
        notoExtraBold: ['NotoSans-ExtraBold', 'sans-serif'],
        notoBold: ['NotoSans-Bold', 'sans-serif'],
        notoSemiBold: ['NotoSans-SemiBold', 'sans-serif'],
        notoMedium: ['NotoSans-Medium', 'sans-serif'],
        notoRegular: ['NotoSans-Regular', 'sans-serif'],
        notoLight: ['NotoSans-Light', 'sans-serif']
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
