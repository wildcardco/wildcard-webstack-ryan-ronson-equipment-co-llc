/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "var(--color-brand)",
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        paper: "var(--color-bg)",
        surface: "var(--color-surface)",
        header: "var(--color-header)",
        line: "var(--color-line)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      maxWidth: {
        page: "72rem",
      },
    },
  },
  plugins: [],
};
