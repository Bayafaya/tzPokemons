/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'color-light-brand-base-bg': '#EBECF1',
        'default-for-text':'#3A3A3A',
        'secondary-for-text':'rgba(0, 0, 0, 0.45)',
        'primary-blue':'#1677ff',
      },
    },
  },
  plugins: [],
}

