/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetBrainsMono)",
    },
    extend: {
      colors: {
        primary: "#1c1c22",
        accent: {
          DEFAULT: "#66fef1",
          hover: "#00e187",
        },
      },

      fontFamily: {
        primary: "var(--font-jetBrainsMono)",
      },
    },
  },
};
