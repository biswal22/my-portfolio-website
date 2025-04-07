/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#1e293b",
        dark: {
          bg: "#111827",
          card: "#1f2937",
        },
        light: {
          bg: "#f3f4f6",
          card: "#ffffff",
        }
      },
    },
  },
  plugins: [],
}
