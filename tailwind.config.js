/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        moderateCyan: "hsl(176, 50%, 47%)",
        darkCyan: "hsl(176, 72%, 28%)",
        Black: "hsl(0, 0%, 0%)",
        darkGray: "hsl(0, 0%, 48%)",
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        bold: "700",
      },
      maxWidth: {
        headerWidth: "81rem",
        bodyWidth: "56.5rem",
      },
      fontFamily: {
        body: "Commissioner",
      },
    },
  },
  plugins: [],
};
