/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        vibrate: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-2px)' },
          '40%': { transform: 'translateX(2px)' },
          '60%': { transform: 'translateX(-2px)' },
          '80%': { transform: 'translateX(2px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        vibrate: 'vibrate 0.4s ease-in-out',
        float: 'float 3s ease-in-out infinite', // ⬅️ Add this line
      },
      colors: {
        default: '#E46400',
        primary: '#000',
        white: '#fff',
        bgblack: '#fefefe47',
        txtblack: '#919191',
        defaultgradiant: 'linear-gradient(90deg, #E46400, #FF8C00)',
      },
      fontFamily: {
        Poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
};
