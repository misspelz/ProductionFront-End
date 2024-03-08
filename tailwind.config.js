module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#4f0da3",
      },

      keyframes: {
        modalBox: {
          "0%": {
            transform: "scale(0.8)",
            opacity: 0.8,
          },
          "100%": {
            transform: "scale(1)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
