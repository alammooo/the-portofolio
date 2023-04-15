/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "4.5xl": "2.5rem",
      },
      boxShadow: {
        "7xl": "inset 0px 0px 0px 9px rgba(255,255,255,.3)",
      },
      borderRadius: {
        custom: "60% 40% 30% 70% / 60% 30% 70% 40%",
      },
      keyframes: {
        fullProgress: {
          "0%": { width: 0 },
          "100%": { width: "100%" },
        },
        javascript: {
          "0%": { width: 0 },
          "100%": { width: "90%" },
        },
        java: {
          "0%": { width: 0 },
          "100%": { width: "20%" },
        },
        php: {
          "0%": { width: 0 },
          "100%": { width: "40%" },
        },
        english: {
          "0%": { width: 0 },
          "100%": { width: "50%" },
        },
        fadeIntoLight: {
          "0%": {
            opacity: 0,
            transform: "translateX(-50px)",
          },
          "100%": {
            opacity: 100,
            transform: "translateX(0px)",
          },
        },

        loadingAnimation: {
          "0%": {
            height: "1px",
            width: "1px",
            opacity: 1,
          },
          "50%": {
            height: "50vh",
            width: "1px",
            opacity: 1,
          },
          "51%": {
            height: "51vh",
            width: "1px",
            opacity: 0.9,
          },
          "90%": {
            height: "100vh",
            width: "1px",
            opacity: 0.2,
          },
          "100%": {
            height: "100vh",
            width: "100vw",
            opacity: 1,
          },
        },

        morphl: {
          "0%": {
            "border-radius": "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
          "25%": {
            "border-radius": "40% 70% 60% 30% / 30% 70% 40% 60%",
          },
          "50%": {
            "border-radius": "30% 60% 70% 40% / 50% 60% 30% 60%",
          },
          "100%": {
            "border-radius": "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
        },
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "progress-bar": "fullProgress 1s ease-in-out",
        "javascript-bar": "javascript 1s ease-in-out",
        "java-bar": "java 1s ease-in-out",
        "php-bar": "php 1s ease-in-out",
        "english-bar": "english 1s ease-in-out",
        fadeInTo: "fadeIntoLight 0.5s ease-in",
        loadingInto: "loadingAnimation 2.5s ease-in-out",
        morphling: "morphl 8s ease-in-out infinite 1s",
      },
    },
    plugins: [require("flowbite/plugin")],
  },
}
