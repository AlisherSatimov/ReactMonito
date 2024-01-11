/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
          colors: {
            'secondary': '#F7DBA7',
            'primary': '#003459',
          }
        },
    },
    plugins: [],
};
