/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"], // Adjust paths as needed
  theme: {
    extend: {},
  },
  plugins: [],
  scripts: {
    dev: "tailwindcss --input src/input.css --output dist/output.css --watch",
    build:
      "tailwindcss --input src/input.css --output dist/output.css --minify",
  },
};
