/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // Change colors here
        //Make sure your color palletes have good contrasts

        //Your primary color is for background for containers in light mode in this
        //--website
        primary: "#FCF7F8",
        //Your secondary color are for text
        secondary: "#201C21",
        // Your accent color is for call to actions like buttons and links

        accent: "#C5DBBD",
        // darkAccent is used in light mode with light text ,if the contrast
        //--of the accent is low
        darkAccent: "#546356",
        gray: "#D5D5D8",
        //
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
