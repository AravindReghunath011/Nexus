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
      fontFamily: {
        'clash-extralight': ['ClashDisplay-Extralight', 'sans-serif'],
        'clash-light': ['ClashDisplay-Light', 'sans-serif'],
        'clash-regular': ['ClashDisplay-Regular', 'sans-serif'],
        'clash-medium': ['ClashDisplay-Medium', 'sans-serif'],
        'clash-semibold': ['ClashDisplay-Semibold', 'sans-serif'],
        'clash-bold': ['ClashDisplay-Bold', 'sans-serif'],
        'clash-variable': ['ClashDisplay-Variable', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
