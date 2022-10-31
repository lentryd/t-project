module.exports = {
  pwa: {
    name: "Avatar",
    themeColor: "#0b0e26",
    msTileColor: "#0b0e26",
    iconPaths: {
      maskIcon: null,
      favicon32: "img/icons/favicon-32x32.png",
      favicon16: "img/icons/favicon-16x16.png",
      msTileImage: null,
      appleTouchIcon: "img/icons/apple-touch-icon.png",
    },

    manifestOptions: {
      display: "standalone",
      background_color: "#0b0e26",
      icons: [
        {
          src: "./img/icons/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "./img/icons/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
  },
};
