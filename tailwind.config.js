/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#04894d",

          secondary: "#3ac4ab",

          accent: "#91ffaa",

          neutral: "#2C313A",

          "base-100": "#36323E",

          info: "#194BF0",

          success: "#1A7563",

          warning: "#FAA019",

          error: "#F2755F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
