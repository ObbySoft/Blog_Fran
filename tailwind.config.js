module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      minHeight: {
        450: "450px",
        250: "250px",
        200: "200px",
      },
      colors: {
        // primary: "#368B85",
        primary: "#000",
        // secondary: "#464660",
        secondary: "#000",
        // accent: "#FFE6E6",
        accent: "#000",
        latestPostContainerBg: "#EFE8EB", //Unused
        latestPostBg: "#FFF",
        postBg: "#FFF",
        // pageBg: "#FDF6F0",
        pageBg: "#FFF",
        // tagBg: "#FFBCBC",
        tagBg: "#FFF",
      },
    },
  },
  variants: {
    extend: {
      zIndex: ["hover"],
    },
  },
  plugins: [],
};
