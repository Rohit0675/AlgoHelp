/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                outfit: "Outfit",
                noto: "Noto Sans",
                open: "Open Sans",
            },
            colors: {
				bgBlack:"#03141F",
                font: {
                    100: "#e7eaec",
                    200: "#cfd5d9",
                    300: "#b6c0c6",
                    400: "#9eabb3",
                    500: "#8696a0",
                    600: "#6b7880",
                    700: "#505a60",
                    800: "#363c40",
                    900: "#1b1e20",
                },
                topBar: {
                    100: "#d2d5d6",
                    200: "#a6abad",
                    300: "#798085",
                    400: "#4d565c",
                    500: "#202c33",
                    600: "#1a2329",
                    700: "#131a1f",
                    800: "#0d1214",
                    900: "#06090a",
                },
                wpBlack: {
                    100: "#cfd1d3",
                    200: "#a0a4a6",
                    300: "#70767a",
                    400: "#41494d",
                    500: "#111b21",
                    600: "#0e161a",
                    700: "#0a1014",
                    800: "#070b0d",
                    900: "#030507",
                },
                wpGray: {
                    100: "#eff1f3",
                    200: "#dfe3e6",
                    300: "#ced6da",
                    400: "#bec8cd",
                    500: "#aebac1",
                    600: "#8b959a",
                    700: "#687074",
                    800: "#464a4d",
                    900: "#232527",
                },
                wpOwnGreen: {
                    100: "#ccdedb",
                    200: "#99beb7",
                    300: "#669d93",
                    400: "#337d6f",
                    500: "#005c4b",
                    600: "#004a3c",
                    700: "#00372d",
                    800: "#00251e",
                    900: "#00120f",
                },
                wpPersonBlack: {
                    100: "#d2d5d6",
                    200: "#a6abad",
                    300: "#798085",
                    400: "#4d565c",
                    500: "#202c33",
                    600: "#1a2329",
                    700: "#131a1f",
                    800: "#0d1214",
                    900: "#06090a",
                },
            },
            backgroundColor: {
                base: {
                    100: "#d8e9fe",
                    200: "#b0d4fc",
                    300: "#89befb",
                    400: "#61a9f9",
                    500: "#3a93f8",
                    600: "#2e76c6",
                    700: "#235895",
                    800: "#173b63",
                    900: "#0c1d32",
                },
            },
        },
    },
    plugins: [],
};
