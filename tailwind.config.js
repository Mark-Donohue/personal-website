/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        cubicBezierSlide: "slide 1s cubic-bezier(0.165, 0.84, 0.44, 1)",
      },
      keyframes: {
        slide: {
          from: { transform: "translateY(100%)" },
          to: { transform: "transformY(0%)" },
        },
      },
    },
  },
  plugins: [],
};
