module.exports = {
    devServer: {
      overlay: {
        warnings: true,
        errors: true
      },
      proxy: {
        '^/backend': {
          target: 'http://10.177.68.16:8080/',
          ws: true,
          changeOrigin: true,
          pathRewrite: {'^/backend' : ''}
        },
        '^/backendcart': {
          target: 'http://10.177.68.16:8081/',
          ws:true,
          changeOrigin:true,
          pathRewrite:{'^/backendcart':''}
        }
      }
    },
    lintOnSave: true
  }