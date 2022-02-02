module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-quasar-login/' : '/',
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  transpileDependencies: [
    'quasar'
  ]
}
