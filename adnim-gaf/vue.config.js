const path = require('path')

const frameSrc = path.resolve(__dirname, '../admin-frame')

module.exports = {
  // baseUrl: './',
  publicPath: process.env.VUE_APP_ROOT_URL + 'gaf',
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
  productionSourceMap: false,

  configureWebpack: {
    resolve: {
      alias: {
        '@frame': frameSrc,
        '@naf': path.join(frameSrc, '/naf'),
        '@lib': path.join(frameSrc, '/lib')
      }
    }
  },

  devServer: {
    port: 4001,
    before (app) {
      app.use((req, res, next) => {
        // eslint-disable-next-line no-console
        console.log(`[${req.method}]`, req.path)
        next()
      })
    }
  }
}
