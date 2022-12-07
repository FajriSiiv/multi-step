/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        marine: "hsl(213, 96%, 18%)",
        purplish: "hsl(243, 100%, 62%)",
        pastelblue: "hsl(228, 100%, 84%)",
        lightblue: "hsl(206, 94%, 87%)",
        strawberry: "hsl(354, 84%, 57%)",
      },
    },
  },
  plugins: [],
};
