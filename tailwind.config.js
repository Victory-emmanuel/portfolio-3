/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#F5F7F8",
        secondary: "#45474B",
        accent: "#F4CE14",
        lightAccent: "#f4cf1467",
        extraClr: "#eeee",
        green: "#495E57",
        grey: "#E1E1E1",
        black: "#111",
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
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
