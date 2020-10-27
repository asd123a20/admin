const path = require('path')
const frameSrc = path.resolve(__dirname)
module.exports = {
  publicPath: process.env.VUE_APP_ROOT_URL, // : process.env.VUE_APP_ROOT_URL,
  productionSourceMap: false,
  // ant 定制主题
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {}
        },
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@naf': path.join(frameSrc, '/naf'),
        '@lib': path.join(frameSrc, '/lib')
      }
    }
  },
  devServer: {
    port: 4000,
    before(app) {
      app.use((req, res, next) => {
        // eslint-disable-next-line no-console
        console.log(`[${req.method}]`, req.path);
        next();
      });
    },
    proxy: {
      '/admin/gaf': {
        target: 'http://localhost:4001',
      },
      '/admin/xms': {
        target: 'http://localhost:4002',
      },
    }
  },
}
