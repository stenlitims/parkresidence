const pkg = require('./package')
const path = require('path')
const spriteSvg = require('nuxt-sprite-svg-inline')

module.exports = {
  mode: 'universal',
  // loading: '~/components/loading.vue',

  env: {
    api: "https://web.park-residence.com.ua/api?id=",
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    base: {
      href: "/"
    },
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
        content: "park-residence"
      }
    ],
    script: [{

      src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
      type: "text/javascript",
      body: true
    }, {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js',
      type: "text/javascript",
      body: true
    }, {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.6/jquery.fancybox.min.js',
      type: "text/javascript",
      body: true
    }, {
      src: ' https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js',
      type: "text/javascript",
      body: true
    }],
    link: [{
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.6/jquery.fancybox.min.css'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  router: {
    middleware: 'i18n',
    base: '/'
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
  plugins: ['~/plugins/i18n.js', {
    src: "~/plugins/client.js",
    ssr: false
  }, {
    src: "~/plugins/global.js"
  }],

  // generate: {
  //   routes: ['/', '/about', '/ua', '/ua/about', '/сoncept', '/ua/сoncept']
  // },

  /*
   ** Nuxt.js modules
   */
  modules: [
    ['@nuxtjs/google-tag-manager', { id: 'GTM-WSF6NDH' }],
  ],

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
