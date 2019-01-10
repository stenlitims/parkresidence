const pkg = require('./package')
const path = require('path')
const spriteSvg = require('nuxt-sprite-svg-inline')

module.exports = {
  mode: 'universal',


  env: {
    api: "https://web.park-residence.com.ua/api?id=",
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    script: [{
      src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
      type: "text/javascript"
    }],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  router: {
    middleware: 'i18n'
  },

  /*
   ** Global CSS
   */
  css: [{
      src: '~sass/style.scss',
      lang: 'scss'
    },

  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/i18n.js'],

  generate: {
    routes: ['/', '/about', '/ua', '/ua/about']
  },

  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (ctx.isServer) {
        spriteSvg.run(path.join(__dirname, 'static/sprite.svg'),
          path.join(__dirname, '.nuxt/views/app.template.html'))
      }
    }
  }
}
