module.exports = {
    purge: ["./public/**/*.{js,jsx,ts,tsx}", "./public/index.php"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            black: {
                1: "#262641",
                2: "#5F5F5F",
            },
            white: {
                1: "#FFFFFF",
                2: "#F9FBFF",
                3: "#DBE3EA",
                4: "#BBC8D4",
            },
            orange: {
                1: "#FFDBB9",
                2: "#FBC38D",
                3: "#FAAA5F",
                4: "#EBA059",
            },
            blue: {
                1: "#EFF3FF",
                2: "#8EA3F8",
                3: "#607EF5",
                4: "#5A76E6",
            },
            green: {
                1: "#EAFAF6",
                2: "#98E8D4",
                3: "#64DCBF",
                4: "#31D0AA",
            },
            red: {
                1: "#FDEDED",
                2: "#F7A4A4",
                3: "#F37777",
                4: "#EF4A4A",
            },
            yellow: {
                1: "#FFFAE9",
                2: "#FCE590",
                3: "#FBD759",
                4: "#FACA21",
            },
        },
        boxShadow: {
            sm: "0 14px 22px -6px rgba(94, 94, 94, 0.08)",
            md: "0 10px 34px -6px rgba(130, 130, 130, 0.1)",
            up: "0 6px 40px -6px rgba(130, 130, 130, 0.22)",
            blue: "0px 15px 44px -361px rgba(29, 185, 135, 0.13)",
            outlineOrange: "0 0 0 3px rgba(251, 195, 141, 0.5)",
            outlineBlue: "0 0 0 3px rgba(142, 163, 248, 0.5)",
        },
        fontFamily: {
            sans: ["Mulish", "sans-serif"],
        },
        extend: {
            animation: {
                "bounce-slow": "bouncing 3s infinite",
            },
            keyframes: {
                bouncing: {
                    "0%, 100%": {
                        transform: "translateY(-3%)",
                    },
                    "50%": {
                        transform: "translateY(0)",
                    },
                },
            },
        },
    },
    variants: {
        extend: {
            opacity: ["disabled"],
            cursor: ["disabled"],
        },
    },
    plugins: [],
};
