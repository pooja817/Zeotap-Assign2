/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Enable dark mode with class-based toggle
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Navy blue
        secondary: "#FBBF24", // Yellow
        darkBg: "#1F2937", // Dark background
        lightBg: "#F9FAFB", // Light background
        darkText: "#F3F4F6", // Light text for dark mode
        lightText: "#1F2937", // Dark text for light mode
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Use Poppins as the primary font
      },
    },
  },
  plugins: [],
};
