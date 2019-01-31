export const state = () => ({
  locales: ['ru', 'ua'],
  locale: 'ru',
  mainClass: [],
  mainUrl: 'https://web.park-residence.com.ua/'
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  setMainClass(state, payload) {
    state.mainClass = payload;
  }

}
