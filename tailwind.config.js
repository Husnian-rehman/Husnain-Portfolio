/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
        fontFamily: {
            Poppins: ['Poppins'],
            Neue: ['Neue Haas Grotesk Text Pro'],
        },
        colors: {
            default: '#E46400',
            primary: '#5B5B5B', // menu link color
            secondry: '#000',
            white: '#fff',
            featurebg: '#F7F6FB',
            featuretext: '#754EF9',
            description: '#818181',
            buttonColor: '#E9E9E9',
        },

    },
    plugins: [],
}