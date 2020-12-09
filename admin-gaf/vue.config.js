const path = require("path");

const frameSrc = path.resolve(__dirname, "../admin-frame");

module.exports = {
  publicPath: process.env.VUE_APP_ROOT_URL + "gaf",
  productionSourceMap: false,

  configureWebpack: {
    resolve: {
      alias: {
        "@frame": frameSrc,
        "@naf": path.join(frameSrc, "/naf"),
        "@lib": path.join(frameSrc, "/lib")
      }
    }
  },

  devServer: {
    port: 4001
  }
};
