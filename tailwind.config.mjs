/** @type {import('tailwindcss').Config} */
export default {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                primary: "#2B3467",
                secondary: "#EB455F",
                accent: "#FCFFE7",
                priBlu: "#BAD7E9",
            },
            fontFamily: {
                moonet: ["'moonet'", "sans-serif"],
                poppins: ["Poppins", "sans-serif"], // Default Poppins font family
            },
            fontWeight: {
                thin: 100,
                extralight: 200,
                light: 300,
                regular: 400,
                medium: 500,
                semibold: 600,
                bold: 700,
                extrabold: 800,
                black: 900,
            },
        },
    },
    plugins: [],
};
