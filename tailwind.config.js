module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#f0f0f0",
        secondaryColor: "#262626",
      },
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
      maxWidth: {
        "1/2": "50%",
      },
    },
  },
  plugins: [],
};
