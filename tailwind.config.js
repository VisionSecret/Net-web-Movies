/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-dark": "rgba(33, 13, 22, 1)",
        "custom-pink": "rgba(184, 40, 105, 1)",
        "custom-red": "rgba(229, 9, 20, 1)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, rgba(33, 13, 22, 1) 16%, rgba(184, 40, 105, 1), rgba(229, 9, 20, 1), rgba(184, 40, 105, 1), rgba(33, 13, 22, 1) 84%)",
      },
    },
  },
  plugins: [],
};
