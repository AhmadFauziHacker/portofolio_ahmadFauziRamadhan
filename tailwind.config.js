module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        'infinite-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 20s linear infinite',
      },
    },
  },
  plugins: [],
};
