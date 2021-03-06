const path = require("path");

const frameSrc = path.resolve(__dirname);
const baseUrl = "/admin";

module.exports = {
  publicPath: baseUrl,
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
    port: 4000,
    proxy: {
      "/admin/gaf": {
        target: "http://localhost:4001"
      },
      "/admin/works": {
        target: "http://localhost:4002"
      }
    }
  }
};
