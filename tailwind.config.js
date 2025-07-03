/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
        fontFamily: {
            Poppins: ['Poppins'],
        },
        colors: {
            default: '#E46400',
            primary: '#000', 
            white: '#fff',
            featurebg: '#F7F6FB',
            featuretext: '#E46400',
            description: '#818181',
            buttonColor: '#E9E9E9',
        },

    },
    plugins: [],
}