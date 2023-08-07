/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    animation: {
      cubicBezierSlide: "slide 1s cubic-bezier(0.165, 0.84, 0.44, 1)",
      fadeIn: "fadeIn 2s",
    },
    keyframes: {
      slide: {
        from: { transform: "translateY(100%)" },
        to: { transform: "transformY(0%)" },
      },
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
    },
  },
};
export const plugins = [];
