/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#012332",
        secondary: "#14ABBC",
        teriary: "#FFE86E",
      },
      minHeight: {
        screen: ["100vh", "100dvh"],
      },
      height: {
        screen: ["100vh", "100dvh"],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        ":root": {
          "--app-height": "100%",
        },
        "html, body": {
          height: "var(--app-height)",
        },
      });
    }),
  ],
};
