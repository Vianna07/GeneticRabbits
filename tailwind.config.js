/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#258fff",
        secondary: "#3490dc",
        warn: "#f6ad55",
        error: "#e53e3e",
        success: "#38a169",
      },
    },
    plugins: [],
  },
};
