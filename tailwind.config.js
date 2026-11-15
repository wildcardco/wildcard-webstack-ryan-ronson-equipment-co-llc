/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#DA2343",
        ink: "#333333",
        muted: "#555555",
        paper: "#F2F2F2",
        surface: "#FFFFFF",
        header: "#3D3D3D",
        coal: "#111111",
        line: "#D9D9D9",
      },
      fontFamily: {
        sans: ["Open Sans", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["Montserrat", "Arial Narrow", "Arial", "sans-serif"],
      },
      maxWidth: {
        page: "90rem",
      },
    },
  },
  plugins: [],
};
