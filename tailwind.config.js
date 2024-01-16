/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bg_landing':"url('assets/image/img.jpg')",
        'bg_landing_mobile':"url('assets/image/1.gif')"
      }
    },
  },
  plugins: [],
}