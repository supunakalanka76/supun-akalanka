/* tailwind.config.cjs */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const scrollbar = require('tailwind-scrollbar')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15%)' },
        },
      },
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    colors: {
      bodyColor: "#222831",
      lightText: "#c4cfde",
      boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
      designColor: "#00ADB5",
      bgBlack: "#000000",
      white: "#FFFFFF",
      gray: colors.gray,
      red: colors.red,
      green: colors.green,
      blue: colors.blue,
      cyan: colors.cyan,
      black: colors.black,
      orange: colors.orange,
      slate: colors.slate,
    },
    boxShadow: {
      shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
    },

    scrollbar: {
      width: "10px",
      height: "10px",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      borderRadius: "10px",
      shadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
      thumb: {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: "10px",
      },
    },
    animation: {
      bounce: "bounce 2s infinite",
    },
  },
  plugins: [],
}
