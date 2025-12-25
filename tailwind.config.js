const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const brandColor = colors.orange;

/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig }
 **/
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: colors.gray,
        brand: brandColor,
      },
      ringColor: {
        DEFAULT: brandColor["500"],
      },
    },
  },
};
