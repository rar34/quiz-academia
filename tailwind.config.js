/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        quizAcademia: {
          "primary": "#6A5AE1",
          "secondary": "#60A5FA",

          ".btn-secondary": {
            "color": "#fff"
          },
          ".btn-outline.btn-secondary:hover" : {
            "color": "#fff"
          }
        },
      },
      "dark",
      "cupcake",
    ],
  },
};
