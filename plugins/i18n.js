import Vue from 'vue'
import VueI18n from 'vue-i18n'
//import axios from "axios"

Vue.use(VueI18n)
//Vue.use(axios)

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'ru',
    messages: {
      'ru': require('~/locales/ru.json'),
      'ua': require('~/locales/ua.json')
    }
  })

  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }

    return `/${app.i18n.locale}/${link}`
  }
}
