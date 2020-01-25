module.exports = {
    devServer: {
      overlay: {
        warnings: true,
        errors: true
      },
      proxy: {
        '^/backend': {
          target: 'http://10.177.2.82:8080/',
          ws: true,
          changeOrigin: true,
          pathRewrite: {'^/backend' : ''}
        },
        '^/foo': {
          target: '<other_url>'
        }
      }
    },
    lintOnSave: true
  }