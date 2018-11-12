const pkg = require('./package')
const webpack = require("webpack");
module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    script: [
      {
        src: 'js/jquery.min.js',
        type: "text/javascript"
      },
      {
        src: 'js/coral.js',
        type: "text/javascript"
      },
      {
        src: 'js/jquery.dataTables.js',
        type: "text/javascript"
      },
      {
        src: 'js/app.js',
        type: "text/javascript"
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~assets/fonts/material/material-icons.css',
    '~assets/css/coral.css',
    '~assets/css/app.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ["~plugins/coral.js"],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /**
     * add external plugins
     */
    // vendor: ["jquery"],
    // plugins: [
    //   new webpack.ProvidePlugin({
    //     $: "jquery"
    //   })
    // ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
