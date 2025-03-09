/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "wow-green-100": "#D8E9E4",
        "wow-green-300": "#2B5F44",
        "wow-green-500": "#243831",
        "wow-golden": "#C5A365",
        "wow-gray-100": "#BBC2C0",
        "wow-gray-300": "#939494",
        "wow-black": "#000000",
        "wow-white": "#FFFFFF",
        "wow-text": "#191919",
        "wow-success": "#49A569",
      },
    },
  },
  plugins: [],
};
