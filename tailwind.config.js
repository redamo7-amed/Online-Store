/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,         // يعمل margin auto
      padding: "0",         // padding داخلي
      screens: {
        DEFAULT: "90%",     // العرض الافتراضي 90%
        lg: "1350px",       // أقصى عرض عند الشاشات الكبيرة
      },
    },
    extend: {
       fontFamily: {
        inter: ["Inter", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
      },
       colors: {
        main: "var(--main_color)",
        paragraph: "var(--p_color)",
        bg: "var(--bg_color)",
        whitee: "var(--white_color)",
        heading: "var(--color_heading)",
        bord: "var(--border_color)",
      },
    },
  },
  plugins: [],
}

