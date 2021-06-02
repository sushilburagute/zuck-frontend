const colors = require("tailwindcss/colors");
module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}', './public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter"],
            },
            colors: {
                transparent: "transparent",
                current: "currentColor",

                black: colors.black,
                white: colors.white,
                gray: colors.coolGray,
                red: colors.red,
                yellow: colors.amber,
                green: colors.emerald,
                blue: colors.blue,
                indigo: colors.indigo,
                purple: colors.violet,
                pink: colors.pink,
                primary: {
                    DEFAULT: "#66DF20",
                    50: "#E2F9D5",
                    100: "#D4F6C1",
                    200: "#B9F098",
                    300: "#9DEB70",
                    400: "#82E548",
                    500: "#66DF20",
                    600: "#52B319",
                    700: "#3D8613",
                    800: "#29590D",
                    900: "#142D06",
                },
                secondary: {
                    DEFAULT: "#777D88",
                    50: "#E5E6E8",
                    100: "#D9DBDE",
                    200: "#C0C3C8",
                    300: "#A8ACB3",
                    400: "#8F949E",
                    500: "#777D88",
                    600: "#5F646D",
                    700: "#474B52",
                    800: "#2F3237",
                    900: "#18191B",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
