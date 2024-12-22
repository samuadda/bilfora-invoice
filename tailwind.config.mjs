/** @type {import('tailwindcss').Config} */
export default {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                praimary: "#2B3467",
                secondary: "#EB455F",
                accent: "#FCFFE7",
                priBlu: "#BAD7E9",
            },
            fontFamily: {
                moonet: ["'moonet'", "sans-serif"], // Add Rosca font
            },
        },
    },
    plugins: [],
};
