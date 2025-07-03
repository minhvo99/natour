/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        // Dynamic colors using CSS custom properties
        background: "var(--color-background)",
        headline: "var(--color-headline)",
        paragraph: "var(--color-paragraph)",
        button: "var(--color-button)",
        "button-text": "var(--color-button-text)",
        stroke: "var(--color-stroke)",
        main: "var(--color-main)",
        highlight: "var(--color-highlight)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",

        // Static natours colors (legacy support)
        natours: {
          background: "#fffffe",
          headline: "#272343",
          paragraph: "#2d334a",
          button: "#ffd803",
          "button-text": "#272343",
          stroke: "#272343",
          main: "#fffffe",
          highlight: "#ffd803",
          secondary: "#e3f6f5",
          tertiary: "#bae8e8",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
