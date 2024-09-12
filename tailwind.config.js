/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FCF7F8",
        secondary: "#201C21",
        accent: "#C5DBBD",
        darkAccent: "#546356",
        gray: "#D5D5D8",
        black: "#111",
        white: "#fff",
      },
      fontFamily: {
        SourceSans3: ["Source Sans 3", "sans-serif"],
        PlayfairDisplay: ["Playfair Display", "serif"],
      },
    },
    screens: {
      xx: "1px",
      xs: "400px",
      ss: "600px",
      sm: "800px",
      md: "1000px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
