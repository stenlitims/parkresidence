export const state = () => ({
  locales: ['ru', 'ua'],
  locale: 'ru',
  mainClass: []
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
