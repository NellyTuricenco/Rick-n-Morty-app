module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    boxShadow: {
      inner: "inset 5px 5px 5px rgba(26, 24, 24, 0.788)",
      lg: "10px 10px 13px rgba(26, 24, 24, 0.788)",
      md: "5px 5px 5px rgba(26, 24, 24, 0.788)",
    },
    extend: {
      animation: {
        bounce: "bounce 0.3s infinite",
        wiggle: "wiggle 3s infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "scale(1.0) rotate(3deg)",
          },
          "50%": {
            transform: "scale(0.5) rotate(-3deg)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
