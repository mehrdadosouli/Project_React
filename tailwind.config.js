/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bg_landing: "url('assets/image/pxfuel (1).jpg')",
        bg_mobile: "url('assets/image/pxfuel.jpg')",
      },
      backgroundColor: {
        "bg-panel": "#28293D",
        "bg-primary-dark": "#1C1C28",
        "bg-primary-light": "#28293D",
      },
    },
  },
  plugins: [],
};
