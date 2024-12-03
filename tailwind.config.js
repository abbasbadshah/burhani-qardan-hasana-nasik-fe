/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1C2E4A",
        secondary: "#f1c40f",
        "its-btn-primary-color": "#B88029",
        "its-btn-secondary-color": "#164953",
        "text-dark": "#ffffff",
        "text-light": "#000000",
      },
      backgroundImage: {
        "login-bg": "url('/src/Assets/Images/Login/login.webp')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-left": {
          "overflow-y": "auto",
          "scrollbar-width": "thin",
          "scrollbar-color": "rgba(0,0,0,0.2) transparent",
          "&::-webkit-scrollbar": {
            width: "8px",
            left: "0",
            right: "auto",
            position: "absolute",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "rgba(0,0,0,0.2)",
            borderRadius: "4px",
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
};