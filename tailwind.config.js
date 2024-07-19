/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "button-color": "#F99F1C",
        "background-color": "#FBB637",
        "background-gray": "#F3F4F6",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
